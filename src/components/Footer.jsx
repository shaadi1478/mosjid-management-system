// IMPORT
import {
  MapPin,
  Mail,
  Phone,
  Info,
  X,
  Code2,
  Globe,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import developer from '../assets/developer.jpeg'
import { Link } from "react-router-dom";

export default function Footer() {

  const [openMap, setOpenMap] =
    useState(false);

  const [openDeveloper, setOpenDeveloper] =
    useState(false);

  return (
    <>
      <footer className="relative overflow-hidden border-t border-gray-200 bg-white pt-20 pb-10 text-gray-900">

        {/* Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url('/assets/pattern-WWIbFu9T.png')",
            backgroundSize: "240px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

          {/* HEADER */}
          <div className="mb-14 text-center">

            <div className="font-arabic mb-4 text-4xl text-emerald-600 md:text-5xl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>

            <p className="mx-auto max-w-2xl text-sm italic leading-relaxed text-gray-600 md:text-base">
              "Indeed, the mosques of Allah are only
              to be maintained by those who believe
              in Allah and the Last Day."

              <span className="mt-2 block text-xs uppercase tracking-widest text-emerald-600">
                — Quran 9:18
              </span>
            </p>
          </div>

          {/* GRID */}
          <div className="mb-14 grid grid-cols-2 gap-10 md:grid-cols-4">

            {/* PRAYER */}
            <div>

              <h3 className="mb-4 text-lg font-semibold">
                Prayer
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">

                <li>
                  <a href="/prayer">
                    Prayer Times
                  </a>
                </li>

                <li>
                  <a href="/jhumha">
                    Jummah Schedule
                  </a>
                </li>

                <li>
                  <a href="/ramadan">
                    Ramadan Updates
                  </a>
                </li>

              </ul>
            </div>

            {/* COMMUNITY */}
            <div>

              <h3 className="mb-4 text-lg font-semibold">
                Community
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">

                <li>
                  <a href="/events">
                    Events
                  </a>
                </li>

                <li>
                  <a href="/volunter">
                    Volunteers
                  </a>
                </li>

                <li>
                  <a href="/academy">
                    Islamic Academy
                  </a>
                </li>

              </ul>
            </div>

            {/* SUPPORT */}
            <div>

              <h3 className="mb-4 text-lg font-semibold">
                Support
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">

                <li>
                  <Link to='/donate' >
                    Donate
                  </Link>
                </li>

                <li>
                  <a href="/zakat">
                    Zakat
                  </a>
                </li>

                <li>
                  <a href="/sadaqah">
                    Sadaqah
                  </a>
                </li>

              </ul>
            </div>

            {/* CONTACT */}
            <div>

              <h3 className="mb-4 text-lg font-semibold">
                Contact
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">

                {/* MAP */}
                <li>

                  <button
                    onClick={() =>
                      setOpenMap(true)
                    }
                    className="flex items-center gap-2 hover:text-emerald-600"
                  >

                    <MapPin className="h-4 w-4" />

                    Visit Mosque
                  </button>
                </li>

                {/* EMAIL */}
                <li>

                  <a
                    href="mailto:mosque@email.com"
                    className="flex items-center gap-2 hover:text-emerald-600"
                  >

                    <Mail className="h-4 w-4" />

                    Email Us
                  </a>
                </li>

                {/* CALL */}
                <li>

                  <a
                    href="tel:+8801712345678"
                    className="flex items-center gap-2 hover:text-emerald-600"
                  >

                    <Phone className="h-4 w-4" />

                    Call Now
                  </a>
                </li>

                {/* ABOUT */}
                <li>

                  <a
                    href="/about"
                    className="flex items-center gap-2 hover:text-emerald-600"
                  >

                    <Info className="h-4 w-4" />

                    About
                  </a>
                </li>

                {/* DEVELOPER */}
                <li>

                  <button
                    onClick={() =>
                      setOpenDeveloper(true)
                    }
                    className="flex items-center gap-2 hover:text-emerald-600"
                  >

                    <Code2 className="h-4 w-4" />

                    Developer
                  </button>
                </li>

              </ul>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">

            <div className="text-center text-xs tracking-wide text-gray-500 sm:text-left">
              © 2026 Al-Noor Mosque · Built with
              love for the Ummah
            </div>

            <div className="font-arabic text-lg text-emerald-600">
              جزاكم الله خيرا
            </div>

          </div>

        </div>
      </footer>

      {/* MAP MODAL */}
      {openMap && (

        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-2xl">

            <button
              onClick={() =>
                setOpenMap(false)
              }
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="h-[450px] w-full">

              <iframe
                title="Mosque Location"
                src="https://www.google.com/maps?q=Dhaka+Bangladesh&output=embed"
                className="h-full w-full border-0"
              />

            </div>

          </div>
        </div>
      )}

      {/* DEVELOPER MODAL */}
      {openDeveloper && (

        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white p-8 shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() =>
                setOpenDeveloper(false)
              }
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            {/* PROFILE */}
            <div className="text-center">

                <img className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-3xl font-bold text-white shadow-xl" src={developer} alt="" />

              <h2 className="mt-6 text-3xl font-bold text-gray-900 uppercase">
                sheikh sadi
              </h2>

              <p className="mt-2 text-sm text-emerald-600 font-medium">
                Web Developer & UI Designer
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                Specialized in React.js, Tailwind CSS,
                Webflow & modern Islamic website
                development.
              </p>

            </div>

            {/* INFO */}
            <div className="mt-8 space-y-4">

              <a
                href="https://sheikhsadi.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:bg-gray-50"
              >

                <Globe className="h-5 w-5 text-emerald-600" />

                <span className="text-sm font-medium">
                  sheikhsadi.netlify.app
                </span>
              </a>

              <a
                href="https://www.facebook.com/SADI7700"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:bg-gray-50"
              >

                <FaFacebookF className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium">
                  Facebook Profile
                </span>
              </a>

              <a
                href="mailto:developer@email.com"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 hover:bg-gray-50"
              >

                <Mail className="h-5 w-5 text-emerald-600" />

                <span className="text-sm font-medium">
                  sheikhshaadi137@gmail.com
                </span>
              </a>

            </div>

            {/* BUTTON */}
            <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-90">

              Hire Developer
            </button>

          </div>
        </div>
      )}
    </>
  );
}