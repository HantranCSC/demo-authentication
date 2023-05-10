import React, { useContext, useEffect } from "react";
import AuthContext from "../AuthContext";
import { useRouter } from "next/router";

export default function PublicRoute({ children }) {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  const router = useRouter();
  useEffect(() => {
    if (userData.isAuthStateReady && userData.user) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [userData]);

  return userData.isAuthStateReady && !userData.user && <div>{children}</div>;
}
