import React, { Fragment } from "react";

export default function ProductCard({ products, category }) {
  return (
    <Fragment>
      {products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <img src={product.pic_url} alt="" width="200px" height="200px" />
            <p className="product-title">{product.name}</p>
            <button className={`add-to-cart-button ${category}-btn`}>
              Add to bag ${product.price}
            </button>
          </div>
        );
      })}
    </Fragment>
  );
}
