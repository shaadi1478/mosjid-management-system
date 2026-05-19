import { useState } from "react";

import {
  Calendar,
  MapPin,
  Bell,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const events = [
  {
    title: "Tafsir Halaqa",
    date: "শনিবার, ২৩ মে",
    time: "মাগরিবের পরে",
    location: "মূল হলরুম",
  },
  {
    title: "Youth Quran Competition",
    date: "রবিবার, ৩১ মে",
    time: "সকাল ১০:০০",
    location: "মাদরাসা ভবন",
  },
  {
    title: "Community Iftar",
    date: "রমজান মাসজুড়ে",
    time: "মাগরিব",
    location: "মসজিদ প্রাঙ্গণ",
  },
  {
    title: "Islamic Seminar",
    date: "শুক্রবার, ১২ জুন",
    time: "বাদ এশা",
    location: "কমিউনিটি সেন্টার",
  },
  {
    title: "Hifz Graduation",
    date: "সোমবার, ১৫ জুন",
    time: "বিকাল ৫টা",
    location: "অডিটোরিয়াম",
  },
  {
    title: "Dua Mahfil",
    date: "বৃহস্পতিবার, ১৮ জুন",
    time: "বাদ মাগরিব",
    location: "মেইন হল",
  },
];

const notices = [
  {
    category: "ইভেন্ট",
    title: "জুমআর খুতবা প্রদান করবেন শাইখ আব্দুল্লাহ",
    time: "শুক্রবার, ১:১৫ PM",
  },
  {
    category: "রমজান",
    title: "রমজান ইফতার প্রোগ্রাম রেজিস্ট্রেশন চালু হয়েছে",
    time: "১২ দিন বাকি",
  },
  {
    category: "জানাজা",
    title: "আজ মাগরিবের পরে জানাজার নামাজ অনুষ্ঠিত হবে",
    time: "আজ",
  },
];

export default function EventsSection() {
  const [open, setOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [showAll, setShowAll] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      message: "",
    });

  // প্রথমে ৪টা card show করবে
  const visibleEvents = showAll
    ? events
    : events.slice(0, 4);

  // OPEN MODAL
  const handleOpen = (event) => {
    setSelectedEvent(event);

    setOpen(true);

    setSuccess(false);

    setErrors({});

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "আপনার নাম লিখুন";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "মোবাইল নাম্বার লিখুন";
    } else if (
      !/^(\+8801|01)[3-9]\d{8}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone =
        "সঠিক বাংলাদেশি নাম্বার দিন";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  // SUBMIT
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      const payload = {
        event: selectedEvent.title,
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbxfI2mUPt7eeVao1G1yr7PAldAVt99V3AbCARcO1ocHxxw1-3hkfQ-WNzHtj8Na4U_p/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      setSuccess(true);

      setFormData({
        name: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setOpen(false);

        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error);

      alert("কিছু সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="events"
        className="bg-white py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <div className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              ইভেন্টসমূহ
            </div>

            <h2 className="mt-2 mb-8 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              আসন্ন প্রোগ্রাম
            </h2>

            <div className="space-y-5">

              {visibleEvents.map(
                (event, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">

                      {/* ICON */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg">

                        <Calendar className="h-6 w-6" />
                      </div>

                      {/* CONTENT */}
                      <div className="min-w-0 flex-1">

                        <h3 className="text-2xl font-semibold text-gray-900">
                          {event.title}
                        </h3>

                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">

                          <span>
                            {event.date}
                          </span>

                          <span>•</span>

                          <span>
                            {event.time}
                          </span>

                          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">

                            <MapPin className="h-3 w-3" />

                            {event.location}
                          </span>
                        </div>
                      </div>

                      {/* BUTTON */}
                      <button
                        onClick={() =>
                          handleOpen(event)
                        }
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        রেজিস্ট্রেশন
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* SHOW MORE BUTTON */}
            {events.length > 4 && (
              <div className="mt-8 flex justify-center">

                <button
                  onClick={() =>
                    setShowAll(!showAll)
                  }
                  className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >

                  {showAll ? (
                    <>
                      কম দেখুন
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      সব ইভেন্ট দেখুন
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="text-xs font-medium uppercase tracking-[0.2em] text-amber-500">
              নোটিশ
            </div>

            <h2 className="mt-2 mb-8 text-4xl font-semibold tracking-tight text-gray-900">
              ঘোষণাসমূহ
            </h2>

            <div className="space-y-4">

              {notices.map(
                (notice, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex items-start gap-3">

                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-500">

                        <Bell className="h-4 w-4" />
                      </div>

                      <div className="flex-1">

                        <div className="text-[10px] font-medium uppercase tracking-wider text-amber-500">
                          {notice.category}
                        </div>

                        <div className="mt-1 text-sm font-semibold leading-relaxed text-gray-900">
                          {notice.title}
                        </div>

                        <div className="mt-2 text-xs text-gray-500">
                          {notice.time}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">

          <div className="relative w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-8 text-center">

              <div className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
                ইভেন্ট রেজিস্ট্রেশন
              </div>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
                {selectedEvent?.title}
              </h3>
            </div>

            {success ? (
              <div className="rounded-2xl bg-emerald-50 p-6 text-center">

                <h4 className="text-2xl font-semibold text-emerald-600">
                  সফলভাবে রেজিস্ট্রেশন হয়েছে 🎉
                </h4>
              </div>
            ) : (
              <div className="space-y-5">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="আপনার নাম"
                  className="h-12 w-full rounded-2xl border border-gray-200 bg-[#f9fafb] px-4"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  className="h-12 w-full rounded-2xl border border-gray-200 bg-[#f9fafb] px-4"
                />

                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="আপনার বার্তা লিখুন"
                  className="w-full rounded-2xl border border-gray-200 bg-[#f9fafb] px-4 py-3"
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-medium text-white shadow-lg"
                >
                  {loading
                    ? "সাবমিট হচ্ছে..."
                    : "রেজিস্ট্রেশন সম্পন্ন করুন"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}