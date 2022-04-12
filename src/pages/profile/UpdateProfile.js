//styles
import classes from "./UpdateProfile.module.css";

// packages and hooks
import { useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.updateProfileCont}>
      <div className={classes.updateProfile}>
        <div className={classes.updateProfileHeader}>
          <h3>Edit profile</h3>
          <button onClick={() => navigate(-1)} className={classes.btn}>
            Save
          </button>
        </div>
        <div className={classes.updateProfileContent}>
          <div className={classes.UPInputDiv}>
            <span>Name:</span>
            <input autoFocus type="text"></input>
          </div>
          <div className={classes.UPInputDiv}>
            <span>Website:</span>
            <input type="url"></input>
          </div>
          <div className={classes.UPInputDiv}>
            <span>Bio:</span>
            <textarea></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
