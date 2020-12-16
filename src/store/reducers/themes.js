const INITIAL_STATE = {
  data: null,
};

const Themes = (state = INITIAL_STATE, action) => {
  const reducers = {
    CHANGE_THEME: {
      ...state,
      data: action.theme,
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
};

export default Themes;
