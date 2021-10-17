import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthFirebase from "../Firebase/Firebase.init";
initializeAuthFirebase();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState([]);

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) =>
      setUser(result.user)
    );
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);

  return {
    user,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;
