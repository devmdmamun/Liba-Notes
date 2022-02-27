import classes from "./Todo.module.css";
import { ReactComponent as Create } from "../../assets/icons/pen.svg";
export const Todo = () => {
  return (
    <div className="dashPageContainer">
      <h2 className="h2">Your Todo Lists</h2>
      <button className={classes.createBtn}>
        <Create className={classes.iconBtn} /> Create new list
      </button>
    </div>
  );
};
