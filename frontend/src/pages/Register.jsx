import { React, useState } from "react";
import "../styles/Register.css";
import axios from "axios";
import FirstStepRegister from "../components/Register/FirstStepRegister";
import SecondStepRegister from "../components/Register/SecondStepRegister";
import LastStepRegister from "../components/Register/LastStepRegister";

export default function Register() {
  const URL = import.meta.env.VITE_BACKEND_URL;

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeat_password: "",
    username: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const displayStepComponent = () => {
    if (step === 1) {
      return <FirstStepRegister formTools={{ nextStep, handleChange }} />;
    }
    if (step === 2) {
      return (
        <SecondStepRegister
          formTools={{ nextStep, handleChange, form, setForm }}
        />
      );
    }
    return <LastStepRegister />;
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post(`${URL}/api/users`, {
        email: form.email,
        password: form.password,
        repeat_password: form.repeat_password,
        username: form.username,
      })
      .then(() => nextStep())
      .catch((error) => console.error(error));
  };

  return (
    <div className="register_container">
      <h1>Join our animal lovers community !</h1>
      <form onSubmit={submitForm}>{displayStepComponent()}</form>
    </div>
  );
}
