import AuthContext from "@/components/AuthContext";
import LoginForm from "@/components/LoginForm";
import PublicRoute from "@/components/Routes/PublicRoute";
import axiosInstance from "@/config/axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const admin = { email: "minhnt@dhg.com", password: "Pambudemo@1234" };
const user = { email: "trandinhtu.dev@gmail.com", password: "Pambu@123" };
const delUser = { email: "tutran@gmail.com", password: "Pambu@123" };

export default function Login() {
  return (
    <PublicRoute>
      <LoginForm />
    </PublicRoute>
  );
}
