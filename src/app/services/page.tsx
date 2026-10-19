"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { 
  Compass, 
  Layers, 
  Sprout, 
  Droplets, 
  Flame, 
  PartyPopper, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Phone 
} from "lucide-react";
import { SERVICES, SITE_METADATA } from "@/data/greenThumbData";

const iconMap: Record<string, any> = {
  Compass,
  Layers,
  Sprout,
  Droplets,
  Flame,
  PartyPopper,
};

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenQuote = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setIsQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Hero Header */}
      <section className="bg-forest-950 text-white py-20 relative overflow-hidden">
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
              <span>Full-Service Florida Design-Build</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Turnkey Architectural Landscaping & Nursery Services.
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Every property is unique. Since 1953, Green Thumb Nursery has combined 3D landscape architecture, natural stone masonry, smart irrigation engineering, and a 5-acre specimen nursery under one trusted roof.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleOpenQuote()}
                className="px-8 py-4 rounded-2xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-sm shadow-lg transition-all"
              >
                Request On-Site Consultation
              </button>
              <a
                href={`tel:${SITE_METADATA.rawPhone}`}
                className="px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/10 text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {SITE_METADATA.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Deep Dive List */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.iconName] || Sprout;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-32 grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Media Column */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-botanical-border group">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  
                  {/* Floating spec pill */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emeraldAccent block mb-1">
                      Architectural Specification:
                    </span>
                    <div className="flex flex-wrap gap-4 text-xs font-bold text-forest-900">
                      {service.specs.map((sp, i) => (
                        <div key={i}>
                          <span className="text-forest-600 block text-[10px] font-medium">{sp.label}:</span>
                          <span>{sp.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emeraldAccent-light text-emeraldAccent text-xs font-bold uppercase tracking-wider">
                  <Icon className="w-4 h-4" />
                  <span>Service Division 0{index + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
                  {service.title}
                </h2>

                <p className="text-emeraldAccent font-bold text-sm sm:text-base">
                  {service.tagline}
                </p>

                <p className="text-forest-700 text-sm sm:text-base leading-relaxed font-normal">
                  {service.fullDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-forest-600 block">
                    What We Deliver:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emeraldAccent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-forest-900 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleOpenQuote(service.title)}
                    className="px-6 py-3 rounded-xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs sm:text-sm font-bold text-forest-900 hover:text-emeraldAccent transition-colors underline underline-offset-4"
                  >
                    View Detailed Process & FAQs
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-botanical-tint/80 border-t border-botanical-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-forest-900 mb-4">
            Combine Services for a Seamless Turnkey Project.
          </h3>
          <p className="text-forest-700 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Most of our clients pair 3D landscape master planning with travertine hardscaping, smart irrigation, and specimen palms tagged at our 5-acre nursery.
          </p>
          <button
            onClick={() => handleOpenQuote()}
            className="px-8 py-4 rounded-2xl bg-forest-900 hover:bg-forest-950 text-white font-bold text-sm shadow-md transition-all"
          >
            Start Your Multi-Service Master Plan
          </button>
        </div>
      </section>

      <Footer />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedService}
      />
    </main>
  );
}
