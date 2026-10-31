"use client";

import React from "react";
import { 
  Award, 
  UserCheck, 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  Smile, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";
import { whyChooseUsData } from "@/data/programs";

interface WhyChooseUsProps {
  onOpenApply: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenApply }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-6 h-6 text-[#0759C7]" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-[#0759C7]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#0759C7]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#0759C7]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#0759C7]" />;
      case "Smile":
      default:
        return <Smile className="w-6 h-6 text-[#0759C7]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0759C7] text-xs font-semibold mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>The Nexora Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082D5C] tracking-tight">
            Why Choose Nexora International School
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We provide a world-class holistic educational ecosystem that nurtures intellect, sparks innovative creativity, builds unshakeable character, and opens doors to elite universities worldwide.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-card hover:border-[#0759C7]/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#EBF3FF] border border-slate-200/60 shadow-sm flex items-center justify-center transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-[#0759C7] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#082D5C] group-hover:text-[#0759C7] transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#0759C7]">
                <span>Global Standard</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#082D5C] to-[#0E4080] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Ready to witness the Nexora difference in person?
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Join our personalized campus tour or attend an open-house session.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            className="shrink-0 px-6 py-3 rounded-full bg-[#FFB800] hover:bg-[#E6A600] text-[#082D5C] font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <span>Book Campus Tour</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
