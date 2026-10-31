"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Calendar, 
  Tag, 
  ArrowRight, 
  Sparkles, 
  Newspaper,
  X 
} from "lucide-react";
import { newsEventsData } from "@/data/news";
import { NewsItem } from "@/types";

export const NewsEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const tabs = ["All", "School News", "Upcoming Events", "Academic Announcements"];

  const filteredNews = activeTab === "All"
    ? newsEventsData
    : newsEventsData.filter(item => item.category === activeTab);

  return (
    <section id="news" className="py-16 sm:py-20 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#0759C7] text-xs font-semibold mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Campus Happenings & Bulletins</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082D5C] tracking-tight">
              News & Upcoming Events
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Stay connected with academic achievements, school milestones, festive celebrations, and administrative calendars.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#082D5C] text-[#FFB800] shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* News Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#082D5C]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#FFB800]" />
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* News Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-[#0759C7]" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#082D5C] group-hover:text-[#0759C7] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(item)}
                  className="text-xs sm:text-sm font-bold text-[#0759C7] hover:text-[#0648A3] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Story Details Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#0759C7]">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-500">
                  {selectedArticle.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#082D5C] leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="relative h-64 rounded-2xl overflow-hidden my-3">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>{selectedArticle.excerpt}</p>
                <p>
                  At Nexora International School, academic, co-curricular, and sporting programs work hand in hand to offer students an enriching platform for discovering their talents and achieving national and international accolades.
                </p>
                <p>
                  For more information or inquiries regarding this update, please contact the Nexora Administrative Desk or reach out through the school communications portal.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Published by {selectedArticle.author}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white text-sm font-semibold transition-colors"
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
