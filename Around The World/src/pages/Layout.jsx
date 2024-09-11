import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Layout() {
  return (
    <div className="px-5 min-h-screen  bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto  md:px-0">
        <Outlet />
      </div>
    </div>
  );
};

