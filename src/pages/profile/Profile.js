// style
import classes from "./Profile.module.css";

// packages
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";

// components and assets
import { Post } from "../../components/post/Post";
import { ProfileHead } from "./ProfileHead";

export const Profile = () => {
  // const { id } = useParams();
  const user = useSelector(selectUser);

  return (
    <div className={classes.profileCont}>
      <div className={classes.profileHead}>
        <ProfileHead />
        <div className={classes.profileNav}>
          <NavLink className={classes.activePLink} to={"/" + user.uid}>
            Posts
          </NavLink>
          <NavLink to="/personal">Personal</NavLink>
          <NavLink to="/team">Teams</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
      <div className={classes.profileBottom}>
        <div className={classes.allPost}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};
