import { useSignup } from "../../hooks/useSignup";
import classes from "./Signup.module.css";
export const Signup = () => {
  const { signUp } = useSignup();
  return (
    <div className={classes.signup}>
      <h1>SocialLig</h1>
      <p className={classes.moto}>
        An ideal place to simplify your workflow and increase your productivity.
      </p>
      <button className={classes.action} onClick={signUp}>
        Sign in with google
      </button>
    </div>
  );
};
