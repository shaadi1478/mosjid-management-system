import {
  HeartHandshake,
  HandCoins,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MoonStar,
  Heart,
  Wallet,
  Users,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Sadaqah() {

  // COUNTER HOOK
  const useCounter = (end, duration = 2000) => {

    const [count, setCount] = useState(0);

    useEffect(() => {

      let start = 0;

      const increment = end / (duration / 16);

      const timer = setInterval(() => {

        start += increment;

        if (start >= end) {

          setCount(end);

          clearInterval(timer);

        } else {

          setCount(Math.floor(start));

        }

      }, 16);

      return () => clearInterval(timer);

    }, [end, duration]);

    return count;
  };

  // COUNTERS
  const families = useCounter(5000);

  const donors = useCounter(2000);

  const support = useCounter(24);

  const transparent = useCounter(100);

  const sadaqahTypes = [
    {
      title: "গরিবদের খাবার প্রদান",
      desc: "অসহায় পরিবারগুলোর জন্য খাবার ও প্রয়োজনীয় সহায়তা প্রদান করুন।",
      icon: HandCoins,
    },

    {
      title: "শিক্ষার্থীদের সহায়তা",
      desc: "কুরআন শিক্ষার্থী ও ইসলামিক শিক্ষার কার্যক্রমে সহায়তা করুন।",
      icon: Sparkles,
    },

    {
      title: "মসজিদ রক্ষণাবেক্ষণ",
      desc: "মসজিদ ও কমিউনিটি সুবিধা উন্নয়নে সাহায্য করুন।",
      icon: ShieldCheck,
    },

    {
      title: "চিকিৎসা সহায়তা",
      desc: "অসুস্থ ও অসহায় মানুষের চিকিৎসায় সহায়তা করুন।",
      icon: Heart,
    },
  ];

  const rewards = [
    "সাদাকাহ বিপদ দূর করে।",
    "দান সম্পদে বরকত বৃদ্ধি করে।",
    "আল্লাহ দানশীল ব্যক্তিদের ভালোবাসেন।",
    "প্রতিটি ভালো কাজের প্রতিদান আল্লাহ প্রদান করেন।",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f8faf7] to-white pt-32 pb-24">

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}
        <section className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 shadow-sm">

            <MoonStar className="h-4 w-4 text-emerald-600" />

            <span className="text-sm font-medium text-emerald-700">
              সাদাকাহ ও দান
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">

            সাদাকাহ করুন

            <span className="block text-emerald-600">
              অনন্ত সওয়াব অর্জন করুন
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            আপনার দান মসজিদ পরিচালনা, শিক্ষার্থীদের শিক্ষা,
            অসহায় পরিবারকে সহায়তা এবং মুসলিম কমিউনিটিকে
            শক্তিশালী করতে সাহায্য করে।
          </p>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

              <div className="text-4xl font-bold text-gray-900">
                {families.toLocaleString()}+
              </div>

              <div className="mt-2 text-sm text-gray-500">
                পরিবার সহায়তা পেয়েছে
              </div>

            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

              <div className="text-4xl font-bold text-gray-900">
                {donors.toLocaleString()}+
              </div>

              <div className="mt-2 text-sm text-gray-500">
                মাসিক দাতা
              </div>

            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

              <div className="text-4xl font-bold text-gray-900">
                {support}/7
              </div>

              <div className="mt-2 text-sm text-gray-500">
                সহায়তা কার্যক্রম
              </div>

            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">

              <div className="text-4xl font-bold text-gray-900">
                {transparent}%
              </div>

              <div className="mt-2 text-sm text-gray-500">
                স্বচ্ছ পরিচালনা
              </div>

            </div>

          </div>

        </section>

        {/* TYPES */}
        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              🌙 সাদাকাহ কার্যক্রম
            </h2>

            <p className="mt-4 text-gray-500">
              একটি খাত নির্বাচন করুন এবং সহায়তা করুন।
            </p>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {sadaqahTypes.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[32px] border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">

                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.desc}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">

                    এখন দান করুন

                    <ArrowRight className="h-4 w-4" />
                  </button>

                </div>
              );
            })}

          </div>

        </section>

        {/* REWARDS */}
        <section className="mt-24 grid gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <div className="rounded-[36px] border border-emerald-100 bg-white p-8 shadow-sm">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">

              <HeartHandshake className="h-8 w-8" />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-gray-900">
              সাদাকাহর ফজিলত
            </h2>

            <div className="mt-8 space-y-5">

              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl bg-[#f8faf7] p-5"
                >

                  <div className="mt-1 text-emerald-600">

                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <p className="text-sm leading-7 text-gray-600">
                    {reward}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white shadow-2xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">

              <Wallet className="h-4 w-4" />

              দ্রুত দান
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-tight">

              মুসলিম
              <span className="block">
                কমিউনিটিকে সহায়তা করুন
              </span>
            </h2>

            <p className="mt-5 leading-8 text-white/85">
              আপনার ছোট একটি দানও হতে পারে
              বিশাল বরকত ও চলমান সওয়াবের উৎস।
            </p>

            {/* DONATION BOX */}
            <div className="mt-10 rounded-[28px] bg-white/10 p-6 backdrop-blur">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div>

                  <div className="text-sm text-white/70">
                    দানের লক্ষ্য
                  </div>

                  <div className="mt-1 text-3xl font-bold">
                    ৳ ২,৫০,০০০
                  </div>

                </div>

                <div className="rounded-2xl bg-white/10 p-4">

                  <Users className="h-7 w-7" />
                </div>

              </div>

              <div className="mt-6">

                <div className="flex items-center justify-between text-sm">

                  <span>সংগ্রহ হয়েছে</span>

                  <span>৭৫%</span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20">

                  <div className="h-full w-[75%] rounded-full bg-white transition-all duration-1000" />
                </div>

              </div>

            </div>

            {/* BUTTON */}
            <button className="mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-white text-sm font-semibold text-emerald-700 transition hover:scale-[1.01]">

              সাদাকাহ করুন

              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </section>

        {/* QUOTE */}
        <section className="mt-24">

          <div className="rounded-[40px] bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-14 text-center text-white shadow-2xl">

            <div className="text-5xl">
              ❝
            </div>

            <p className="mx-auto mt-6 max-w-4xl text-xl leading-10 md:text-2xl">

              “যারা আল্লাহর পথে তাদের সম্পদ ব্যয় করে,
              তাদের উদাহরণ একটি বীজের মতো যা থেকে
              সাতটি শীষ জন্মে এবং প্রতিটি শীষে থাকে
              একশত দানা।”
            </p>

            <div className="mt-6 text-white/80">
              — সূরা আল-বাকারাহ ২:২৬১
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}