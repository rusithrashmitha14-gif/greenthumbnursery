"use client";

import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Send
} from "lucide-react";
import { SITE_METADATA } from "@/data/greenThumbData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

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
  { id: "10-25k", label: "$10,000 – $25,000", desc: "Targeted enhancements, bed redesign, travertine patio" },
  { id: "25-50k", label: "$25,000 – $50,000", desc: "Complete backyard or front estate transformation with palms" },
  { id: "50-100k", label: "$50,000 – $100,000", desc: "Full 3D master plan, pool terrace, outdoor kitchen, irrigation" },
  { id: "100k+", label: "$100,000+", desc: "Comprehensive luxury multi-acre estate design-build" },
];

const TIMELINES = [
  "Immediately / Within 2 Weeks",
  "Within 1 to 2 Months",
  "3 to 6 Months (Planning Ahead)",
  "New Home Construction in Progress",
];

export default function QuoteModal({ isOpen, onClose, defaultService }: QuoteModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ["Landscape Architecture & 3D Master Planning"]
  );
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

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (selectedServices.length === 0) {
        newErrors.services = "Please select at least one service.";
      }
    } else if (currentStep === 2) {
      if (!propertyAddress.trim()) {
        newErrors.propertyAddress = "Please provide your property neighborhood or address.";
      }
    } else if (currentStep === 3) {
      if (!fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!email.trim() || !email.includes("@")) newErrors.email = "Valid email address is required.";
      if (!phone.trim() || phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid 10-digit phone number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(Math.max(1, step - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-950/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-botanical-border relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-forest-700 hover:text-forest-900 hover:bg-botanical-tint transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Confirmation State */}
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-3xl bg-emeraldAccent-light text-emeraldAccent mx-auto flex items-center justify-center mb-6 shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-emeraldAccent block mb-2">
              Inquiry Confirmed • Est. 1953
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-900 mb-4">
              Thank You, {fullName}.
            </h3>
            
            <div className="p-5 rounded-2xl bg-botanical-tint border border-botanical-border text-left mb-6 max-w-lg mx-auto space-y-2 text-xs sm:text-sm text-forest-800">
              <p>
                <strong>Requested Services:</strong> {selectedServices.join(", ")}
              </p>
              <p>
                <strong>Property Location:</strong> {propertyAddress}
              </p>
              <p>
                <strong>Target Budget:</strong> {budgetTier}
              </p>
              <p>
                <strong>Contact Time:</strong> {contactTime} via {phone}
              </p>
            </div>

            <p className="text-forest-700 text-sm max-w-md mx-auto leading-relaxed mb-8">
              A Green Thumb landscape architect will review your property notes and reach out within 24 business hours to schedule your on-site consultation.
            </p>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white font-bold text-sm shadow-md transition-all"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emeraldAccent mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Step 0{step} of 03 • Design Consultation Intake</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-900">
                {step === 1 && "Select the Services Your Property Needs"}
                {step === 2 && "Property Scope & Budget Parameters"}
                {step === 3 && "Your Contact & Scheduling Preferences"}
              </h2>
              <p className="text-forest-600 text-xs sm:text-sm mt-1">
                Direct consultation with licensed Florida landscape architects and horticulturists.
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="w-full bg-botanical-tint h-1.5 rounded-full overflow-hidden mb-8">
              <div
                className="bg-emeraldAccent h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            {/* Step 1: Services Multi-Select */}
            {step === 1 && (
              <div className="space-y-4">
                <span className="text-xs font-bold text-forest-700 block mb-2">
                  Select all offerings that apply to your project:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {AVAILABLE_SERVICES.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all border flex items-center justify-between gap-2 ${
                          isSelected
                            ? "bg-emeraldAccent-light border-emeraldAccent text-forest-900 shadow-sm"
                            : "bg-botanical-bg border-botanical-border text-forest-800 hover:bg-white hover:border-emeraldAccent/40"
                        }`}
                      >
                        <span>{srv}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-emeraldAccent border-emeraldAccent text-white"
                              : "border-forest-400 bg-white"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <p className="text-red-600 text-xs mt-1 font-semibold">{errors.services}</p>
                )}
              </div>
            )}

            {/* Step 2: Property & Budget Scope */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-forest-900 block mb-1.5">
                    Property Address or Neighborhood in Tampa Bay *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-forest-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={propertyAddress}
                      onChange={(e) => setPropertyAddress(e.target.value)}
                      placeholder="e.g. 1204 Riviera Dr, Davis Islands or South Tampa"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                    />
                  </div>
                  {errors.propertyAddress && (
                    <p className="text-red-600 text-xs mt-1 font-semibold">{errors.propertyAddress}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-forest-900 block mb-1.5">
                    Estimated Investment Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = budgetTier === tier.label;
                      return (
                        <button
                          type="button"
                          key={tier.id}
                          onClick={() => setBudgetTier(tier.label)}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            isSelected
                              ? "bg-emeraldAccent-light border-emeraldAccent"
                              : "bg-botanical-bg border-botanical-border hover:bg-white"
                          }`}
                        >
                          <span className="font-extrabold text-xs text-forest-900 block">
                            {tier.label}
                          </span>
                          <span className="text-[11px] text-forest-600 block line-clamp-1">
                            {tier.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-forest-900 block mb-1.5">
                    Target Start Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                  >
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-forest-900 block mb-1.5">
                    Project Vision or Special Considerations (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={projectVision}
                    onChange={(e) => setProjectVision(e.target.value)}
                    placeholder="Tell us about your outdoor living goals, shade conditions, desired specimen palms, or drainage issues..."
                    className="w-full px-4 py-2.5 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-forest-900 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Robert Sterling"
                    className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-xs mt-1 font-semibold">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-forest-900 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. robert@sterling.com"
                      className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
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
                      placeholder="e.g. (813) 555-0192"
                      className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1 font-semibold">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-forest-900 block mb-1">
                    Preferred Time for Introductory Call
                  </label>
                  <select
                    value={contactTime}
                    onChange={(e) => setContactTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-botanical-borderDark bg-botanical-bg text-forest-900 text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white"
                  >
                    <option value="Morning (8am–12pm)">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12pm–5pm)">Afternoon (12:00 PM – 5:00 PM)</option>
                    <option value="Evening (5pm–7pm)">Evening (5:00 PM – 7:00 PM)</option>
                  </select>
                </div>

                <div className="pt-2 text-xs text-forest-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emeraldAccent shrink-0" />
                  <span>We protect your privacy. Zero spam or shared contractor lists.</span>
                </div>
              </form>
            )}

            {/* Modal Action Footer */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-botanical-border">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl border border-botanical-borderDark text-forest-800 text-xs sm:text-sm font-bold hover:bg-botanical-tint flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3 rounded-xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white text-xs sm:text-sm font-extrabold shadow-lg flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
