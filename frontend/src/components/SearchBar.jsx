import React from "react";
import { Link } from "react-router-dom";

import "../styles/Searchbar.css";

function SearchBar() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="SearchBar_Container">
      <div className="input_container">
        <form>
          <input type="text" placeholder="Search a city" />
          <Link to="/">
            <button type="submit" className="Search_Btn">
              <img
                src={`${URL}/public/assets/images/icons8-loupe-50.png`}
                alt="loupe de recherche"
              />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
