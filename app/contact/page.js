"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "New Project Inquiry";
    const message = formData.get("message") || "";

    const mailtoUrl = `mailto:info@khairadigital.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${name} <${email}>\nSubject: ${subject}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-900 font-sans pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 font-semibold text-xs rounded-full mb-4 uppercase tracking-wider">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Have a software engineering, AI model fine-tuning, or cloud architecture inquiry? Let&apos;s collaborate! Reach out to us directly or send a message below.
        </p>
      </section>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
          <p className="text-gray-500 text-sm mb-8">Fill out the form below and our technical engineering leads will get back to you within 24 hours.</p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-6 rounded-2xl text-center space-y-2">
              <h3 className="text-lg font-bold">Opening Email Client...</h3>
              <p className="text-sm">Your message details have been formatted for info@khairadigital.com. Thank you for reaching out!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Project Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Fullstack Web App / LLM Fine-Tuning / Cloud DevOps"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your technical project requirements..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-slate-50/50 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}

          <BorderBeam duration={8} size={150} borderWidth={2} colorFrom="#2563eb" colorTo="#06b6d4" />
        </div>

        {/* Direct Contact Cards Column */}
        <div className="lg:col-span-5 space-y-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reach Us Directly</h2>

          {/* Email Card */}
          <a
            href="mailto:info@khairadigital.com"
            className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Official Email</p>
              <p className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                info@khairadigital.com
              </p>
            </div>
          </a>

          {/* Office Address Card */}
          <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Registered Office</p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5 leading-relaxed">
                Khaira Digital Solutions Private Limited
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Prateek Laurel, Sector 120, Noida, Uttar Pradesh – 201301, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
