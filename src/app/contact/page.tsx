"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  ArrowRight 
} from "lucide-react";
import { SITE_METADATA } from "@/data/greenThumbData";

const AVAILABLE_SERVICES = [
  "Landscape Architecture & 3D Master Planning",
  "Artisanal Natural Stone & Travertine Hardscaping",
  "Smart Irrigation Systems, Water Audits & Repairs",
  "Acclimatized Specimen Palms & Canopy Trees",
  "Outdoor Kitchens, Fire Features & Living Lanai",
  "Luxury Event Plant & Spanish Pottery Rentals",
  "5-Acre Nursery Plant Consultation",
];

const BUDGET_TIERS = [
  { label: "$10,000 – $25,000", desc: "Targeted planting, bed redesign, travertine patio" },
  { label: "$25,000 – $50,000", desc: "Complete backyard or front estate transformation with palms" },
  { label: "$50,000 – $100,000", desc: "Full 3D master plan, pool terrace, outdoor kitchen, irrigation" },
  { label: "$100,000+", desc: "Comprehensive luxury multi-acre estate design-build" },
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Landscape Architecture & 3D Master Planning",
  ]);
  const [budgetTier, setBudgetTier] = useState<string>("$25,000 – $50,000");
  const [timeline, setTimeline] = useState<string>("Within 1 to 2 Months");
  const [propertyAddress, setPropertyAddress] = useState<string>("");
  const [projectVision, setProjectVision] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [contactTime, setContactTime] = useState<string>("Morning (8am–12pm)");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim() || !email.includes("@")) newErrors.email = "Valid email is required.";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid phone number is required.";
    if (!propertyAddress.trim()) newErrors.propertyAddress = "Property location is required.";
    if (selectedServices.length === 0) newErrors.services = "Please select at least one service.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar />

      {/* Header */}
      <section className="bg-forest-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/ITC-HH-0030-bff0234c-06d37227-76bc53cc-1920w.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Architectural Inquiry</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Schedule Your On-Site Property Diagnostic.
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Connect directly with our senior landscape architects and certified Florida horticulturists. We provide detailed 3D master plans, soil testing, and turnkey construction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Intake Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-botanical-border shadow-card">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-3xl bg-emeraldAccent-light text-emeraldAccent mx-auto flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-emeraldAccent block mb-2">
                  Inquiry Received • Est. 1953
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-900 mb-4">
                  Thank You, {fullName}.
                </h3>

                <div className="p-5 rounded-2xl bg-botanical-tint border border-botanical-border text-left mb-6 space-y-2 text-xs sm:text-sm text-forest-800">
                  <p>
                    <strong>Selected Services:</strong> {selectedServices.join(", ")}
                  </p>
                  <p>
                    <strong>Property Location:</strong> {propertyAddress}
                  </p>
                  <p>
                    <strong>Target Budget:</strong> {budgetTier}
                  </p>
                  <p>
                    <strong>Contact Window:</strong> {contactTime} via {phone}
                  </p>
                </div>

                <p className="text-forest-700 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  A Green Thumb landscape architect will review your property notes and reach out within 24 business hours to schedule an on-site consultation.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white font-bold text-sm shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-xl font-extrabold text-forest-900 mb-1">
                    Project Intake & Scope Details
                  </h3>
                  <p className="text-forest-600 text-xs">
                    Please provide property parameters so our design team can prepare before calling.
                  </p>
                </div>

                {/* Services multi select */}
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-forest-900 block mb-2">
                    1. Desired Services (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {AVAILABLE_SERVICES.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between gap-2 ${
                            isSelected
                              ? "bg-emeraldAccent-light border-emeraldAccent text-forest-900"
                              : "bg-botanical-bg border-botanical-border hover:bg-white"
                          }`}
                        >
                          <span className="line-clamp-1">{srv}</span>
                          <div
                            className={`w-3.5 h-3.5 rounded border shrink-0 flex items-center justify-center ${
                              isSelected ? "bg-emeraldAccent border-emeraldAccent text-white" : "border-forest-400 bg-white"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-red-600 text-xs mt-1 font-semibold">{errors.services}</p>
                  )}
                </div>

                {/* Investment tier */}
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-forest-900 block mb-2">
                    2. Estimated Project Investment Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = budgetTier === tier.label;
                      return (
                        <button
                          type="button"
                          key={tier.label}
                          onClick={() => setBudgetTier(tier.label)}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            isSelected
                              ? "bg-emeraldAccent-light border-emeraldAccent"
                              : "bg-botanical-bg border-botanical-border hover:bg-white"
                          }`}
                        >
                          <span className="text-xs font-extrabold text-forest-900 block">
                            {tier.label}
                          </span>
                          <span className="text-[10px] text-forest-600 block line-clamp-1">
                            {tier.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Property location & timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-forest-900 block mb-1">
                      Property Address / Tampa Neighborhood *
                    </label>
                    <input
                      type="text"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="e.g. Davis Islands, South Tampa, Westchase"
                      className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-xs sm:text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                    />
                    {errors.propertyAddress && (
                      <p className="text-red-600 text-xs mt-1 font-semibold">{errors.propertyAddress}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-forest-900 block mb-1">
                      Target Start Date
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-xs sm:text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                    >
                      <option value="Immediately / Next 2 Weeks">Immediately / Next 2 Weeks</option>
                      <option value="Within 1 to 2 Months">Within 1 to 2 Months</option>
                      <option value="3 to 6 Months (Planning Ahead)">3 to 6 Months (Planning Ahead)</option>
                      <option value="New Construction Build">New Construction Build</option>
                    </select>
                  </div>
                </div>

                {/* Contact information */}
                <div className="space-y-4 pt-4 border-t border-botanical-border">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-forest-900 block">
                    3. Homeowner Contact Information
                  </span>

                  <div>
                    <label className="text-xs font-bold text-forest-900 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-xs sm:text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-xs mt-1 font-semibold">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-forest-900 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. eleanor@vance.com"
                        className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-xs sm:text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1 font-semibold">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-forest-900 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. (813) 884-3797"
                        className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-xs sm:text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1 font-semibold">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-forest-900 block mb-1">
                      Project Vision or Specific Questions
                    </label>
                    <textarea
                      rows={3}
                      value={projectVision}
                      onChange={(e) => setProjectVision(e.target.value)}
                      placeholder="Describe your outdoor space, pool area, drainage concerns, or desired palm specimens..."
                      className="w-full px-4 py-2.5 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-xs sm:text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit On-Site Diagnostic Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Campus Details & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-900 text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 block mb-1">
                  Nursery Campus & Design Studio
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  Visit Green Thumb in Person
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Main Campus Address</strong>
                    <span>{SITE_METADATA.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Telephone</strong>
                    <a href={`tel:${SITE_METADATA.rawPhone}`} className="hover:text-emerald-300">
                      {SITE_METADATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Design Department Email</strong>
                    <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-emerald-300">
                      {SITE_METADATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Nursery Operating Hours</strong>
                    <span>Monday – Saturday: 8:00 AM – 5:00 PM</span>
                    <span className="block text-white/60">Sunday: 9:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=6913+Sheldon+Rd,+Tampa,+FL+33615"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-white text-forest-900 font-extrabold text-xs sm:text-sm text-center shadow-md hover:bg-emeraldAccent-light transition-all block"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Service Areas Box */}
            <div className="p-6 rounded-3xl bg-white border border-botanical-border shadow-card space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-forest-600 block">
                Tampa Bay Residential Service Areas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SITE_METADATA.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-botanical-tint text-forest-800 text-xs font-semibold border border-botanical-border"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Licensing & Credentials Box */}
            <div className="p-6 rounded-3xl bg-emeraldAccent-light border border-emeraldAccent/20 text-xs text-forest-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-forest-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-emeraldAccent" />
                <span>State of Florida Licensed & Insured</span>
              </div>
              <p>
                FL Lic. #LC-1953 • Certified Commercial Irrigation Contractor • Certified Pest Control Operator • Established 1953.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
