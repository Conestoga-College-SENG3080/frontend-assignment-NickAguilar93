/*
 * FILE : axiosInstance.js
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines an HTTP request object to be reused in the application
 */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
