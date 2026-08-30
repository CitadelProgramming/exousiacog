import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="bg-[#0b1d36] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] font-medium mb-3 tracking-wide">
            Gather With Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Service Times & Location
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Join us as we gather to worship, receive the Word, and grow together
            in the presence of God.
          </p>
        </div>
      </section>

      {/* ===== WEEKLY SERVICES ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-4">
              Weekly Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We gather several times a week. Everyone is welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Sunday */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#c9a227] font-bold text-lg">S</span>
              </div>
              <p className="text-sm font-semibold text-[#c9a227] mb-2 tracking-wide">
                SUNDAY
              </p>
              <h3 className="text-xl font-bold text-[#0b1d36] mb-3">
                Sunday Service
              </h3>
              <p className="text-gray-600 mb-4">
                Our main worship service filled with powerful praise, the Word
                of God, and the presence of the Holy Spirit.
              </p>
              <p className="text-sm text-gray-500">Time: To be confirmed</p>
            </div>

            {/* Wednesday */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#c9a227] font-bold text-lg">W</span>
              </div>
              <p className="text-sm font-semibold text-[#c9a227] mb-2 tracking-wide">
                WEDNESDAY
              </p>
              <h3 className="text-xl font-bold text-[#0b1d36] mb-3">
                Bible Teaching Service
              </h3>
              <p className="text-gray-600 mb-4">
                Midweek teaching where we dig deeper into the Word of God for
                growth, understanding, and transformation.
              </p>
              <p className="text-sm text-gray-500">Time: To be confirmed</p>
            </div>

            {/* Friday */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#c9a227] font-bold text-lg">F</span>
              </div>
              <p className="text-sm font-semibold text-[#c9a227] mb-2 tracking-wide">
                FRIDAY
              </p>
              <h3 className="text-xl font-bold text-[#0b1d36] mb-3">
                Prayer Service
              </h3>
              <p className="text-gray-600 mb-4">
                A powerful time of corporate prayer, intercession, and seeking
                the face of God together.
              </p>
              <p className="text-sm text-gray-500">Time: To be confirmed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#c9a227] font-medium mb-3">Find Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-6">
                Our Location
              </h2>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-[#0b1d36] mb-1">Address</h3>
                  <p>Mabushi, Abuja, Federal Capital Territory, Nigeria</p>
                  <p className="text-sm text-gray-500 mt-1">
                    (Full street address to be updated)
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0b1d36] mb-1">
                    Getting Here
                  </h3>
                  <p>
                    We are located in Mabushi, Abuja. Detailed directions and
                    landmarks will be added soon.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0b1d36] mb-1">
                    First Time?
                  </h3>
                  <p>
                    We would love to welcome you. Come as you are — you will
                    find a warm family ready to receive you.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#0b1d36] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#132f4c] transition-colors"
                >
                  Contact Us for Directions
                </Link>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-72 sm:h-80 md:h-96 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-gray-500 font-medium mb-2">Google Map</p>
                <p className="text-sm text-gray-400">
                  Map embed will be added here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-4">
              What to Expect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visiting a new church can feel uncertain. Here’s what you can look
              forward to when you join us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold">1</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-2">
                Warm Welcome
              </h3>
              <p className="text-gray-600 text-sm">
                Friendly faces ready to receive you and help you feel at home.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold">2</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-2">
                Powerful Worship
              </h3>
              <p className="text-gray-600 text-sm">
                Spirit-filled praise that lifts hearts and ushers in God’s
                presence.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold">3</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-2">
                Sound Teaching
              </h3>
              <p className="text-gray-600 text-sm">
                The Word of God taught with clarity, power, and practical
                application.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[#0b1d36] rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-[#c9a227] font-bold">4</span>
              </div>
              <h3 className="font-semibold text-[#0b1d36] mb-2">
                Real Community
              </h3>
              <p className="text-gray-600 text-sm">
                A family where you can grow, connect, and walk in purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 bg-[#0b1d36] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            We Can’t Wait to Meet You
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Come experience the presence of God with us this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="bg-[#c9a227] text-[#0b1d36] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
