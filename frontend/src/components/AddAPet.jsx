import React, { useState, useContext } from "react";
import axios from "axios";
import Context from "../services/Context";

import "../styles/MyProfile.css";

function AddAPet() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  const { user } = useContext(Context);

  const [addAnimalInfos, setAddAnimalInfos] = useState({
    category: "",
    name: "",
    race: "",
    age: "",
    type: "",
    place: "",
    picture: "",
    user_id: user.id,
  });

  const handleAddPet = (e) => {
    const { name, value } = e.target;
    setAddAnimalInfos({ ...addAnimalInfos, [name]: value });
  };

  const addAPetToUser = () => {
    console.info("Data to send to backend:", addAnimalInfos);
    axios
      .post(`${URL}/api/animals`, addAnimalInfos, {
        withCredentials: true,
      })
      .then((response) => {
        console.info(response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="block_input">
      <label>
        {" "}
        What's the category ?
        <input
          type="text"
          name="category"
          placeholder="Dog, Cat..."
          value={addAnimalInfos.category}
          onChange={handleAddPet}
        />
      </label>
      <label>
        {" "}
        What's the name ?
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={addAnimalInfos.name}
          onChange={handleAddPet}
        />
      </label>
      <label>
        {" "}
        What's the race ?
        <input
          type="text"
          name="race"
          placeholder="Chartreux, Golden Retriever..."
          value={addAnimalInfos.race}
          onChange={handleAddPet}
        />
      </label>
      <label>
        {" "}
        What's the age ?
        <input
          type="text"
          name="age"
          placeholder="Enter the age"
          value={addAnimalInfos.age}
          onChange={handleAddPet}
        />
      </label>
      <label>
        {" "}
        What's the type ?
        <input
          type="text"
          name="type"
          placeholder="Male, Female"
          value={addAnimalInfos.type}
          onChange={handleAddPet}
        />
      </label>
      <label>
        {" "}
        What's the place ?
        <input
          type="text"
          name="place"
          placeholder="Bordeaux, Lille..."
          value={addAnimalInfos.place}
          onChange={handleAddPet}
        />
      </label>
      <label>
        {" "}
        The picture !
        <input
          type="text"
          name="picture"
          placeholder="Enter an URL of your happy pet"
          value={addAnimalInfos.picture}
          onChange={handleAddPet}
        />
      </label>
      <div className="confirmAddAPet">
        <input
          onClick={addAPetToUser}
          className="button_confirmAddAPet"
          type="submit"
          value="ADD A PET"
        />
      </div>
    </div>
  );
}

export default AddAPet;
