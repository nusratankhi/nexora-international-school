"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  GraduationCap, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { heroSlides } from "@/data/hero";

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission, onOpenVideo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = heroSlides[currentSlide];

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] bg-[#082D5C] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Campus Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/campus-bg.jpg"
          alt="Nexora International School Campus"
          fill
          priority
          className="object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Navy Gradient Overlay: Deep navy on left, softening towards right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#082D5C] via-[#082D5C]/95 to-[#082D5C]/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082D5C]/90 via-transparent to-transparent md:hidden" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-12 lg:py-16">
          
          {/* Left Column: Heading, Subtext, Badges & Buttons */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 pt-4 lg:pt-0">
            
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium w-fit animate-in fade-in slide-in-from-top-4 duration-500">
              <GraduationCap className="w-4 h-4 text-[#FFB800]" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Heading with Golden Highlight */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {slide.headingPrefix}{" "}
              <span className="block sm:inline">{slide.headingSuffix}</span>{" "}
              <span className="relative inline-block text-[#FFB800] mt-1 sm:mt-0">
                {slide.headingHighlight}
                {/* Golden brush curve underline SVG */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FFB800] overflow-visible"
                  viewBox="0 0 250 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 14C50 4 150 2 247 12C200 6 100 7 3 17"
                    stroke="#FFB800"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-200/90 max-w-xl font-normal leading-relaxed">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Gold CTA */}
              <button
                onClick={onOpenAdmission}
                className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 rounded-full bg-[#FFB800] hover:bg-[#E6A600] text-[#082D5C] font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{slide.primaryCta.label}</span>
                <div className="w-6 h-6 rounded-full bg-[#082D5C] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Secondary Ghost Button */}
              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-white text-[#082D5C] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>{slide.secondaryCta.label}</span>
              </button>
            </div>

            {/* Quick Accreditation Badges */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-300/80 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                Cambridge International Curriculum
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline">Holistic STEM & Arts Integration</span>
            </div>
          </div>

          {/* Right Column: Hero Student Photography & Floating Script Text */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center">
            
            {/* Student Image Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] drop-shadow-2xl">
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-[#0759C7]/20 rounded-3xl blur-2xl -z-10" />

              {/* Student Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src={slide.image}
                  alt="Nexora International School Student"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle bottom vignette inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082D5C]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating "Dream Big, Achieve More" Script Sticker */}
              {slide.floatingTag && (
                <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#082D5C]/90 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shadow-xl transform rotate-1 transition-transform hover:scale-105">
                  <p className="font-script text-xl sm:text-2xl text-white font-bold leading-tight tracking-wide whitespace-pre-line text-right">
                    {slide.floatingTag}
                  </p>
                  {/* Small gold sparkle underline */}
                  <div className="w-16 h-1 bg-[#FFB800] rounded-full ml-auto mt-1" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/40 hover:bg-[#0759C7] text-white backdrop-blur-sm flex items-center justify-center border border-white/15 transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/40 hover:bg-[#0759C7] text-white backdrop-blur-sm flex items-center justify-center border border-white/15 transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 ${
              currentSlide === idx
                ? "w-8 h-2.5 bg-[#FFB800] rounded-full"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80 rounded-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
