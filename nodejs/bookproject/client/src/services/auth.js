import { api } from "../api"

export const login = async (body) => {
  const res = await api.post("/auth/login", body)
  if (!res.data) {
    throw new Error("Login failed")
  }
  return res.data
}


export const currentUser = async () => {
  const res = await api.get("/auth/current-user")
  if (!res.data) {
    throw new Error("Fetch failed")
  }
  return res.data
}


export const logout = async () => {
  const res = await api.post("/auth/logout")
  if (!res.data) {
    throw new Error("Logout failed")
  }
  return res.data
}