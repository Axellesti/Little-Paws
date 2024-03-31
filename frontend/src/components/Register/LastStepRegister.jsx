import React from "react";
import { Link } from "react-router-dom";

function LastStepRegister() {
  const URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="title_and_img">
      <img
        src={`${URL}/public/assets/images/logo_mimi.png`}
        alt="Line art of cat and dog"
      />
      <h2> PERFECT !</h2>
      <p> Your account has been successfully created.</p>

      <Link to="/login">
        <button type="button" className="login_button">
          LOGIN
        </button>
      </Link>
    </div>
  );
}

export default LastStepRegister;
