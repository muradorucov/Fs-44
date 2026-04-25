export const cartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    const foundPro = state.find(pro => pro.id === action.payload.id)
    if (!foundPro) {
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]
    } else {
      foundPro.quantity++;
      return [...state]
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    return state.filter(pro => pro.id !== action.payload)
  } else if (action.type === "INCREASE") {
    const foundPro = state.find(pro => pro.id === action.payload);
    foundPro.quantity++;
    return [...state]
  } else {
    return state
  }
}