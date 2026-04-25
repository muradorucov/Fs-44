export const addtoCartAction = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload
  }
}

export const removeFromCartAction = (payload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload
  }
}

export const increaseAction = (payload) => {
  return {
    type: "INCREASE",
    payload
  }
}