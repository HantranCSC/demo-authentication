import axiosInstance from "@/config/axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    user: null,
    isAuthStateReady: false,
  });
  const router = useRouter();
  const fetchDataWithAsyncAwait = async () => {
    try {
      const { data } = await axiosInstance.get(`/users/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(data);
      setUserData({ user: data, isAuthStateReady: true });
    } catch (error) {
      setUserData({ user: null, isAuthStateReady: true });
      localStorage.setItem("token", "");
      router.push("/login");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      fetchDataWithAsyncAwait();
    } else {
      updateUserData({ user: null, isAuthStateReady: true });
    }
  }, []);

  const handleOnLogout = () => {
    setUserData({ user: null, isAuthStateReady: true });
    localStorage.setItem("token", "");
    router.push("/login");
  };

  const handleLoginSuccess = (data) => {
    setUserData({ user: data, isAuthStateReady: true });
    localStorage.setItem("token", data.token);
    router.push("/");
  };
  const updateUserData = (newData) => {
    setUserData(newData);
  };

  const checkRole = () => {
    const { user, isAuthStateReady } = userData;
    if (isAuthStateReady && user && user.role !== "admin") {
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        updateUserData,
        handleLoginSuccess,
        handleOnLogout,

        checkRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
