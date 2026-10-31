"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, BookOpen, Sparkles, Clock, X } from "lucide-react";
import { academicPrograms } from "@/data/programs";
import { AcademicProgram } from "@/types";

interface AcademicsProps {
  onOpenApply: () => void;
}

export const Academics: React.FC<AcademicsProps> = ({ onOpenApply }) => {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  return (
    <section id="academics" className="py-16 sm:py-20 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#0759C7] text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Structured Academic Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082D5C] tracking-tight">
            Academic Programs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From playful early discovery to rigorous pre-university diplomas, we empower learners at every developmental stage with internationally acclaimed educational standards.
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {academicPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Age Badge */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Age Tag */}
                  <div className="absolute bottom-3 left-3 bg-[#082D5C]/90 backdrop-blur-sm text-[#FFB800] text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{prog.ageGroup}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <span className="text-xs font-semibold text-[#0759C7] tracking-wider uppercase block">
                    {prog.grade}
                  </span>

                  <h3 className="text-lg font-bold text-[#082D5C] group-hover:text-[#0759C7] transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Highlights List */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {prog.highlights.slice(0, 2).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0759C7] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#0759C7] text-[#0759C7] hover:bg-[#0759C7] hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0759C7] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedProgram.grade} ({selectedProgram.ageGroup})</span>
              </div>

              <h3 className="text-2xl font-bold text-[#082D5C]">
                {selectedProgram.title}
              </h3>

              <div className="relative h-56 rounded-2xl overflow-hidden my-3">
                <Image
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>

              <div>
                <h4 className="text-sm font-bold text-[#082D5C] uppercase tracking-wider mb-2">
                  Curriculum Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgram.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded-lg">
                      <Check className="w-4 h-4 text-[#0759C7] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#082D5C] uppercase tracking-wider mb-2">
                  Key Facilities & Environment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgram.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-600 bg-blue-50/50 p-2 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-2.5 rounded-full text-slate-600 hover:bg-slate-100 text-sm font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProgram(null);
                    onOpenApply();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white text-sm font-semibold shadow-md flex items-center gap-2"
                >
                  <span>Apply for This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
