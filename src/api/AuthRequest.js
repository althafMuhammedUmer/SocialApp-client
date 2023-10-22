import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API,
    withCredentials: true,
    
})

export const login = (formData) => API.post("/auth/login", formData)
export const register = (formData) => API.post("/auth/register", formData)