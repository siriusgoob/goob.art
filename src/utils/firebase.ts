import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
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
    console.log("No such document!");
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
    console.error("Error fetching documents:", error);
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
    console.error("Error fetching documents:", error);
    return [];
  }
};
