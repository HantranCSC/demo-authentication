import ProtectedRoute from "@/components/Routes/ProtectedRoute";
import CommonLayout from "@/components/layouts/CommonLayout";
import React from "react";

export default function payment() {
  return (
    <ProtectedRoute>
      <CommonLayout></CommonLayout>
    </ProtectedRoute>
  );
}
