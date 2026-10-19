"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Leaf, 
  Sun, 
  Droplet, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Clock 
} from "lucide-react";
import { PLANTS_DATA, SITE_METADATA } from "@/data/greenThumbData";

export default function PlantCareHighlight() {
  const featuredPlants = PLANTS_DATA.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-botanical-tint/40 relative border-t border-botanical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emeraldAccent-light border border-emeraldAccent/20 text-emeraldAccent text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nursery-Direct Florida Flora</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-forest-900 tracking-tight mb-4">
              Acclimatized on 5 Acres in Tampa Since 1953.
            </h2>
            <p className="text-forest-700 text-base sm:text-lg leading-relaxed">
              Every tree, palm, and shrub in our nursery is acclimated to natural Tampa sunshine and seasonal humidity. No delicate greenhouse plants that scorch when planted in your soil.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/plants"
              className="px-6 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-950 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Explore Complete Plant Catalog</span>
              <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredPlants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-3xl overflow-hidden border border-botanical-border shadow-card hover:shadow-cardHover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-60 w-full overflow-hidden bg-forest-950">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-forest-900 shadow-sm">
                    {plant.category}
                  </div>

                  {/* Botanical Name overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] italic text-emerald-300 block">
                      {plant.botanicalName}
                    </span>
                    <h3 className="text-base font-extrabold text-white leading-tight">
                      {plant.name}
                    </h3>
                  </div>
                </div>

                {/* Specs */}
                <div className="p-5">
                  <p className="text-forest-700 text-xs leading-relaxed mb-4 line-clamp-3">
                    {plant.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-botanical-border text-[11px]">
                    <div className="flex items-center gap-1.5 text-forest-800">
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                      <span>{plant.light}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-forest-800">
                      <Droplet className="w-3.5 h-3.5 text-blue-500" />
                      <span>{plant.water}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag button */}
              <div className="p-5 pt-0">
                <Link
                  href="/plants"
                  className="w-full py-2.5 rounded-xl bg-botanical-tint hover:bg-emeraldAccent-light text-forest-900 hover:text-emeraldAccent text-xs font-bold border border-botanical-border flex items-center justify-center gap-1 transition-colors"
                >
                  <span>View Plant Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Acre Nursery Banner */}
        <div className="bg-forest-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/Topiary+Flowers+Sails-1920w.jpg')`,
            }}
          />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                <Leaf className="w-3.5 h-3.5" />
                <span>Open to Homeowners & Designers 7 Days A Week</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                Walk Our 5-Acre Sheldon Road Garden Center.
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Bring your yard photos and questions to our free in-store Plant Clinic. Our horticulturists diagnose pests, recommend fertilizer schedules, and help tag mature palms for your home.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-white/90">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  6913 Sheldon Rd, Tampa, FL 33615
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Mon–Sat 8AM–5PM • Sun 9AM–5PM
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=6913+Sheldon+Rd,+Tampa,+FL+33615"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-white text-forest-900 font-extrabold text-sm text-center shadow-md hover:bg-emeraldAccent-light transition-all"
              >
                Get Directions to Nursery
              </a>
              <Link
                href="/gardening-tips"
                className="w-full py-3.5 rounded-2xl border border-white/20 text-white font-bold text-sm text-center hover:bg-white/10 transition-all"
              >
                Read Seasonal Gardening Tips
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
