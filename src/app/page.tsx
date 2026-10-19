"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallaxStory from "@/components/ParallaxStory";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StackingPrinciples from "@/components/StackingPrinciples";
import CustomerJourney from "@/components/CustomerJourney";
import TransformationsShowcase from "@/components/TransformationsShowcase";
import PlantCareHighlight from "@/components/PlantCareHighlight";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-botanical-bg flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* High-Impact Hero Section */}
      <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Signature Experience 1: Sticky Background Storytelling Parallax */}
      <ParallaxStory />

      {/* Core Services Highlights Grid */}
      <ServicesGrid onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Signature Experience 2: Interactive Before-and-After Comparison Slider */}
      <BeforeAfterSlider />

      {/* Signature Experience 3: Sticky Stacking Principles Cards ("Why Choose Us") */}
      <StackingPrinciples />

      {/* 4-Step Customer Journey */}
      <CustomerJourney onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Master Transformations Showcase */}
      <TransformationsShowcase onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 5-Acre Retail Nursery & Plant Inventory Highlights */}
      <PlantCareHighlight />

      {/* Polished Footer */}
      <Footer />

      {/* Interactive Multi-Step Project Quote Intake Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </main>
  );
}
