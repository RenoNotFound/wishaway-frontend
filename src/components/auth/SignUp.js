import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import api from "../../services/ApiService";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});

  let history = useHistory();

  const handleForm = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
      password_confirm: passwordConfirm,
    };

    const response = await api.signUp(user);
    console.log(response);
  };

  const handleInput = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password_confirmation":
        setPasswordConfirm(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form className="" onSubmit={handleForm}>
      <div className="">
        <h1 className="">Sign up</h1>
        <div className="">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name..."
            onChange={handleInput}
            className=""
            autoComplete="new-password"
          />
        </div>
        <div className="">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email..."
            onChange={handleInput}
            className=""
            autoComplete="new-password"
          />
        </div>
        <div className="">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
            placeholder="Your password"
            className=""
            autoComplete="new-password"
          />
        </div>
        <div className="">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            onChange={handleInput}
            placeholder="Confirm password"
            className=""
          />
        </div>
        <div className="">
          <input type="submit" value="Sign Up" className="" />
        </div>
      </div>
    </form>
  );
}
