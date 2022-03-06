import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import { db } from "../../firebase/config";
import { ReactComponent as Bin } from "../../assets/icons/bin.svg";
import classes from "./AllTodos.module.css";
import { Loader } from "../../components/loader/Loader";

export const AllTodos = () => {
  const user = useSelector(selectUser);
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "users", user.uid, "todos");
    const unsub = onSnapshot(colRef, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((docu) => {
        result.push({ id: docu.id, ...docu.data() });
      });
      setTodo(result);
      console.log(result);
    });
    return unsub;
  }, [user.uid]);

  return (
    <div className={classes.allTodoContainer}>
      {todos.length < 1 ? (
        <Loader />
      ) : (
        todos.map((item) => (
          <div key={item.id} className={classes.todoDiv}>
            <div className={classes.listHead}>
              <h3>{item.title}</h3>
              <Bin
                onClick={async () => {
                  await deleteDoc(doc(db, "users", user.uid, "todos", item.id));
                }}
                className={classes.icon}
              />
            </div>
            <ul>
              {item.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};
