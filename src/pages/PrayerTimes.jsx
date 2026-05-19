import { useEffect, useState } from "react";

import {
  Sunrise,
  Sun,
  CloudSun,
  Sunset,
  Moon,
} from "lucide-react";

const prayers = [
  {
    name: "ফজর",
    arabic: "الفجر",
    time: "04:42",
    iqamah: "05:00",
    icon: Sunrise,
  },
  {
    name: "যোহর",
    arabic: "الظهر",
    time: "13:08",
    iqamah: "13:30",
    icon: Sun,
  },
  {
    name: "আসর",
    arabic: "العصر",
    time: "17:24",
    iqamah: "17:45",
    icon: CloudSun,
  },
  {
    name: "মাগরিব",
    arabic: "المغرب",
    time: "18:36",
    iqamah: "18:41",
    icon: Sunset,
  },
  {
    name: "এশা",
    arabic: "العشاء",
    time: "20:14",
    iqamah: "20:30",
    icon: Moon,
  },
];

export default function PrayerTimes() {

  // Live Current Time
  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  // Update Every Second
  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // Convert Prayer Time to Date
  const convertToDate = (time) => {

    const [hours, minutes] = time
      .split(":")
      .map(Number);

    const date = new Date();

    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);

    return date;
  };

  // Current Time
  const now = currentTime;

  // Find Current & Next Prayer
  let currentPrayer = null;
  let nextPrayer = null;

  for (let i = 0; i < prayers.length; i++) {

    const current = convertToDate(
      prayers[i].time
    );

    const next =
      i < prayers.length - 1
        ? convertToDate(prayers[i + 1].time)
        : convertToDate(prayers[0].time);

    if (now >= current && now < next) {

      currentPrayer = prayers[i];

      nextPrayer =
        i < prayers.length - 1
          ? prayers[i + 1]
          : prayers[0];

      break;
    }
  }

  // Before Fajr
  if (!currentPrayer) {

    currentPrayer =
      prayers[prayers.length - 1];

    nextPrayer = prayers[0];
  }

  // Next Prayer Countdown
  const nextTime = convertToDate(
    nextPrayer.time
  );

  // Tomorrow Fajr
  if (
    nextPrayer.name === "Fajr" &&
    now > nextTime
  ) {
    nextTime.setDate(
      nextTime.getDate() + 1
    );
  }

  const diff = nextTime - now;

  const hours = Math.floor(
    diff / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) /
      (1000 * 60)
  );

  const seconds = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

  return (
    <section
      id="prayer"
      className="relative bg-[#f8faf7] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
              Salah Times
            </div>

            <h2 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Today's Prayer Schedule
            </h2>
          </div>

          {/* Live Countdown */}
          <div className="rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-sm">

            <div className="text-xs uppercase tracking-widest text-gray-500">
              Next Prayer
            </div>

            <div className="mt-1 flex items-center gap-2">

              <span className="text-lg font-semibold text-emerald-600">
                {nextPrayer.name}
              </span>

              <span className="text-sm text-gray-500">
                in {hours}h {minutes}m {seconds}s
              </span>
            </div>
          </div>
        </div>

        {/* Prayer Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

          {prayers.map((prayer, index) => {

            const Icon = prayer.icon;

            const isActive =
              currentPrayer.name ===
              prayer.name;

            return (
              <div
                key={index}
                className={`relative rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isActive
                    ? "border-transparent bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-2xl"
                    : "border-gray-200 bg-white shadow-sm hover:shadow-xl"
                }`}
              >

                {/* Active Badge */}
                {isActive && (
                  <span className="absolute top-3 right-3 rounded-full bg-yellow-400 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-black">
                    Now
                  </span>
                )}

                {/* Icon */}
                <Icon
                  className={`h-5 w-5 ${
                    isActive
                      ? "text-white"
                      : "text-emerald-500"
                  }`}
                />

                {/* Prayer Info */}
                <div className="mt-4">

                  <div className="text-2xl font-semibold">
                    {prayer.name}
                  </div>

                  <div
                    className={`text-lg ${
                      isActive
                        ? "text-white/80"
                        : "text-gray-500"
                    }`}
                  >
                    {prayer.arabic}
                  </div>
                </div>

                {/* Prayer Time */}
                <div className="mt-6 flex items-baseline justify-between">

                  <span className="text-2xl font-bold tabular-nums">
                    {prayer.time}
                  </span>

                  <span
                    className={`text-xs ${
                      isActive
                        ? "text-white/70"
                        : "text-gray-500"
                    }`}
                  >
                    iqamah {prayer.iqamah}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}