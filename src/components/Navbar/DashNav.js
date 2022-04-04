// styles
import classes from "./DashNav.module.css";
// assets and components
import { ReactComponent as Bars } from "../../assets/icons/bars.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Avatar from "../avatar/Avatar";
// packages
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../app/features/userSlice";
import { sidebarVToggle } from "../../app/features/sidebarVSlice";

export default function DashNav() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(
    (state) => state.sidebarV.sidebarVisibility
  );

  const handleClick = () => {
    if (sidebarStatus === true) return;
    dispatch(sidebarVToggle());
  };

  return (
    <div className={classes.dashNavCont}>
      <div className={classes.dashNav}>
        <div className={classes.leftNav}>
          <Bars onClick={handleClick} className={classes.icon} />
          <Link to="home">
            <Logo className={classes.logo} />
          </Link>
        </div>
        <div className={classes.rightNav}>
          <Bell className={`${classes.icon} ${classes.bell}`} />
          <Link to={user.uid ? `/u/${user.uid}` : "home"}>
            <Avatar />
          </Link>
        </div>
      </div>
    </div>
  );
}
