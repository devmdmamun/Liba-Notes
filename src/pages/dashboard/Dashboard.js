// Style
import classes from "./Dashboard.module.css";
// Components
import DashNav from "../../components/Navbar/DashNav";
import { Sidebar } from "../../components/sidebar/Sidebar";
//packages
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { sidebarVToggle } from "../../app/features/sidebarVSlice";

export default function Dashboard() {
  const sidebarStatus = useSelector(
    (state) => state.sidebarV.sidebarVisibility
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    if (sidebarStatus === false) return;
    dispatch(sidebarVToggle());
  };

  return (
    <div onClick={handleClick} className={classes.dashboard}>
      <DashNav />
      <div className={classes.dashContent}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
