import classes from "./Home.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import { Link } from "react-router-dom";

export const Home = () => {
  const user = useSelector(selectUser);
  return (
    <div className="dashPageContainer">
      <h2 className="h2">Hello, {user.displayName}.</h2>
      <p className={classes.info}>
        We're glad that you joined our community. As you can see, we are still
        working on this project. Please be patient, we will add all the features
        soon. We are creating this project for educational purposes.
      </p>
      <h3 className={classes.h3}>Current status {"(*> _ <*)"} </h3>
      <p className={classes.info}>
        Currently we only have{" "}
        <Link className={classes.link} to="/todo">
          TODO
        </Link>{" "}
        feature. So go check it out. If you wanna logout, go to settings then
        click the sign out button.{" "}
        <a
          href="https://blog.devmdmamun.com/why-would-my-first-startup-fail-and-why-im-not-seeing-it-as-a-failure"
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          Learn more about this project.
        </a>
      </p>
    </div>
  );
};
