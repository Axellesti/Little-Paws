import React from "react";
import PropTypes from "prop-types";

import "../styles/AnimalCard.css";

function AnimalsList({ animal }) {
  const URL = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="animals_container">
      <img src={animal.picture} alt="" className="animal_picture" />
      <div className="text_card">
        <h3>{animal.name}</h3>
        <div className="location_card">
          <img
            src={`${URL}/public/assets/images/location.svg`}
            alt="location icone"
          />
          <p>{animal.place}</p>
        </div>
      </div>
    </div>
  );
}

AnimalsList.propTypes = {
  animal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnimalsList;
