import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
  FiMapPin,
  FiUsers,
  FiBookOpen,
  FiHeart,
  FiMonitor,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#3b0764] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">
              Gather With Us
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Service Times & Location
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Join us as we gather to worship, receive the Word, and grow together
            under God’s authority.
          </p>
        </div>
      </section>

      {/* Weekly Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-4">
              Weekly Services
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Dedicated, vibrant and Spirit-filled services every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Sunday */}
            <div className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#c9a227]/40 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-8 w-12 h-1 bg-[#c9a227] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-semibold tracking-widest text-[#c9a227] uppercase mb-4">
                Sunday
              </p>
              <h3 className="text-xl font-bold text-[#3b0764] mb-4">
                Sunday Service
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <FiClock className="w-4 h-4 text-[#c9a227] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#3b0764]">
                      Pre-service Teaching
                    </p>
                    <p className="text-sm text-slate-600">8:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiClock className="w-4 h-4 text-[#c9a227] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#3b0764]">
                      Main Service
                    </p>
                    <p className="text-sm text-slate-600">9:00 AM – 11:30 AM</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500">Onsite • Mabushi, Abuja</p>
            </div>

            {/* Wednesday */}
            <div className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#c9a227]/40 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-8 w-12 h-1 bg-[#c9a227] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-semibold tracking-widest text-[#c9a227] uppercase mb-4">
                Wednesday
              </p>
              <h3 className="text-xl font-bold text-[#3b0764] mb-4">
                Bible Teaching
              </h3>

              <div className="flex items-start gap-3 mb-6">
                <FiClock className="w-4 h-4 text-[#c9a227] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#3b0764]">
                    Service Time
                  </p>
                  <p className="text-sm text-slate-600">5:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FiMonitor className="w-4 h-4" />
                Online on our Facebook page
              </div>
            </div>

            {/* Friday */}
            <div className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#c9a227]/40 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-8 w-12 h-1 bg-[#c9a227] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-xs font-semibold tracking-widest text-[#c9a227] uppercase mb-4">
                Friday
              </p>
              <h3 className="text-xl font-bold text-[#3b0764] mb-4">
                Prayer Service
              </h3>

              <div className="flex items-start gap-3 mb-6">
                <FiClock className="w-4 h-4 text-[#c9a227] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#3b0764]">
                    Service Time
                  </p>
                  <p className="text-sm text-slate-600">5:30 PM</p>
                </div>
              </div>
              <p className="text-sm text-slate-500">Onsite • Mabushi, Abuja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-4">
                Find Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-6">
                Our Location
              </h2>
              <div className="space-y-6 text-slate-600">
                <div className="flex gap-4">
                  <FiMapPin className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#3b0764] mb-1">Address</p>
                    <p>Mabushi, Abuja, Federal Capital Territory, Nigeria</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-[#3b0764] mb-1">
                    First Time?
                  </p>
                  <p>
                    We would love to welcome you. Come as you are — you will
                    find a warm family ready to receive you.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#3b0764] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#4c1d95] transition-all"
                >
                  Contact Us for Directions
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-200 rounded-3xl h-72 sm:h-80 md:h-96 flex items-center justify-center">
              <p className="text-slate-500 text-sm">
                Google Map will be added here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-white">
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
                title: "Warm Welcome",
                desc: "Friendly faces ready to receive you and help you feel at home.",
              },
              {
                icon: FiHeart,
                title: "Powerful Worship",
                desc: "Spirit-filled praise that lifts hearts and ushers in God’s presence.",
              },
              {
                icon: FiBookOpen,
                title: "Sound Teaching",
                desc: "The Word of God taught with clarity, power and practical application.",
              },
              {
                icon: FiUsers,
                title: "Real Community",
                desc: "A family where you can grow, connect and walk in purpose.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
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

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#3b0764] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            We Can’t Wait to Meet You
          </h2>
          <p className="text-slate-200 text-lg mb-10">
            Come experience the presence of God with us this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="group inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#3b0764] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all"
            >
              Plan Your Visit
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
