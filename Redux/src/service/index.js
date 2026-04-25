import { api } from "../api"

export const getAllProductsService = async () => {
  const res = await api.get("/");
  if (!res.data) {
    throw new Error("Productlar yoxdur");
  }
  return res.data
}