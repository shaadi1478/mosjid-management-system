import { useEffect, useState } from "react";
import { ArrowRight, Compass, Clock } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <section className="relative overflow-hidden bg-[#f8faf7] pt-36 pb-24">

      {/* Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundSize: "320px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm">

            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

            <span className="text-sm text-gray-900">
              আসসালামু আলাইকুম
            </span>

            <span className="text-sm text-gray-500">
              — শান্তি বর্ষিত হোক আপনার উপর
            </span>
          </div>

          {/* Heading */}
<h1 className="max-w-2xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-gray-900">

  একটি শান্তিময় ও{" "}

  {/* <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
    সূচনা এখানে
  </span> */}

  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
    {" "} আলোকিত জীবনের পথে
  </span>

</h1>
          {/* Description */}
          <p className="max-w-xl text-lg leading-relaxed text-gray-600">
            নামাজের সময়, ঘোষণা, দান, ইভেন্ট এবং কুরআন একাডেমি — সবকিছু
            এক জায়গায় সুন্দরভাবে উপস্থাপন করা হয়েছে।
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 h-12 text-sm font-medium text-white shadow-lg hover:scale-[1.02] transition-all duration-300">

              আজকের নামাজের সময়
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link to='/kibla' className="inline-flex items-center gap-2 rounded-xl border border-yellow-300 bg-white px-6 h-12 text-sm font-medium text-gray-800 shadow-sm hover:bg-yellow-50 transition-all duration-300">

              <Compass className="h-4 w-4 text-yellow-500" />
              কিবলা দিক
            </Link>
          </div>

          {/* Bottom Info */}
          <div className="flex items-center gap-6 pt-2 text-sm text-gray-500">

            <div>
              <div className="text-base text-gray-900">
                ১৫ শাওয়াল ১৪৪৬
              </div>
              <div className="text-xs">
                হিজরি তারিখ
              </div>
            </div>

            <div className="h-8 w-px bg-gray-200" />

            <div>
              <div className="font-medium text-gray-900">
                মক্কা · ২১.৪°N
              </div>
              <div className="text-xs">
                কিবলা দিক নির্দেশনা
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-8 rounded-full bg-emerald-500/10 blur-3xl" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl">

            <img
              src={heroImg}
              alt="মসজিদ"
              className="w-full object-cover"
            />
          </div>

          {/* Prayer Card */}
          <div className="absolute -bottom-6 left-4 sm:left-8 w-[270px] rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl backdrop-blur-xl">

            <div className="flex items-center gap-2 text-xs text-gray-500">

              <Clock className="h-3.5 w-3.5 text-emerald-500" />

              পরবর্তী নামাজ
            </div>

            <div className="mt-3 flex items-end justify-between">

              <div>
                <div className="text-2xl font-semibold text-gray-900">
                  আসর
                </div>

                <div className="text-lg text-emerald-500">
                  العصر
                </div>
              </div>

              <div className="text-right">

                {/* REALTIME CLOCK */}
                <div className="text-2xl font-bold text-gray-900">
                  {formattedTime}
                </div>

                <div className="text-[10px] uppercase tracking-widest text-gray-400">
                  লাইভ সময়
                </div>
              </div>
            </div>
          </div>

          {/* Live Badge */}
          <div className="absolute -top-4 right-4 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs text-gray-700 shadow-lg">

            <span className="font-medium text-yellow-500">
              ●
            </span>{" "}
            লাইভ · মাগরিব ২০:৩৬
          </div>

        </div>
      </div>
    </section>
  );
}