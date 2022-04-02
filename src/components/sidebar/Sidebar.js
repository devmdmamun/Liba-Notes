// Styles
import classes from "./Sidebar.module.css";

// Components and assets
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Todo } from "../../assets/icons/todo.svg";
import { ReactComponent as Note } from "../../assets/icons/note.svg";
import { ReactComponent as Team } from "../../assets/icons/team.svg";
import { ReactComponent as Message } from "../../assets/icons/message.svg";
import { ReactComponent as Files } from "../../assets/icons/files.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Report } from "../../assets/icons/report.svg";
import { ReactComponent as Friend } from "../../assets/icons/friend.svg";
import { ReactComponent as Me } from "../../assets/icons/user.svg";
import Avatar from "../avatar/Avatar";

// Packages
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const sidebarStatus = useSelector(
    (state) => state.sidebarV.sidebarVisibility
  );
  return (
    <div
      className={sidebarStatus ? classes.showSidebar : classes.sidebarContainer}
    >
      <div className={classes.sidebar}>
        <div className={classes.accountInfo}>
          <Avatar />
          <div className={classes.accountStatus}>
            <span>Student</span>
            <span className={classes.paid}>Free</span>
          </div>
        </div>

        <div className={classes.divider}></div>

        <NavLink to="/home" className={classes.sideItem}>
          <Home className={classes.icon} />
          <span className={classes.itemName}>Home</span>
        </NavLink>

        <NavLink to="/messages" className={classes.sideItem}>
          <Message className={classes.icon} />
          <span className={classes.itemName}>Messages</span>
        </NavLink>

        <NavLink to="/friends" className={classes.sideItem}>
          <Friend className={classes.icon} />
          <span className={classes.itemName}>Connections</span>
        </NavLink>

        <div className={classes.divider}></div>

        <NavLink className={classes.sideItem} to="/personal">
          <Me className={classes.icon} />
          <span className={classes.itemName}>Personal</span>
        </NavLink>

        <NavLink to="/team" className={classes.sideItem}>
          <Team className={classes.icon} />
          <span className={classes.itemName}>Teams</span>
        </NavLink>

        <NavLink to="/todo" className={classes.sideItem}>
          <Todo className={classes.icon} />
          <span className={classes.itemName}>Todo</span>
        </NavLink>

        <NavLink to="/notes" className={classes.sideItem}>
          <Note className={classes.icon} />
          <span className={classes.itemName}>Notes</span>
        </NavLink>

        <NavLink to="/files" className={classes.sideItem}>
          <Files className={classes.icon} />
          <span className={classes.itemName}>Files</span>
        </NavLink>

        <div className={classes.divider}></div>

        <NavLink to="/settings" className={classes.sideItem}>
          <Settings className={classes.icon} />
          <span className={classes.itemName}>Settings</span>
        </NavLink>

        <NavLink to="/report" className={classes.sideItem}>
          <Report className={classes.icon} />
          <span className={classes.itemName}>Report</span>
        </NavLink>
      </div>
    </div>
  );
};
