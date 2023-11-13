import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGa2GrwAlKgtftmReXI50xmUZtG26nEps",
  authDomain: "react-notes-f7313.firebaseapp.com",
  projectId: "react-notes-f7313",
  storageBucket: "react-notes-f7313.appspot.com",
  messagingSenderId: "80982105844",
  appId: "1:80982105844:web:a1d8dcf50c991431d408a1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
