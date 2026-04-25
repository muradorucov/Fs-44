import axios from "axios";

const apiUrl = "https://northwind.vercel.app/api";

//! https://northwind.vercel.app/api/suppliers
//! https://northwind.vercel.app/api/ORDERS


export const api = axios.create({
  baseURL: apiUrl
})
