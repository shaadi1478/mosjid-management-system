import {
  Users,
  HeartHandshake,
  Clock3,
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export default function Volunteers() {
  const volunteers = [
    {
      name: "Ahmed Rahman",
      role: "Event Coordinator",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Abdullah Karim",
      role: "Quran Teacher",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Fatima Noor",
      role: "Community Volunteer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Yusuf Ali",
      role: "Youth Mentor",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const works = [
    "Mosque cleaning & maintenance",
    "Ramadan iftar distribution",
    "Islamic event management",
    "Helping elderly musallis",
    "Quran academy support",
    "Community charity programs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf7] to-white pt-32 pb-24 overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 shadow-sm">

            <HeartHandshake className="h-4 w-4 text-emerald-600" />

            <span className="text-sm font-medium text-emerald-700">
              Mosque Volunteer Program
            </span>
          </div>

          <h1 className="mt-7 text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Become A
            <span className="block text-emerald-600">
              Volunteer
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our dedicated volunteer team and help
            serve the mosque, support the community,
            and earn endless rewards from Allah.
          </p>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-gray-900">
                120+
              </div>

              <div className="mt-2 text-sm text-gray-500">
                Active Volunteers
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-gray-900">
                35+
              </div>

              <div className="mt-2 text-sm text-gray-500">
                Weekly Programs
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-gray-900">
                5K+
              </div>

              <div className="mt-2 text-sm text-gray-500">
                People Helped
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="text-4xl font-bold text-gray-900">
                24/7
              </div>

              <div className="mt-2 text-sm text-gray-500">
                Community Service
              </div>
            </div>

          </div>

        </section>

        {/* WHAT VOLUNTEERS DO */}
        <section className="mt-24">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              🌙 Volunteer Activities
            </h2>

            <p className="mt-4 text-gray-500">
              Our volunteers actively participate in mosque
              and community services.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {works.map((work, index) => (
              <div
                key={index}
                className="group rounded-[30px] border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {work}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Help the mosque community through this
                  important volunteer service.
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* VOLUNTEERS */}
        <section className="mt-24">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>

              <h2 className="text-4xl font-bold text-gray-900">
                🤝 Our Volunteers
              </h2>

              <p className="mt-3 text-gray-500">
                Meet some of our dedicated community members.
              </p>

            </div>

            <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-90">

              Join Volunteer Team

              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {volunteers.map((person, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="overflow-hidden">

                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">

                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">

                    <ShieldCheck className="h-3.5 w-3.5" />

                    Verified Volunteer
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-gray-900">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {person.role}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-amber-500">

                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* WHY JOIN */}
        <section className="mt-24 grid gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <div className="rounded-[36px] border border-emerald-100 bg-white p-8 shadow-sm">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">

              <Users className="h-8 w-8" />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-gray-900">
              Why Join Us?
            </h2>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-[#f8faf7] p-5">
                <div className="font-semibold text-gray-900">
                  Serve The Community
                </div>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Help organize Islamic programs and support
                  people in need.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8faf7] p-5">
                <div className="font-semibold text-gray-900">
                  Earn Reward From Allah
                </div>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Every act of service becomes a source of
                  endless reward.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f8faf7] p-5">
                <div className="font-semibold text-gray-900">
                  Build Brotherhood
                </div>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Connect with practicing Muslims and grow
                  together spiritually.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] bg-gradient-to-br from-emerald-600 to-green-600 p-8 text-white shadow-2xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">

              <Clock3 className="h-4 w-4" />

              Volunteer Registration
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-tight">
              Ready To Make
              <span className="block">
                A Difference?
              </span>
            </h2>

            <p className="mt-5 leading-8 text-white/85">
              Become part of our volunteer network and help
              build a stronger Islamic community.
            </p>

            <div className="mt-10 space-y-4">

              <a
                href="tel:+8801712345678"
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">

                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-sm text-white/70">
                    Call Us
                  </div>

                  <div className="font-semibold">
                    +880 1712-345678
                  </div>
                </div>

              </a>

              <a
                href="mailto:volunteer@mosque.com"
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">

                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-sm text-white/70">
                    Email
                  </div>

                  <div className="font-semibold">
                    volunteer@mosque.com
                  </div>
                </div>

              </a>

            </div>

            <button className="mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-white text-sm font-semibold text-emerald-700 transition hover:scale-[1.01]">

              Apply As Volunteer

              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </section>

      </div>
    </div>
  );
}