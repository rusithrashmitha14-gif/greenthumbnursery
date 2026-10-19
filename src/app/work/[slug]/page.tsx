"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Trees 
} from "lucide-react";
import { PORTFOLIO_PROJECTS, SITE_METADATA } from "@/data/greenThumbData";

export default function SingleWorkPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Header */}
      <section className="bg-forest-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Transformations</span>
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/20">
                {project.neighborhood}
              </span>
              <span className="text-xs text-white/70">
                Lot Size: {project.lotSize} • Completed {project.completionDate}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-3.5 rounded-2xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-sm shadow-lg transition-all"
              >
                Inquire About a Similar Design
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        {/* Quantitative Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.highlightStats.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-botanical-border shadow-card flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emeraldAccent-light text-emeraldAccent flex items-center justify-center font-extrabold shrink-0">
                ✓
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-forest-600 block mb-0.5">
                  {st.label}
                </span>
                <span className="text-xl sm:text-2xl font-black text-forest-900">
                  {st.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Before and After Side-by-Side */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-botanical-border shadow-card">
          <h2 className="text-2xl font-extrabold text-forest-900 mb-8">
            Site Transformation Comparison
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="relative h-72 sm:h-88 rounded-2xl overflow-hidden mb-3 border border-botanical-border">
                <img
                  src={project.beforeImage}
                  alt="Existing Condition Before"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-bold">
                  Existing Condition Before
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-red-800 uppercase tracking-wider mb-1">
                The Site Deficiency:
              </h4>
              <p className="text-forest-700 text-xs sm:text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <div className="relative h-72 sm:h-88 rounded-2xl overflow-hidden mb-3 border border-botanical-border">
                <img
                  src={project.afterImage}
                  alt="Completed Master Build After"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emeraldAccent text-white text-xs font-bold">
                  Completed Master Build
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-emeraldAccent uppercase tracking-wider mb-1">
                The Green Thumb Architectural Solution:
              </h4>
              <p className="text-forest-700 text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Botanical Plant Schedule Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-botanical-border shadow-card">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emeraldAccent mb-2">
            <Trees className="w-4 h-4" />
            <span>Nursery-Direct Botanical Schedule</span>
          </div>
          <h3 className="text-2xl font-extrabold text-forest-900 mb-6">
            Installed Plant Palette & Canopies
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-botanical-border text-forest-600 uppercase text-[11px] font-bold">
                  <th className="py-3 px-4">Specimen Botanical</th>
                  <th className="py-3 px-4">Qty / Volume</th>
                  <th className="py-3 px-4">Architectural Placement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-botanical-border text-forest-800">
                {project.plantSchedule.map((row, idx) => (
                  <tr key={idx} className="hover:bg-botanical-tint/40">
                    <td className="py-3.5 px-4 font-bold text-forest-900">{row.plant}</td>
                    <td className="py-3.5 px-4 font-semibold text-emeraldAccent">{row.count}</td>
                    <td className="py-3.5 px-4 text-forest-700">{row.placement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Material Palette Grid */}
        <div className="p-8 rounded-3xl bg-botanical-tint border border-botanical-border">
          <h3 className="text-xl font-extrabold text-forest-900 mb-4">
            Hardscape & Material Palette
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.materialPalette.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-botanical-border shadow-sm text-center"
              >
                <Layers className="w-5 h-5 text-emeraldAccent mx-auto mb-2" />
                <span className="text-xs font-bold text-forest-900 block">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-botanical-border text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-900 mb-4">
            Transform Your Property Like This {project.neighborhood} Estate.
          </h3>
          <p className="text-forest-700 text-sm leading-relaxed mb-6">
            Our landscape architects and certified horticulturists will visit your property for a comprehensive diagnostic.
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="px-8 py-4 rounded-2xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-extrabold text-sm shadow-md transition-all"
          >
            Request Consultation
          </button>
        </div>
      </section>

      <Footer />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={`Inquiry for layout similar to ${project.title}`}
      />
    </main>
  );
}
