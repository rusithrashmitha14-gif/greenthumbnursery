"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Layers, 
  Calendar, 
  Maximize2 
} from "lucide-react";
import { PORTFOLIO_PROJECTS, SITE_METADATA } from "@/data/greenThumbData";

export default function WorkPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("All");

  const neighborhoods = ["All", "Davis Islands", "South Tampa", "Westchase", "Avila"];

  const filtered = selectedNeighborhood === "All"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.neighborhood.toLowerCase().includes(selectedNeighborhood.toLowerCase()));

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Header */}
      <section className="bg-forest-950 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After1.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estate Case Studies & Transformations</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Our Completed Transformations Across Tampa Bay.
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Explore our architectural case studies. Every estate featured represents an engineered master plan pairing Florida soil science, cool-touch travertine, and hand-tagged specimen palms.
            </p>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-8 py-4 rounded-2xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-sm shadow-lg transition-all"
            >
              Discuss Your Property Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Slider Featured in Work section */}
      <BeforeAfterSlider />

      {/* Filterable Portfolio Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-12 border-b border-botanical-border gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-900">
              Curated Architectural Transformations
            </h2>
            <p className="text-forest-600 text-xs sm:text-sm mt-1">
              Select a neighborhood to filter projects by micro-climate and soil profile.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {neighborhoods.map((n) => (
              <button
                key={n}
                onClick={() => setSelectedNeighborhood(n)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedNeighborhood === n
                    ? "bg-forest-900 text-white shadow-md"
                    : "bg-white text-forest-800 border border-botanical-border hover:bg-botanical-tint"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-botanical-border shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-forest-950">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-forest-900 font-extrabold text-xs shadow-md flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emeraldAccent" />
                    <span>{project.neighborhood}</span>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-forest-900/90 backdrop-blur-md text-emerald-300 font-bold text-xs border border-white/20">
                    {project.lotSize}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      Completed {project.completionDate}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-7 space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest-600 block mb-1">
                      The Challenge & Execution:
                    </span>
                    <p className="text-forest-700 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Quantitative Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-botanical-border bg-botanical-tint/60 rounded-2xl px-4">
                    {project.highlightStats.map((st, i) => (
                      <div key={i} className="text-center">
                        <span className="text-[10px] uppercase font-bold text-forest-600 block mb-0.5">
                          {st.label}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-forest-900">
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Plant Schedule Sneak Peek */}
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-600 block mb-2">
                      Specimen Flora Installed:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.plantSchedule.map((p, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-emeraldAccent-light text-forest-900 text-[11px] font-medium border border-emeraldAccent/20"
                        >
                          {p.count}× {p.plant}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-7 pt-0 flex items-center justify-between border-t border-botanical-border/60 mt-4">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-xs sm:text-sm font-bold text-forest-900 hover:text-emeraldAccent flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 text-emeraldAccent" />
                </Link>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="text-xs font-extrabold text-emeraldAccent hover:underline"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
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
