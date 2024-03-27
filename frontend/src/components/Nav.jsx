import "../styles/nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const [showLinks, setShowlinks] = useState(false);

  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };

  return (
    <div className="header">
      <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
        <img
          src={`${URL}/public/assets/images/logo_simpl.png`}
          alt="Little Paws logo"
        />
        <div>
          <Link to="/">Home</Link>
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
