export const login = (user) => {
  return {
    type: "SET_LOGIN",
    payload: user,
  };
};

export const logout = () => {
  return {
    type: "SET_LOGOUT",
  };
};
