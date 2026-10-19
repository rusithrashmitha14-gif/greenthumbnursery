"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Calendar, 
  Layers, 
  Maximize2 
} from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/greenThumbData";

interface ShowcaseProps {
  onOpenQuote?: () => void;
}

export default function TransformationsShowcase({ onOpenQuote }: ShowcaseProps) {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>("All");

  const neighborhoods = ["All", "Davis Islands", "South Tampa", "Westchase", "Avila"];

  const filteredProjects = selectedNeighborhood === "All"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.neighborhood.toLowerCase().includes(selectedNeighborhood.toLowerCase()));

  return (
    <section className="py-24 sm:py-32 bg-botanical-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emeraldAccent-light border border-emeraldAccent/20 text-emeraldAccent text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-forest-900 tracking-tight mb-4">
              Master Transformations Across Tampa Bay.
            </h2>
            <p className="text-forest-700 text-base sm:text-lg leading-relaxed">
              Explore our recent residential estate installations. Each project represents a custom marriage of architectural stonework, acclimatized flora, and smart water management.
            </p>
          </div>

          {/* Neighborhood filter pills */}
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

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-botanical-border shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Hero Showcase Photo */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-forest-950">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  
                  {/* Neighborhood badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-forest-900 font-extrabold text-xs shadow-md flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emeraldAccent" />
                    <span>{project.neighborhood}</span>
                  </div>

                  {/* Lot size badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-forest-900/90 backdrop-blur-md text-emerald-300 font-bold text-xs border border-white/20">
                    {project.lotSize}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                      Completed {project.completionDate}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-7">
                  <p className="text-forest-700 text-sm leading-relaxed mb-6 font-normal">
                    {project.solution}
                  </p>

                  {/* Quantitative Stats */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-botanical-border bg-botanical-tint/50 rounded-2xl px-4 mb-6">
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

                  {/* Material Tags */}
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-forest-600 block mb-2">
                      Materials & Flora Spec:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.materialPalette.map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-botanical-tint text-forest-800 text-[11px] font-medium border border-botanical-border"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-botanical-border/60 mt-4">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-xs font-bold text-forest-900 hover:text-emeraldAccent flex items-center gap-1.5 transition-colors"
                >
                  <span>View Full Architectural Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emeraldAccent" />
                </Link>

                <button
                  onClick={onOpenQuote}
                  className="text-xs font-extrabold text-emeraldAccent hover:underline"
                >
                  Request Similar Layout
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-forest-900 hover:bg-forest-950 text-white font-bold text-sm shadow-md transition-all group"
          >
            <span>View All Completed Projects in Portfolio</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
