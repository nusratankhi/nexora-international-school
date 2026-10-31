"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building, Sparkles, Check, Users, ArrowUpRight } from "lucide-react";
import { facilitiesData } from "@/data/facilities";
import { FacilityItem } from "@/types";

interface FacilitiesProps {
  onOpenVideo: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const categories = ["All", "Academic Infrastructure", "STEM & Research", "Resource Center", "Athletics & Fitness", "Arts & Assemblies"];

  const filteredFacilities = activeCategory === "All"
    ? facilitiesData
    : facilitiesData.filter(item => item.category === activeCategory);

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#0759C7] text-xs font-semibold mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>State-of-the-Art Learning Spaces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082D5C] tracking-tight">
            Campus & World-Class Facilities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A purpose-built, secure, and digitally infused campus engineered to nurture academic brilliance, creative exploration, and athletic stamina.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#082D5C] text-[#FFB800] shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Facilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacility(fac)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Facility Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082D5C]/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#082D5C]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    {fac.category}
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#082D5C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {fac.capacity && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#FFB800]" />
                      <span>{fac.capacity}</span>
                    </div>
                  )}
                </div>

                {/* Facility Info */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#082D5C] group-hover:text-[#0759C7] transition-colors">
                    {fac.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {fac.description}
                  </p>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {fac.features.slice(0, 2).map((feat) => (
                      <span 
                        key={feat}
                        className="text-[11px] font-medium bg-[#EBF3FF] text-[#0759C7] px-2.5 py-0.5 rounded-md"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <span className="text-xs font-bold text-[#0759C7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Details & Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Details Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              ✕
            </button>

            <div className="space-y-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#0759C7] border border-blue-100">
                {selectedFacility.category}
              </span>

              <h3 className="text-2xl font-bold text-[#082D5C]">
                {selectedFacility.title}
              </h3>

              <div className="relative h-60 rounded-2xl overflow-hidden my-3">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedFacility.description}
              </p>

              {selectedFacility.capacity && (
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl text-sm font-semibold text-slate-700">
                  <Users className="w-4 h-4 text-[#0759C7]" />
                  <span>Designed Capacity: {selectedFacility.capacity}</span>
                </div>
              )}

              <div>
                <h4 className="text-sm font-bold text-[#082D5C] uppercase tracking-wider mb-2">
                  Specialized Equipment & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-[#F8FAFC] p-2.5 rounded-lg border border-slate-100">
                      <Check className="w-4 h-4 text-[#0759C7] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={onOpenVideo}
                  className="text-xs sm:text-sm font-semibold text-[#0759C7] hover:underline flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-[#FFB800]" />
                  <span>Watch Virtual Campus Tour</span>
                </button>
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-5 py-2 rounded-full bg-[#082D5C] text-white text-sm font-semibold hover:bg-[#0759C7] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
