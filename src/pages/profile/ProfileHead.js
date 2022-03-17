import classes from "./ProfileHead.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import banner from "../../assets/soaligFounder.png";
import { ReactComponent as Clink } from "../../assets/icons/link.svg";

export const ProfileHead = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <div className={classes.banner}>
        <img src={banner} alt="banner" />
      </div>
      <img className={classes.profileImg} src={user.photoURL} alt="Profile" />
      <div className={classes.bottomHeader}>
        <p className={classes.name}>{user.displayName}</p>
        <span>{user.uid}</span>
        <p className={classes.bio}>
          Founder of Soalig | web developer | Creating valuable products |
          Sharing my journey on twitter, soalig & my blog :
          https://blog.devmdmamun.com
        </p>
        <div className={classes.links}>
          <Clink className={classes.Clink} />{" "}
          <a
            className={classes.webLink}
            href="https://devmdmamun.com"
            target="_blank"
            rel="noreferrer"
          >
            DevMdMamun.com
          </a>
        </div>
        <div className={classes.num}>
          <span>100 connections</span>
          <span>7 contracts</span>
        </div>
      </div>
    </>
  );
};
