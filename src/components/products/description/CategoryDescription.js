import React, { useState, useEffect } from "react";
import api from "../../../services/ApiService";

export default function CategoryDescription({ categoryId }) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategory();
  }, [categoryId]);

  const getCategory = async () => {
    const response = await api.getCategoryById(categoryId);
    console.log(response.data.category);
    setCategory(response.data.category);
  };

  return (
    <div className="category-heading-wrapper">
      <div className={`category-heading ${category.name}`}>
        <p className="category-title">{category.name}</p>
        <p className="category-description">{category.description}</p>
      </div>
      <img className="heading-pic" src={category.pic_url} alt="health" />
    </div>
  );
}
