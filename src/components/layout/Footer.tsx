import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1d36] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Exousia Church of God
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Life under God&apos;s authority. A house of power, a people of
              authority, and a move of God in Abuja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#c9a227]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#c9a227]">
                  Service Times
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-[#c9a227]">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-[#c9a227]">
                  Give
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Sunday Service — Coming soon</li>
              <li>Wednesday Bible Teaching</li>
              <li>Friday Prayer Service</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">Mabushi, Abuja</p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/exousiaCOG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#c9a227] text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#c9a227] text-sm"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Exousia Church of God Abuja. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
