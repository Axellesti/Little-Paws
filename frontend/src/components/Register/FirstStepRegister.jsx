import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FirstStepRegister({ formTools }) {
  const URL = import.meta.env.VITE_BACKEND_URL;

  return (
    <div>
      <div className="title_and_img">
        <img
          src={`${URL}/public/assets/images/logo_mimi.png`}
          alt="Line art of cat and dog"
        />
        <h2> SIGN UP</h2>
        <p>Please sign up before use Little Paws.</p>
        <section className="form_register">
          <label htmlFor="name">Email</label>
          <input
            onChange={formTools.handleChange}
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email adress"
          />
          <label htmlFor="name">Password</label>
          <input
            onChange={formTools.handleChange}
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <label htmlFor="name">Check your password</label>
          <input
            onChange={formTools.handleChange}
            id="confirm-password"
            name="repeat_password"
            type="password"
            placeholder="Check your password"
          />
          <button type="submit" onClick={formTools.nextStep}>
            NEXT STEP
          </button>
        </section>
        <div className="link_to_login">
          <p>Already have an account ?</p>
          <span>
            <Link to="/login">Login here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FirstStepRegister;

FirstStepRegister.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
};
