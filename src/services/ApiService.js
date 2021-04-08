import axios from "axios";

const api = {
  signUp: (user) =>
    axios.post("/api/auth/register", user).catch((error) => console.log(error)),
};

export default api;
