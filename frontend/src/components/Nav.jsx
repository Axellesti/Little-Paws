import axios from "axios";

import "../styles/nav.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../services/Context";

function Nav() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { setUser } = useContext(Context);
  const [showLinks, setShowlinks] = useState(false);

  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };

  const logoutUser = () => {
    axios
      .delete(`${URL}/api/logout`, {
        withCredentials: true,
      })
      .then(() =>
        setUser({
          id: null,
          email: null,
          username: null,
        })
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="header">
      <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
        <img
          src={`${URL}/public/assets/images/logo_simpl.png`}
          alt="Little Paws logo"
        />
        <div className="links_container">
          <Link to="/">Home</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Sign in</Link>

          <ul>
            <li>
              <Link to="/" onClick={logoutUser}>
                <img
                  src={`${URL}/public/assets/images/logout.png`}
                  alt="To logout"
                />
                Log out
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          aria-label="Save"
          className="burger"
          onClick={handleShowLinks}
        >
          <span className="burgerBar" />
        </button>
      </nav>
      <div className="asupp"> </div>
    </div>
  );
}

export default Nav;
