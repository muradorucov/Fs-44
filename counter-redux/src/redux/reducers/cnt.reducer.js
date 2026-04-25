export const cntReducer = function (state = 10, action) {
  switch (action.type) {
    case "DECREASE":
      return state - action.payload;
    case "INCREASE":
      return state + action.payload;
    default:
      return state;
  }
}