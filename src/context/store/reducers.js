export const appReducer = (state, action) => {
  const newState = { ...state };
  newState[action.type] = action.data;
  return newState;
};
