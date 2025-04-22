import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

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
