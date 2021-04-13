import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/ApiService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProductsByCategory();
  }, []);

  const getProductsByCategory = async () => {
    const response = await api.getProductsByCategory(categoryId);
    console.log(response.data.data.products);
  };

  return <div>{categoryId}</div>;
}
