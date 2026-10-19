"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Clock, 
  Layers 
} from "lucide-react";
import { SERVICES, SITE_METADATA } from "@/data/greenThumbData";

export default function SingleServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES.find((s) => s.slug === slug);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Header */}
      <section className="bg-forest-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block mb-2">
              Architectural Division
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-emerald-200 text-base sm:text-lg font-semibold mb-6">
              {service.tagline}
            </p>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              {service.shortDesc}
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-8 py-4 rounded-2xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-sm shadow-lg transition-all"
            >
              Request Free Consultation for {service.title}
            </button>
          </div>
        </div>
      </section>

      {/* Body Content & Process Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-900 mb-4">
                Overview & Horticultural Approach
              </h2>
              <p className="text-forest-700 text-base leading-relaxed font-normal">
                {service.fullDesc}
              </p>
            </div>

            {/* Deliverables */}
            <div className="p-8 rounded-3xl bg-white border border-botanical-border shadow-card">
              <h3 className="text-xl font-extrabold text-forest-900 mb-6">
                Comprehensive Phase Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-forest-800">
                    <CheckCircle2 className="w-4 h-4 text-emeraldAccent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Methodology */}
            <div>
              <h3 className="text-2xl font-extrabold text-forest-900 mb-6">
                Our 4-Phase Execution Standard
              </h3>
              <div className="space-y-6">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl bg-white border border-botanical-border shadow-sm flex items-start gap-5"
                  >
                    <span className="w-10 h-10 rounded-xl bg-forest-900 text-emerald-300 font-extrabold text-sm flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-base text-forest-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-forest-700 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-botanical-border shadow-card space-y-6">
              <h3 className="text-base font-extrabold text-forest-900 pb-3 border-b border-botanical-border">
                Technical Benchmarks
              </h3>

              <div className="space-y-4">
                {service.specs.map((sp, idx) => (
                  <div key={idx}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-forest-600 block mb-0.5">
                      {sp.label}
                    </span>
                    <span className="text-sm font-extrabold text-forest-900 block">
                      {sp.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-botanical-border space-y-3">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-xs sm:text-sm shadow-md transition-all text-center"
                >
                  Schedule Site Diagnostic
                </button>
                <a
                  href={`tel:${SITE_METADATA.rawPhone}`}
                  className="w-full py-3 rounded-xl border border-botanical-borderDark text-forest-900 font-bold text-xs sm:text-sm hover:bg-botanical-tint transition-all block text-center"
                >
                  Call {SITE_METADATA.phone}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-botanical-tint border border-botanical-border text-xs text-forest-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-forest-900">
                <ShieldCheck className="w-4 h-4 text-emeraldAccent" />
                <span>FL Licensed Contractor Guarantee</span>
              </div>
              <p>
                Backed by 70+ years of local family ownership and our 5-acre Sheldon Road botanical nursery.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={service.title}
      />
    </main>
  );
}
