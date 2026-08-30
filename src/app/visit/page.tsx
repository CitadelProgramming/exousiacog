import Link from "next/link";

export default function VisitPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="bg-[#0b1d36] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] font-medium mb-3 tracking-wide">
            You’re Invited
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Plan Your Visit
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We are excited to welcome you. Here’s everything you need to know
            for your first visit to Exousia Church of God.
          </p>
        </div>
      </section>

      {/* ===== WELCOME MESSAGE ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1d36] mb-6">
            A Warm Welcome Awaits You
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether this is your first time in church or you’re looking for a
            new church home, you are welcome at Exousia. Come as you are — you
            will find a family ready to receive you with love.
          </p>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-4">
              What to Expect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We want your visit to be meaningful and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-3">
                Friendly Welcome
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our ushers and members will gladly receive you and help you feel
                at home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-3">
                Spirit-filled Worship
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience powerful praise and worship that ushers in the
                presence of God.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-3">
                The Word of God
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Receive clear, practical, and anointed teaching from the Word.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-3">
                Genuine Community
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect with people who are passionate about growing in God
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE INFO ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#c9a227] font-medium mb-3">Service Details</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-6">
                When & Where
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#0b1d36] mb-1">
                    Main Service
                  </h3>
                  <p className="text-gray-600">Sunday Service</p>
                  <p className="text-sm text-gray-500">Time to be confirmed</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0b1d36] mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    Mabushi, Abuja
                    <br />
                    Federal Capital Territory, Nigeria
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0b1d36] mb-1">
                    What Should I Wear?
                  </h3>
                  <p className="text-gray-600">
                    Come as you are. Most people dress neatly and modestly —
                    from smart casual to formal.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0b1d36] mb-1">
                    Children
                  </h3>
                  <p className="text-gray-600">
                    Children are welcome. More details about children’s ministry
                    will be shared soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Map / Image Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-96 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-gray-500 font-medium mb-2">Location Map</p>
                <p className="text-sm text-gray-400">
                  Google Map will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRACTICAL TIPS ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1d36] mb-4">
              Helpful Tips for Your Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <h3 className="font-semibold text-[#0b1d36] mb-3">
                Arrive a Little Early
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Coming 10–15 minutes early helps you find your seat, meet
                people, and settle in before the service begins.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <h3 className="font-semibold text-[#0b1d36] mb-3">
                Come with Expectation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                God meets those who seek Him. Come ready to worship and receive
                from His Word.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <h3 className="font-semibold text-[#0b1d36] mb-3">
                Feel Free to Ask
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If you need help finding anything or have questions, our team is
                happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-20 bg-[#0b1d36] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            We Can’t Wait to Meet You
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join us this week and experience the presence of God with the
            Exousia family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#c9a227] text-[#0b1d36] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors"
            >
              View Service Times
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
