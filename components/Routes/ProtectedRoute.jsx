import React, { useContext, useEffect } from "react";
import AuthContext from "../AuthContext";
import { useRouter } from "next/router";

export default function ProtectedRoute({ children }) {
  const {
    userData: { user, isAuthStateReady },
  } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    // checkRole();
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, [user]);
  return <div>{isAuthStateReady && user && children}</div>;
}
