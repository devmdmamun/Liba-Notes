import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import { Loader } from "../../components/loader/Loader";
import { useTodo } from "../../hooks/useTodo";
import classes from "./CreateTodo.module.css";

export const CreateTodo = () => {
  //states
  const [title, setTitle] = useState("");
  const [newItem, setNewItem] = useState("");
  const [items, addItems] = useState([]);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);

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
        addItems((prevItem) => [...prevItem, { item: newItem, done: false }]);
      }
      setNewItem("");
      itemRef.current.focus();
    }
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addTodo({ title: title, list: items });
    navigate("/todo");
  };
  return (
    <div className="dashPageContainer">
      <h2 className={classes.h2}>
        {loading ? "Creating" : "Create"} a New List
      </h2>
      <div className={classes.pageContainer}>
        {!loading ? (
          <>
            <button
              className={classes.cancelBtn}
              onClick={() => navigate("/todo")}
            >
              Cancel
            </button>
            <button
              className={classes.previewBtn}
              onClick={() => setPreview(!preview)}
            >
              {!preview ? "Preview" : "< Go back"}
            </button>
            {!preview ? (
              <div className={classes.container}>
                <form className={classes.todoForm} onSubmit={handleSubmit}>
                  <label className={classes.label}>
                    <span>Title</span>
                    <input
                      autoFocus
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
                          {items.length > 1 ? "items" : "item"} to the "{title}"
                          list. Click preview to see them or click create to
                          create this list.
                        </p>
                      )
                    ) : (
                      <p className={classes.messagePw}>
                        <Alert className={classes.alertIcon} /> You can add upto
                        10 items.
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
                    <li key={item}>{item.item}</li>
                  ))}
                </ul>
                <p className={classes.messagePw}>
                  <Alert className={classes.alertIcon} />
                  Go back & create your list {"(*>_<*)"}
                </p>
              </div>
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
