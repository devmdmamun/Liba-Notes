// styles
import classes from "./AccountSettings.module.css";

// packages
import { selectUser } from "../../app/features/userSlice";
import { useSelector } from "react-redux";

// assets
import { ReactComponent as Camera } from "../../assets/icons/camera.svg";
import { ReactComponent as RightAngle } from "../../assets/icons/angle-right.svg";

export const AccountSettings = () => {
  const user = useSelector(selectUser);
  return (
    <div className="dashPageContainer">
      <div className={classes.header}>
        <h2>Account info</h2>
        <p>Make changes in your public and personal information</p>
      </div>

      <div className={classes.public}>
        <h3>Public info</h3>
        <div className={classes.photo}>
          <div className={classes.infoTexts}>
            <span className={classes.infoLabel}>Photo</span>
            <span>Use a professional image of yourself</span>
          </div>
          <div className={classes.image}>
            <img className={classes.userImage} src={user.photoURL} alt="user" />
            <div className={classes.cameraIcon}>
              <Camera className={classes.icon} />
            </div>
          </div>
        </div>

        <div className={classes.hr}></div>

        <div className={classes.infoUpdateBtn}>
          <div className={classes.infoTexts}>
            <span className={classes.infoLabel}>Name</span>
            <span>{user.displayName}</span>
          </div>
          <div className={classes.angleIconDiv}>
            <RightAngle className={classes.angleIcon} />
          </div>
        </div>

        <div className={classes.hr}></div>

        <div className={classes.infoUpdateBtn}>
          <div className={classes.infoTexts}>
            <span className={classes.infoLabel}>Username</span>
            <span>{user.uid}</span>
          </div>
          <div className={classes.angleIconDiv}>
            <RightAngle className={classes.angleIcon} />
          </div>
        </div>

        <div className={classes.hr}></div>

        <div className={classes.infoUpdateBtn}>
          <div className={classes.infoTexts}>
            <span className={classes.infoLabel}>Bio</span>
            <span>{user.Bio}</span>
          </div>
          <div className={classes.angleIconDiv}>
            <RightAngle className={classes.angleIcon} />
          </div>
        </div>

        <div className={classes.hr}></div>

        <div className={classes.infoUpdateBtn}>
          <div className={classes.infoTexts}>
            <span className={classes.infoLabel}>Portfolio Link</span>
            <span>{user.PLink}</span>
          </div>
          <div className={classes.angleIconDiv}>
            <RightAngle className={classes.angleIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
