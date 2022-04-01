// Styles
import classes from "./ProfileHead.module.css";

// assets
import { ReactComponent as Clink } from "../../assets/icons/link.svg";

// packages and hooks
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";

export const ProfileHead = () => {
  const user = useSelector(selectUser);
  return (
    <div className={classes.profileHeadDiv}>
      <div className={classes.bottomHeader}>
        <div className={classes.hTop}>
          <img
            className={classes.profileImg}
            src={user.photoURL}
            alt="Profile"
          />
          <div>
            <p className={classes.name}>{user.displayName}</p>
            <span>{user.uid}</span>
          </div>
        </div>
        <p className={classes.bio}>{user.bio}</p>
        <div className={classes.links}>
          {user.pLink ? <Clink className={classes.Clink} /> : null}
          <a
            className={classes.webLink}
            href={"https://" + user.pLink}
            target="_blank"
            rel="noreferrer"
          >
            {user.pLink}
          </a>
        </div>
      </div>
    </div>
  );
};
