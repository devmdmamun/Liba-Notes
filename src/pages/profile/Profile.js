// style
import classes from "./Profile.module.css";

// packages & hooks
import { Link, useLocation, useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { NavLink } from "react-router-dom";
// components and assets
import { ReactComponent as Clink } from "../../assets/icons/link.svg";
import { Loader } from "../../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import { NotFound } from "../../components/notFound/NotFound";

export const Profile = () => {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const location = useLocation();
  const { document, error } = useDocument("users", id);
  if (error) {
    return <div>{error}</div>;
  } else if (document && Object.keys(document).length === 0) {
    return <NotFound />;
  }
  return (
    <>
      {!document ? (
        <Loader />
      ) : (
        <div className={classes.profileContainer}>
          <div className={classes.profileHead}>
            <div className={classes.profileHeadDiv}>
              {/* User Info */}
              <div className={classes.headerTop}>
                <img
                  className={classes.profileImg}
                  src={document.photoURL}
                  alt="Profile"
                />
                <div>
                  <p className={classes.name}>{document.displayName}</p>
                  <span className={classes.uid}>{document.uid}</span>
                </div>
              </div>
              {/* User bio */}
              <p className={classes.bio}>{document.bio}</p>
              {/* Users external links */}
              <div className={classes.links}>
                {document.pLink ? <Clink className={classes.Clink} /> : null}
                <a
                  className={classes.webLink}
                  href={"https://" + document.pLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {document.pLink}
                </a>
                <div className={classes.editBtn}>
                  {user.uid === id ? (
                    <Link
                      to="/settings/profile"
                      state={{ background: location }}
                    >
                      Edit profile
                    </Link>
                  ) : (
                    <p>Connect</p>
                  )}
                </div>
              </div>
            </div>
            {/* profile navigation start */}
            <div className={classes.profileNav}>
              <NavLink className={classes.activePNL} to={"/u/" + document.uid}>
                Posts
              </NavLink>
              {user.uid === id ? (
                <>
                  <NavLink to="/personal">Personal</NavLink>
                  <NavLink to="/team">Teams</NavLink>
                  <NavLink to="/settings">Settings</NavLink>
                </>
              ) : null}
            </div>
            {/* profile navigation end */}
          </div>
        </div>
      )}
    </>
  );
};
