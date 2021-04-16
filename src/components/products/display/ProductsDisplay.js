import React, { useState, useEffect, Fragment } from "react";
import api from "../../../services/ApiService";

export default function ProductsDisplay({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    getProductsByCategory();
    getSubcategoriesByCategory();
  }, [categoryId]);

  const getProductsByCategory = async () => {
    const response = await api.getProductsByCategory(categoryId);
    setProducts(response.data.products);
  };

  const getSubcategoriesByCategory = async () => {
    const response = await api.getSubcategoriesByCategory(categoryId);
    setSubcategories(response.data.subcategories);
  };

  const getProductsBySubcategory = async (subcategoryId) => {
    const response = await api.getProductsBySubcategory(subcategoryId);
    setProducts(response.data.products);
  };

  return (
    <Fragment>
      <div>
        <ul className="navList">
          <li onClick={getProductsByCategory}>all</li>
          {subcategories.map((subcategory) => {
            return (
              <li
                key={subcategory.id}
                onClick={() => getProductsBySubcategory(subcategory.id)}
              >
                {subcategory.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>
    </Fragment>
  );
}
