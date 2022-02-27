import classes from "./Signup.module.css";
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../firebase/config";

// for state management
import { useDispatch } from "react-redux";
import { signin } from "../../app/features/userSlice";

export const Signup = () => {
  // user state management
  const dispatch = useDispatch();

  // sign in with google start
  const provider = new GoogleAuthProvider();
  const signup = () => {
    signInWithRedirect(auth, provider);
  };
  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      dispatch(signin(user));
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  // sign in with google end

  return (
    <div className={classes.signup}>
      <h1>SocialLig</h1>
      <p className={classes.moto}>
        An ideal place to simplify your workflow and increase your productivity.
      </p>
      <button className={classes.action} onClick={signup}>
        Sign in with google
      </button>
    </div>
  );
};
