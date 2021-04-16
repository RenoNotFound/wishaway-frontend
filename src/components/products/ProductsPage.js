import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import CategoryHeading from "./heading/ProductsHeading";
import ProductsDisplay from "./display/ProductsDisplay";

import "./products.scss";

export default function Products() {
  const { categoryId } = useParams();

  return (
    <Fragment>
      <div className="decoration-mini-circles" />
      <div className="heading-container">
        <CategoryHeading categoryId={categoryId} />
      </div>
      <div className="products-container">
        <ProductsDisplay categoryId={categoryId} />
      </div>
    </Fragment>
  );
}
