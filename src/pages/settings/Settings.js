import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import { useSignout } from "../../hooks/useSignout";
import classes from "./Settings.module.css";
export const Settings = () => {
  const user = useSelector(selectUser);
  const { signOut } = useSignout();
  return (
    <div className="dashPageContainer">
      <h2 className="h2">Settings</h2>
      <img className={classes.photo} src={user.photoURL} alt="User" />
      <p className={classes.infoP}>Name: {user.displayName}</p>
      <p className={classes.infoP}>Email: {user.email}</p>
      <p className={classes.infoP}>ID: {user.uid}</p>
      <button onClick={signOut} className={classes.signOutBtn}>
        Sign out
      </button>
    </div>
  );
};
