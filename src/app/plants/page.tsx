"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { 
  Sparkles, 
  Search, 
  Sun, 
  Droplet, 
  MapPin, 
  Clock, 
  Leaf, 
  ShieldCheck, 
  Phone 
} from "lucide-react";
import { PLANTS_DATA, SITE_METADATA } from "@/data/greenThumbData";

export default function PlantsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPlantForQuote, setSelectedPlantForQuote] = useState<string | undefined>();

  const categories = [
    "All",
    "Palms & Cycads",
    "Specimen Trees",
    "Flowering Shrubs",
    "Houseplants & leafjoy®",
    "Perennials & Annuals",
  ];

  const filteredPlants = PLANTS_DATA.filter((plant) => {
    const matchesCategory = selectedCategory === "All" || plant.category === selectedCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (plant.botanicalName && plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquirePlant = (plantName: string) => {
    setSelectedPlantForQuote(`Nursery availability for ${plantName}`);
    setIsQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col pt-24">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Header */}
      <section className="bg-forest-950 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/Topiary+Flowers+Sails-1920w.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-400/30">
              <Leaf className="w-3.5 h-3.5" />
              <span>5-Acre Retail Nursery & Specimen Center</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Florida-Acclimatized Botanical Inventory.
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Explore specimen palms, sculpted topiaries, certified Proven Winners®, and rare indoor foliage. Every botanical is nurtured under natural Tampa sunshine on Sheldon Road for guaranteed survival.
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
              <a href={`tel:${SITE_METADATA.rawPhone}`} className="flex items-center gap-2 text-emerald-300 hover:text-white font-bold">
                <Phone className="w-4 h-4" />
                Call {SITE_METADATA.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Category Filter Controls */}
      <section className="py-12 bg-white border-b border-botanical-border sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-forest-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plants by common or botanical name..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-botanical-borderDark bg-botanical-bg text-forest-900 text-xs sm:text-sm focus:outline-none focus:border-emeraldAccent focus:bg-white transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-forest-900 text-white shadow-md"
                      : "bg-botanical-bg text-forest-800 border border-botanical-border hover:bg-white hover:border-emeraldAccent/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-forest-600">
            Showing {filteredPlants.length} Botanical Varieties
          </span>
          <span className="text-xs text-emeraldAccent font-bold">
            Live Inventory at 6913 Sheldon Rd
          </span>
        </div>

        {filteredPlants.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-botanical-border p-8">
            <Leaf className="w-12 h-12 text-forest-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-forest-900 mb-2">No Plants Match Your Search</h3>
            <p className="text-forest-600 text-sm max-w-md mx-auto mb-6">
              Our 5-acre nursery carries over 1,200 seasonal varieties. Call our plant desk directly or reset your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 rounded-full bg-forest-900 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <div
                key={plant.id}
                className="bg-white rounded-3xl overflow-hidden border border-botanical-border shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-64 w-full overflow-hidden bg-forest-950">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-forest-900 shadow-sm">
                      {plant.category}
                    </span>

                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-forest-900/90 text-emerald-300 text-[10px] font-bold border border-white/20">
                      {plant.hardiness}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4">
                      {plant.botanicalName && (
                        <span className="text-[11px] italic text-emerald-300 block">
                          {plant.botanicalName}
                        </span>
                      )}
                      <h3 className="text-base font-extrabold text-white leading-tight">
                        {plant.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body & Specs */}
                  <div className="p-5">
                    <p className="text-forest-700 text-xs leading-relaxed mb-4">
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

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleInquirePlant(plant.name)}
                    className="w-full py-2.5 rounded-xl bg-botanical-tint hover:bg-emeraldAccent-light text-forest-900 hover:text-emeraldAccent text-xs font-bold border border-botanical-border transition-colors text-center"
                  >
                    Check Availability / Tag Specimen
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Free Plant Clinic Banner */}
      <section className="py-16 bg-botanical-tint border-t border-botanical-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-emeraldAccent-light text-emeraldAccent mx-auto flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-900 mb-3">
            Have a Sick Plant or Need Soil Advice?
          </h3>
          <p className="text-forest-700 text-sm leading-relaxed max-w-xl mx-auto mb-6">
            Bring a leaf cutting or photos into our Sheldon Road Plant Clinic. Our certified Florida horticulturists diagnose pests, nutrient deficiencies, and recommend organic remedies free of charge.
          </p>
          <a
            href={`tel:${SITE_METADATA.rawPhone}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 text-white font-bold text-xs sm:text-sm hover:bg-forest-950 transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call the Plant Clinic at {SITE_METADATA.phone}</span>
          </a>
        </div>
      </section>

      <Footer />
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedPlantForQuote}
      />
    </main>
  );
}
