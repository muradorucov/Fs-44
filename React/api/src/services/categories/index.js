import { api } from "../../api"

export const getAllCategories = async () => {
  const res = await api.get("/categories");
  if (!res.data) {
    throw new Error("Get All Categories fetch Error");
  }
  return res.data
}

export const createCategory = () => {

}

export const deleteCategory = () => {

}

export const updateCategory = () => {

}

export const getSingleCategory = () => {

}
