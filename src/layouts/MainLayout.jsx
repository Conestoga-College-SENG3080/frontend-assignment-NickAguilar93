/*
 * FILE : MainLayout.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines the MainLayout component which acts as a container for the main components of the application
 */
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useUser } from "../hooks/useUser";

const MainLayout = () => {
  const { isLoading } = useUser();
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex size-full flex-col items-center justify-center gap-12">
        {/* Larger spinner */}
        <div className="size-20 animate-spin rounded-full border-8 border-yellow-80 border-t-transparent" />
      </div>
    );
  }
  return (
    <div className="h-screen">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default MainLayout;
