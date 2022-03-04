import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase/config";

export const useSignup = () => {
  const provider = new GoogleAuthProvider();
  const signUp = () => {
    signInWithRedirect(auth, provider);
  };

  return { signUp };
};
