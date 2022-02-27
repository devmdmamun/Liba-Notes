import classes from "./Home.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";

export const Home = () => {
  const user = useSelector(selectUser);
  return (
    <div className="dashPageContainer">
      <h2 className="h2">Hello, {user.displayName}.</h2>
      <p className={classes.info}>
        We're glad that you joined our community. As you can see, we are still
        working on this project.Please be patient, we will add all the features
        soon. We are creating this project for educational purposes.
      </p>
    </div>
  );
};
