import { useEffect, useRef, useState } from "react";

/* Counter Hook */
function useCountUp(end, trigger, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, trigger, duration]);

  return value;
}

export default function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  /* Scroll trigger */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  /* Counters */
  const members = useCountUp(2400, inView);
  const salah = useCountUp(5, inView);
  const students = useCountUp(180, inView);
  const volunteers = useCountUp(65, inView);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* GREEN GLASS CARD (YOUR IMAGE STYLE) */}
        <div
          ref={ref}
          className="relative rounded-3xl p-10 sm:p-14 overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500"
        >

          {/* glass overlay */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl"></div>

          {/* pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "url('/assets/pattern-WWIbFu9T.png')",
              backgroundSize: "280px",
            }}
          />

          {/* glow */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          {/* content */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 text-white text-center">

            <div>
              <div className="font-display text-4xl sm:text-5xl font-semibold">
                {members.toLocaleString()}+
              </div>
              <div className="text-sm opacity-80 mt-2">
                Community Members
              </div>
            </div>

            <div>
              <div className="font-display text-4xl sm:text-5xl font-semibold">
                {salah}×
              </div>
              <div className="text-sm opacity-80 mt-2">
                Daily Salah
              </div>
            </div>

            <div>
              <div className="font-display text-4xl sm:text-5xl font-semibold">
                {students}
              </div>
              <div className="text-sm opacity-80 mt-2">
                Quran Students
              </div>
            </div>

            <div>
              <div className="font-display text-4xl sm:text-5xl font-semibold">
                {volunteers}
              </div>
              <div className="text-sm opacity-80 mt-2">
                Active Volunteers
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}