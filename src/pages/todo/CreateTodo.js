import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { useTodo } from "../../hooks/useTodo";
import classes from "./CreateTodo.module.css";

export const CreateTodo = () => {
  //states
  const [title, setTitle] = useState("");
  const [newItem, setNewItem] = useState("");
  const [items, addItems] = useState([]);
  const [preview, setPreview] = useState(false);

  //others
  const navigate = useNavigate();
  const itemRef = useRef(null);
  const { addTodo } = useTodo();

  //handle adding item
  const handleAdd = (e) => {
    e.preventDefault();
    if (items.length < 10) {
      const item = newItem.trim();
      if (item && !items.includes(item)) {
        addItems((prevItem) => [...prevItem, newItem]);
      }
      setNewItem("");
      itemRef.current.focus();
    }
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo({ title: title, list: items });
    navigate("/todo");
  };
  return (
    <div className="dashPageContainer">
      <div className={classes.pageContainer}>
        <h2>Create a new list</h2>
        <button className={classes.backBtn} onClick={() => navigate("/todo")}>
          Cancel
        </button>
        <button
          className={classes.backBtn}
          onClick={() => setPreview(!preview)}
        >
          {!preview ? "Preview" : "Go back"}
        </button>
        {!preview ? (
          <div className={classes.container}>
            <form className={classes.todoForm} onSubmit={handleSubmit}>
              <label className={classes.label}>
                <span>Title</span>
                <input
                  type="text"
                  required
                  placeholder="Name your list"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </label>
              <label className={classes.label}>
                <span>Add items</span>
                <div className={classes.addList}>
                  <input
                    type="text"
                    placeholder="Add an item"
                    onChange={(e) => setNewItem(e.target.value)}
                    value={newItem}
                    ref={itemRef}
                  />
                  <button onClick={handleAdd} className={classes.add}>
                    <Add />
                  </button>
                </div>
                {items.length > 0 ? (
                  items.length >= 10 ? (
                    <p className={classes.messageP}>
                      List maxed out. Now click Create button.
                    </p>
                  ) : (
                    <p className={classes.messageP}>
                      You have added {items.length}{" "}
                      {items.length > 1 ? "items" : "item"} in "{title}" list.
                    </p>
                  )
                ) : (
                  <p className={classes.messagePw}>
                    You can add upto 10 items.
                  </p>
                )}
              </label>
              <button className={classes.subBtn}>Create</button>
            </form>
          </div>
        ) : (
          <div className={classes.previewContainer}>
            <h3 className={classes.previewTitle}>{title}</h3>
            <ul>
              {items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
