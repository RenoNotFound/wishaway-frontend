import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function LoginGoogle(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .get(`/api/auth/google/callback${props.location.search}`, config)
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setErrors(error);
        });
    };
    getLoggedInUser();
  }, [props.location.search]);

  console.log(data);

  if (loading) return <Fragment>Loading...</Fragment>;

  return (
    <div>
      <details>
        <summary>
          {Object.keys(data).length !== 0 ? (
            <div>Welcome {data.user.name}</div>
          ) : (
            ""
          )}
        </summary>
      </details>
    </div>
  );
}
