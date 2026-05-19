import { useEffect, useState } from "react";

import {
    Sunrise,
    Sun,
    CloudSun,
    Sunset,
    Moon,
    Bell,
} from "lucide-react";

export default function Prayer() {
    const [now, setNow] = useState(new Date());
    const [prayers, setPrayers] = useState([]);

    // LIVE CLOCK
    useEffect(() => {
        const t = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(t);
    }, []);

    // REAL PRAYER API
    useEffect(() => {
        const fetchPrayer = async () => {
            const res = await fetch(
                "https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=2"
            );

            const data = await res.json();

            const t = data.data.timings;

            setPrayers([
                {
                    name: "Fajr",
                    time: t.Fajr,
                    icon: Sunrise,
                },
                {
                    name: "Dhuhr",
                    time: t.Dhuhr,
                    icon: Sun,
                },
                {
                    name: "Asr",
                    time: t.Asr,
                    icon: CloudSun,
                },
                {
                    name: "Maghrib",
                    time: t.Maghrib,
                    icon: Sunset,
                },
                {
                    name: "Isha",
                    time: t.Isha,
                    icon: Moon,
                },
            ]);
        };

        fetchPrayer();
    }, []);

    // LOADING
    if (!prayers.length) {
        return (
            <div className="min-h-screen flex items-center justify-center text-lg font-medium">
                Loading Prayer Times...
            </div>
        );
    }

    // CONVERT TIME
    const convertToDate = (time) => {
        const [h, m] = time.split(":").map(Number);

        const d = new Date();

        d.setHours(h, m, 0, 0);

        return d;
    };

    // ACTIVE PRAYER
    let activeIndex = 0;

    for (let i = 0; i < prayers.length; i++) {
        const current = convertToDate(
            prayers[i].time
        );

        const next =
            i < prayers.length - 1
                ? convertToDate(prayers[i + 1].time)
                : convertToDate(prayers[0].time);

        if (i === prayers.length - 1) {
            next.setDate(next.getDate() + 1);
        }

        if (now >= current && now < next) {
            activeIndex = i;
            break;
        }
    }

    // NEXT PRAYER
    const nextIndex =
        (activeIndex + 1) % prayers.length;

    const nextPrayer =
        prayers[nextIndex];

    let nextTime = convertToDate(
        nextPrayer.time
    );

    if (nextIndex === 0 && now > nextTime) {
        nextTime.setDate(
            nextTime.getDate() + 1
        );
    }

    const diff = nextTime - now;

    const hours = Math.floor(
        diff / 3600000
    );

    const minutes = Math.floor(
        (diff % 3600000) / 60000
    );

    const seconds = Math.floor(
        (diff % 60000) / 1000
    );

    // DAY PROGRESS
    const start = convertToDate("00:00");
    const end = convertToDate("23:59");

    const progress =
        ((now - start) / (end - start)) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8faf7] to-white pt-32 pb-24 px-4">

            {/* HERO */}
            <section className="text-center">

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

                    <span className="text-sm font-medium text-emerald-700">
                        Live Prayer System
                    </span>
                </div>

                <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                    Prayer Times
                </h1>

                <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-8">
                    Real-time Islamic prayer schedule with
                    daily duas, surahs & reminders.
                </p>

            </section>

            {/* NEXT PRAYER */}
            <section className="max-w-4xl mx-auto mt-12">

                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0f766e] via-emerald-600 to-green-600 p-10 text-white shadow-2xl">

                    <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10">

                        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/80">
                            <Bell className="w-4 h-4" />

                            Next Prayer
                        </div>

                        <h2 className="mt-4 text-4xl font-bold">
                            {nextPrayer.name}
                        </h2>

                        <div className="mt-5 flex gap-4">

                            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                                <div className="text-3xl font-bold">
                                    {hours}
                                </div>

                                <div className="text-xs uppercase text-white/70">
                                    Hours
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                                <div className="text-3xl font-bold">
                                    {minutes}
                                </div>

                                <div className="text-xs uppercase text-white/70">
                                    Minutes
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                                <div className="text-3xl font-bold">
                                    {seconds}
                                </div>

                                <div className="text-xs uppercase text-white/70">
                                    Seconds
                                </div>
                            </div>

                        </div>

                        {/* PROGRESS */}
                        <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/20">
                            <div
                                className="h-full rounded-full bg-white"
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* PRAYER GRID */}
            <section className="max-w-6xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-5 gap-5">

                {prayers.map((p, i) => {
                    const Icon = p.icon;

                    const isActive =
                        i === activeIndex;

                    return (
                        <div
                            key={i}
                            className={`group relative overflow-hidden rounded-[28px] p-[1px] transition-all duration-300 hover:-translate-y-1 ${isActive
                                    ? "bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 shadow-[0_20px_60px_rgba(16,185,129,0.25)]"
                                    : "bg-gradient-to-br from-gray-200 to-gray-100 hover:from-emerald-200 hover:to-green-100"
                                }`}
                        >

                            <div
                                className={`h-full rounded-[27px] p-6 backdrop-blur-xl ${isActive
                                        ? "bg-emerald-500 text-white"
                                        : "bg-white/90"
                                    }`}
                            >

                                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/10 blur-3xl" />

                                <Icon
                                    className={`mx-auto w-6 h-6 ${isActive
                                            ? "text-white"
                                            : "text-emerald-600"
                                        }`}
                                />

                                <h2 className="mt-4 text-center text-lg font-semibold">
                                    {p.name}
                                </h2>

                                <p
                                    className={`text-center text-xs mt-1 ${isActive
                                            ? "text-white/70"
                                            : "text-gray-400"
                                        }`}
                                >
                                    Today
                                </p>

                                <div
                                    className={`mt-4 text-center text-2xl font-bold tracking-tight ${isActive
                                            ? "text-white"
                                            : "text-emerald-600"
                                        }`}
                                >
                                    {p.time}
                                </div>

                                {isActive && (
                                    <div className="mt-4 flex justify-center">
                                        <span className="rounded-full bg-white text-emerald-600 px-3 py-1 text-[11px] font-semibold tracking-wider">
                                            CURRENT SALAH
                                        </span>
                                    </div>
                                )}

                            </div>
                        </div>
                    );
                })}
            </section>

            {/* SHORT SURAH */}
            <section className="max-w-6xl mx-auto mt-20">

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        📖 ছোট সূরা সমূহ
                    </h2>

                    <p className="mt-3 text-gray-500">
                        প্রতিদিনের নামাজে পড়ার জন্য গুরুত্বপূর্ণ সূরা
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    {/* SURAH */}
                    <div className="rounded-[30px] border border-emerald-100 bg-gradient-to-br from-white to-[#f7fbf8] p-6 shadow-sm hover:shadow-xl transition duration-300">

                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 font-bold">
                            ১
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            সূরা ইখলাস
                        </h3>

                        <p className="text-right text-xl mt-6 leading-10">
                            قُلْ هُوَ اللّٰهُ أَحَدٌ
                        </p>

                        <p className="mt-5 text-gray-600 leading-8">
                            বলুন, তিনি আল্লাহ, এক ও অদ্বিতীয়।
                        </p>

                    </div>

                    {/* SURAH */}
                    <div className="rounded-[30px] border border-emerald-100 bg-gradient-to-br from-white to-[#f7fbf8] p-6 shadow-sm hover:shadow-xl transition duration-300">

                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 font-bold">
                            ২
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            সূরা ফালাক
                        </h3>

                        <p className="text-right text-xl mt-6 leading-10">
                            قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
                        </p>

                        <p className="mt-5 text-gray-600 leading-8">
                            আমি আশ্রয় চাই প্রভাতের রবের কাছে।
                        </p>

                    </div>

                    {/* SURAH */}
                    <div className="rounded-[30px] border border-emerald-100 bg-gradient-to-br from-white to-[#f7fbf8] p-6 shadow-sm hover:shadow-xl transition duration-300">

                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 font-bold">
                            ৩
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            সূরা নাস
                        </h3>

                        <p className="text-right text-xl mt-6 leading-10">
                            قُلْ أَعُوذُ بِرَبِّ النَّاسِ
                        </p>

                        <p className="mt-5 text-gray-600 leading-8">
                            আমি মানুষের রবের নিকট আশ্রয় চাই।
                        </p>

                    </div>

                </div>

            </section>

            {/* ISLAMIC REMINDER */}
            <section className="max-w-6xl mx-auto mt-20">

                <div className="relative overflow-hidden bg-gradient-to-r from-[#0f766e] via-emerald-600 to-green-600 rounded-[40px] p-12 text-white text-center shadow-2xl">

                    {/* GLOW */}
                    <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10">

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                            🌙 Daily Islamic Reminder
                        </div>

                        <h2 className="mt-6 text-4xl font-bold leading-tight">
                            “নিশ্চয়ই নামাজ অশ্লীলতা
                            ও মন্দ কাজ থেকে বিরত রাখে”
                        </h2>

                        <p className="mt-5 text-lg text-white/80">
                            — সূরা আনকাবুত ২৯:৪৫
                        </p>

                    </div>

                </div>

            </section>

            {/* DAILY DUA */}
            <section className="max-w-6xl mx-auto mt-20">

                <div className="text-center">
                    <h2 className="text-3xl font-bold">
                        🕌 গুরুত্বপূর্ণ দোয়া
                    </h2>

                    <p className="mt-3 text-gray-500">
                        প্রতিদিনের প্রয়োজনীয় ইসলামিক দোয়া
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    <div className="rounded-[30px] border border-emerald-100 bg-gradient-to-b from-white to-[#f8faf7] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                        <h3 className="font-semibold text-emerald-700">
                            ঘুম থেকে ওঠার দোয়া
                        </h3>

                        <p className="mt-5 text-right text-xl leading-10">
                            اَلْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا
                        </p>

                        <p className="mt-5 text-gray-600 leading-8">
                            সমস্ত প্রশংসা আল্লাহর জন্য যিনি
                            মৃত্যুর ন্যায় ঘুমের পর আবার
                            আমাদের জীবিত করেছেন।
                        </p>

                    </div>

                    <div className="rounded-[30px] border border-emerald-100 bg-gradient-to-b from-white to-[#f8faf7] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                        <h3 className="font-semibold text-emerald-700">
                            খাবার শুরুর দোয়া
                        </h3>

                        <p className="mt-5 text-right text-3xl">
                            بِسْمِ اللّٰهِ
                        </p>

                        <p className="mt-5 text-gray-600 leading-8">
                            আল্লাহর নামে শুরু করছি।
                        </p>

                    </div>

                </div>
            </section>

            {/* ISLAMIC QUOTES */}
            <section className="max-w-6xl mx-auto mt-20">

                <div className="text-center">
                    <h2 className="text-3xl font-bold">
                        🌙 ইসলামিক উক্তি
                    </h2>

                    <p className="mt-3 text-gray-500">
                        হৃদয়কে প্রশান্ত করে এমন কিছু বাণী
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-white/90 backdrop-blur-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                        <div className="text-5xl text-emerald-500">
                            ❝
                        </div>

                        <p className="mt-5 text-gray-700 leading-8">
                            নিশ্চয়ই আল্লাহ ধৈর্যশীলদের
                            সাথে আছেন।
                        </p>

                        <div className="mt-6 text-sm font-medium text-emerald-600">
                            — সূরা বাকারা ২:১৫৩
                        </div>

                    </div>

                    <div className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-white/90 backdrop-blur-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                        <div className="text-5xl text-emerald-500">
                            ❝
                        </div>

                        <p className="mt-5 text-gray-700 leading-8">
                            আল্লাহর স্মরণেই হৃদয়ের
                            প্রশান্তি।
                        </p>

                        <div className="mt-6 text-sm font-medium text-emerald-600">
                            — সূরা রা'দ ১৩:২৮
                        </div>

                    </div>

                    <div className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-white/90 backdrop-blur-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                        <div className="text-5xl text-emerald-500">
                            ❝
                        </div>

                        <p className="mt-5 text-gray-700 leading-8">
                            সবচেয়ে উত্তম মানুষ সেই,
                            যে মানুষের উপকার করে।
                        </p>

                        <div className="mt-6 text-sm font-medium text-emerald-600">
                            — হাদিস শরীফ
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
}