import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/ApiService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const { categoryId } = useParams();

  useEffect(() => {
    getProductsByCategory();
    getCategory();
  });

  const getProductsByCategory = async () => {
    const response = await api.getProductsByCategory(categoryId);
    console.log(response.data.products);
  };

  const getCategory = async () => {
    const response = await api.getCategoryById(categoryId);
    setCategory(response.data.category);
  };
  return <div>{category.name}</div>;
}
