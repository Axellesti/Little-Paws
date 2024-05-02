import React from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="SearchBar_Container">
      <div className="input_container">
        <form>
          <input type="text" placeholder="Search a city" />
          <Link to="/">
            <button type="submit" className="Search_Btn">
              Mettre une image ici
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
