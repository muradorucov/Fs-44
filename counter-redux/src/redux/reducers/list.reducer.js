export const listReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      const isAList = state.includes(action.payload);
      if (!isAList) {
        return [...state, action.payload]
      }
      return state
    case "REMOVE_FROM_LIST":
      return state.filter(item => item !== action.payload);
    case "CLEAR_LIST":
      return []
    default:
      return state
  }
}