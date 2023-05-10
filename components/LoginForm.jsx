import AuthContext from "@/components/AuthContext";
import axiosInstance from "@/config/axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const admin = { email: "minhnt@dhg.com", password: "Pambudemo@1234" };
const user = { email: "trandinhtu.dev@gmail.com", password: "Pambu@123" };
const delUser = { email: "tutran@gmail.com", password: "Pambu@123" };

export default function LoginForm() {
  const [invalidMessage, setInvalidMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { handleLoginSuccess } = useContext(AuthContext);
  let formData = {};
  let userData = {};

  const handleOnSubmit = (e) => {
    e.preventDefault();

    formData = {
      user: {
        email: e.target.email.value,
        password: e.target.password.value,
      },
      isRemember: e.target.remember.checked,
    };
    console.log(formData);
    const regEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,16}$/;
    fetchDataWithAsyncAwait();

    // if (!formData.user.password) {
    //   setInvalidMessage("Please enter password");
    //   return;
    // } else if (!regEx.test(formData.user.password)) {
    //   setInvalidMessage("Please enter valid password");
    //   return;
    // }
    setInvalidMessage("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // router.push("/");
    }, 1000);
  };

  const fetchDataWithAsyncAwait = async () => {
    try {
      const { data } = await axiosInstance.post(`/users/login`, formData.user);
      handleLoginSuccess(data);
    } catch (error) {
      setInvalidMessage(error.response.data.vn_msg);
      console.log(error);
    }
  };

  return (
    <div className="mx-auto my-auto w-96 h-100 flex flex-col gap-4 ">
      <h1 className="text-lg self-center">User Management</h1>
      <form onSubmit={handleOnSubmit} className="">
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="flex flex-col gap-4 mb-2">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="flex gap-4 mb-2 justify-center items-center">
          <input type="checkbox" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="flex flex-col gap-4 mb-2 justify-center">
          {invalidMessage && <p className="text-red-500">{invalidMessage}</p>}
          <button
            className="px-5 py-3 bg-sky-700 text-white"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
