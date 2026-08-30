"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <section className="relative bg-[#0b1d36] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d36] via-[#0f2744] to-[#0b1d36]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <HiOutlineSparkles className="w-4 h-4 text-[#c9a227]" />
            <span className="text-sm text-white/90 font-medium">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out for prayers, questions, or
            just to say hello.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1d36] mb-8">
                How to Reach Us
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0b1d36] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1d36] mb-1">
                      Location
                    </h3>
                    <p className="text-slate-600">
                      Mabushi, Abuja, FCT, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0b1d36] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1d36] mb-1">Email</h3>
                    <p className="text-slate-600">
                      info@exousiachurchofgod.com.ng
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0b1d36] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1d36] mb-1">
                      Phone / WhatsApp
                    </h3>
                    <p className="text-slate-600">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://www.facebook.com/exousiaCOG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0b1d36] hover:bg-[#c9a227] hover:text-white transition-all"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0b1d36] hover:bg-[#c9a227] hover:text-white transition-all"
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-[#0b1d36] mb-6">
                Send Us a Message
              </h2>
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl font-bold">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0b1d36] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Thank you. We will get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#c9a227] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition"
                        placeholder="+234..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="partnership">Partnership / Giving</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0b1d36] text-white font-semibold py-4 rounded-full hover:bg-[#132f4c] transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
