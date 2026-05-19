import {
  BookOpen,
  GraduationCap,
  Globe,
  Users,
  Clock3,
  Star,
  ArrowRight,
  BadgeCheck,
  PlayCircle,
  CheckCircle2,
  Sparkles,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const courses = [
  {
    title: "কুরআন শিক্ষা কোর্স",
    description:
      "সহীহ তাজবীদের সাথে কুরআন তিলাওয়াত শিখুন অভিজ্ঞ উস্তাদের মাধ্যমে।",
    duration: "৬ মাস",
    students: "১২০+ শিক্ষার্থী",
    level: "বিগিনার",
    icon: BookOpen,
  },

  {
    title: "আরবি ব্যাকরণ বেসিক",
    description:
      "কুরআনের আরবি বুঝার জন্য শক্তিশালী আরবি ভিত্তি গড়ে তুলুন।",
    duration: "৪ মাস",
    students: "৮০+ শিক্ষার্থী",
    level: "ইন্টারমিডিয়েট",
    icon: Globe,
  },

  {
    title: "হাদিস স্টাডিজ",
    description:
      "সহীহ হাদিস ব্যাখ্যা ও বাস্তব জীবনের শিক্ষা সহ অধ্যয়ন করুন।",
    duration: "৮ মাস",
    students: "৬৫+ শিক্ষার্থী",
    level: "অ্যাডভান্সড",
    icon: GraduationCap,
  },
];

export default function Academy() {

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f7faf8] to-white pt-24 md:pt-32 pb-20 md:pb-24">

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}
        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">

            <BadgeCheck className="h-4 w-4" />

            সার্টিফাইড ইসলামিক শিক্ষা
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">

            ইসলামিক
            <span className="block text-emerald-600">
              একাডেমি
            </span>

          </h1>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            কুরআন, তাজবীদ, আরবি, হাদিস ও ইসলামিক স্টাডিজ
            শিখুন অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে।
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="text-4xl font-bold text-gray-900">
                ৫০০+
              </div>

              <div className="mt-2 text-sm text-gray-500">
                সক্রিয় শিক্ষার্থী
              </div>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="text-4xl font-bold text-gray-900">
                ১২
              </div>

              <div className="mt-2 text-sm text-gray-500">
                অভিজ্ঞ শিক্ষক
              </div>

            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="text-4xl font-bold text-gray-900">
                ২৪/৭
              </div>

              <div className="mt-2 text-sm text-gray-500">
                অনলাইন সাপোর্ট
              </div>

            </div>

          </div>

        </div>

        {/* COURSES */}
        <section className="mt-20">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              📚 আমাদের কোর্সসমূহ
            </h2>

            <p className="mt-4 text-gray-500">
              সকল বয়সের শিক্ষার্থীদের জন্য সাজানো ইসলামিক কোর্স
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {courses.map((course, index) => {

              const Icon = course.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg">

                    <Icon className="h-8 w-8" />
                  </div>

                  {/* TITLE */}
                  <h2 className="mt-6 text-2xl font-bold leading-tight text-gray-900">
                    {course.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {course.description}
                  </p>

                  {/* INFO */}
                  <div className="mt-8 space-y-4">

                    <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">

                      <div className="flex items-center gap-2 text-sm text-gray-600">

                        <Clock3 className="h-4 w-4 text-emerald-600" />

                        কোর্স সময়কাল
                      </div>

                      <div className="font-semibold text-gray-900">
                        {course.duration}
                      </div>

                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">

                      <div className="flex items-center gap-2 text-sm text-gray-600">

                        <Users className="h-4 w-4 text-emerald-600" />

                        শিক্ষার্থী
                      </div>

                      <div className="font-semibold text-gray-900">
                        {course.students}
                      </div>

                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">

                      <div className="flex items-center gap-2 text-sm text-gray-600">

                        <Star className="h-4 w-4 text-emerald-600" />

                        লেভেল
                      </div>

                      <div className="font-semibold text-gray-900">
                        {course.level}
                      </div>

                    </div>

                  </div>

                  {/* BUTTON */}
                  <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:opacity-95">

                    ভর্তি হোন

                    <ArrowRight className="h-4 w-4" />
                  </button>

                </div>
              );
            })}

          </div>

        </section>

        {/* WHY CHOOSE */}
        <section className="mt-24 rounded-[36px] border border-gray-200 bg-white p-6 shadow-sm md:p-10">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">

                <Sparkles className="h-4 w-4" />

                কেন আমাদের একাডেমি?
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                সহীহ ইসলামিক শিক্ষার নির্ভরযোগ্য প্রতিষ্ঠান
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                আমাদের একাডেমিতে শিক্ষার্থীরা শান্তিপূর্ণ ও
                আধুনিক পরিবেশে ইসলামিক জ্ঞান অর্জন করতে পারে।
                এখানে রয়েছে অভিজ্ঞ শিক্ষক, স্টেপ-বাই-স্টেপ
                কারিকুলাম এবং অনলাইন-অফলাইন উভয় সুবিধা।
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">

                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      অভিজ্ঞ শিক্ষক
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-gray-600">
                      দক্ষ হাফেজ ও আলেমদের মাধ্যমে পাঠদান।
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      স্ট্রাকচার্ড কারিকুলাম
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-gray-600">
                      প্রতিটি কোর্স ধাপে ধাপে সাজানো।
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      সার্টিফিকেট প্রদান
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-gray-600">
                      কোর্স শেষে সার্টিফিকেট প্রদান করা হয়।
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="grid gap-5">

              <div className="rounded-3xl border border-gray-200 bg-[#f7faf8] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                  <MonitorSmartphone className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  অনলাইন ও অফলাইন ক্লাস
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  বিশ্বের যেকোনো স্থান থেকে অনলাইনে ক্লাস করার সুবিধা।
                </p>

              </div>

              <div className="rounded-3xl border border-gray-200 bg-[#f7faf8] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  নিরাপদ পরিবেশ
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  ইসলামিক মূল্যবোধ ভিত্তিক নিরাপদ শিক্ষার পরিবেশ।
                </p>

              </div>

              <div className="rounded-3xl border border-gray-200 bg-[#f7faf8] p-6">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                  <PlayCircle className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  লাইভ ক্লাস ও রেকর্ডিং
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  লাইভ ক্লাসের পাশাপাশি রেকর্ডেড ভিডিও সুবিধা।
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}