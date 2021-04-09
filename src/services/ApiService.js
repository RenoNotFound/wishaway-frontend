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
};

export default api;
