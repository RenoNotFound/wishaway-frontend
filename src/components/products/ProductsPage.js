import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductsHeading from "./heading/ProductsHeading";
import ProductsDisplay from "./display/ProductsDisplay";

import "./products.scss";

export default function Products() {
  const { categoryId, category } = useParams();

  return (
    <Fragment>
      <div className="decoration-mini-circles" />
      <div className="heading-container">
        <ProductsHeading categoryId={categoryId} />
      </div>
      <ProductsDisplay categoryId={categoryId} category={category} />
    </Fragment>
  );
}
