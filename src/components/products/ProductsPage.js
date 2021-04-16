import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/ApiService";
import CategoryHeading from "./description/CategoryHeading";
import ProductsContainer from "./productsDisplay/ProductsContainer";

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
      <div className="heading-container">
        <CategoryHeading categoryId={categoryId} />
      </div>
      <div className="products-container">
        <ProductsContainer categoryId={categoryId} />
      </div>
    </Fragment>
  );
}
