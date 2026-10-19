"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Calendar, 
  Trees, 
  Users, 
  MapPin, 
  Clock, 
  Phone 
} from "lucide-react";
import { SITE_METADATA } from "@/data/greenThumbData";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Header */}
      <section className="bg-forest-950 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/Topiary+Flowers+Sails-1920w.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Over 70 Years of Botanical Leadership</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Rooted in Tampa Bay Since 1953.
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              For over seven decades, Green Thumb Nursery has been the benchmark for Florida horticulture, architectural landscape design, and estate outdoor living across Hillsborough County.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20">
        
        {/* 2-Col Legacy Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emeraldAccent">
              Our 1953 Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-900 tracking-tight">
              From a Modest Florida Nursery to an Architectural Authority.
            </h2>
            <p className="text-forest-700 text-base leading-relaxed">
              When Green Thumb Nursery opened its gates on Sheldon Road in 1953, Tampa Bay was a sleepy coastal community. Over the last 70+ years, our campus has expanded to 5 vibrant acres while staying true to our core mission: helping Florida homeowners create outdoor sanctuaries that thrive under our unique climate.
            </p>
            <p className="text-forest-700 text-base leading-relaxed">
              Unlike generic corporate retailers that ship delicate greenhouse plants from northern states, we cultivate and acclimatize our specimens right here on Sheldon Road. When our plants are placed in your yard, they don&apos;t experience transplant shock—they immediately flourish.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-botanical-border shadow-sm">
                <span className="text-2xl font-black text-emeraldAccent block">1953</span>
                <span className="text-xs text-forest-600 font-semibold">Founded in Tampa</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-botanical-border shadow-sm">
                <span className="text-2xl font-black text-emeraldAccent block">5+ Acres</span>
                <span className="text-xs text-forest-600 font-semibold">Retail Nursery</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-botanical-border shadow-sm">
                <span className="text-2xl font-black text-emeraldAccent block">10,000+</span>
                <span className="text-xs text-forest-600 font-semibold">Completed Estates</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-botanical-border">
              <img
                src="https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/ITC-HH-0030-bff0234c-06d37227-76bc53cc-1920w.jpg"
                alt="Green Thumb Nursery Campus"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-emerald-300 block mb-1">
                  6913 Sheldon Rd, Tampa
                </span>
                <p className="font-extrabold text-lg">
                  Home to Over 1,200 Specimen Plant Varieties & Living Displays
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars of Difference */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-botanical-border shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-900 mb-3">
              The Green Thumb In-House Distinction
            </h3>
            <p className="text-forest-600 text-sm">
              We never outsource your estate to disjointed subcontractors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emeraldAccent-light text-emeraldAccent flex items-center justify-center font-bold">
                <Trees className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-extrabold text-forest-900">Nursery-Direct Selection</h4>
              <p className="text-forest-700 text-xs sm:text-sm leading-relaxed">
                You tag your actual specimen palms, mature trees, and handcrafted pottery in person at our Sheldon Road nursery before they arrive at your home.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emeraldAccent-light text-emeraldAccent flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-extrabold text-forest-900">Licensed Design-Build</h4>
              <p className="text-forest-700 text-xs sm:text-sm leading-relaxed">
                State of Florida licensed landscape contractors with in-house civil grading, stone masonry, and certified irrigation technicians.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emeraldAccent-light text-emeraldAccent flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-extrabold text-forest-900">Lifetime Agronomic Care</h4>
              <p className="text-forest-700 text-xs sm:text-sm leading-relaxed">
                Our plant clinic is always open for free diagnostics, soil analysis, and customized seasonal fertilizer schedules.
              </p>
            </div>
          </div>
        </div>

        {/* Store Campus Card */}
        <div className="bg-forest-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">
                Visit Us in Person
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Experience 5 Acres of Tropical Inspiration.
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                Open 7 days a week to homeowners, interior designers, and estate managers. Walk our garden pathways and consult with our friendly plant specialists.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-white/90 pt-2">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  {SITE_METADATA.address}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Mon–Sat 8AM–5PM • Sun 9AM–5PM
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full py-4 rounded-2xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-sm shadow-md transition-all text-center"
              >
                Book Landscape Consultation
              </button>
              <a
                href={`tel:${SITE_METADATA.rawPhone}`}
                className="w-full py-3.5 rounded-2xl border border-white/20 text-white font-bold text-sm text-center hover:bg-white/10 transition-all"
              >
                Call the Desk: {SITE_METADATA.phone}
              </a>
            </div>
          </div>
        </div>

      </section>

      <Footer />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </main>
  );
}
