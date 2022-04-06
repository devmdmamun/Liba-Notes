// styles
import classes from "./Settings.module.css";

// package and hook
import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";
import { selectUser } from "../../app/features/userSlice";

// assets
import { ReactComponent as SWheel } from "../../assets/icons/settings.svg";
import { Link } from "react-router-dom";

export const Settings = () => {
  const user = useSelector(selectUser);
  const { logOut } = useLogout();
  return (
    <div className="dashPageContainer">
      <h2 className={classes.pageN}>
        <SWheel className={classes.icon} /> Settings
      </h2>

      <div className={classes.settings}>
        <Link to="/settings/account" className={classes.showcase}>
          <img className={classes.photo} src={user.photoURL} alt="User" />
          <h3>Account info...</h3>
          <p>Update your Soalig account information.</p>
        </Link>
      </div>
      <button onClick={logOut} className={classes.signOutBtn}>
        Sign out
      </button>
    </div>
  );
};
