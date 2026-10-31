"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Play, Pause, Volume2, VolumeX, Sparkles, MapPin } from "lucide-react";
import { schoolInfo } from "@/data/school";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#082D5C] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/60 border-b border-white/10 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FFB800]" />
            <h3 className="text-sm sm:text-base font-bold">
              Nexora International School — Campus Virtual Experience
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Showcase Player */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <Image
            src="/images/about/campus-building.jpg"
            alt="Nexora Virtual Tour"
            fill
            className={`object-cover transition-transform duration-1000 ${isPlaying ? "scale-105" : "scale-100"}`}
          />
          
          {/* Subtle cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Floating Campus Highlights */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#082D5C]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 text-xs text-white">
            <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Academic Wing • STEM Innovation Labs • Athletics Arena</span>
          </div>

          {/* Center Play/Pause Overlay indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 rounded-full bg-[#0759C7]/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </button>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-[#FFB800] transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-[#FFB800] transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-slate-300 font-mono">01:42 / 02:30</span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full HD 1080p Virtual Showcase</span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-4 sm:p-5 bg-[#051C3B] text-slate-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Experience Nexora&apos;s 10-acre purpose-built campus in person. Book a family tour today.
          </p>
          <a
            href={`tel:${schoolInfo.phone}`}
            className="px-4 py-2 rounded-full bg-[#FFB800] text-[#082D5C] font-bold shrink-0 hover:bg-[#E6A600] transition-colors"
          >
            Call Admissions: {schoolInfo.phone}
          </a>
        </div>

      </div>
    </div>
  );
};
