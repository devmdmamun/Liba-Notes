import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../app/features/userSlice";
import { db } from "../firebase/config";

export const useTodo = () => {
  const user = useSelector(selectUser);
  const ref = doc(collection(db, "users", user.uid, "todos"));
  const createdAt = Timestamp.fromDate(new Date());

  const addTodo = async (todo) => {
    await setDoc(ref, {
      ...todo,
      createdAt,
    });
  };

  return { addTodo };
};
