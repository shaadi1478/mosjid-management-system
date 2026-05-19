import {
  Moon,
  Clock3,
  CalendarDays,
  Star,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

export default function RamadanUpdates() {

  const updates = [
    {
      title: "রমজান শুরু",
      date: "02 March 2026",
      desc:
        "পবিত্র মাহে রমজান শুরু হয়েছে। সকল মুসল্লিদের সেহরি ও ইফতারের সময় মেনে চলার অনুরোধ করা হচ্ছে।",
    },

    {
      title: "তারাবিহ নামাজ",
      date: "প্রতিদিন রাত ৮:১৫",
      desc:
        "প্রতিদিন এশার নামাজের পর ২০ রাকাত তারাবিহ অনুষ্ঠিত হবে।",
    },

    {
      title: "ইফতার মাহফিল",
      date: "প্রতিদিন মাগরিবের আগে",
      desc:
        "মসজিদে সকল রোজাদারদের জন্য ফ্রি ইফতারের ব্যবস্থা রয়েছে।",
    },

    {
      title: "শবে কদর আয়োজন",
      date: "রমজানের শেষ ১০ রাত",
      desc:
        "বিশেষ তাহাজ্জুদ, কুরআন তিলাওয়াত ও দোয়ার আয়োজন থাকবে।",
    },
  ];

  const duas = [
    {
      title: "রোজা রাখার নিয়ত",
      arabic:
        "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
      bangla:
        "আমি আগামীকালের রমজানের রোজা রাখার নিয়ত করলাম।",
    },

    {
      title: "ইফতারের দোয়া",
      arabic:
        "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
      bangla:
        "হে আল্লাহ! আমি আপনার জন্য রোজা রেখেছি এবং আপনার দেওয়া রিযিক দ্বারা ইফতার করছি।",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf7] to-white pt-32 pb-24 overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            <Moon className="h-4 w-4" />
            Ramadan Kareem
          </div>

          <h1 className="mt-7 text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Ramadan
            <span className="block text-emerald-600">
              Updates & Schedule
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            পবিত্র মাহে রমজানের সকল আপডেট,
            তারাবিহ, ইফতার ও ইসলামিক আয়োজনের তথ্য।
          </p>

        </section>

        {/* STATS */}
        <section className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
            <Clock3 className="h-7 w-7 text-emerald-600" />

            <div className="mt-4 text-3xl font-bold text-gray-900">
              30
            </div>

            <div className="mt-1 text-sm text-gray-500">
              Days of Ramadan
            </div>
          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
            <Moon className="h-7 w-7 text-emerald-600" />

            <div className="mt-4 text-3xl font-bold text-gray-900">
              20
            </div>

            <div className="mt-1 text-sm text-gray-500">
              Taraweeh Rakats
            </div>
          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
            <HeartHandshake className="h-7 w-7 text-emerald-600" />

            <div className="mt-4 text-3xl font-bold text-gray-900">
              Free
            </div>

            <div className="mt-1 text-sm text-gray-500">
              Community Iftar
            </div>
          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
            <Sparkles className="h-7 w-7 text-emerald-600" />

            <div className="mt-4 text-3xl font-bold text-gray-900">
              Last 10
            </div>

            <div className="mt-1 text-sm text-gray-500">
              Nights Special
            </div>
          </div>

        </section>

        {/* UPDATES */}
        <section className="mt-24">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <CalendarDays className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Ramadan Updates
              </h2>

              <p className="mt-1 text-gray-500">
                মসজিদের রমজান সম্পর্কিত গুরুত্বপূর্ণ তথ্য
              </p>
            </div>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {updates.map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-emerald-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-700">
                  <Star className="h-3.5 w-3.5" />
                  Ramadan Update
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-3 text-sm font-medium text-emerald-600">
                  {item.date}
                </div>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* DUA SECTION */}
        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              🌙 Ramadan Dua
            </h2>

            <p className="mt-3 text-gray-500">
              রমজানের গুরুত্বপূর্ণ দোয়া সমূহ
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {duas.map((dua, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm"
              >

                <div className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-700">
                  {dua.title}
                </div>

                <p className="mt-8 text-right text-2xl leading-[60px] text-gray-900">
                  {dua.arabic}
                </p>

                <p className="mt-8 leading-8 text-gray-600">
                  {dua.bangla}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* REMINDER */}
        <section className="mt-24">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 to-green-600 p-10 md:p-16 text-white shadow-2xl">

            <div className="max-w-4xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                <Moon className="h-4 w-4" />
                Islamic Reminder
              </div>

              <h2 className="mt-7 text-4xl md:text-5xl font-bold leading-tight">
                “রমজান ধৈর্য ও রহমতের মাস”
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">
                এই মাসে বেশি বেশি কুরআন তিলাওয়াত,
                দান-সদকা, নামাজ ও দোয়ার মাধ্যমে
                আল্লাহর নৈকট্য অর্জনের চেষ্টা করুন।
              </p>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}