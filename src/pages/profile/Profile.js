// style
import classes from "./Profile.module.css";

// packages
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";

// components and assets
import { Post } from "../../components/post/Post";
import { ProfileHead } from "./ProfileHead";
import { ReactComponent as Filter } from "../../assets/icons/filter.svg";
import { ReactComponent as Pen } from "../../assets/icons/pen.svg";

export const Profile = () => {
  const { id } = useParams();
  const user = useSelector(selectUser);

  if (id !== user.uid) {
    return <p>Don't have access</p>;
  }

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
            <Pen className={classes.PTIcon} /> <span>Start a post</span>
          </div>
          <div className={classes.sortPost}>
            <Filter className={classes.PTIcon} />
            <span>Sort posts</span>
          </div>
        </div>
        <div className={classes.post}>
          <Post />
        </div>
      </div>
    </div>
  );
};
