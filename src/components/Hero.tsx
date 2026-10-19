"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass, ShieldCheck, SunMedium } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenQuote?: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Background Photography with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/ITC-HH-0030-bff0234c-06d37227-76bc53cc-1920w.jpg"
          alt="Green Thumb Nursery premier Florida landscape and garden center"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01] transform transition-transform duration-1000 ease-out"
        />
        {/* Subtle vignette so the landscape photography stays vivid, vibrant, and sun-drenched */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Frosted Glassmorphism Card */}
          <div className="max-w-2xl bg-white/70 backdrop-blur-2xl rounded-3xl sm:rounded-[32px] p-7 sm:p-11 border border-white/85 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.9)]">
            
            {/* Location Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 mb-5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emeraldAccent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emeraldAccent" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-forest-900 uppercase">
                Landscaping in Tampa, Florida
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111e13] leading-[1.12]">
              Transform Your Outdoor Space{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emeraldAccent to-emerald-700">
                Into Something Extraordinary.
              </span>
            </h1>

            {/* Supporting Copy - High Contrast */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#1e2f20] font-medium leading-relaxed">
              Thoughtfully designed landscapes, beautifully maintained lawns, and outdoor spaces made for living.
            </p>

            {/* CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-bold text-base shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <Link
                href="/work"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/90 hover:bg-white text-[#111E13] font-bold text-base shadow-md border border-white/90 flex items-center justify-center transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Florida Craftsmanship Trust Signal */}
            <div className="mt-7 pt-5 border-t border-[#111E13]/10 flex items-center gap-2 text-xs text-[#223624] font-medium">
              <ShieldCheck className="w-4 h-4 text-emeraldAccent shrink-0" />
              <span>
                Licensed & Insured Landscape Contractor • Serving Davis Islands, Hyde Park & Greater Tampa Bay
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Pillar Strip at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block border-t border-botanical-border bg-white/90 backdrop-blur-md py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-xs text-forest-700">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emeraldAccent-light text-emeraldAccent">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-forest-900">Tailored 3D Master Planning</p>
                <p className="text-forest-600 text-[11px]">Scaled specifically to your property layout</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emeraldAccent-light text-emeraldAccent">
                <SunMedium className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-forest-900">Florida-Acclimated Botanicals</p>
                <p className="text-forest-600 text-[11px]">Drought, salt & humidity resilient flora</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emeraldAccent-light text-emeraldAccent">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-forest-900">Artisanal Stone & Living Patios</p>
                <p className="text-forest-600 text-[11px]">Engineered sub-base & drainage systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
