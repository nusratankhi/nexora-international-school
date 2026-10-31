"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare,
  Sparkles 
} from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextTestimonial, isPaused]);

  const current = testimonialsData[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-16 sm:py-20 bg-[#F4F7FC] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#0759C7] text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082D5C] tracking-tight">
            What Parents & Students Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Hear first-hand reflections from families and alumni who have experienced the transformative education of Nexora International School.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 relative min-h-[320px] flex flex-col justify-between">
            
            {/* Top Quote Icon & Stars */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < current.rating ? "text-[#FFB800] fill-[#FFB800]" : "text-slate-200"}`} 
                  />
                ))}
              </div>
              <Quote className="w-12 h-12 text-[#082D5C]/10" />
            </div>

            {/* Testimonial Quote */}
            <div className="my-6">
              <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-medium italic">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#0759C7] shadow-sm shrink-0">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#082D5C]">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0759C7] font-medium">
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:bg-[#082D5C] hover:text-white hover:border-[#082D5C] text-slate-600 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:bg-[#082D5C] hover:text-white hover:border-[#082D5C] text-slate-600 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 h-2.5 bg-[#0759C7] rounded-full"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full"
                }`}
              />
            ))}
          </div>

          {/* Disclaimer badge as requested */}
          <div className="text-center mt-4">
            <span className="text-[11px] text-slate-400">
              * Demonstration testimonials curated to reflect authentic parent and student experiences at Nexora.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
