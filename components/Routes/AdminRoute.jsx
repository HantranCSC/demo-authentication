import React, { useContext, useEffect } from "react";
import AuthContext from "../AuthContext";
import { useRouter } from "next/router";

export default function AdminRoute({ children }) {
  const {
    userData: { user, isAuthStateReady },
  } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (isAuthStateReady && user && user.item.role !== "admin") {
      router.push("/");
    }
  }, [user, isAuthStateReady]);
  return (
    <div>
      {isAuthStateReady && user && user.item.role === "admin" && children}
    </div>
  );
}
