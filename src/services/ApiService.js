import axios from "axios";

const api = {
  signUp: (user) =>
    axios.post("/api/auth/register", user).catch((error) => console.log(error)),
  getSocialLoginUrl: (socialPlatform) =>
    axios
      .get(`/api/auth/${socialPlatform}/url`)
      .catch((error) => console.log(error)),
  login: (user) =>
    axios.post("/api/auth/login", user).catch((error) => console.log(error)),
  getCategoryById: (categoryId) =>
    axios
      .get(`/api/category/${categoryId}`)
      .then((response) => response.data)
      .catch((error) => console.log(error)),
  getSubcategoriesByCategory: (categoryId) =>
    axios
      .get(`/api/products/${categoryId}`)
      .catch((error) => console.log(error)),
  getProductsByCategory: (categoryId) =>
    axios
      .get(`/api/products/${categoryId}`)
      .then((response) => response.data)
      .catch((error) => console.log(error)),
  getProductsBySubcategory: (subcategoryId) =>
    axios
      .get(`/api/products/${subcategoryId}`)
      .catch((error) => console.log(error)),
};

export default api;
