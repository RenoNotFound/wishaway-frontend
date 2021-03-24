import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const [googleLoginUrl, setGoogleLoginUrl] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
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
    getGoogleLoginUrl();
  }, []);

  return (
    <div>
      {googleLoginUrl && (
        <a className="App-link" href={googleLoginUrl}>
          Sign in with Google
        </a>
      )}
    </div>
  );
}
