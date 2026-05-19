import { useState } from "react";

import {
  BookOpen,
  GraduationCap,
  Users,
  Sparkles,
  X,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";

export default function AcademySection() {

  const [open, setOpen] = useState(false);

  const [selectedTeacher, setSelectedTeacher] =
    useState(null);

  const [selectedCourse, setSelectedCourse] =
    useState(null);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    level: "",
    address: "",
    message: "",
  });

  const API_URL =
    "https://script.google.com/macros/s/AKfycbylHjHz-Oco0x_Ob0WD7lD3kGVrEvoXyOqw93JeQ1lCHT43u0XS6PSIoNl3Sca8gQCy/exec";

  const courses = [
    "নূরানী কায়দা",
    "কুরআন তিলাওয়াত",
    "তাজবীদ কোর্স",
    "হিফজ প্রোগ্রাম",
    "ফিকহ বেসিক",
    "হাদিস শিক্ষা",
  ];

  const teachers = [
    {
      name: "শাইখ আব্দুল্লাহ রহমান",
      role: "কুরআন ও তাজবীদ শিক্ষক",
      students: 48,
      icon: BookOpen,
    },

    {
      name: "উস্তাযা ফাতিমা নূর",
      role: "হিফজ প্রোগ্রাম",
      students: 32,
      icon: GraduationCap,
    },

    {
      name: "মুফতি ইব্রাহিম খান",
      role: "ফিকহ ও হাদিস",
      students: 26,
      icon: Sparkles,
    },
  ];

  // OPEN MODAL
  const handleEnroll = (teacher) => {

    setSelectedTeacher(teacher);

    setSelectedCourse(null);

    setOpen(true);

    setSuccess(false);

    setForm({
      name: "",
      phone: "",
      email: "",
      age: "",
      level: "",
      address: "",
      message: "",
    });
  };

  // CHANGE
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async () => {

    if (
      !form.name ||
      !form.phone ||
      !selectedCourse
    ) {
      alert(
        "নাম, ফোন নাম্বার এবং কোর্স নির্বাচন আবশ্যক"
      );

      return;
    }

    try {

      setLoading(true);

      const res = await fetch(API_URL, {
        method: "POST",

        body: JSON.stringify({
          type: "enroll",

          teacher: selectedTeacher?.name,

          course: selectedCourse,

          data: form,
        }),
      });

      const result = await res.json();

      if (result.success) {

        setSuccess(true);

        setTimeout(() => {

          setOpen(false);

          setSuccess(false);

        }, 2500);

      } else {

        alert("ফর্ম সাবমিট হয়নি");

      }

    } catch (error) {

      console.log(error);

      alert("নেটওয়ার্ক সমস্যা হয়েছে");

    } finally {

      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faf7] to-white py-28">

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-2 shadow-sm">

            <Sparkles className="h-4 w-4 text-emerald-600" />

            <span className="text-sm font-medium text-emerald-700">
              ইসলামিক একাডেমি
            </span>

          </div>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">

            কুরআন শিক্ষা
            <span className="block text-emerald-600">
              শুরু করুন আজই
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            অভিজ্ঞ উস্তাদ ও উস্তাযাদের মাধ্যমে
            কুরআন, তাজবীদ, হিফজ ও ইসলামিক
            শিক্ষার সুবর্ণ সুযোগ।

          </p>

        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ৫০০+
            </div>

            <div className="mt-2 text-sm text-gray-500">
              শিক্ষার্থী
            </div>

          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ১২
            </div>

            <div className="mt-2 text-sm text-gray-500">
              অভিজ্ঞ শিক্ষক
            </div>

          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ২৪/৭
            </div>

            <div className="mt-2 text-sm text-gray-500">
              অনলাইন সাপোর্ট
            </div>

          </div>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

            <div className="text-4xl font-bold text-gray-900">
              ১০০%
            </div>

            <div className="mt-2 text-sm text-gray-500">
              ইসলামিক পরিবেশ
            </div>

          </div>

        </div>

        {/* TEACHERS */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {teachers.map((teacher, index) => {

            const Icon = teacher.icon;

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* ICON */}
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">

                  <Icon className="h-8 w-8" />

                </div>

                {/* TEXT */}
                <h3 className="mt-7 text-2xl font-bold text-gray-900">
                  {teacher.name}
                </h3>

                <p className="mt-2 text-emerald-600">
                  {teacher.role}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">

                  <Users className="h-4 w-4" />

                  {teacher.students} জন শিক্ষার্থী

                </div>

                {/* BTN */}
                <button
                  onClick={() =>
                    handleEnroll(teacher)
                  }
                  className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >

                  ভর্তি হোন

                  <ArrowRight className="h-4 w-4" />

                </button>

              </div>
            );
          })}

        </div>
      </div>

      {/* MODAL */}
      {open && (

        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">

          <div className="flex min-h-screen items-center justify-center p-4">

            <div className="relative w-full max-w-2xl rounded-[36px] bg-white p-6 shadow-2xl md:p-10">

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
              >

                <X className="h-5 w-5" />

              </button>

              {/* HEADER */}
              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">

                  📘 ভর্তি ফর্ম

                </div>

                <h2 className="mt-5 text-3xl font-bold text-gray-900">

                  {selectedTeacher?.name}

                </h2>

                <p className="mt-3 text-gray-500">

                  আপনার তথ্য পূরণ করে কোর্সে ভর্তি সম্পন্ন করুন।

                </p>

              </div>

              {/* COURSE */}
              <div className="mt-8">

                <p className="mb-3 text-sm font-medium text-gray-700">
                  কোর্স নির্বাচন করুন
                </p>

                <div className="flex flex-wrap gap-3">

                  {courses.map((course, index) => (

                    <button
                      key={index}
                      onClick={() =>
                        setSelectedCourse(course)
                      }
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        selectedCourse === course
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-emerald-400"
                      }`}
                    >

                      {course}

                    </button>
                  ))}

                </div>

              </div>

              {/* SUCCESS */}
              {success ? (

                <div className="py-16 text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">

                    <CheckCircle2 className="h-10 w-10" />

                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-gray-900">
                    সফলভাবে সাবমিট হয়েছে
                  </h3>

                  <p className="mt-3 text-gray-500">
                    খুব শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।
                  </p>

                </div>

              ) : (

                <div className="mt-8 grid gap-4">

                  <input
                    name="name"
                    placeholder="পূর্ণ নাম *"
                    onChange={handleChange}
                    className="h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 outline-none transition focus:border-emerald-500"
                  />

                  <input
                    name="phone"
                    placeholder="ফোন নাম্বার *"
                    onChange={handleChange}
                    className="h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 outline-none transition focus:border-emerald-500"
                  />

                  <input
                    name="email"
                    placeholder="ইমেইল"
                    onChange={handleChange}
                    className="h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 outline-none transition focus:border-emerald-500"
                  />

                  <div className="grid gap-4 md:grid-cols-2">

                    <input
                      name="age"
                      placeholder="বয়স"
                      onChange={handleChange}
                      className="h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 outline-none transition focus:border-emerald-500"
                    />

                    <input
                      name="level"
                      placeholder="বর্তমান লেভেল"
                      onChange={handleChange}
                      className="h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 outline-none transition focus:border-emerald-500"
                    />

                  </div>

                  <input
                    name="address"
                    placeholder="ঠিকানা"
                    onChange={handleChange}
                    className="h-14 rounded-2xl border border-gray-200 bg-[#fafafa] px-5 outline-none transition focus:border-emerald-500"
                  />

                  <textarea
                    name="message"
                    placeholder="অতিরিক্ত বার্তা (ঐচ্ছিক)"
                    onChange={handleChange}
                    rows={4}
                    className="rounded-2xl border border-gray-200 bg-[#fafafa] p-5 outline-none transition focus:border-emerald-500"
                  />

                  {/* BTN */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 disabled:opacity-60"
                  >

                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        সাবমিট হচ্ছে...
                      </>
                    ) : (
                      <>
                        ভর্তি সম্পন্ন করুন
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}

                  </button>

                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}