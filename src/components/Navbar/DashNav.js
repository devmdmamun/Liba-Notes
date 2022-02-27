import classes from "./DashNav.module.css";
import { ReactComponent as Bars } from "../../assets/icons/bars.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import Avatar from "../avatar/Avatar";
import { useDispatch } from "react-redux";
import { sideNavR } from "../../app/features/visibilitySlice";

export default function DashNav() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sideNavR());
  };
  return (
    <div className={classes.dashNav}>
      <div className={classes.leftnav}>
        <Bars onClick={handleClick} className={classes.icon} />
        <h1 className={classes.logo}>SocialLig</h1>
      </div>
      <div className={classes.rightnav}>
        <Bell className={`${classes.icon} ${classes.bell}`} />
        <Avatar />
      </div>
    </div>
  );
}
