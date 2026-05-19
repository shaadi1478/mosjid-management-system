import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  ArrowLeft,
  Share2,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import eventsData from "../data/eventsData";

export default function EventDetails() {

  const { id } = useParams();

  const event = eventsData.find(
    (item) => item.id === Number(id)
  );

  // EVENT NOT FOUND
  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8faf7] px-4 text-center">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            ইভেন্ট পাওয়া যায়নি
          </h2>

          <p className="mt-3 text-gray-500">
            আপনি যে ইভেন্টটি খুঁজছেন সেটি পাওয়া যায়নি।
          </p>

          <Link
            to="/events"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-white transition hover:bg-emerald-700"
          >

            <ArrowLeft className="h-4 w-4" />

            সকল ইভেন্টে ফিরে যান
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f8faf7] to-white pt-28 pb-24">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4">

        <div className="relative overflow-hidden rounded-[40px]">

          <img
            src={event.image}
            alt={event.title}
            className="h-[300px] w-full object-cover md:h-[520px]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white md:p-14">

            {/* BACK */}
            <Link
              to="/events"
              className="mb-5 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"
            >

              <ArrowLeft className="h-4 w-4" />

              সকল ইভেন্টে ফিরে যান
            </Link>

            {/* BADGE */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/20 px-4 py-2 text-sm backdrop-blur">
              🌙 বিশেষ ইসলামিক আয়োজন
            </div>

            {/* TITLE */}
            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight md:text-6xl">
              {event.title}
            </h1>

            {/* DESC */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-lg md:leading-8">
              {event.desc}
            </p>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <section className="mx-auto mt-10 max-w-7xl px-4">

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* LEFT */}
          <div>

            {/* META */}
            <div className="grid gap-5 md:grid-cols-3">

              {/* DATE */}
              <div className="rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm">

                <CalendarDays className="h-6 w-6 text-emerald-600" />

                <div className="mt-4 text-sm text-gray-500">
                  ইভেন্টের তারিখ
                </div>

                <div className="mt-1 text-lg font-semibold text-gray-900">
                  {event.date}
                </div>

              </div>

              {/* TIME */}
              <div className="rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm">

                <Clock3 className="h-6 w-6 text-emerald-600" />

                <div className="mt-4 text-sm text-gray-500">
                  সময়
                </div>

                <div className="mt-1 text-lg font-semibold text-gray-900">
                  {event.time}
                </div>

              </div>

              {/* LOCATION */}
              <div className="rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm">

                <MapPin className="h-6 w-6 text-emerald-600" />

                <div className="mt-4 text-sm text-gray-500">
                  স্থান
                </div>

                <div className="mt-1 text-lg font-semibold text-gray-900">
                  {event.location}
                </div>

              </div>

            </div>

            {/* ABOUT */}
            <div className="mt-8 rounded-[35px] border border-emerald-100 bg-white p-8 shadow-sm">

              <h2 className="text-3xl font-bold text-gray-900">
                ইভেন্ট সম্পর্কে
              </h2>

              <div className="mt-6 space-y-6 leading-8 text-gray-600">

                <p>
                  {event.details}
                </p>

                <p>
                  ইসলামিক এই আয়োজনটি মুসলিম
                  কমিউনিটিকে একত্রিত করার জন্য
                  বিশেষভাবে আয়োজন করা হয়েছে।
                </p>

                <p>
                  সবাইকে পরিবারসহ অংশগ্রহণের
                  জন্য আন্তরিক আমন্ত্রণ জানানো হচ্ছে।
                </p>

              </div>

            </div>

            {/* SCHEDULE */}
            <div className="mt-8 rounded-[35px] border border-emerald-100 bg-white p-8 shadow-sm">

              <h2 className="text-3xl font-bold text-gray-900">
                ইভেন্ট সূচি
              </h2>

              <div className="mt-8 space-y-5">

                {/* ITEM */}
                <div className="flex items-start gap-5 rounded-2xl bg-[#f8faf7] p-5">

                  <div className="rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700">
                    ৫:০০ PM
                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      কুরআন তিলাওয়াত
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      স্থানীয় হাফেজদের সুন্দর তিলাওয়াত।
                    </p>

                  </div>

                </div>

                {/* ITEM */}
                <div className="flex items-start gap-5 rounded-2xl bg-[#f8faf7] p-5">

                  <div className="rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700">
                    ৬:০০ PM
                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      ইসলামিক বয়ান
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      গুরুত্বপূর্ণ ইসলামিক আলোচনা।
                    </p>

                  </div>

                </div>

                {/* ITEM */}
                <div className="flex items-start gap-5 rounded-2xl bg-[#f8faf7] p-5">

                  <div className="rounded-2xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700">
                    নামাজ
                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      জামাতে সালাত
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      মুসল্লিদের সাথে জামাতে নামাজ আদায়।
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* GALLERY */}
            <div className="mt-8 rounded-[35px] border border-emerald-100 bg-white p-8 shadow-sm">

              <h2 className="text-3xl font-bold text-gray-900">
                📸 ইভেন্ট গ্যালারি
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3">

                {(event.gallery || [
                  event.image,
                  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop",
                ]).map((img, i) => (

                  <div
                    key={i}
                    className="group overflow-hidden rounded-[24px]"
                  >

                    <img
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* ORGANIZER */}
            <div className="rounded-[35px] border border-emerald-100 bg-white p-8 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">

                  <Users className="h-7 w-7" />

                </div>

                <div>

                  <div className="text-sm text-gray-500">
                    আয়োজক
                  </div>

                  <div className="mt-1 text-xl font-semibold text-gray-900">
                    Dhaka Islamic Center
                  </div>

                </div>

              </div>

              {/* BUTTON */}
              <button className="mt-8 w-full rounded-2xl bg-emerald-600 py-4 font-medium text-white transition hover:bg-emerald-700">

                রেজিস্ট্রেশন করুন
              </button>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 py-4 font-medium transition hover:bg-gray-50">

                <Share2 className="h-4 w-4" />

                শেয়ার করুন
              </button>

            </div>

            {/* NOTES */}
            <div className="rounded-[35px] border border-emerald-100 bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white shadow-xl">

              <h3 className="text-2xl font-bold">
                গুরুত্বপূর্ণ নির্দেশনা
              </h3>

              <ul className="mt-6 space-y-4 leading-7 text-white/90">

                <li>
                  • সময়ের আগে উপস্থিত হওয়ার অনুরোধ।
                </li>

                <li>
                  • পরিবারদের জন্য আলাদা ব্যবস্থা রয়েছে।
                </li>

                <li>
                  • ফ্রি খাবার ও রিফ্রেশমেন্ট থাকবে।
                </li>

                <li>
                  • ইসলামিক পোশাক বজায় রাখুন।
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}