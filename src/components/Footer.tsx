"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { SITE_METADATA, SERVICES } from "@/data/greenThumbData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-forest-950 text-white pt-20 pb-12 border-t border-forest-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Advisory Banner */}
        <div className="bg-forest-900/90 rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Tampa Bay Botanical Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Seasonal Florida Gardening & Lawn Advisory
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl">
                Get monthly alerts on Hillsborough County watering restrictions, sod webworm prevention, and exclusive arrivals of specimen palms and imported pottery.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you for subscribing! Your seasonal guide will arrive shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-forest-950 border border-white/20 text-white text-sm focus:outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Identity & Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emeraldAccent flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white block">
                  GREEN THUMB
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 block -mt-1">
                  NURSERY & LANDSCAPING
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Tampa Bay&apos;s premier garden center and licensed design-build landscape contractor since 1953. 5-acre retail nursery, specimen flora, and turnkey outdoor living.
            </p>

            <div className="space-y-2 text-xs text-white/80 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>State of Florida Licensed Landscape Contractor • FL Lic. #LC-1953</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified Irrigation Contractor • Certified Pest Control Operator</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-5">
              Turnkey Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Nursery & Inventory */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-5">
              Nursery & Garden Center
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/plants" className="hover:text-white transition-colors">
                  Specimen Palms & Cycads
                </Link>
              </li>
              <li>
                <Link href="/plants" className="hover:text-white transition-colors">
                  Flowering Trees & Topiaries
                </Link>
              </li>
              <li>
                <Link href="/plants" className="hover:text-white transition-colors">
                  Proven Winners® leafjoy®
                </Link>
              </li>
              <li>
                <Link href="/gardening-tips" className="hover:text-white transition-colors">
                  Plant Clinic & Soil Testing
                </Link>
              </li>
              <li>
                <Link href="/services/event-rentals" className="hover:text-white transition-colors">
                  Pottery & Event Rentals
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Completed Estate Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & Hours */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-5">
              Campus & Hours
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SITE_METADATA.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`tel:${SITE_METADATA.rawPhone}`} className="hover:text-white">
                  {SITE_METADATA.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-white">
                  {SITE_METADATA.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Mon–Sat: 8:00 AM – 5:00 PM</p>
                  <p className="text-white/60">Sunday: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Service Areas Strip */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              Service Communities:
            </span>
            <span>{SITE_METADATA.serviceAreas.join(" • ")}</span>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Green Thumb Nursery Inc. All rights reserved. Family-owned in Tampa since 1953.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Our 70-Year Story
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Schedule Consultation
            </Link>
            <Link href="/gardening-tips" className="hover:text-white transition-colors">
              Gardening Tips
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
