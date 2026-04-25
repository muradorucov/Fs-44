export const addToListAction = function (payload) {
  return {
    type: "ADD_TO_LIST",
    payload
  }
}


export const removeFromListAction = function (payload) {
  return {
    type: "REMOVE_FROM_LIST",
    payload
  }
}

export const clearListAction = function () {
  return {
    type: "CLEAR_LIST"
  }
}