import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .get("/api/auth/google/url", config)
      .then((response) => {
        console.log(response);
        setGoogleLoginUrl(response.data.url);
      })
      .catch((error) => {
        console.error(error);
        setErrors(error);
      });
  };

  const getFacebookLoginUrl = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .get("/api/auth/facebook/url", config)
      .then((response) => {
        console.log(response);
        setFacebookLoginUrl(response.data.url);
      })
      .catch((error) => {
        console.error(error);
        setErrors(error);
      });
  };

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:80/api/auth/login", data)
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
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <Fragment>
      <form className="" onSubmit={handleForm}>
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
