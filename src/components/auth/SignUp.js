import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  let history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      password_confirm: passwordConfirm,
    };

    axios
      .post("http://localhost:80/api/auth/register", data)
      .then((response) => {
        console.log(response);
        // dispatch(login(response.data.user));
        // history.push("/login");
      })
      .catch((error) => {
        setErrors(error);
      });
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
