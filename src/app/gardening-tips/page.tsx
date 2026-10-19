"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  User, 
  Droplet, 
  Bug, 
  Sun, 
  Leaf, 
  Phone 
} from "lucide-react";
import { GARDENING_TIPS_ARTICLES, SITE_METADATA } from "@/data/greenThumbData";

export default function GardeningTipsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(GARDENING_TIPS_ARTICLES[0].id);

  const activeArticle = GARDENING_TIPS_ARTICLES.find((a) => a.id === selectedArticleId) || GARDENING_TIPS_ARTICLES[0];

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Header */}
      <section className="bg-forest-950 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/Topiary+Flowers+Sails-1920w.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Plant Clinic & Agronomic Advisory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Florida Gardening Wisdom Since 1953.
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Florida&apos;s heat, rainfall, and pests are unlike anywhere else in the nation. Learn directly from our certified horticulturists on maintaining lush St. Augustine turf, thriving palms, and vibrant blooms.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Article List Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-forest-600 block mb-2">
              Featured Guides
            </span>
            {GARDENING_TIPS_ARTICLES.map((article) => {
              const isActive = selectedArticleId === article.id;
              return (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticleId(article.id)}
                  className={`w-full p-5 rounded-2xl text-left border transition-all ${
                    isActive
                      ? "bg-white border-emeraldAccent shadow-card text-forest-900"
                      : "bg-botanical-tint/60 border-botanical-border hover:bg-white text-forest-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-2 font-bold">
                    <span className="text-emeraldAccent uppercase">{article.category}</span>
                    <span className="text-forest-500">{article.readTime}</span>
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-forest-900 mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-forest-600 line-clamp-2">
                    {article.summary}
                  </p>
                </button>
              );
            })}

            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-forest-900 text-white mt-8 space-y-3">
              <h4 className="font-bold text-sm text-white">Need In-Person Plant Diagnosis?</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Bring leaf samples or lawn photos to our Sheldon Road nursery. Our Plant Clinic is open 7 days a week.
              </p>
              <a
                href={`tel:${SITE_METADATA.rawPhone}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {SITE_METADATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Active Article Full View */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-botanical-border shadow-card">
            <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 border-b border-botanical-border text-xs text-forest-600">
              <span className="px-3 py-1 rounded-full bg-emeraldAccent-light text-emeraldAccent font-extrabold uppercase">
                {activeArticle.category}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5" />
                {activeArticle.readTime}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-3.5 h-3.5" />
                {activeArticle.author}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest-900 tracking-tight mb-8">
              {activeArticle.title}
            </h2>

            {/* Article Content */}
            <div className="prose prose-forest max-w-none text-forest-800 text-sm sm:text-base leading-relaxed space-y-6">
              {activeArticle.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Action Footer */}
            <div className="mt-12 pt-8 border-t border-botanical-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-forest-900 block">
                  Questions about your lawn or shrubs?
                </span>
                <span className="text-xs text-forest-600">
                  Speak directly with a Green Thumb certified specialist.
                </span>
              </div>
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-6 py-3 rounded-xl bg-emeraldAccent hover:bg-emeraldAccent-hover text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                Book On-Site Agronomic Consult
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="Agronomic & Lawn Care Consultation"
      />
    </main>
  );
}
