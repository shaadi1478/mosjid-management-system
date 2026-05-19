import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  Menu,
  Moon,
  X,
} from "lucide-react";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Prayer",
      path: "/prayer",
    },
    {
      name: "Donate",
      path: "/donate",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Academy",
      path: "/academy",
    },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">

        {/* NAVBAR */}
        <nav className="relative flex items-center justify-between rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-xl">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2.5"
          >

            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg">

              <span className="text-lg font-bold text-white">
                ن
              </span>

            </div>

            <div className="flex flex-col leading-none">

              <span className="text-lg font-semibold text-gray-900">
                Al-Noor
              </span>

              <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                Mosque
              </span>

            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-7 text-sm">

            {navLinks.map((link, i) => (

              <NavLink
                key={i}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative transition-colors ${
                    isActive
                      ? "text-emerald-600 font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >

                {({ isActive }) => (
                  <>

                    {link.name}

                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-emerald-500" />
                    )}

                  </>
                )}

              </NavLink>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* THEME */}
            <button className="grid h-9 w-9 place-items-center rounded-lg hover:bg-gray-100 transition-colors">

              <Moon className="h-4 w-4 text-gray-700" />

            </button>

            {/* DONATE BUTTON */}
            <button className="hidden sm:inline-flex items-center justify-center h-9 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-4 text-xs font-medium text-white shadow-lg hover:opacity-90 transition">

              Donate Now

            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMobileOpen(
                  !mobileOpen
                )
              }
              className="md:hidden grid h-9 w-9 place-items-center rounded-lg hover:bg-gray-100 transition-colors"
            >

              {mobileOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}

            </button>

          </div>

          {/* MOBILE MENU */}
          <div
            className={`absolute left-0 top-[calc(100%+12px)] w-full rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 md:hidden ${
              mobileOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-3"
            }`}
          >

            <div className="flex flex-col p-4">

              {navLinks.map((link, i) => (

                <NavLink
                  key={i}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() =>
                    setMobileOpen(
                      false
                    )
                  }
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-emerald-50 text-emerald-600 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >

                  {link.name}

                </NavLink>
              ))}

              {/* MOBILE DONATE */}
              <button className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white shadow-lg">

                Donate Now

              </button>

            </div>

          </div>

        </nav>

      </div>

    </header>
  );
}