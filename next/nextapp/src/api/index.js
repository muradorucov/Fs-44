import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/posts"
})



export const getAllPostsService = async () => {
  const res = await api.get();
  if (!res.data) {
    throw new Error("Error POsts");
  }
  return res.data
}