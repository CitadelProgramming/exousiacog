import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="bg-[#0b1d36] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] font-medium mb-3 tracking-wide">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Exousia Church of God
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Life under God&apos;s authority. A house of power, a people of
            authority, and a move of God in Abuja.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#c9a227] font-medium mb-3">Our Story</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-6">
                Who We Are
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Exousia Church of God is a vibrant community of believers
                  located in Mabushi, Abuja. We are committed to raising a
                  people who live and walk under the authority of God.
                </p>
                <p>
                  The name <strong>Exousia</strong> comes from the Greek word
                  that means authority, power, and the right to act. This
                  captures our identity — a church that walks in the authority
                  given to us in Christ.
                </p>
                <p>
                  Led by Pastor Kunle Shoyele, we exist to equip believers,
                  transform lives, and advance the Kingdom of God through
                  powerful worship, sound teaching, and genuine fellowship.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-96 flex items-center justify-center order-first lg:order-last">
              <p className="text-gray-400 text-center px-4">
                Church Image / Leadership Photo
                <br />
                <span className="text-sm">(Replace later)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36]">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#c9a227] font-bold text-xl">V</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0b1d36] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To raise a generation of believers who walk in the full
                authority of God, transforming their world through the power of
                the Holy Spirit and the Word of God.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center mb-6">
                <span className="text-[#c9a227] font-bold text-xl">M</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0b1d36] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To equip the saints through sound teaching, powerful worship,
                and intentional discipleship so that every believer lives a life
                of purpose, power, and impact under God&apos;s authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#c9a227] font-medium mb-3">Leadership</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36]">
              Meet Our Lead Pastor
            </h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto bg-gray-200 rounded-full mb-8 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Pastor Photo</span>
            </div>

            <h3 className="text-2xl font-bold text-[#0b1d36] mb-2">
              Pastor Kunle Shoyele
            </h3>
            <p className="text-[#c9a227] font-medium mb-6">Lead Pastor</p>

            <p className="text-gray-600 leading-relaxed mb-8">
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
      <section className="py-16 md:py-20 bg-[#0b1d36] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            You Are Welcome Here
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We would love to meet you. Join us this week and experience the
            presence of God with us.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
