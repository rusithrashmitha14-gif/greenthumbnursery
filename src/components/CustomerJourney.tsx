"use client";

import React from "react";
import { 
  Sparkles, 
  Search, 
  Compass, 
  Hammer, 
  HeartHandshake, 
  ArrowRight,
  Clock
} from "lucide-react";

interface CustomerJourneyProps {
  onOpenQuote?: () => void;
}

const STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Site Diagnostic",
    duration: "Week 01",
    tagline: "Comprehensive on-site property evaluation",
    description: "A senior landscape architect visits your estate to assess solar angles, root zones, soil pH, irrigation water source, and your family's lifestyle vision.",
    deliverable: "Topographical & horticultural site analysis report",
  },
  {
    step: "02",
    icon: Compass,
    title: "3D Master Plan & Material Palette",
    duration: "Weeks 02–03",
    tagline: "Virtual photorealistic visualization",
    description: "Walk through your transformed property in cinematic 3D. We finalize plant schedules, travertine samples, and visit our nursery to tag your specimen palms.",
    deliverable: "CAD schematics, 3D renderings & fixed-price quote",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Precision Construction & Planting",
    duration: "Weeks 04–06",
    tagline: "White-glove design-build execution",
    description: "Our in-house crews handle laser grading, drainage, stone masonry, smart WiFi irrigation, specimen crane placement, and 2700K low-voltage nightscaping.",
    deliverable: "Daily progress check-ins & clean jobsite standard",
  },
  {
    step: "04",
    icon: HeartHandshake,
    title: "Walkthrough & Lifetime Care Guide",
    duration: "Hand-off & Beyond",
    tagline: "Enduring horticultural partnership",
    description: "Complete walkthrough with your architect, smart app programming on your phone, seasonal fertilization roadmap, and our full nursery warranty.",
    deliverable: "1-Yr Plant Warranty & custom care schedule",
  },
];

export default function CustomerJourney({ onOpenQuote }: CustomerJourneyProps) {
  return (
    <section className="py-24 sm:py-32 bg-botanical-tint/60 relative border-t border-botanical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emeraldAccent-light border border-emeraldAccent/20 text-emeraldAccent text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Turnkey Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-forest-900 tracking-tight mb-4">
            From Vision to Sanctuary in Four Seamless Steps.
          </h2>
          <p className="text-forest-700 text-base sm:text-lg leading-relaxed">
            We eliminate the stress of managing multiple subcontractors. One dedicated project director guides your estate from initial sketch to decades of flourishing growth.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-7 border border-botanical-border shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Step & Duration */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-botanical-border">
                    <span className="text-3xl font-black text-forest-900/20 group-hover:text-emeraldAccent transition-colors">
                      {step.step}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-forest-600 bg-botanical-tint px-2.5 py-1 rounded-full border border-botanical-border">
                      <Clock className="w-3 h-3 text-emeraldAccent" />
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-emeraldAccent-light flex items-center justify-center text-emeraldAccent mb-4 group-hover:bg-emeraldAccent group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-forest-900 mb-2">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold text-emeraldAccent uppercase tracking-wider block mb-3">
                    {step.tagline}
                  </span>

                  <p className="text-forest-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-4 border-t border-botanical-border">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-forest-600 block mb-1">
                    Phase Outcome:
                  </span>
                  <p className="text-xs font-bold text-forest-900">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:p-5 sm:px-8 rounded-3xl border border-botanical-border shadow-md">
            <span className="text-sm font-bold text-forest-900">
              Ready to begin Step 01 on your property?
            </span>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full bg-emeraldAccent hover:bg-emeraldAccent-hover text-white text-xs sm:text-sm font-extrabold shadow-md transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>Schedule Site Diagnostic</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
