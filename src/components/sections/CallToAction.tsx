"use client";

import React from "react";
import { ArrowRight, GraduationCap, PhoneCall, Sparkles } from "lucide-react";
import { schoolInfo } from "@/data/school";

interface CallToActionProps {
  onOpenApply: () => void;
  onOpenContact: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ 
  onOpenApply, 
  onOpenContact 
}) => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#082D5C] overflow-hidden text-white">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0759C7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFB800]/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Watermark Crest */}
      <GraduationCap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-white/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFB800] text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Enrollment Open for Academic Year {schoolInfo.admissions.academicYear}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Give Your Child a <span className="text-[#FFB800]">Brighter Future</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Discover an inspiring learning environment where every student has the opportunity to grow, learn, and succeed.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenApply}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFB800] hover:bg-[#E6A600] text-[#082D5C] font-bold text-base shadow-xl shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Apply for Admission</span>
            <div className="w-6 h-6 rounded-full bg-[#082D5C] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-base transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-[#FFB800]" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Quick Contact Footer Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-slate-300">
          <div>
            <span className="text-slate-400">Admissions Helpline: </span>
            <a href={`tel:${schoolInfo.phone}`} className="font-bold text-white hover:text-[#FFB800]">
              {schoolInfo.phone}
            </a>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div>
            <span className="text-slate-400">Admissions Desk: </span>
            <a href={`mailto:${schoolInfo.admissionsEmail}`} className="font-bold text-white hover:text-[#FFB800]">
              {schoolInfo.admissionsEmail}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
