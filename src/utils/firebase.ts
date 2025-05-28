import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export type Artwork = {
  description: string;
  title: string;
  type: string;
  url: string;
};

export type Project = {
  dates: string;
  description: string;
  headerImage: Artwork | null;
  images: Artwork[];
  links: Record<string, string>;
  paragraphs: string[];
  projectId: string;
  title: string;
};

// TODO: environmental variables?
const firebaseConfig = {
  apiKey: "AIzaSyA4vnOai1vybGctuoYuD_3onO6uarKgbNQ",
  authDomain: "goob-art.firebaseapp.com",
  projectId: "goob-art",
  storageBucket: "goob-art.firebasestorage.app",
  messagingSenderId: "859612059936",
  appId: "1:859612059936:web:c96f805cefe860d28edf45",
  measurementId: "G-ELPG9MYYME",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const readAboutText = async () => {
  const docRef = doc(db, "about", "text");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const paragraphs: string[] = data.paragraphs;
    return paragraphs;
  } else {
    console.log("Cannot find about text document!");
    return [];
  }
};

export const getAllArtworkTypes = async (): Promise<string[]> => {
  const artworkCollectionRef = collection(db, "artworkTypes");
  try {
    const snapshot = await getDocs(artworkCollectionRef);
    const types: string[] = snapshot.docs.map((doc) => {
      const data = doc.data();
      return String(data.typeName ?? "");
    });

    return types;
  } catch (error) {
    console.error("Error fetching artwork types:", error);
    return [];
  }
};

export const getAllArtwork = async (): Promise<Artwork[]> => {
  const artworkCollectionRef = collection(db, "artwork");
  try {
    const snapshot = await getDocs(artworkCollectionRef);
    const artwork: Artwork[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        description: String(data.description ?? ""),
        title: String(data.title ?? ""),
        type: String(data.type ?? ""),
        url: String(data.url ?? ""),
      };
    });

    return artwork;
  } catch (error) {
    console.error("Error fetching artworks:", error);
    return [];
  }
};

export const getAllProjects = async (): Promise<Project[]> => {
  const projectsCollectionRef = collection(db, "projects");

  try {
    const snapshot = await getDocs(projectsCollectionRef);

    const projects: Project[] = await Promise.all(
      snapshot.docs.map(async (projectDoc) => {
        const data = projectDoc.data();

        let headerImage = null;
        const headerImagePath = data.headerImage?.path ?? "";
        if (headerImagePath) {
          const headerImageRef = doc(db, headerImagePath);
          const headerImageSnap = await getDoc(headerImageRef);
          if (headerImageSnap.exists()) {
            const headerImageData = headerImageSnap.data();
            headerImage = {
              description: String(headerImageData.description ?? ""),
              title: String(headerImageData.title ?? ""),
              type: String(headerImageData.type ?? ""),
              url: String(headerImageData.url ?? ""),
            };
          }
        }

        const images: Artwork[] = await Promise.all(
          (data.images ?? []).map(async (imageRefPath: string) => {
            try {
              const imageRef = doc(db, imageRefPath);
              const imageSnap = await getDoc(imageRef);
              if (imageSnap.exists()) {
                const imageData = imageSnap.data();
                return {
                  description: String(imageData.description ?? ""),
                  title: String(imageData.title ?? ""),
                  type: String(imageData.type ?? ""),
                  url: String(imageData.url ?? ""),
                };
              }
            } catch (error) {
              console.warn(`Failed to fetch image at ${imageRefPath}`, error);
            }
            return null;
          })
        );

        return {
          dates: String(data.dates ?? ""),
          description: String(data.description ?? ""),
          headerImage,
          images: images.filter(Boolean),
          links: data.links ?? {},
          paragraphs: data.paragraphs ?? [],
          projectId: String(data.projectId ?? ""),
          title: String(data.title ?? ""),
        };
      })
    );

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getProject = async (
  projectKey: string
): Promise<Project | null> => {
  const projectDocRef = doc(db, "projects", projectKey);
  const docSnap = await getDoc(projectDocRef);

  if (!docSnap.exists()) {
    console.log(`Cannot find project ${projectKey} document!`);
    return null;
  }

  const data = docSnap.data();

  let headerImage = null;
  const headerImagePath = data.headerImage?.path ?? "";
  if (headerImagePath) {
    const headerImageRef = doc(db, headerImagePath);
    const headerImageSnap = await getDoc(headerImageRef);
    if (headerImageSnap.exists()) {
      const headerImageData = headerImageSnap.data();
      headerImage = {
        description: String(headerImageData.description ?? ""),
        title: String(headerImageData.title ?? ""),
        type: String(headerImageData.type ?? ""),
        url: String(headerImageData.url ?? ""),
      };
    } else {
      console.log(
        `Cannot find header image document with reference ${headerImageRef.path}!`
      );
    }
  }

  const images: Artwork[] = await Promise.all(
    (data.images ?? []).map(async (image: DocumentData) => {
      try {
        const imageRef = doc(db, image.path);
        const imageSnap = await getDoc(imageRef);
        if (imageSnap.exists()) {
          const imageData = imageSnap.data();
          return {
            description: String(imageData.description ?? ""),
            title: String(imageData.title ?? ""),
            type: String(imageData.type ?? ""),
            url: String(imageData.url ?? ""),
          };
        }
      } catch (error) {
        console.warn(`Failed to fetch image at ${image.path}`, error);
      }
      return null;
    })
  );

  const project: Project = {
    dates: String(data.dates ?? ""),
    description: String(data.description ?? ""),
    headerImage,
    images: images.filter(Boolean),
    links: data.links ?? {},
    paragraphs: data.paragraphs ?? [],
    projectId: String(data.projectId ?? ""),
    title: String(data.title ?? ""),
  };

  return project;
};

export const getMissionAndVision = async (): Promise<[string, string]> => {
  const missionAndVisionDocRef = doc(db, "misc", "missionAndVision");
  const docSnap = await getDoc(missionAndVisionDocRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const missionAndVision: [string, string] = [data.mission, data.vision];
    return missionAndVision;
  } else {
    console.log("Cannot find mission and vision document!");
    return ["", ""];
  }
};

export const getFeaturedProject = async (): Promise<
  Project | null | undefined
> => {
  const featuredProjectDocRef = doc(db, "misc", "featuredProject");
  const docSnap = await getDoc(featuredProjectDocRef);

  if (!docSnap.exists()) {
    console.log("Cannot find project featured project document!");
    return null;
  }

  const data = docSnap.data();
  const projectPath = data.project?.path ?? "";
  if (projectPath) {
    const projectRef = doc(db, projectPath);
    const projectSnap = await getDoc(projectRef);
    if (projectSnap.exists()) {
      const projectData = projectSnap.data();
      return getProject(projectData.projectId);
    } else {
      console.log(
        `Cannot find project document with reference ${projectRef.path}!`
      );
    }
  }
};
