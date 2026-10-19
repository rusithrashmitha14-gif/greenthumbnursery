"use client";

import React from "react";
import { CheckCircle2, ShieldAlert, Award, Sparkles, Layers } from "lucide-react";
import { PARALLAX_PHASES } from "@/data/greenThumbData";

export default function ParallaxStory() {
  return (
    <section className="relative bg-forest-950 text-white">
      {/* Sticky Background Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed transform scale-105 transition-all duration-700"
          style={{
            backgroundImage: `url('https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/ITC-HH-0030-bff0234c-06d37227-76bc53cc-1920w.jpg')`,
          }}
        />
        {/* Forest vignette overlay (WCAG AAA contrast backdrop) */}
        <div className="absolute inset-0 bg-[#111E13]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-transparent to-forest-950" />

        {/* Floating background ambient watermarks */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-5 select-none hidden lg:block">
          <span className="text-[140px] font-black tracking-tighter text-white">
            MASTER BUILD
          </span>
        </div>
      </div>

      {/* Floating Story Cards that glide over the pinned background */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-[90vh] pb-32">
        {/* Editorial Section Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-20 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Green Thumb Engineering Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How True Luxury Landscapes Are Built to Last.
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Florida&apos;s heat, sand, and tropical deluges destroy amateur landscaping. Scroll through our four-phase turnkey engineering methodology.
          </p>
        </div>

        {/* The 4 Parallax Cards */}
        <div className="space-y-36 sm:space-y-48">
          {PARALLAX_PHASES.map((phase, idx) => (
            <div
              key={phase.phase}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-11 border border-white/60 shadow-2xl transition-all duration-300 hover:shadow-cardHover max-w-2xl mx-auto"
            >
              {/* Card Header & Step Counter */}
              <div className="flex items-center justify-between border-b border-botanical-border pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-forest-900 text-emerald-400 font-extrabold text-sm flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-emeraldAccent">
                    {phase.phase}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-botanical-tint text-forest-700 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-emeraldAccent" />
                  <span>Florida Standard</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-900 tracking-tight mb-3">
                {phase.title}
              </h3>
              <p className="text-forest-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {phase.tagline}
              </p>

              {/* Technical Benchmark Badge */}
              <div className="p-3.5 rounded-xl bg-botanical-tint border border-botanical-borderDark mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emeraldAccent text-white flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-forest-600 block">
                    Technical Benchmark
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-forest-900">
                    {phase.benchmark}
                  </span>
                </div>
              </div>

              {/* Green Checkmarks List */}
              <div className="space-y-3 pt-2">
                {phase.checklist.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emeraldAccent shrink-0 mt-0.5" />
                    <span className="text-forest-800 text-sm font-medium leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
