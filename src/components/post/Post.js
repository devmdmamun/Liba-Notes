import classes from "./Post.module.css";

import Avatar from "../../components/avatar/Avatar";
import Soalig from "../../assets/SocialLig.png";
// svg component
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as Comment } from "../../assets/icons/comment.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";

export const Post = () => {
  const user = useSelector(selectUser);
  return (
    <div className={classes.postDiv}>
      <div className={classes.postTop}>
        <Avatar />
        <div className={classes.cInfo}>
          <p className={classes.cName}>{user.displayName}</p>
          <p className={classes.cTime}>30 Mar 2022</p>
        </div>
      </div>
      <div className={classes.cText}>
        <p>
          My first post on ⌛️ SocialLig. This is working fine. Which name would
          be better:- SocialLig, Soalig or something else.
        </p>
      </div>
      <img className={classes.postImg} src={Soalig} alt="post" />
      <div className={classes.action}>
        <div className={classes.actionItems}>
          <Like className={classes.actionIcon} /> <span>Like</span>
        </div>
        <div className={classes.actionItems}>
          <Comment className={classes.actionIcon} /> <span>Comment</span>
        </div>
        <div className={classes.actionItems}>
          <Share className={classes.actionIcon} /> <span>Share</span>
        </div>
      </div>
    </div>
  );
};
