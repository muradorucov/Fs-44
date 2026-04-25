export const increaseAction = (payload) => {
  return {
    type: "INCREASE",
    payload
  }
}

export const decreaseAction = (payload) => {
  return {
    type: "DECREASE",
    payload
  }
}