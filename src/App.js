import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./app/features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { authstatus } from "./app/features/userSlice";

//pages
import Dashboard from "./pages/dashboard/Dashboard";
import { Home } from "./pages/home/Home";
import { Signup } from "./pages/signup/Signup";
import { Settings } from "./pages/settings/Settings";
import { Todo } from "./pages/todo/Todo";
import { Friends } from "./pages/friends/Friends";
import { Team } from "./pages/team/Team";
import { Messages } from "./pages/messages/Messages";
import { Notes } from "./pages/notes/Notes";
import { Report } from "./pages/report/Report";
import { Files } from "./pages/files/Files";
import { Store } from "./pages/store/Store";

function App() {
  const user = useSelector(selectUser);
  const authStatus = useSelector((state) => state.user.authIsReady);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      dispatch(authstatus(user));
      unSub();
    });
  });

  return (
    <div className="App">
      {authStatus && (
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
              <Route path="notes" element={<Notes />} />
              <Route path="files" element={<Files />} />
              <Route path="store" element={<Store />} />
              <Route path="settings" element={<Settings />} />
              <Route path="report" element={<Report />} />
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
