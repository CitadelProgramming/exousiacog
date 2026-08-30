"use client";

import { useState } from "react";
import Link from "next/link";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (we will connect this properly later)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="bg-[#0b1d36] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a227] font-medium mb-3 tracking-wide">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out for prayers, questions, or
            just to say hello.
          </p>
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1d36] mb-8">
                How to Reach Us
              </h2>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a227] font-bold">📍</span>
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
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a227] font-bold">✉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1d36] mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@exousiachurchofgod.com.ng
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      (Update with real email later)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a227] font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1d36] mb-1">
                      Phone / WhatsApp
                    </h3>
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                    <p className="text-sm text-gray-500 mt-1">
                      (Add real phone number later)
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#0b1d36] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c9a227] font-bold">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1d36] mb-1">
                      Social Media
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <a
                        href="https://www.facebook.com/exousiaCOG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0b1d36] hover:text-[#c9a227] font-medium text-sm"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.youtube.com/@exousiachurchofgodabuja5042"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0b1d36] hover:text-[#c9a227] font-medium text-sm"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0b1d36] mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0b1d36] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We will get back to you soon.
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition"
                        placeholder="+234..."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition bg-white"
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0b1d36] text-white font-semibold py-4 rounded-full hover:bg-[#132f4c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1d36] mb-4">
            Prefer to Visit Us?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We would be delighted to welcome you in person this week.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center bg-[#0b1d36] text-white font-medium px-8 py-4 rounded-full hover:bg-[#132f4c] transition-colors"
          >
            View Service Times
          </Link>
        </div>
      </section>
    </>
  );
}
