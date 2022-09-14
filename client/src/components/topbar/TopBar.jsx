import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import ShareLink from "react-linkedin-share-link";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar navbar-expand-md navbar-dark fixed-top ">
      <div class="container-fluid">
        <div class="navbar-brand">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <Link className="nav-link active" to="/">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active" to="/about">
                ABOUT US
              </Link>
            </li>
            <li class="nav-item" onClick={handleLogout}>
              <Link className="nav-link active" to="/write">
                {user && "LOGOUT"}
              </Link>
            </li>
          </ul>
          {user ? (
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <Link className="nav-link active" to="/settings">
                  My Profile
                </Link>
              </li>
            </ul>
          ) : (
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <Link className="nav-link active" to="/login">
                  LOGIN
                </Link>
              </li>
              <li class="nav-item ">
                <Link className="nav-link active " to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
