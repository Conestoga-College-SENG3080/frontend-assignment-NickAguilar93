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
