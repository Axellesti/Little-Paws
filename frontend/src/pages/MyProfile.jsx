import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Context from "../services/Context";

import "../styles/MyProfile.css";

function MyProfile() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { user } = useContext(Context);

  const [userInfos, setUserInfos] = useState({
    username: user.username,
    email: user.email,
    idUser: user.id,
  });

  const handleChangeUsername = (event) => {
    setUserInfos({ ...userInfos, username: event.target.value });
  };

  const notify = () =>
    toast.success("Update completed successfully !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
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

  return (
    <div className="profile_container">
      <h1>My profile</h1>
      <div className="profile_informations">
        <h2>{userInfos.username}</h2>
        <p>Email : {userInfos.email}</p>
        <hr />
        <div className="your_pet_container">
          <h1>Your pet</h1>
          <section>
            <p> Add a pet ?</p>
            <button type="button">+</button>
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
      <ToastContainer
        className={toast}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </div>
  );
}

export default MyProfile;
