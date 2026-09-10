import Link from "next/link";
import {
  FiArrowRight,
  FiPlay,
  FiMapPin,
  FiClock,
  FiUsers,
  FiBookOpen,
  FiMonitor,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-[#3b0764] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
              <span className="text-sm text-white/90 font-medium">
                Welcome to Exousia Church of God
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Life Under
              <span className="block text-[#c9a227]">God&apos;s Authority</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6 max-w-xl">
              To lead and empower lives with Christ&apos;s authority and return
              nations back to God.
            </p>

            <p className="text-slate-300 mb-10 max-w-xl">
              The name <strong className="text-white">Exousia</strong> comes
              from the Greek word <em>Exousia-Dunamis</em> — meaning{" "}
              <strong className="text-[#c9a227]">Authority</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/visit"
                className="group inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#3b0764] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all duration-300 shadow-lg shadow-[#c9a227]/20"
              >
                Plan Your Visit
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/sermons"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white font-medium px-8 py-4 rounded-full hover:bg-white/15 transition-all duration-300"
              >
                <FiPlay className="w-4 h-4" />
                Watch Latest Sermon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK INFO BAR ===== */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-slate-100">
              <div className="flex items-center gap-4 md:px-6">
                <div className="w-12 h-12 rounded-xl bg-[#3b0764]/10 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-5 h-5 text-[#3b0764]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Sunday Service
                  </p>
                  <p className="text-sm font-semibold text-[#3b0764] mt-0.5">
                    9:00 AM – 11:30 AM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:px-6">
                <div className="w-12 h-12 rounded-xl bg-[#3b0764]/10 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-[#3b0764]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-[#3b0764] mt-0.5">
                    Mabushi, Abuja
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:px-6">
                <div className="w-12 h-12 rounded-xl bg-[#3b0764]/10 flex items-center justify-center flex-shrink-0">
                  <FiUsers className="w-5 h-5 text-[#3b0764]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Community
                  </p>
                  <p className="text-sm font-semibold text-[#3b0764] mt-0.5">
                    You&apos;re Welcome Here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE TIMES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-3">
              Gather With Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight">
              Weekly Services
            </h2>
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
              <div className="space-y-2 mb-5 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-[#3b0764]">
                    Pre-service:
                  </span>{" "}
                  8:30 AM
                </p>
                <p>
                  <span className="font-medium text-[#3b0764]">
                    Main Service:
                  </span>{" "}
                  9:00 AM – 11:30 AM
                </p>
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
              <p className="text-sm text-slate-600 mb-5">
                <span className="font-medium text-[#3b0764]">5:30 PM</span>
              </p>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <FiMonitor className="w-4 h-4" />
                Online on Facebook
              </p>
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
              <p className="text-sm text-slate-600 mb-5">
                <span className="font-medium text-[#3b0764]">5:30 PM</span>
              </p>
              <p className="text-sm text-slate-500">Onsite • Mabushi, Abuja</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b0764] hover:text-[#c9a227] transition-colors"
            >
              View full schedule
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-6 leading-tight">
                A People Walking in Authority
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Exousia Church of God is a vibrant community of believers in
                Mabushi, Abuja, committed to living under God&apos;s authority.
                Led by Pastor Kunle Shoyele, we exist to lead and empower lives
                with Christ&apos;s authority and return nations back to God.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-[#3b0764] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#4c1d95] transition-all duration-300"
              >
                Learn More About Us
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-[#3b0764] rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center px-8">
                  <FiBookOpen className="w-12 h-12 text-[#c9a227] mx-auto mb-4 opacity-60" />
                  <p className="text-white/50 text-sm">
                    Church / Worship Image
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c9a227]/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-[#3b0764] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-slate-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join us this Sunday, watch a message online, or partner with us in
            advancing the Kingdom of God.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="group inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#3b0764] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all duration-300"
            >
              Visit Us
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/give"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Give Online
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
