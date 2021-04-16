import React, { useState, useEffect, Fragment } from "react";
import api from "../../../services/ApiService";

export default function ProductsHeading({ categoryId }) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategory();
  }, [categoryId]);

  const getCategory = async () => {
    const response = await api.getCategoryById(categoryId);
    setCategory(response.data.category);
  };

  return (
    <Fragment>
      <div className={`category-heading ${category.name}`}>
        <p className="category-title">{category.name}</p>
        <p className="category-description">{category.description}</p>
      </div>
      <img className="heading-pic" src={category.pic_url} alt="health" />
    </Fragment>
  );
}
