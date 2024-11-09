import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFfoKyjgrb9rCtlV1luLdNVz271L7GPlQ",
  authDomain: "mily-tejada.firebaseapp.com",
  projectId: "mily-tejada",
  storageBucket: "mily-tejada.appspot.com",
  messagingSenderId: "803271143778",
  appId: "1:803271143778:web:3a0dae3d947d64cf7bbc3b",
  measurementId: "G-34EKWD6KKN"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
