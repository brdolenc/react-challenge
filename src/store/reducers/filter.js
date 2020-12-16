const INITIAL_STATE = {
  text: null,
  advancedFilter: {},
  hasFilter: false,
};

const Filter = (state = INITIAL_STATE, action) => {
  const reducers = {
    CHANGE_FILTER: {
      ...state,
      text: action?.filter?.text,
      advancedFilter: action?.filter?.advancedFilter,
      hasFilter: action?.filter?.hasFilter
    },
    default: state,
  };

  return reducers[action.type] || reducers.default;
};

export default Filter;