import {
    CalendarDays,
    Clock3,
    MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

import eventsData from "../data/eventsData";

export default function Events() {

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f8faf7] to-white pt-32 pb-24 px-4">

            <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-7">

                {eventsData.map((event) => (
                    <div
                        key={event.id}
                        className="overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm"
                    >

                        <img
                            src={event.image}
                            alt={event.title}
                            className="h-64 w-full object-cover"
                        />

                        <div className="p-7">

                            <h2 className="text-2xl font-bold">
                                {event.title}
                            </h2>

                            <p className="mt-4 text-gray-600">
                                {event.desc}
                            </p>

                            <div className="mt-6 space-y-3 text-sm text-gray-500">

                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 text-emerald-600" />
                                    {event.date}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock3 className="h-4 w-4 text-emerald-600" />
                                    {event.time}
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-emerald-600" />
                                    {event.location}
                                </div>

                            </div>

                            <Link
                                to={`/event-details/${event.id}`}
                                className="mt-8 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 py-3.5 text-sm font-semibold text-white"
                            >
                                View Event Details
                            </Link>

                        </div>
                    </div>
                ))}



            </section>
            {/* EVENT GALLERY */}
            <section className="max-w-7xl mx-auto mt-24">

                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        📸 Event Gallery
                    </h2>

                    <p className="mt-3 text-gray-500">
                        ইসলামিক আয়োজনের কিছু সুন্দর মুহূর্ত
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-5">

                    {eventsData.flatMap((event) =>
                        event.gallery.map((img, i) => {

                            const large =
                                i % 5 === 0 || i % 7 === 0;

                            const tall =
                                i % 4 === 0;

                            return (
                                <div
                                    key={`${event.id}-${i}`}
                                    className={`group relative overflow-hidden rounded-[32px]
              
              ${large ? "md:col-span-2 md:row-span-2" : ""}
              ${tall ? "row-span-2" : ""}
              
            `}
                                >

                                    {/* IMAGE */}
                                    <img
                                        src={img}
                                        alt=""
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                    {/* CONTENT */}
                                    <div className="absolute bottom-0 left-0 p-5 text-white translate-y-10 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                        <div className="text-sm text-white/70">
                                            Mosque Event
                                        </div>

                                        <h3 className="mt-1 text-lg font-semibold">
                                            {event.title}
                                        </h3>

                                    </div>

                                </div>
                            );
                        })
                    )}

                </div>

            </section>

        </div>
    );
}