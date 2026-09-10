import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
  FiMapPin,
  FiUsers,
  FiHeart,
  FiBookOpen,
  FiMonitor,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#3b0764] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">
              You’re Invited
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Plan Your Visit
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto leading-relaxed">
            We are excited to welcome you. Here’s everything you need to know
            for your first visit to Exousia Church of God.
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3b0764] mb-6">
            A Warm Welcome Awaits You
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether this is your first time in church or you’re looking for a
            new church home, you are welcome at Exousia. Come as you are — you
            will find a family ready to receive you.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight">
              What to Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FiUsers,
                title: "Friendly Welcome",
                desc: "Our team will gladly receive you and help you feel at home.",
              },
              {
                icon: FiHeart,
                title: "Spirit-filled Worship",
                desc: "Experience powerful praise that ushers in God’s presence.",
              },
              {
                icon: FiBookOpen,
                title: "The Word of God",
                desc: "Receive clear, practical and anointed teaching.",
              },
              {
                icon: FiUsers,
                title: "Genuine Community",
                desc: "Connect with people passionate about growing in God.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#3b0764] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <h3 className="font-semibold text-[#3b0764] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When & Where */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-4">
                Service Details
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-8">
                When & Where
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-[#3b0764] mb-3 flex items-center gap-2">
                    <FiClock className="w-5 h-5 text-[#c9a227]" />
                    Sunday Service
                  </h3>
                  <ul className="text-slate-600 space-y-1 ml-7">
                    <li>Pre-service Teaching — 8:30 AM</li>
                    <li>Main Service — 9:00 AM – 11:30 AM</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#3b0764] mb-3 flex items-center gap-2">
                    <FiClock className="w-5 h-5 text-[#c9a227]" />
                    Wednesday
                  </h3>
                  <p className="text-slate-600 ml-7">
                    5:30 PM (Online on Facebook)
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#3b0764] mb-3 flex items-center gap-2">
                    <FiClock className="w-5 h-5 text-[#c9a227]" />
                    Friday
                  </h3>
                  <p className="text-slate-600 ml-7">5:30 PM (Onsite)</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#3b0764] mb-3 flex items-center gap-2">
                    <FiMapPin className="w-5 h-5 text-[#c9a227]" />
                    Location
                  </h3>
                  <p className="text-slate-600 ml-7">
                    Mabushi, Abuja, FCT, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl h-72 sm:h-80 md:h-96 flex items-center justify-center">
              <p className="text-slate-500 text-sm">Location Map</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#3b0764] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            We Can’t Wait to Meet You
          </h2>
          <p className="text-slate-200 text-lg mb-10">
            Join us this week and experience life under God’s authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#3b0764] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all"
            >
              View Service Times
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
