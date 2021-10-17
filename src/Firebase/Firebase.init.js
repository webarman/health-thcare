import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthFirebase;
