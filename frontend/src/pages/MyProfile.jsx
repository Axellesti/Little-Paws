import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Context from "../services/Context";
import AddAPet from "../components/AddAPet";

import "../styles/MyProfile.css";

function MyProfile() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { user } = useContext(Context);

  const [userInfos, setUserInfos] = useState({
    username: user.username,
    email: user.email,
    idUser: user.id,
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [userPet, setUserPet] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleChangeUsername = (event) => {
    setUserInfos({ ...userInfos, username: event.target.value });
  };

  const notify = () =>
    toast("Hey, your have a new username !", {
      className: "toast-message",
    });

  const fetchProfile = () => {
    axios
      .put(
        `${URL}/api/profile`,
        {
          username: userInfos.username,
          idUser: userInfos.idUser,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => console.info("Profile updated", response.data))
      .catch((error) => console.error("Error updating profile", error));

    const updateUsername = {
      username: userInfos.username,
    };
    localStorage.setItem("username", updateUsername.username);

    notify();
  };

  const fetchUserPet = () => {
    axios
      .get(`${URL}/api/users/${user.id}/animals`, { withCredentials: true })
      .then((response) => {
        setUserPet(response.data);
      })
      .catch((error) => console.error("Error, can't catch my animal", error));
  };

  useEffect(() => {
    fetchUserPet();
  }, []);

  const deleteUserPet = (animalId) => {
    axios
      .delete(`${URL}/api/animals/${animalId}`)
      .then((response) => {
        console.info(response);
        setUserPet(userPet.filter((animal) => animal.id !== animalId));
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="profile_container">
      <h1>My profile</h1>
      <div className="profile_informations">
        <h2>{userInfos.username}</h2>
        <p>Email : {userInfos.email}</p>
        <hr />
        <div className="your_pet_container">
          <h1>Your pet</h1>
          {userPet.map((animal) => (
            <div className="fetch_details" key={animal.id}>
              <img src={animal.picture} alt={animal.name} />
              <div className="details_animals">
                <h3>Name:</h3>
                <p>{animal.name}</p>
                <h3>Race:</h3>
                <p>{animal.race}</p>
                <h3>Age:</h3>
                <p>{animal.age} years old</p>
                <button type="button" onClick={() => deleteUserPet(animal.id)}>
                  <img
                    src={`${URL}/public/assets/images/icon_trash.png`}
                    alt="delete my animal"
                  />
                </button>
              </div>
            </div>
          ))}
          <section className={`dropdown ${showDropdown ? "active" : ""}`}>
            <button type="button" className="bloc_top" onClick={toggleDropdown}>
              <span>Add a pet ?</span>
              <img
                src={`${URL}/public/assets/images/icon_plus.png`}
                alt="Add a pet"
              />
            </button>
            <AddAPet />
          </section>
        </div>
        <hr />
        <form className="form_new_username">
          <label>
            New username :
            <input
              type="text"
              name="username"
              placeholder="Enter your new username here"
              onChange={handleChangeUsername}
            />
          </label>
        </form>
        <div className="confirmUpdate">
          <input
            onClick={fetchProfile}
            className="button_confirmUpdate"
            type="submit"
            value="CONFIRM UPDATE"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default MyProfile;
