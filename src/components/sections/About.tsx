"use client";

import React from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Calendar, 
  GraduationCap, 
  Sparkles 
} from "lucide-react";
import { schoolInfo } from "@/data/school";

interface AboutProps {
  onOpenVideo: () => void;
  onOpenApply: () => void;
  onOpenLearnMore: () => void;
}

export const About: React.FC<AboutProps> = ({ 
  onOpenVideo, 
  onOpenApply, 
  onOpenLearnMore 
}) => {
  const highlights = [
    "Academic Excellence",
    "Modern Facilities",
    "Caring Environment",
    "Global Perspective",
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Grid: 3-column structure matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: About Nexora Text & Checkpoints (5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0759C7] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Excellence Since {schoolInfo.established}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082D5C] tracking-tight leading-snug">
                About Nexora International School
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Nexora International School is committed to providing quality education that builds character, develops skills, and prepares students for a successful future.
              </p>

              {/* 4 Checkmark Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-2">
                {highlights.map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0759C7] fill-blue-50 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-2">
              <button
                onClick={onOpenLearnMore}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0759C7] hover:bg-[#0648A3] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Column 2: Campus Building Image with Interactive Play Video Button (4 cols) */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[280px] lg:min-h-full group shadow-md border border-slate-100">
            <Image
              src="/images/about/campus-building.jpg"
              alt="Nexora International School Campus Building"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors" />

            {/* Video Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={onOpenVideo}
                className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white text-[#0759C7] shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group/btn"
                aria-label="Play campus virtual tour video"
              >
                {/* Pulsating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/80 animate-ping opacity-60 pointer-events-none" />
                <Play className="w-6 h-6 fill-current ml-1 group-hover/btn:text-[#082D5C] transition-colors" />
              </button>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/40 flex items-center justify-between text-xs font-medium text-slate-800">
              <span>Campus Virtual Tour</span>
              <span className="text-[#0759C7] font-semibold flex items-center gap-1">
                Watch 2 min
              </span>
            </div>
          </div>

          {/* Column 3: Admissions Open Card (4 cols) */}
          <div className="lg:col-span-4 relative rounded-2xl bg-[#082D5C] p-6 sm:p-7 flex flex-col justify-between text-white overflow-hidden shadow-lg">
            
            {/* Watermark Graduation Cap in background */}
            <GraduationCap className="absolute -top-6 -right-6 w-36 h-36 text-white/5 pointer-events-none" />

            {/* Top Admissions Info */}
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-[#FFB800] text-xs font-semibold w-fit border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Now Enrolling</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Admissions Open <br />
                <span className="text-[#FFB800]">for {schoolInfo.admissions.academicYear}</span>
              </h3>

              <p className="text-sm text-slate-200/90 leading-relaxed">
                {schoolInfo.admissions.subtext}
              </p>

              {/* Apply Online Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenApply}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFB800] hover:bg-[#E6A600] text-[#082D5C] font-bold text-sm shadow-md transition-all duration-200 group"
                >
                  <span>Apply Online</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Bottom Deadline Card & Decorative Golden Swoosh */}
            <div className="mt-8 pt-4 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <Calendar className="w-5 h-5 text-[#FFB800]" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Application Deadline</div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    {schoolInfo.admissions.deadline}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Golden Swoosh at bottom right */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFB800]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-24 h-6 bg-gradient-to-l from-[#FFB800] to-transparent rounded-tl-full opacity-60" />
          </div>

        </div>

      </div>
    </section>
  );
};
