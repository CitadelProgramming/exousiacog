import Link from "next/link";
import { FiArrowRight, FiHeart, FiUsers, FiTrendingUp } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function GivePage() {
  return (
    <>
      <section className="relative bg-[#0b1d36] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d36] via-[#0f2744] to-[#0b1d36]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">
              Partnership
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Give & Partner With Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Your giving fuels the work of the Kingdom and helps us raise a
            people who walk in God&apos;s authority.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight mb-4">
              Why We Give
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Giving is an act of worship and partnership. Through your
              generosity we preach the gospel, equip believers, and impact
              lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: FiHeart,
                title: "Worship",
                desc: "A response of gratitude to God for all He has done.",
              },
              {
                icon: FiUsers,
                title: "Partnership",
                desc: "You become a partner in advancing the Kingdom.",
              },
              {
                icon: FiTrendingUp,
                title: "Impact",
                desc: "Your seed supports ministry, outreach, and growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100"
              >
                <div className="w-12 h-12 bg-[#0b1d36] rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-5 h-5 text-[#c9a227]" />
                </div>
                <h3 className="font-semibold text-[#0b1d36] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d36] tracking-tight">
              Ways to Give
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1d36] mb-6">
                Bank Transfer
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-slate-500 mb-1">Account Name</p>
                  <p className="font-medium text-[#0b1d36]">
                    Exousia Church of God
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Bank</p>
                  <p className="font-medium text-[#0b1d36]">To be updated</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Account Number</p>
                  <p className="font-medium text-[#0b1d36]">XXXXXXXXXX</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#0b1d36] mb-6">
                Online Giving
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Secure online giving will be available soon via Paystack or
                Flutterwave.
              </p>
              <button
                disabled
                className="w-full bg-slate-100 text-slate-400 font-medium py-4 rounded-full cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#0b1d36]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] font-medium mb-4 tracking-wide">
            Scripture
          </p>
          <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-6">
            “Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver.”
          </blockquote>
          <p className="text-slate-400">— 2 Corinthians 9:7</p>
        </div>
      </section>
    </>
  );
}
