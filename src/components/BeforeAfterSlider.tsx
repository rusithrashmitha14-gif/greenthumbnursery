"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { 
  ChevronsLeftRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Droplet 
} from "lucide-react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  beforeDesc: string;
  afterDesc: string;
  stats: {
    icon: any;
    label: string;
    value: string;
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "waterfront-terrace",
    tabLabel: "Davis Islands Waterfront",
    title: "Tidal Erosion to Honed Travertine & Specimen Palms",
    location: "Davis Islands, Tampa, FL",
    beforeImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/1.jpg",
    afterImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After1.jpg",
    beforeDesc: "Saturated, un-compacted sod with chronic pooling after summer thunderstorms and decayed wooden decking.",
    afterDesc: "Sub-surface French drains, 2,400 sq.ft. of cool-touch ivory travertine, multi-trunk Sylvester date palms, and 2700K nightscaping.",
    stats: [
      { icon: Droplet, label: "Stormwater Drainage", value: "100% Zero Puddling" },
      { icon: ThermometerSnowflake, label: "Barefoot Comfort", value: "-18°F Cool-Touch" },
      { icon: TrendingUp, label: "Estate Value Lift", value: "+32% Valuation" },
    ],
  },
  {
    id: "shaded-courtyard",
    tabLabel: "South Tampa Botanical Courtyard",
    title: "Dying Shaded Turf to Resort-Style Living Lanai",
    location: "Palma Ceia / South Tampa, FL",
    beforeImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/2.jpg",
    afterImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After2.jpg",
    beforeDesc: "Overcast shade beneath grandfather oaks caused bare dirt erosion, moss build-up, and zero privacy.",
    afterDesc: "Shade-acclimatized Rhapis lady palms, imported Spanish cobalt water feature, and permeable shellstone terraces.",
    stats: [
      { icon: Droplet, label: "Irrigation Efficiency", value: "45% Water Saved" },
      { icon: ShieldCheck, label: "Shade Acclimatization", value: "100% Surviving Flora" },
      { icon: TrendingUp, label: "Entertaining Area", value: "+1,200 sq.ft." },
    ],
  },
  {
    id: "westchase-oasis",
    tabLabel: "Westchase Pool Retreat",
    title: "Builder-Grade Fill to Subtropical Sanctuary",
    location: "Westchase, Tampa, FL",
    beforeImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/6New.jpg",
    afterImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+12.jpg",
    beforeDesc: "Sterile builder sand fill with no windbreak, intense afternoon sun exposure, and plain poured concrete.",
    afterDesc: "Triple-trunk Foxtail palms, cascading natural stone spillway, fragrant 'Frostproof' gardenias, and outdoor fire lounge.",
    stats: [
      { icon: ThermometerSnowflake, label: "Microclimate Cooling", value: "-8°F Ambient Drop" },
      { icon: Droplet, label: "Drip Automation", value: "100% Micro-Zoned" },
      { icon: TrendingUp, label: "Aesthetic Rating", value: "5-Star Resort Vibe" },
    ],
  },
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 2) percent = 2;
    if (percent > 98) percent = 98;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 sm:py-32 bg-botanical-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emeraldAccent-light border border-emeraldAccent/20 text-emeraldAccent text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Drag-To-Compare</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-forest-900 tracking-tight mb-4">
            Witness the Green Thumb Transformation.
          </h2>
          <p className="text-forest-700 text-base sm:text-lg leading-relaxed">
            Drag the slider to reveal the difference between neglected, builder-grade Florida yards and master-engineered botanical sanctuaries.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {SCENARIOS.map((scenario) => {
            const isActive = activeTab === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => {
                  setActiveTab(scenario.id);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-forest-900 text-white shadow-md"
                    : "bg-white text-forest-800 border border-botanical-border hover:border-emeraldAccent hover:bg-botanical-tint"
                }`}
              >
                {scenario.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Card Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-card border border-botanical-border max-w-5xl mx-auto">
          
          {/* Subheading with Location */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-botanical-border gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emeraldAccent block mb-1">
                {currentScenario.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-forest-900">
                {currentScenario.title}
              </h3>
            </div>
            <span className="text-xs text-forest-600 bg-botanical-tint px-3 py-1.5 rounded-lg border border-botanical-border self-start sm:self-auto font-medium">
              Click & Drag Slider Handle
            </span>
          </div>

          {/* Interactive Slider Box */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[500px] md:h-[580px] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-botanical-border shadow-inner"
          >
            {/* After Image (Background full layer) */}
            <div className="absolute inset-0">
              <img
                src={currentScenario.afterImage}
                alt="After transformation"
                className="w-full h-full object-cover"
              />
              {/* After Badge */}
              <div className="absolute top-5 right-5 z-20 px-3.5 py-1.5 rounded-full bg-forest-900/90 backdrop-blur-md text-emerald-300 font-extrabold text-xs uppercase tracking-wider border border-white/20 shadow-md">
                After: Master Built
              </div>
            </div>

            {/* Before Image (Clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src={currentScenario.beforeImage}
                alt="Before condition"
                className="w-full h-full object-cover filter contrast-[0.95]"
              />
              {/* Before Badge */}
              <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 shadow-md">
                Before: Raw Site
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" />
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-forest-900 border-2 border-emeraldAccent shadow-2xl flex items-center justify-center pointer-events-auto transform transition-transform hover:scale-110 active:scale-95">
                <ChevronsLeftRight className="w-6 h-6 text-emeraldAccent" />
              </div>
            </div>
          </div>

          {/* Quantitative ROI Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-botanical-border">
            {currentScenario.stats.map((st, i) => {
              const IconComp = st.icon;
              return (
                <div
                  key={i}
                  className="bg-botanical-tint/70 p-4 rounded-2xl border border-botanical-border flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emeraldAccent-light text-emeraldAccent flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-forest-600 uppercase tracking-wider block">
                      {st.label}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-forest-900">
                      {st.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Before & After Descriptive Breakdown */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 p-5 rounded-2xl bg-botanical-bg border border-botanical-border">
            <div>
              <span className="text-xs font-bold uppercase text-red-700 block mb-1">
                Existing Deficiencies:
              </span>
              <p className="text-xs sm:text-sm text-forest-700 leading-relaxed">
                {currentScenario.beforeDesc}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase text-emeraldAccent block mb-1">
                Green Thumb Architectural Solution:
              </span>
              <p className="text-xs sm:text-sm text-forest-700 leading-relaxed">
                {currentScenario.afterDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
