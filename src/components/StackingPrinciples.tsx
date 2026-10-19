"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  MapPin, 
  Calendar,
  Clock
} from "lucide-react";
import { CRAFTSMANSHIP_PRINCIPLES, SITE_METADATA } from "@/data/greenThumbData";

export default function StackingPrinciples() {
  return (
    <section className="py-24 sm:py-32 bg-botanical-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emeraldAccent-light border border-emeraldAccent/20 text-emeraldAccent text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Tampa Homeowners Choose Green Thumb</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-forest-900 tracking-tight mb-4">
            Five Principles of Enduring Craftsmanship.
          </h2>
          <p className="text-forest-700 text-base sm:text-lg leading-relaxed">
            Since 1953, we have refused to cut corners. Our reputation across Hillsborough County is built on rigorous agronomy, structural masonry, and total transparency.
          </p>
        </div>

        {/* 2-Column Stacking Experience */}
        <div className="grid lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: 5 Stacking Cards */}
          <div className="lg:col-span-7 space-y-8 relative">
            {CRAFTSMANSHIP_PRINCIPLES.map((principle, index) => {
              // Calculate progressive sticky top offsets so cards stack smoothly
              const topOffset = 110 + index * 24;
              return (
                <div
                  key={principle.number}
                  className="sticky bg-white rounded-3xl p-7 sm:p-9 border border-botanical-border shadow-card transition-all duration-300 hover:shadow-cardHover"
                  style={{ top: `${topOffset}px` }}
                >
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-botanical-border">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-emeraldAccent-light text-emeraldAccent font-extrabold text-sm flex items-center justify-center">
                        {principle.number}
                      </span>
                      <span className="text-[11px] font-extrabold tracking-widest uppercase text-forest-600">
                        Craftsmanship Standard
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emeraldAccent bg-botanical-tint px-2.5 py-1 rounded-full border border-botanical-border">
                      Guaranteed
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-forest-900 tracking-tight mb-3">
                    {principle.title}
                  </h3>

                  <p className="text-forest-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {principle.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-botanical-tint border border-botanical-borderDark flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emeraldAccent shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-forest-900">
                      {principle.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Pinned Project & Design Authority Showcase */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-forest-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-forest-900">
              
              {/* Image Showcase */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+13.jpg"
                  alt="Green Thumb Landscape Installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-forest-900/90 backdrop-blur-md text-emerald-300 text-xs font-bold border border-white/20">
                  Featured Master Build
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                    Davis Islands Waterfront
                  </span>
                  <h4 className="text-lg font-extrabold text-white">
                    Honed Travertine & Specimen Palm Lanai
                  </h4>
                </div>
              </div>

              {/* Showcase Body Specs */}
              <div className="p-6 sm:p-7 space-y-5">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/60 block mb-0.5">Established</span>
                    <span className="font-extrabold text-white text-sm">1953 (70+ Yrs)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/60 block mb-0.5">Licensed In</span>
                    <span className="font-extrabold text-white text-sm">Hillsborough Co.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/60 block mb-0.5">Plant Inventory</span>
                    <span className="font-extrabold text-white text-sm">1,200+ Varieties</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/60 block mb-0.5">Warranty</span>
                    <span className="font-extrabold text-white text-sm">10-Yr Hardscape</span>
                  </div>
                </div>

                <p className="text-xs text-white/80 leading-relaxed">
                  Every project is backed by our full-service Sheldon Road nursery, certified horticulturists, and licensed irrigation technicians.
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>State of Florida Licensed Contractor</span>
                  </div>
                  <Link
                    href="/about"
                    className="text-xs font-bold text-white hover:text-emerald-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Our Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Visit Nursery Callout Box */}
            <div className="bg-emeraldAccent-light rounded-2xl p-5 border border-emeraldAccent/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emeraldAccent text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-forest-900 text-sm">Visit Our 5-Acre Nursery</h4>
                <p className="text-xs text-forest-700">6913 Sheldon Rd, Tampa • Open 7 Days a Week</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
