import { api } from "../api"

export const getAllActiveBooks = async () => {
  const res = await api.get("/books");
  if (!res.data) {
    throw new Error("No data received");
  }
  return res.data;
}