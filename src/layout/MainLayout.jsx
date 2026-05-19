import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="relative">

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      {/* Pages */}
      <Outlet />

      <Footer />

    </div>
  );
}