import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions";

export default function LoginGoogle(props) {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getLoggedInUser = async () => {
      await axios
        .get(`/api/auth/google/callback${props.location.search}`)
        .then((response) => {
          console.log(response.data.data);
          const data = response.data.data;
          dispatch(login(data.user, data.token));
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setErrors(error);
        });
    };
    getLoggedInUser();
  }, [dispatch, props.location.search]);

  if (loading) return <Fragment>Loading...</Fragment>;

  return (
    <div>
      <details>
        <summary>Welcome {auth.user.name}</summary>
      </details>
    </div>
  );
}
