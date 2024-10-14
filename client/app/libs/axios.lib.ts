import axios from "axios";
// import { usePreferences } from "../store/preferences";

const instance = axios.create({
  baseURL: `${process.env.API_URL}`,
  withCredentials: true,
});

// instance.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     const currentServer = usePreferences.getState().currentServer;
//     if (currentServer) {
//       config.headers.server = currentServer;
//     }

//     return config;
//   },
//   (err) => Promise.reject(err)
// );

export const api = instance;
