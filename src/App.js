//style
import "./App.css";

// packages
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./app/features/userSlice";
import { authstatus } from "./app/features/userSlice";
import { useEffect } from "react";
import { auth, db } from "./firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";

//pages and components
import Dashboard from "./pages/dashboard/Dashboard";
import { Home } from "./pages/home/Home";
import { Signup } from "./pages/signup/Signup";
import { Settings } from "./pages/settings/Settings";
import { Todo } from "./pages/todo/Todo";
import { CreateTodo } from "./pages/todo/CreateTodo";
import { Friends } from "./pages/friends/Friends";
import { Team } from "./pages/team/Team";
import { Messages } from "./pages/messages/Messages";
import { Notes } from "./pages/notes/Notes";
import { Report } from "./pages/report/Report";
import { Files } from "./pages/files/Files";
import { Loader } from "./components/loader/Loader";
import { Profile } from "./pages/profile/Profile";
import { AccountSettings } from "./pages/settings/AccountSettings";

function App() {
  const user = useSelector(selectUser);
  const authStatus = useSelector((state) => state.user.authIsReady);
  const dispatch = useDispatch();

  //To know user status.
  useEffect(() => {
    const unSub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const ref = doc(db, "users", user.uid);
        // get user document
        const docSnap = await getDoc(ref);

        // create collection for user if not exist
        if (docSnap.exists()) {
          const userdata = docSnap.data();
          dispatch(authstatus(userdata));
        } else {
          await setDoc(ref, {
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            uid: user.uid,
          });
          dispatch(authstatus(user));
        }
      } else {
        dispatch(authstatus(user));
      }
      unSub();
    });
  }, [authStatus, dispatch]);

  return (
    <div className="App">
      {authStatus ? (
        <Router>
          <Routes>
            <Route
              path="/signin"
              element={
                <>
                  {!user && <Signup />}
                  {user && <Navigate to="/" />}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {!user && <Navigate to="/signin" />}
                  {user && <Dashboard />}
                </>
              }
            >
              <Route index element={<Navigate to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="friends" element={<Friends />} />
              <Route path="team" element={<Team />} />
              <Route path="messages" element={<Messages />} />
              <Route path="todo" element={<Todo />} />
              <Route path="todo/create" element={<CreateTodo />} />
              <Route path="notes" element={<Notes />} />
              <Route path="files" element={<Files />} />
              <Route path="settings" element={<Settings />} />
              <Route path="settings/account" element={<AccountSettings />} />
              <Route path="report" element={<Report />} />
              <Route path="/:id" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
