import React, { useState, useEffect, Fragment } from "react";
import api from "../../../services/ApiService";
import ProductCard from "./ProductCard";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./display.scss";
import "./sortBar.scss";

export default function ProductsDisplay({ categoryId, category }) {
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [activeSubcategory, setActiveSubcategory] = useState(0);

  const [isHiddenDropdown, setIsHiddenDropdown] = useState(true);
  const [activeFilter, setActiveFilter] = useState("default");

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

  const filterProducts = (filterBy) => {
    switch (filterBy) {
      case "default":
        activeSubcategory === 0
          ? getProductsByCategory(categoryId)
          : getProductsBySubcategory(activeSubcategory);
        break;
      case "asc":
        const filteredAscProducts = products.sort((a, b) => {
          return a.price - b.price;
        });
        setProducts(filteredAscProducts);
        break;
      case "desc":
        const filteredDescProducts = products.sort((a, b) => {
          return b.price - a.price;
        });
        setProducts(filteredDescProducts);
        break;
      default:
        break;
    }
  };

  const hideSortDropdown = () => {
    setIsHiddenDropdown((prevIsHiddenDropdown) => !prevIsHiddenDropdown);
  };

  const handleActiveSubcategory = (subcategoryId = 0) => {
    setActiveSubcategory(subcategoryId);
    setActiveFilter("default");
  };

  return (
    <Fragment>
      <div className="sort-view">
        <div className="sort-wrapper">
          <hr className="sort-bar-frame" />
          <div className="sort-bar" onClick={hideSortDropdown}>
            <p>sort</p>
            {isHiddenDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          <hr className="sort-bar-frame" />
          <div
            className={`sort-dropdown ${
              isHiddenDropdown ? "hidden-dropdown" : ""
            }`}
          >
            <ul>
              <li
                className={activeFilter === "default" ? "active" : ""}
                onClick={() => {
                  setActiveFilter("default");
                  filterProducts("default");
                }}
              >
                Default
              </li>
              <li
                className={activeFilter === "asc" ? "active" : ""}
                onClick={() => {
                  setActiveFilter("asc");
                  filterProducts("asc");
                }}
              >
                Price - low to high
              </li>
              <li
                className={activeFilter === "desc" ? "active" : ""}
                onClick={() => {
                  setActiveFilter("desc");
                  filterProducts("desc");
                }}
              >
                Price - high to low
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="products-container">
        <div className="subcategory-wrapper">
          <div className="subcategory-nav">
            <ul className="nav-list">
              <hr className="subcat-separater" />
              <li
                className={activeSubcategory === 0 ? "active" : ""}
                onClick={() => {
                  getProductsByCategory(categoryId);
                  handleActiveSubcategory();
                }}
              >
                all
              </li>
              {subcategories.map((subcategory) => {
                return (
                  <Fragment>
                    <hr className="subcat-separater" />
                    <li
                      className={
                        activeSubcategory === subcategory.id ? "active" : ""
                      }
                      key={subcategory.id}
                      onClick={() => {
                        getProductsBySubcategory(subcategory.id);
                        handleActiveSubcategory(subcategory.id);
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
      </div>
    </Fragment>
  );
}
