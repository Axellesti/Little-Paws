import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import AnimalsList from "../components/AnimalsList";

function Home() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const [toGetAnimals, setToGetAnimals] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/api/animals`)
      .then((response) => {
        setToGetAnimals(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="homepage_container">
      <div className="searchBar_container">Search Bar</div>
      <div className="home_banner_container">
        <Link to="/login">
          <img
            src={`${URL}/public/assets/images/Bandeau.svg`}
            alt="Home"
            className="banner"
          />
        </Link>
      </div>
      <div className="filter_category_container">
        <section className="text_filter">
          <h2>Pet Categories</h2>
          <h4>More Category</h4>
        </section>
        <div className="pet_container">
          <section className="pet_categories">
            <button className="filter_button" type="button">
              <img
                src={`${URL}/public/assets/images/icone_dog.svg`}
                alt="Cat icone"
              />
              Cat
            </button>
          </section>
          <section className="pet_categories">
            <button className="filter_button" type="button">
              <img
                src={`${URL}/public/assets/images/icone_cat.svg`}
                alt="Dog icone"
              />
              Dog
            </button>
          </section>
        </div>
      </div>
      <div className="pets_for_walk_container">
        <section className="text_pets_for_walk">
          <h2>Takes a pet for a walk !</h2>
          <h4>See all</h4>
        </section>
      </div>
      <section className="animal_card_container">
        {toGetAnimals.map((animal) => (
          <AnimalsList key={animal.id} animal={animal} />
        ))}
      </section>
    </div>
  );
}

export default Home;
