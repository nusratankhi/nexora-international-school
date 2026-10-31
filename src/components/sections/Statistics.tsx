"use client";

import React, { useEffect, useState, useRef } from "react";
import { GraduationCap, Users, Trophy, Building2 } from "lucide-react";
import { statisticsData } from "@/data/programs";

export const Statistics: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    students: 0,
    teachers: 0,
    success: 0,
    years: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep += 1;
            const progress = currentStep / steps;
            const easeOutQuad = (t: number) => t * (2 - t);
            const factor = easeOutQuad(progress);

            setCounts({
              students: Math.round(2500 * factor),
              teachers: Math.round(200 * factor),
              success: Math.round(95 * factor),
              years: Math.round(15 * factor),
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({
                students: 2500,
                teachers: 200,
                success: 95,
                years: 15,
              });
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getIcon = (id: string) => {
    switch (id) {
      case "students":
        return <GraduationCap className="w-7 h-7 text-[#0759C7]" />;
      case "teachers":
        return <Users className="w-7 h-7 text-[#0759C7]" />;
      case "success":
        return <Trophy className="w-7 h-7 text-[#0759C7]" />;
      case "years":
      default:
        return <Building2 className="w-7 h-7 text-[#0759C7]" />;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8"
      aria-label="School Statistics"
    >
      <div className="bg-white rounded-2xl shadow-hero-stat border border-slate-100 py-6 px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {statisticsData.map((stat, idx) => {
            const displayValue = hasAnimated ? counts[stat.id] || stat.value : stat.value;

            return (
              <div 
                key={stat.id}
                className={`flex items-center gap-4 ${idx > 0 && idx % 2 === 0 ? "pt-4 lg:pt-0" : ""} ${idx > 0 ? "lg:pl-8" : ""}`}
              >
                {/* Icon in royal blue tinted circle */}
                <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] flex items-center justify-center shrink-0 border border-blue-100/80 transition-transform hover:scale-105">
                  {getIcon(stat.id)}
                </div>

                {/* Values */}
                <div>
                  <div className="flex items-baseline font-extrabold text-[#082D5C] text-2xl sm:text-3xl tracking-tight">
                    <span>{displayValue.toLocaleString()}</span>
                    <span className="text-[#0759C7] ml-0.5">{stat.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
