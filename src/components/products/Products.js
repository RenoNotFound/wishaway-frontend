import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/ApiService";
import CategoryDescription from "./description/CategoryDescription";

import "./products.scss";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // getProductsByCategory();
  }, []);

  const getProductsByCategory = async () => {
    const response = await api.getProductsByCategory(categoryId);
    console.log(response.data.products);
  };

  return (
    <Fragment>
      <div className="decoration-mini-circles" />
      <div>
        <div className="description-container">
          <CategoryDescription categoryId={categoryId} />
        </div>
        <div></div>
      </div>
    </Fragment>
  );
}
