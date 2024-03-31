import React from "react";
import PropTypes from "prop-types";

function SecondStepRegister({ formTools }) {
  const URL = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="title_and_img">
      <img
        src={`${URL}/public/assets/images/logo_mimi.png`}
        alt="Line art of cat and dog"
      />
      <h2> SIGN UP</h2>
      <p>Please sign up before use Little Paws.</p>
      <section className="form_register">
        <label htmlFor="name">Username</label>
        <input
          onChange={formTools.handleChange}
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
        />
        <input type="submit" className="submit_button" value="SUBMIT" />
      </section>
    </div>
  );
}

export default SecondStepRegister;
SecondStepRegister.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};
