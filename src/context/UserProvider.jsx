import { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const login = async () => {
      try {
        let token = localStorage.getItem("access_token");

        if (!token || !user) {
          const response = await axiosInstance.post("/auth/login", {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD,
          });

          token = response.data.access_token;
          localStorage.setItem("access_token", token);

          setUser(response.data.user);

          axiosInstance.defaults.headers.common["Authorization"] =
            `Bearer ${token}`;
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("access_token");
      } finally {
        setIsLoading(false);
      }
    };

    login();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
