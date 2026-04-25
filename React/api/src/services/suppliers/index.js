import { api } from "../../api"

export const getAllCompanies = async () => {
  const res = await api.get("/suppliers");
  if (!res.data) {
    throw new Error("Get All Companies Fetch Error");
  }
  return res.data
}

export const createCompany = async (body) => {
  const res = await api.post("/suppliers", body);
  if (!res.data) {
    throw new Error("Create Company Fetch Error");
  }
  return res.data
}

export const deleteCompany = async (id) => {
  const res = await api.delete(`/suppliers/${id}`);
  if (!res.data) {
    throw new Error("Delete Company fetch Error");
  }
  return res.data
}

export const updateCompany = async (id, body) => {
  const res = await api.put(`/suppliers/${id}`, body);
  if (!res.data) {
    throw new Error("Update Company fetch Error");
  }
  return res.data
}

export const getSingleCompany = async (id) => {
  const res = await api.get(`/suppliers/${id}`);
  if (!res.data) {
    throw new Error("Single Company fetch Error");
  }
  return res.data
}