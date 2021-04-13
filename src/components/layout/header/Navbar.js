import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../store/actions";

export default function Navbar() {
  const [loading, setLoading] = useState(true);

  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories();
  }, [dispatch]);

  const getCategories = async () => {
    const response = await api.getCategories();
    if (typeof response !== undefined) {
      dispatch(setCategories(response.data.categories));
      setLoading(false);
    }
  };

  if (loading) return <Fragment>Loading...</Fragment>;

  return (
    <nav>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link to={`products/${category.id}`}>{category.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
