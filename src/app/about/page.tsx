import Link from "next/link";
import {
  FiArrowRight,
  FiTarget,
  FiFlag,
  FiHeart,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#3b0764] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Exousia Church of God
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto leading-relaxed">
            The name <strong>Exousia</strong> is taken from the Greek word{" "}
            <em>Exousia-Dunamis</em>, which means <strong>Authority</strong>.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-4">
              Our Identity
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-6">
              Life Under God&apos;s Authority
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Exousia Church of God is a vibrant community of believers in
              Mabushi, Abuja, committed to living and walking under the
              authority of Christ. Led by Pastor Kunle Shoyele, we exist to lead
              and empower lives with Christ’s authority and return nations back
              to God.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-[#3b0764] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FiTarget className="w-6 h-6 text-[#c9a227]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3b0764] mb-6">
            Our Vision
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed">
            “To lead and empower lives with Christ’s authority and return
            Nations back to God.”
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-14 h-14 bg-[#3b0764] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FiFlag className="w-6 h-6 text-[#c9a227]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We will achieve our vision through the following:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Dedicated, vibrant and Spirit-filled Church Services at all times",
              "Involving the Church in Local Engagements & Social Responsibilities",
              "Encouraging friendship & family life between members of the Church",
              "Concerted effort at Economic Empowerment, Leadership & Governance, ensuring that members are eternity-minded",
              "Being a multiple-location Church",
              "Strong social media presence and representation for global impact",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#c9a227]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#3b0764] text-[#c9a227] flex items-center justify-center text-sm font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600">
              The Church is bound by these four core values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Righteousness */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-[#3b0764] rounded-xl flex items-center justify-center mb-6">
                <FiShield className="w-5 h-5 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#3b0764] mb-3">
                Righteousness
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Espousing right thinking, living, believing and right holiness.
              </p>
              <p className="text-xs text-slate-500 italic">
                “He who walks uprightly and works righteousness, and speaks the
                truth in his heart” (Psalm 15:2)
              </p>
            </div>

            {/* Forgiveness */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-[#3b0764] rounded-xl flex items-center justify-center mb-6">
                <FiHeart className="w-5 h-5 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#3b0764] mb-3">
                Forgiveness
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The aim of the Church is to encourage people to forgive easily,
                just as God has mercy upon and forgives man.
              </p>
            </div>

            {/* Love and Sacrifice */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-[#3b0764] rounded-xl flex items-center justify-center mb-6">
                <FiUsers className="w-5 h-5 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#3b0764] mb-3">
                Love & Sacrifice
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A person who easily forgives will find it easy to love and
                consequently sacrifice. Welfare is an integral part of love and
                sacrifice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] font-semibold text-sm tracking-widest uppercase mb-3">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3b0764] tracking-tight mb-10">
            Lead Pastor
          </h2>
          <div className="w-40 h-40 mx-auto bg-slate-100 rounded-full mb-8 flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-slate-400 text-sm">Pastor Photo</span>
          </div>
          <h3 className="text-2xl font-bold text-[#3b0764] mb-1">
            Pastor Kunle Shoyele
          </h3>
          <p className="text-[#c9a227] font-medium mb-6">Lead Pastor</p>
          <p className="text-slate-600 leading-relaxed">
            Pastor Kunle Shoyele is the Lead Pastor of Exousia Church of God,
            Abuja. He is passionate about raising believers who walk in
            spiritual authority, integrity and purpose.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#3b0764] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b0764] via-[#4c1d95] to-[#3b0764]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            You Are Welcome Here
          </h2>
          <p className="text-slate-200 text-lg mb-10">
            Join us this week and experience life under God’s authority.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
