import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase/config";

export const useSignup = () => {
  const provider = new GoogleAuthProvider();
  const signUp = async () => {
    signInWithRedirect(auth, provider);
  };

  return { signUp };
};
