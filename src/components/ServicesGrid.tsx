"use client";

import React from "react";
import Link from "next/link";
import { 
  Compass, 
  Layers, 
  Sprout, 
  Droplets, 
  Flame, 
  PartyPopper, 
  ArrowRight, 
  Check, 
  Sparkles 
} from "lucide-react";
import { SERVICES } from "@/data/greenThumbData";

interface ServicesGridProps {
  onOpenQuote?: () => void;
}

const iconMap: Record<string, any> = {
  Compass,
  Layers,
  Sprout,
  Droplets,
  Flame,
  PartyPopper,
};

export default function ServicesGrid({ onOpenQuote }: ServicesGridProps) {
  return (
    <section className="py-24 sm:py-32 bg-botanical-tint/50 relative border-y border-botanical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emeraldAccent-light border border-emeraldAccent/20 text-emeraldAccent text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Horticultural Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-forest-900 tracking-tight mb-4">
              Comprehensive Services for Florida Estates.
            </h2>
            <p className="text-forest-700 text-base sm:text-lg leading-relaxed">
              From 3D architectural master plans and laser-graded stone hardscaping to our 5-acre retail nursery and smart irrigation systems, we manage every phase in-house.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-xl border border-botanical-borderDark bg-white hover:border-emeraldAccent text-forest-900 font-bold text-sm shadow-sm transition-all flex items-center gap-2 group"
            >
              <span>View All Service Specs</span>
              <ArrowRight className="w-4 h-4 text-emeraldAccent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Sprout;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden border border-botanical-border shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Hero Photo */}
                  <div className="relative h-56 w-full overflow-hidden bg-forest-950">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Icon Pill */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center text-forest-900 shadow-md">
                      <Icon className="w-5 h-5 text-emeraldAccent" />
                    </div>

                    {/* Tagline over image bottom */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                        Florida Standard
                      </span>
                      <p className="text-white text-xs font-medium truncate">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-extrabold text-forest-900 mb-3 group-hover:text-emeraldAccent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-forest-700 text-sm leading-relaxed mb-6 font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2.5 pt-4 border-t border-botanical-border">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-600 block mb-1">
                        Core Capabilities:
                      </span>
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-forest-800">
                          <Check className="w-4 h-4 text-emeraldAccent shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-botanical-border/60 mt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-forest-900 hover:text-emeraldAccent flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emeraldAccent" />
                  </Link>

                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-extrabold text-emeraldAccent hover:underline"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
