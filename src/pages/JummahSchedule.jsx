import {
  CalendarDays,
  Clock3,
  MapPin,
  Mic2,
  Users,
  Sparkles,
  Moon,
  BookOpen,
  Bell,
  Car,
  Coffee,
  ShieldCheck,
} from "lucide-react";

export default function JummahSchedule() {

  const schedules = [
    {
      khutbah: "1st Khutbah",
      imam: "Mufti Abdullah Al Mamun",
      time: "1:15 PM",
      location: "Main Prayer Hall",
    },

    {
      khutbah: "2nd Khutbah",
      imam: "Hafiz Mahmud Hasan",
      time: "2:00 PM",
      location: "Main Prayer Hall",
    },

    {
      khutbah: "Ladies Jummah Bayan",
      imam: "Islamic Scholar Team",
      time: "12:30 PM",
      location: "Community Center",
    },
  ];

  const reminders = [
    "আগে আগে মসজিদে আসুন",
    "পরিষ্কার পোশাক পরিধান করুন",
    "সুরা কাহফ তিলাওয়াত করুন",
    "দরুদ শরীফ বেশি বেশি পড়ুন",
    "মোবাইল সাইলেন্ট রাখুন",
    "অজু করে মসজিদে প্রবেশ করুন",
  ];

  const facilities = [
    {
      icon: Car,
      title: "Parking Area",
      desc:
        "মুসল্লিদের জন্য নিরাপদ পার্কিং সুবিধা রয়েছে।",
    },

    {
      icon: Coffee,
      title: "Free Water",
      desc:
        "নামাজের পরে ঠান্ডা পানি ও হালকা আপ্যায়নের ব্যবস্থা।",
    },

    {
      icon: ShieldCheck,
      title: "Security",
      desc:
        "মসজিদে নিরাপত্তা ও সিসিটিভি পর্যবেক্ষণ চালু রয়েছে।",
    },
  ];

  const khutbahTopics = [
    "তাকওয়া ও আল্লাহভীতি",
    "রমজানের প্রস্তুতি",
    "ইসলামে ধৈর্যের গুরুত্ব",
    "নামাজের গুরুত্ব",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf7] to-white pt-32 pb-24 overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-medium text-emerald-700 shadow-sm">

            <Sparkles className="h-4 w-4" />

            Friday Prayer Schedule
          </div>

          <h1 className="mt-7 text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">

            Jummah
            <span className="block text-emerald-600">
              Schedule
            </span>

          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            জুম্মার নামাজ, খুতবা, ইসলামিক আলোচনা,
            বিশেষ আয়োজন ও মুসল্লিদের জন্য প্রয়োজনীয় তথ্য।
          </p>

        </section>

        {/* TOP INFO */}
        <section className="mt-16 grid gap-5 md:grid-cols-4">

          <div className="rounded-[30px] border border-emerald-100 bg-white p-7 shadow-sm">

            <CalendarDays className="h-7 w-7 text-emerald-600" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Every Friday
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              প্রতি শুক্রবার বিশেষ জুম্মাহ আয়োজন।
            </p>

          </div>

          <div className="rounded-[30px] border border-emerald-100 bg-white p-7 shadow-sm">

            <Clock3 className="h-7 w-7 text-emerald-600" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              1:15 PM
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              প্রথম জামাত শুরু হবে দুপুর ১:১৫ মিনিটে।
            </p>

          </div>

          <div className="rounded-[30px] border border-emerald-100 bg-white p-7 shadow-sm">

            <Users className="h-7 w-7 text-emerald-600" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              2000+
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              প্রতি সপ্তাহে মুসল্লিদের উপস্থিতি।
            </p>

          </div>

          <div className="rounded-[30px] border border-emerald-100 bg-white p-7 shadow-sm">

            <Moon className="h-7 w-7 text-emerald-600" />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Weekly Bayan
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              জুম্মার আগে ইসলামিক আলোচনা অনুষ্ঠিত হয়।
            </p>

          </div>

        </section>

        {/* SCHEDULE */}
        <section className="mt-24">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

              <Mic2 className="h-6 w-6" />
            </div>

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                Jummah Sessions
              </h2>

              <p className="mt-1 text-gray-500">
                জুম্মার খুতবা ও নামাজের সময়সূচী
              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-6">

            {schedules.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-emerald-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <div className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-700">
                      {item.khutbah}
                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-gray-900">
                      {item.imam}
                    </h3>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div className="flex items-center gap-3 rounded-2xl bg-[#f8faf7] px-5 py-4">

                      <Clock3 className="h-5 w-5 text-emerald-600" />

                      <div>

                        <div className="text-xs text-gray-500">
                          Time
                        </div>

                        <div className="font-semibold text-gray-900">
                          {item.time}
                        </div>

                      </div>

                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-[#f8faf7] px-5 py-4">

                      <MapPin className="h-5 w-5 text-emerald-600" />

                      <div>

                        <div className="text-xs text-gray-500">
                          Location
                        </div>

                        <div className="font-semibold text-gray-900">
                          {item.location}
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* KHUTBA TOPICS */}
        <section className="mt-24">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

              <BookOpen className="h-6 w-6" />
            </div>

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                Weekly Khutbah Topics
              </h2>

              <p className="mt-1 text-gray-500">
                প্রতি সপ্তাহের ইসলামিক আলোচনার বিষয়সমূহ
              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {khutbahTopics.map((topic, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <BookOpen className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {topic}
                </h3>

              </div>
            ))}

          </div>

        </section>

        {/* FACILITIES */}
        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Mosque Facilities
            </h2>

            <p className="mt-3 text-gray-500">
              মুসল্লিদের জন্য মসজিদের বিশেষ সুবিধাসমূহ
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {facilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* REMINDERS */}
        <section className="mt-24">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 to-green-600 p-10 md:p-16 text-white shadow-2xl">

            <div className="max-w-5xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">

                <Bell className="h-4 w-4" />

                Friday Sunnah
              </div>

              <h2 className="mt-7 text-4xl md:text-5xl font-bold leading-tight">
                জুম্মার দিনের গুরুত্বপূর্ণ আমল
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">

                {reminders.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}