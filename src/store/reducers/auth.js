const INITIAL_STATE = {
  name: null,
  images: null,
  token: null,
  tokenType: null,
  logged: false
};

const Auth = (state = INITIAL_STATE, action) => {
  const reducers = {
    SAVE_AUTH: {
      ...state,
      name: action.auth?.display_name,
      images: action.auth?.images,
      token: action.auth?.token,
      tokenType: action.auth?.tokenType,
      logged: true,
    },
    PURGE_AUTH: {
      ...state,
      name: null,
      images: null,
      token: null,
      tokenType: null,
      logged: false,
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
};

export default Auth;
