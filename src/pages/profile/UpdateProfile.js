//styles
import classes from "./UpdateProfile.module.css";

// packages and hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import { useUpdateDoc } from "../../hooks/useUpdateDoc";

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [name, setName] = useState(user.displayName);
  const [website, setWebsite] = useState(user.pLink);
  const [bio, setBio] = useState(user.bio);
  const { update } = useUpdateDoc("users", user.uid);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({ displayName: name, pLink: website, bio: bio });
    navigate(-1);
  };

  return (
    <div className={classes.updateProfileCont}>
      <div className={classes.backdrop} onClick={() => navigate(-1)} />
      <form onSubmit={handleSubmit} className={classes.updateProfile}>
        <div className={classes.updateProfileHeader}>
          <h3>Edit profile</h3>
          <button className={classes.btn}>Save</button>
        </div>
        <div className={classes.updateProfileContent}>
          <label className={classes.UPInputDiv}>
            <span>Name:</span>
            <input
              autoFocus
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </label>
          <label className={classes.UPInputDiv}>
            <span>Website:</span>
            <div className={classes.nested}>
              <div>https://</div>
              <input
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
              ></input>
            </div>
          </label>
          <label className={classes.UPInputDiv}>
            <span>Bio:</span>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
          </label>
        </div>
      </form>
    </div>
  );
};
