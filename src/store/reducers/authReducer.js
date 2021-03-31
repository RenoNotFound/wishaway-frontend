const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        loggedIn: true,
        user: action.payload_user,
        token: action.payload_token,
      };
    case "SET_LOGOUT":
      return { ...state, loggedIn: false, user: {}, token: "" };
    default:
      return state;
  }
};

export default authReducer;
