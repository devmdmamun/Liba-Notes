import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import { db } from "../../firebase/config";
import classes from "./AllTodos.module.css";

export const AllTodos = () => {
  const user = useSelector(selectUser);
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "users", user.uid, "todos");
    const getFbData = async () => {
      const docSnap = await getDocs(colRef);
      let result = [];
      docSnap.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setTodo(result);
    };
    getFbData();
  }, [user.uid]);

  return (
    <div className={classes.allTodoContainer}>
      {todos.map((item) => (
        <div key={item.id} className={classes.todoDiv}>
          <h3>{item.title}</h3>
          <ul>
            {item.list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
