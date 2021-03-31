export const login = (user, token) => {
  return {
    type: "SET_LOGIN",
    payload_user: user,
    payload_token: token,
  };
};

export const logout = () => {
  return {
    type: "SET_LOGOUT",
  };
};
