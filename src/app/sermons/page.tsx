import Link from "next/link";

export default function SermonsPage() {
  // Placeholder sermon data (we will replace this with real data later)
  const latestSermons = [
    {
      id: 1,
      title: "Life Under God's Authority",
      preacher: "Pastor Kunle Shoyele",
      date: "Recent",
      description:
        "A powerful message on walking in the authority that God has given us in Christ.",
    },
    {
      id: 2,
      title: "Seeking the Things Above",
      preacher: "Pastor Kunle Shoyele",
      date: "Recent",
      description:
        "Living with an eternal perspective and setting our minds on things above.",
    },
    {
      id: 3,
      title: "The Power of Prayer",
      preacher: "Exousia Church of God",
      date: "Recent",
      description:
        "Understanding the authority we carry when we pray according to God's will.",
    },
  ];

  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="bg-[#0b1d36] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] font-medium mb-3 tracking-wide">Media</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Sermons & Messages
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Watch and listen to powerful messages that equip you to walk in
            God&apos;s authority.
          </p>
        </div>
      </section>

      {/* ===== FEATURED / LATEST ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b1d36] mb-4">
              Latest Messages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Catch up on recent teachings from Pastor Kunle Shoyele and the
              Exousia family.
            </p>
          </div>

          {/* Featured Video Placeholder */}
          <div className="mb-16">
            <div className="bg-[#0b1d36] rounded-2xl overflow-hidden aspect-video flex items-center justify-center max-w-4xl mx-auto">
              <div className="text-center px-6">
                <p className="text-white/80 text-lg font-medium mb-2">
                  Featured Sermon
                </p>
                <p className="text-white/50 text-sm">
                  YouTube embed will be added here
                </p>
                <a
                  href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-[#c9a227] text-[#0b1d36] font-semibold px-6 py-3 rounded-full hover:bg-[#b8911f] transition-colors text-sm"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Sermon Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestSermons.map((sermon) => (
              <div
                key={sermon.id}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail Placeholder */}
                <div className="bg-[#0b1d36] h-48 flex items-center justify-center">
                  <span className="text-white/40 text-sm">
                    Sermon Thumbnail
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-sm text-[#c9a227] font-medium mb-2">
                    {sermon.date}
                  </p>
                  <h3 className="text-lg font-bold text-[#0b1d36] mb-2 line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {sermon.preacher}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {sermon.description}
                  </p>
                  <a
                    href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0b1d36] font-medium text-sm hover:text-[#c9a227] transition-colors"
                  >
                    Watch Message →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== YOUTUBE CHANNEL CTA ===== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1d36] mb-4">
            More Messages on YouTube
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to our YouTube channel to watch full services, teachings,
            and special programs.
          </p>
          <a
            href="https://www.youtube.com/@exousiachurchofgodabuja5042"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#0b1d36] text-white font-medium px-8 py-4 rounded-full hover:bg-[#132f4c] transition-colors"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 bg-[#0b1d36] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Join Us Live This Week
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Experience the Word and worship with us in person at Exousia Church
            of God, Abuja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#c9a227] text-[#0b1d36] font-semibold px-8 py-4 rounded-full hover:bg-[#b8911f] transition-colors"
            >
              View Service Times
            </Link>
            <Link
              href="/visit"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
