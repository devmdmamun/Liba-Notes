import classes from "./Todo.module.css";
import { ReactComponent as Create } from "../../assets/icons/pen.svg";
import { Link } from "react-router-dom";
import { AllTodos } from "./AllTodos";
export const Todo = () => {
  return (
    <div className="dashPageContainer">
      <h2 className="h2">To-do lists</h2>
      <Link to="/todo/create" className={classes.createBtn}>
        <Create className={classes.iconBtn} /> Create new list
      </Link>
      <AllTodos />
    </div>
  );
};
