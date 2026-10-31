"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white shadow-xl hover:shadow-2xl flex items-center justify-center border-2 border-white/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group"
    >
      <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
