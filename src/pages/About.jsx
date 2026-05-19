import {
  Building2,
  Users,
  HeartHandshake,
  BookOpen,
  Clock3,
  MapPin,
  Phone,
  Mail,
  Star,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      number: "15+",
      label: "Years Serving",
    },
    {
      number: "5K+",
      label: "Community Members",
    },
    {
      number: "120+",
      label: "Weekly Students",
    },
    {
      number: "50+",
      label: "Islamic Events",
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Daily Prayers",
      desc:
        "Five daily congregational prayers with peaceful Islamic environment.",
    },
    {
      icon: BookOpen,
      title: "Islamic Education",
      desc:
        "Quran learning, Arabic classes and Islamic studies for all ages.",
    },
    {
      icon: HeartHandshake,
      title: "Community Support",
      desc:
        "Helping families and supporting the local Muslim community.",
    },
    {
      icon: Users,
      title: "Youth Programs",
      desc:
        "Islamic youth development and community engagement activities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf7] to-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-32 pb-24">

        {/* BG GLOW */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm">

                <Star className="h-4 w-4 text-emerald-600" />

                <span className="text-sm font-medium text-emerald-700">
                  About Our Mosque
                </span>

              </div>

              <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                A peaceful place
                <span className="block text-emerald-600">
                  for worship & unity
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Our mosque is dedicated to serving the Muslim
                community through daily prayers, Islamic education,
                charity and spiritual guidance.
              </p>

              {/* INFO */}
              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">
                      Location
                    </div>

                    <div className="font-semibold text-gray-900">
                      Mirzapur, Dhaka, Bangladesh
                    </div>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">
                      Contact
                    </div>

                    <div className="font-semibold text-gray-900">
                      +880 1712-345678
                    </div>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">
                      Email
                    </div>

                    <div className="font-semibold text-gray-900">
                      mosque@email.com
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="overflow-hidden rounded-[40px] border border-emerald-100 bg-white shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="h-[650px] w-full object-cover"
                />

              </div>

              {/* FLOAT CARD */}
              <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-[32px] border border-emerald-100 bg-white p-6 shadow-2xl backdrop-blur">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="text-sm text-gray-500">
                      Established
                    </div>

                    <div className="mt-1 text-2xl font-bold text-gray-900">
                      2010
                    </div>

                  </div>

                  <div className="h-14 w-px bg-gray-200" />

                  <div>

                    <div className="text-sm text-gray-500">
                      Daily Visitors
                    </div>

                    <div className="mt-1 text-2xl font-bold text-gray-900">
                      2K+
                    </div>

                  </div>

                  <div className="h-14 w-px bg-gray-200" />

                  <div>

                    <div className="text-sm text-gray-500">
                      Programs
                    </div>

                    <div className="mt-1 text-2xl font-bold text-gray-900">
                      24+
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-emerald-100 bg-white p-8 text-center shadow-sm"
            >

              <div className="text-4xl font-bold text-emerald-600">
                {item.number}
              </div>

              <div className="mt-3 text-gray-500">
                {item.label}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            What We Provide
          </h2>

          <p className="mt-4 text-gray-500">
            Islamic services and activities for the community
          </p>

        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">

                  <Icon className="h-8 w-8" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.desc}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* QUOTE */}
      <section className="pb-24 px-4">

        <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-20 text-center text-white shadow-2xl">

          <div className="text-5xl">
            ❝
          </div>

          <p className="mt-8 text-2xl leading-relaxed md:text-3xl">
            “Indeed, the believers are but brothers.”
          </p>

          <div className="mt-6 text-white/80">
            — Quran 49:10
          </div>

        </div>

      </section>

    </div>
  );
}