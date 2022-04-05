//style
import classes from "./NotFound.module.css";
//assets
import { ReactComponent as Warning } from "../../assets/warning.svg";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className={classes.container}>
      <Warning className={classes.image} />
      <h2>This page isn't available</h2>
      <p className={classes.p}>
        The link you followed may be broken, private, or removed.
      </p>
      <Link className={classes.a} to="/home">
        Go back home
      </Link>
    </div>
  );
};
