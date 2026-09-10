import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3b0764] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Exousia Church of God"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-white leading-tight">
                  Exousia Church of God
                </p>
                <p className="text-xs text-slate-400 tracking-wide">ABUJA</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Life under God&apos;s authority. To lead and empower lives with
              Christ&apos;s authority and return nations back to God.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#c9a227] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#c9a227] transition-colors"
                >
                  Service Times
                </Link>
              </li>
              <li>
                <Link
                  href="/sermons"
                  className="hover:text-[#c9a227] transition-colors"
                >
                  Sermons
                </Link>
              </li>
              <li>
                <Link
                  href="/give"
                  className="hover:text-[#c9a227] transition-colors"
                >
                  Give
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-[#c9a227] transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#c9a227] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white mb-5">
              Service Times
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <p className="font-medium text-white">Sunday</p>
                <p className="text-slate-400">Pre-service: 8:30 AM</p>
                <p className="text-slate-400">Main Service: 9:00 – 11:30 AM</p>
              </li>
              <li>
                <p className="font-medium text-white">Wednesday</p>
                <p className="text-slate-400">5:30 PM (Online on Facebook)</p>
              </li>
              <li>
                <p className="font-medium text-white">Friday</p>
                <p className="text-slate-400">5:30 PM (Onsite)</p>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white mb-5">
              Connect
            </h3>
            <div className="space-y-3 text-sm text-slate-300 mb-6">
              <p className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                Mabushi, Abuja
              </p>
              <p className="flex items-center gap-2">
                <FiMail className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                info@exousiachurchofgod.com.ng
              </p>
              <p className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                +234 XXX XXX XXXX
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/exousiaCOG"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a227] hover:text-[#3b0764] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a227] hover:text-[#3b0764] transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Exousia Church of God Abuja. All rights
            reserved.
          </p>
          <p className="text-slate-500">Life under God&apos;s authority</p>
        </div>
      </div>
    </footer>
  );
}
