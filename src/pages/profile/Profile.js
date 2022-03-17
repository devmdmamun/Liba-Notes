import classes from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import { Post } from "../../components/post/Post";
import { ProfileHead } from "./ProfileHead";
import { ReactComponent as Filter } from "../../assets/icons/filter.svg";
import { ReactComponent as Pen } from "../../assets/icons/pen.svg";

export const Profile = () => {
  return (
    <div className={classes.profileCont}>
      <div className={classes.profileHead}>
        <ProfileHead />
        <div className={classes.profileNav}>
          <NavLink to="/profile">Posts</NavLink>
          <NavLink to="/profile/products">Products</NavLink>
          <NavLink to="/profile/review">Reviews</NavLink>
        </div>
      </div>
      <div className={classes.profileBottom}>
        <div className={classes.postTop}>
          <div className={classes.createPost}>
            <Pen className={classes.PTIcon} /> <span>Create post</span>
          </div>
          <div className={classes.sortPost}>
            <Filter className={classes.PTIcon} />
            <span>Sort Post</span>
          </div>
        </div>
        <div className={classes.post}>
          <Post />
        </div>
      </div>
    </div>
  );
};
