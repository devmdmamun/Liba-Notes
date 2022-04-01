import classes from "./DashNav.module.css";
import { ReactComponent as Bars } from "../../assets/icons/bars.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Avatar from "../avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { sideNavR } from "../../app/features/visibilitySlice";
import { Link } from "react-router-dom";
import { selectUser } from "../../app/features/userSlice";

export default function DashNav() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(sideNavR());
  };
  return (
    <div className={classes.dashNavCont}>
      <div className={classes.dashNav}>
        <div className={classes.leftnav}>
          <Bars onClick={handleClick} className={classes.icon} />
          <Link to="home">
            <Logo className={classes.logo} />
          </Link>
        </div>
        <div className={classes.rightnav}>
          <Bell className={`${classes.icon} ${classes.bell}`} />
          <Link to={user.uid ? user.uid : "home"}>
            <Avatar />
          </Link>
        </div>
      </div>
    </div>
  );
}
