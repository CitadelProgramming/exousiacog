import Link from "next/link";
import {
  FiArrowRight,
  FiClock,
  FiMapPin,
  FiUsers,
  FiBookOpen,
  FiHeart,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-[#0b1d36] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d36] via-[#0f2744] to-[#0b1d36]" />
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
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Join us as we gather to worship, receive the Word, and grow together
            in the presence of God.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight mb-4">
              Weekly Services
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We gather several times a week. Everyone is welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                day: "Sunday",
                title: "Sunday Service",
                desc: "Our main worship service filled with powerful praise, the Word of God, and the presence of the Holy Spirit.",
              },
              {
                day: "Wednesday",
                title: "Bible Teaching",
                desc: "Midweek teaching where we dig deeper into the Word of God for growth, understanding, and transformation.",
              },
              {
                day: "Friday",
                title: "Prayer Service",
                desc: "A powerful time of corporate prayer, intercession, and seeking the face of God together.",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-[#c9a227]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-8 w-12 h-1 bg-[#c9a227] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-xs font-semibold tracking-widest text-[#c9a227] uppercase mb-4">
                  {item.day}
                </p>
                <h3 className="text-xl font-bold text-[#0b1d36] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
                  <FiClock className="w-4 h-4" /> Time to be confirmed
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-4">
                Find Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight mb-6">
                Our Location
              </h2>
              <div className="space-y-6 text-slate-600">
                <div className="flex gap-4">
                  <FiMapPin className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0b1d36] mb-1">Address</p>
                    <p>Mabushi, Abuja, Federal Capital Territory, Nigeria</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-[#0b1d36] mb-1">
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
                  className="group inline-flex items-center gap-2 bg-[#0b1d36] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#132f4c] transition-all"
                >
                  Contact Us for Directions
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-200 rounded-3xl h-72 sm:h-80 md:h-96 flex items-center justify-center">
              <p className="text-slate-500 text-sm">Google Map Embed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight mb-4">
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
                desc: "The Word of God taught with clarity, power, and practical application.",
              },
              {
                icon: FiUsers,
                title: "Real Community",
                desc: "A family where you can grow, connect, and walk in purpose.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-14 h-14 bg-[#0b1d36] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <h3 className="font-semibold text-[#0b1d36] mb-2">
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

      <section className="py-20 md:py-24 bg-[#0b1d36] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d36] via-[#0f2744] to-[#0b1d36]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            We Can’t Wait to Meet You
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Come experience the presence of God with us this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="group inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#0b1d36] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all"
            >
              Plan Your Visit{" "}
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
