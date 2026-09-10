import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiClock,
  FiMonitor,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Sunday Service",
      date: "Every Sunday",
      time: "Pre-service 8:30 AM • Main Service 9:00 – 11:30 AM",
      location: "Mabushi, Abuja (Onsite)",
      type: "Weekly",
    },
    {
      id: 2,
      title: "Wednesday Bible Teaching",
      date: "Every Wednesday",
      time: "5:30 PM",
      location: "Online on Facebook",
      type: "Weekly",
      online: true,
    },
    {
      id: 3,
      title: "Friday Prayer Service",
      date: "Every Friday",
      time: "5:30 PM",
      location: "Mabushi, Abuja (Onsite)",
      type: "Weekly",
    },
  ];

  return (
    <>
      <section className="relative bg-[#3b0764] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">
              What’s Happening
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Events & Programs
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Stay connected with our weekly services and upcoming special
            programs.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#3b0764] px-6 py-5">
                  <span className="inline-block text-xs font-semibold tracking-wide text-[#c9a227] bg-[#c9a227]/10 px-3 py-1 rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <FiCalendar className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <FiClock className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    {event.online ? (
                      <FiMonitor className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                    ) : (
                      <FiMapPin className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                    )}
                    <span>{event.location}</span>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/visit"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3b0764] hover:text-[#c9a227] transition-colors"
                    >
                      Plan to Attend <FiArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3b0764] tracking-tight mb-4">
            Special Programs
          </h2>
          <p className="text-slate-600 mb-8">
            Special services, conferences and celebrations will be announced
            here as they are scheduled.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#3b0764] text-white font-medium px-8 py-4 rounded-full hover:bg-[#4c1d95] transition-all"
          >
            Stay Connected
          </Link>
        </div>
      </section>
    </>
  );
}
