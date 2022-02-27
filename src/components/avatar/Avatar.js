import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import classes from "./Avatar.module.css";

export default function Avatar() {
  const user = useSelector(selectUser);
  return (
    <>
      <img className={classes.avatar} src={user.photoURL} alt="profile" />
    </>
  );
}
