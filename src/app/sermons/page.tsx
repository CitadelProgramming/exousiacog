import Link from "next/link";
import { FiArrowRight, FiPlay, FiExternalLink } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function SermonsPage() {
  const sermons = [
    {
      id: 1,
      title: "Life Under God's Authority",
      preacher: "Pastor Kunle Shoyele",
      date: "Recent",
    },
    {
      id: 2,
      title: "Seeking the Things Above",
      preacher: "Pastor Kunle Shoyele",
      date: "Recent",
    },
    {
      id: 3,
      title: "The Power of Prayer",
      preacher: "Exousia Church of God",
      date: "Recent",
    },
  ];

  return (
    <>
      <section className="relative bg-[#0b1d36] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d36] via-[#0f2744] to-[#0b1d36]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">Media</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Sermons & Messages
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Watch and listen to powerful messages that equip you to walk in
            God&apos;s authority.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="bg-[#0b1d36] rounded-3xl overflow-hidden aspect-video flex items-center justify-center max-w-4xl mx-auto relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <FiPlay className="w-7 h-7 text-[#c9a227]" />
                </div>
                <p className="text-white/70 font-medium mb-1">
                  Featured Sermon
                </p>
                <p className="text-white/40 text-sm mb-6">
                  YouTube embed coming soon
                </p>
                <a
                  href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c9a227] text-[#0b1d36] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#b8911f] transition-colors"
                >
                  Watch on YouTube <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sermons.map((sermon) => (
              <div
                key={sermon.id}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#0b1d36] h-48 flex items-center justify-center relative">
                  <FiPlay className="w-10 h-10 text-white/30 group-hover:text-[#c9a227] transition-colors" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#c9a227] tracking-wider uppercase mb-2">
                    {sermon.date}
                  </p>
                  <h3 className="text-lg font-bold text-[#0b1d36] mb-1">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-5">
                    {sermon.preacher}
                  </p>
                  <a
                    href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0b1d36] hover:text-[#c9a227] transition-colors"
                  >
                    Watch Message <FiArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0b1d36] tracking-tight mb-4">
            More on YouTube
          </h2>
          <p className="text-slate-600 mb-8">
            Subscribe to our channel for full services, teachings, and special
            programs.
          </p>
          <a
            href="https://www.youtube.com/@exousiachurchofgodabuja5042"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b1d36] text-white font-medium px-8 py-4 rounded-full hover:bg-[#132f4c] transition-all"
          >
            Visit YouTube Channel <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
