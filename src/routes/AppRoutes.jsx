import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../AdminLayout/AdminLayout";


// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Prayer from "../pages/Prayer";
import Donate from "../pages/Donate";
import Events from "../pages/Events";
import Academy from "../pages/Academy";

// Admin
import AdminDashboard from "../AdminDashoard/AdminDashboard";
import EventDetails from "../pages/EventDetails";
import ZakatCalculator from "../pages/ZakatCalculator";
import RamadanUpdates from "../pages/RamadanUpdates";
import JummahSchedule from "../pages/JummahSchedule";
import Volunteers from "../pages/Volunteers";
import Sadaqah from "../pages/Sadaqah";
import QiblaDirection from "../pages/QiblaDirection";

export const router = createBrowserRouter([
  // 🌐 PUBLIC SITE
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "prayer",
        element: <Prayer />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path:"event-details/:id",
        element: <EventDetails />
      },
      {
        path: "academy",
        element: <Academy />,
      },
      {
        path: "zakat",
        element: <ZakatCalculator />
      },
      {
        path: "ramadan",
        element: <RamadanUpdates />
      },
      {
        path: "jhumha",
        element: <JummahSchedule />
      },
      {
        path: "volunter",
        element: <Volunteers />
      },
      {
        path: "sadaqah",
        element: <Sadaqah />
      },
      {
        path: "kibla",
        element: <QiblaDirection />
      }
    ],
  },

  // 🛠️ ADMIN (ONLY DASHBOARD)
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
]);