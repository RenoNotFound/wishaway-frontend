import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import api from "../../services/ApiService";

export default function Login() {
  const [googleLoginUrl, setGoogleLoginUrl] = useState(null);
  const [facebookLoginUrl, setFacebookLoginUrl] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getGoogleLoginUrl();
    getFacebookLoginUrl();
  }, []);

  const getGoogleLoginUrl = async () => {
    const platform = "google";
    const response = await api.getSocialLoginUrl(platform);
    setGoogleLoginUrl(response.data.url);
  };

  const getFacebookLoginUrl = async () => {
    const platform = "facebook";
    const response = await api.getSocialLoginUrl(platform);
    setFacebookLoginUrl(response.data.url);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    const response = await api.login(user);
    console.log(response);
  };

  const handleInput = (e) => {
    e.preventDefault();
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <Fragment>
      <form className="" onSubmit={handleLogin}>
        <div className="">
          <h1 className="">Login</h1>
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
            />
          </div>
          <div className="">
            <input type="submit" value="Login" className="" />
          </div>
        </div>
      </form>

      <div>
        {googleLoginUrl && (
          <a className="App-link" href={googleLoginUrl}>
            Sign in with Google
          </a>
        )}
      </div>

      <div>
        {facebookLoginUrl && (
          <a className="App-link" href={facebookLoginUrl}>
            Sign in with Facebook
          </a>
        )}
      </div>
    </Fragment>
  );
}
