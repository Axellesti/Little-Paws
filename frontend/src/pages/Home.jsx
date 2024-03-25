import React from "react";
import "../styles/home.css";

function Home() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="homepage_container">
      <div className="searchBar_container">Search Bar</div>
      <div className="home_banner_container">
        <img
          src={`${URL}/public/assets/images/Bandeau.svg`}
          alt="Home"
          className="banner"
        />
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
      <section className="animal_card_container">Animal</section>
    </div>
  );
}

export default Home;
