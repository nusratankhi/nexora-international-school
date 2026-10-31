"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, Sparkles, ArrowRight, Award, BookOpen, X } from "lucide-react";
import { schoolInfo } from "@/data/school";

export const PrincipalMessage: React.FC = () => {
  const [showFullModal, setShowFullModal] = useState(false);
  const principal = schoolInfo.principal;

  return (
    <section id="principal" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#082D5C] to-[#0D3870] rounded-3xl overflow-hidden shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left/Photo Column (5 cols) */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[380px]">
              <Image
                src={principal.image}
                alt={principal.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082D5C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#082D5C]/90" />
              
              {/* Floating Credentials Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#082D5C]/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FFB800]">
                  <Award className="w-4 h-4" />
                  <span>Leadership in Global Education</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  {principal.qualifications}
                </div>
              </div>
            </div>

            {/* Right/Message Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB800] text-xs font-semibold border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Principal&apos;s Welcome Address</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Welcome to Nexora International School
                </h2>
                <p className="text-sm sm:text-base text-[#FFB800] font-semibold mt-1">
                  Nurturing Curious Minds, Inspiring Confident Leaders
                </p>
              </div>

              <div className="relative">
                <Quote className="w-10 h-10 text-white/15 absolute -top-4 -left-4 pointer-events-none" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic pl-2 border-l-2 border-[#FFB800]">
                  &ldquo;{principal.message}&rdquo;
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-lg font-bold text-white tracking-wide">
                    {principal.name}
                  </div>
                  <div className="text-xs text-slate-300">
                    {principal.designation}
                  </div>
                </div>

                <button
                  onClick={() => setShowFullModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-colors duration-200 w-fit"
                >
                  <BookOpen className="w-4 h-4 text-[#FFB800]" />
                  <span>Read Full Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Full Message Modal */}
      {showFullModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-800">
            <button
              onClick={() => setShowFullModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#0759C7]">
                Official Leadership Welcome
              </span>

              <h3 className="text-2xl font-bold text-[#082D5C]">
                A Message from {principal.name}
              </h3>
              <p className="text-xs text-[#0759C7] font-semibold">
                {principal.designation} • {principal.qualifications}
              </p>

              <div className="relative h-48 rounded-2xl overflow-hidden my-3">
                <Image
                  src={principal.image}
                  alt={principal.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>{principal.message}</p>
                <p>{principal.extendedMessage}</p>
                <p>
                  We warmly invite prospective families to discover our learning community and partner with us in shaping leaders of tomorrow.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowFullModal(false)}
                  className="px-6 py-2.5 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white text-sm font-semibold transition-colors"
                >
                  Close Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
