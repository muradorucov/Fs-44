import { api } from "../../api"

export const getAllOrders = async () => {
  const res = await api.get("/orders");
  if (!res.data) {
    throw new Error("Get All orders fetch Error");
  }
  return res.data
}

export const createOrder = () => {

}

export const deleteOrder = () => {

}

export const updateOrder = () => {

}

export const getSingleOrder = () => {

}
