import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../AuthContext";
import { useRouter } from "next/router";

export default function CommonLayout({ children, user }) {
  const { handleOnLogout } = useContext(AuthContext);
  const router = useRouter();
  const { userData } = useContext(AuthContext);

  return (
    <div className="w-[100vw] h-[100vh] grid grid-cols-6">
      <div className="border-r-2 border-grey col-span-1 flex flex-col items-center gap-5 pt-20">
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/payment");
            }}
            className="py-4 w-52 rounded-lg shadow-md bg-sky-700 text-white"
          >
            Payment
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push("/order");
            }}
            className="py-4 w-52 rounded-lg  shadow-md bg-sky-700 text-white"
          >
            Order
          </button>
        </div>
        <div>
          {userData.user.item.role === "admin" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/admin");
              }}
              className="py-4 w-52 rounded-lg shadow-md bg-sky-700 text-white"
            >
              Admin
            </button>
          )}
        </div>
        <p>{user}</p>
        <button
          className="py-4 w-52 rounded-lg shadow-md bg-slate-100 text-grey-800"
          onClick={(e) => {
            e.preventDefault();
            handleOnLogout();
          }}
        >
          Logout
        </button>
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
}
