import React, { useState, useEffect } from "react";
import api from "../../../services/ApiService";
import health from "../../../assets/health.png";

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
    <div className="category-heading">
      <div className="category-description-container">
        <p className="category-title">{category.name}</p>
        <p className="category-description">{category.description}</p>
      </div>
      <img className="health-pic" src={health} alt="health" />
    </div>
  );
}