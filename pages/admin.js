import AdminRoute from "@/components/Routes/AdminRoute";
import ProtectedRoute from "@/components/Routes/ProtectedRoute";
import CommonLayout from "@/components/layouts/CommonLayout";
import React from "react";

export default function admin() {
  return (
    <ProtectedRoute>
      <AdminRoute>
        <CommonLayout></CommonLayout>
      </AdminRoute>
    </ProtectedRoute>
  );
}
