'use client';

import { useState } from "react";
import {
  CloudUpload,
  BadgeDollarSign,
  Wallet,
  ShieldCheck,
  Timer,
  Handshake,
  Smile,
  Star,
  MessageCircle
} from "lucide-react";
import { CTAButtons } from "./components/CTAButtonComponent";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required.";
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.licenseType) newErrors.licenseType = "Please select a license type.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted!");
    }
  };

  return (
    <>
      <header className="w-full py-6 px-4 sm:px-8 flex items-center justify-between bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
          <span className="font-semibold text-xl text-gray-800">SoftSell</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
          <a href="#how" className="hover:text-blue-600">How It Works</a>
          <a href="#why" className="hover:text-blue-600">Why Us</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-12 space-y-24">

        {/* Hero Section */}
        <section className="max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Turn Unused Software Into Cash – Instantly.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            We help businesses resell surplus or expired software licenses effortlessly.
            Fast valuations, secure transactions, and maximum value – all in one place.
          </p>
          <CTAButtons />
        </section>

        {/* How It Works */}
        <section className="w-full max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: <CloudUpload className="w-12 h-12 text-blue-600 mb-4" />,
                title: "Upload License",
                desc: "Submit details of the licenses you want to resell.",
              },
              {
                icon: <BadgeDollarSign className="w-12 h-12 text-green-600 mb-4" />,
                title: "Get Valuation",
                desc: "Receive a fair market quote within 24 hours.",
              },
              {
                icon: <Wallet className="w-12 h-12 text-purple-600 mb-4" />,
                title: "Get Paid",
                desc: "Accept the offer and receive instant payment.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {[
              {
                icon: <ShieldCheck className="text-blue-600 w-6 h-6" />,
                text: "Secure & Verified Transactions",
              },
              {
                icon: <Timer className="text-green-600 w-6 h-6" />,
                text: "Fast Valuations & Payouts",
              },
              {
                icon: <Handshake className="text-purple-600 w-6 h-6" />,
                text: "Trusted by 100+ Businesses",
              },
              {
                icon: <Smile className="text-yellow-500 w-6 h-6" />,
                text: "Satisfaction Guaranteed",
              },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex items-start gap-4">
                {icon}
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                name: "Priya Desai",
                role: "IT Manager",
                company: "TechNova Ltd.",
                review: "Fast, easy, and reliable. We recovered thousands in unused licenses.",
              },
              {
                name: "David Lee",
                role: "Procurement Lead",
                company: "SoftBridge Inc.",
                review: "The process was smooth and payment was super quick!",
              },
            ].map(({ name, role, company, review }, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-left space-y-2">
                <MessageCircle className="w-6 h-6 text-blue-500" />
                <p className="text-gray-700 italic">"{review}"</p>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-600">
                  {role}, {company}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        {/* Contact Form */}
        <section className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Let’s Talk</h2>
          <p className="text-gray-600 text-center mb-8 text-sm">
            Send us your details and we’ll get back to you within 24 hours.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Company</label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">License Type</label>
              <select
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.licenseType}
                onChange={(e) => setForm({ ...form, licenseType: e.target.value })}
              >
                <option value="">Select License Type</option>
                <option value="Office 365">Office 365</option>
                <option value="Adobe Suite">Adobe Suite</option>
                <option value="Antivirus">Antivirus</option>
                <option value="Other">Other</option>
              </select>
              {errors.licenseType && (
                <p className="text-red-500 text-xs mt-1">{errors.licenseType}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

      </main>
    </>
  );
}
