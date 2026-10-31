"use client";

import React from "react";
import { BookOpen, Laptop, Users, Trophy, ShieldCheck } from "lucide-react";
import { keyFeaturesData } from "@/data/programs";

export const Features: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-[#0759C7]" />;
      case "Laptop":
        return <Laptop className="w-6 h-6 text-[#0759C7]" />;
      case "Users":
        return <Users className="w-6 h-6 text-[#0759C7]" />;
      case "Trophy":
        return <Trophy className="w-6 h-6 text-[#0759C7]" />;
      case "ShieldCheck":
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0759C7]" />;
    }
  };

  return (
    <section className="py-8 sm:py-10 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {keyFeaturesData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-card hover:border-[#0759C7]/40 transition-all duration-200 hover:-translate-y-1 flex items-center sm:flex-col sm:items-start text-left gap-3.5 sm:gap-3"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#EBF3FF] flex items-center justify-center shrink-0 group-hover:bg-[#0759C7] transition-colors duration-200">
                <span className="group-hover:text-white transition-colors duration-200">
                  {getFeatureIcon(item.icon)}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#082D5C] group-hover:text-[#0759C7] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
