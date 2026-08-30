import Link from "next/link";
import { FiArrowRight, FiTarget, FiFlag } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="relative bg-[#0b1d36] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d36] via-[#0f2744] to-[#0b1d36]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">About Us</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Exousia Church of God
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Life under God&apos;s authority. A house of power, a people of
            authority, and a move of God in Abuja.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight mb-6 leading-tight">
                Who We Are
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Exousia Church of God is a vibrant community of believers
                  located in Mabushi, Abuja. We are committed to raising a
                  people who live and walk under the authority of God.
                </p>
                <p>
                  The name <strong className="text-[#0b1d36]">Exousia</strong>{" "}
                  comes from the Greek word that means authority, power, and the
                  right to act. This captures our identity — a church that walks
                  in the authority given to us in Christ.
                </p>
                <p>
                  Led by Pastor Kunle Shoyele, we exist to equip believers,
                  transform lives, and advance the Kingdom of God through
                  powerful worship, sound teaching, and genuine fellowship.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl flex items-center justify-center border border-slate-200">
                <p className="text-slate-400 text-sm">
                  Church / Leadership Image
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#c9a227]/15 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0b1d36] flex items-center justify-center mb-6">
                <FiTarget className="w-5 h-5 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#0b1d36] mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To raise a generation of believers who walk in the full
                authority of God, transforming their world through the power of
                the Holy Spirit and the Word of God.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0b1d36] flex items-center justify-center mb-6">
                <FiFlag className="w-5 h-5 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#0b1d36] mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To equip the saints through sound teaching, powerful worship,
                and intentional discipleship so that every believer lives a life
                of purpose, power, and impact under God&apos;s authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-3">
              Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight">
              Meet Our Lead Pastor
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto bg-slate-100 rounded-full mb-8 flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-slate-400 text-sm">Pastor Photo</span>
            </div>

            <h3 className="text-2xl font-bold text-[#0b1d36] mb-1">
              Pastor Kunle Shoyele
            </h3>
            <p className="text-[#c9a227] font-medium mb-6">Lead Pastor</p>

            <p className="text-slate-600 leading-relaxed">
              Pastor Kunle Shoyele is the Lead Pastor of Exousia Church of God,
              Abuja. He is passionate about raising believers who walk in
              spiritual authority, integrity, and purpose. Under his leadership,
              the church continues to grow as a place of power, teaching, and
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-24 bg-[#0b1d36] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d36] via-[#0f2744] to-[#0b1d36]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            You Are Welcome Here
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            We would love to meet you. Join us this week and experience the
            presence of God with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="group inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#0b1d36] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-all duration-300"
            >
              Plan Your Visit
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
