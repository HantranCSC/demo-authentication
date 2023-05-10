import Image from "next/image";
import { Inter } from "next/font/google";
import CommonLayout from "@/components/layouts/CommonLayout";
import ProtectedRoute from "@/components/Routes/ProtectedRoute";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ProtectedRoute>
      <CommonLayout></CommonLayout>
    </ProtectedRoute>
  );
}
