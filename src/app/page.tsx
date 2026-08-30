import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#0b1d36] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d36] via-[#0b1d36]/90 to-[#0b1d36]/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-[#c9a227] font-medium tracking-wide mb-4">
              Welcome to Exousia Church of God
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Life Under God&apos;s Authority
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              A house of power, a people of authority, and a move of God in the
              heart of Abuja. Join us as we worship, grow, and walk in the
              authority of Christ.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center bg-[#c9a227] text-[#0b1d36] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/sermons"
                className="inline-flex items-center justify-center border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Watch Latest Sermon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE TIMES ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1d36] mb-3">
              Join Us This Week
            </h2>
            <p className="text-gray-600">
              We would love to welcome you into our church family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sunday */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-[#c9a227] mb-2">SUNDAY</p>
              <h3 className="text-xl font-semibold text-[#0b1d36] mb-2">
                Sunday Service
              </h3>
              <p className="text-gray-600 text-sm">Time to be confirmed</p>
              <p className="text-gray-500 text-sm mt-1">Mabushi, Abuja</p>
            </div>

            {/* Wednesday */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-[#c9a227] mb-2">
                WEDNESDAY
              </p>
              <h3 className="text-xl font-semibold text-[#0b1d36] mb-2">
                Bible Teaching
              </h3>
              <p className="text-gray-600 text-sm">Midweek Word & Teaching</p>
              <p className="text-gray-500 text-sm mt-1">Mabushi, Abuja</p>
            </div>

            {/* Friday */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-sm font-medium text-[#c9a227] mb-2">FRIDAY</p>
              <h3 className="text-xl font-semibold text-[#0b1d36] mb-2">
                Prayer Service
              </h3>
              <p className="text-gray-600 text-sm">Powerful Prayer Night</p>
              <p className="text-gray-500 text-sm mt-1">Mabushi, Abuja</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-[#0b1d36] font-medium hover:text-[#c9a227] transition-colors"
            >
              View full service schedule →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WELCOME / ABOUT TEASER ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c9a227] font-medium mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0b1d36] mb-6">
                A People Walking in Authority
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Exousia Church of God is a vibrant community of believers in
                Abuja committed to living under God&apos;s authority. Led by
                Pastor Kunle Shoyele, we exist to raise a generation that walks
                in the power and purpose of God.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are new to faith or looking for a place to grow
                deeper, you are welcome here.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center bg-[#0b1d36] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#132f4c] transition-colors"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Placeholder for image */}
            <div className="bg-[#0b1d36] rounded-2xl h-80 md:h-96 flex items-center justify-center">
              <p className="text-white/60 text-center px-6">
                Church / Worship Image
                <br />
                <span className="text-sm">(Add image later)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-20 bg-[#0b1d36] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join us this Sunday, watch a message online, or partner with us in
            advancing the Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="bg-[#c9a227] text-[#0b1d36] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors"
            >
              Visit Us
            </Link>
            <Link
              href="/give"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Give Online
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
