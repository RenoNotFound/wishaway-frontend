import React, { useState, useEffect, Fragment } from "react";
import api from "../../../services/ApiService";
import ProductCard from "./ProductCard";

import "./display.scss";

export default function ProductsDisplay({ categoryId, category }) {
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getProductsByCategory(categoryId);
    getSubcategoriesByCategory(categoryId);
  }, [categoryId]);

  const getProductsByCategory = async (categoryId) => {
    const response = await api.getProductsByCategory(categoryId);
    setProducts(response.data.products);
  };

  const getSubcategoriesByCategory = async (categoryId) => {
    const response = await api.getSubcategoriesByCategory(categoryId);
    setSubcategories(response.data.subcategories);
  };

  const getProductsBySubcategory = async (subcategoryId) => {
    const response = await api.getProductsBySubcategory(subcategoryId);
    setProducts(response.data.products);
  };

  const handleActiveState = (subcategoryId = 0) => {
    setActiveIndex(subcategoryId);
  };

  return (
    <Fragment>
      <div className="sort-bar"></div>
      <div className="subcategory-wrapper">
        <div className="subcategory-nav">
          <ul className="nav-list">
            <hr className="subcat-separater" />
            <li
              className={activeIndex === 0 ? "active" : ""}
              onClick={() => {
                getProductsByCategory();
                handleActiveState();
              }}
            >
              all
            </li>
            {subcategories.map((subcategory) => {
              return (
                <Fragment>
                  <hr className="subcat-separater" />
                  <li
                    className={activeIndex === subcategory.id ? "active" : ""}
                    key={subcategory.id}
                    onClick={() => {
                      getProductsBySubcategory(subcategory.id);
                      handleActiveState(subcategory.id);
                    }}
                  >
                    {subcategory.name}
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="product-list-container">
        <ProductCard products={products} category={category} />
      </div>
    </Fragment>
  );
}
