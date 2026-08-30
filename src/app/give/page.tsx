import Link from "next/link";

export default function GivePage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="bg-[#0b1d36] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] font-medium mb-3 tracking-wide">
            Partnership
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Give & Partner With Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Your giving fuels the work of the Kingdom and helps us continue
            raising a people who walk in God&apos;s authority.
          </p>
        </div>
      </section>

      {/* ===== WHY WE GIVE ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-6">
              Why We Give
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Giving is an act of worship and partnership. Through your
              generosity, we are able to preach the gospel, equip believers,
              support ministry work, and impact lives in Abuja and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#0b1d36] mb-3">
                Worship
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Giving is a response of gratitude to God for all He has done.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#0b1d36] mb-3">
                Partnership
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You become a partner in advancing the work of the Kingdom.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#0b1d36] mb-3">
                Impact
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your seed supports ministry, outreach, and the growth of the
                church.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAYS TO GIVE ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-4">
              Ways to Give
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the method that is most convenient for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bank Transfer */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center">
                  <span className="text-[#c9a227] font-bold">₦</span>
                </div>
                <h3 className="text-xl font-bold text-[#0b1d36]">
                  Bank Transfer
                </h3>
              </div>

              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Account Name</p>
                  <p className="font-medium text-[#0b1d36]">
                    Exousia Church of God
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Bank</p>
                  <p className="font-medium text-[#0b1d36]">To be updated</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Account Number</p>
                  <p className="font-medium text-[#0b1d36]">XXXXXXXXXX</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Please use your full name as the narration/reference.
              </p>
            </div>

            {/* Online Giving */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center">
                  <span className="text-[#c9a227] font-bold">💳</span>
                </div>
                <h3 className="text-xl font-bold text-[#0b1d36]">
                  Online Giving
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure online giving will be available soon through trusted
                platforms such as Paystack or Flutterwave.
              </p>

              <button
                disabled
                className="w-full bg-gray-200 text-gray-500 font-medium py-4 rounded-full cursor-not-allowed"
              >
                Coming Soon
              </button>

              <p className="mt-4 text-sm text-gray-500 text-center">
                Online payment integration will be added shortly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCRIPTURE ===== */}
      <section className="py-16 md:py-20 bg-[#0b1d36] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c9a227] font-medium mb-4 tracking-wide">
            Scripture
          </p>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-6">
            “Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver.”
          </blockquote>
          <p className="text-gray-300">— 2 Corinthians 9:7</p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1d36] mb-4">
            Thank You for Partnering With Us
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Every seed sown is a step toward greater Kingdom impact. We
            appreciate your generosity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#0b1d36] text-white font-medium px-8 py-4 rounded-full hover:bg-[#132f4c] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="border border-[#0b1d36] text-[#0b1d36] font-medium px-8 py-4 rounded-full hover:bg-gray-50 transition-colors"
            >
              About the Church
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
