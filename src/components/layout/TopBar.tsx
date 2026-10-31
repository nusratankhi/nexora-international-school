"use client";

import React from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Instagram, 
  GraduationCap, 
  Users, 
  Lock 
} from "lucide-react";
import { schoolInfo } from "@/data/school";

interface TopBarProps {
  onOpenPortal: (portalType: 'student' | 'parent' | 'teacher') => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenPortal }) => {
  return (
    <div className="bg-[#082D5C] text-white text-xs border-b border-blue-900/40 relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-200">
            <a 
              href="#contact" 
              className="flex items-center gap-1.5 hover:text-[#FFB800] transition-colors"
              title="Campus Location"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
              <span>{schoolInfo.address}</span>
            </a>
            
            <span className="hidden sm:inline text-blue-400/50">|</span>
            
            <a 
              href={`tel:${schoolInfo.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#FFB800] transition-colors"
              title="Official Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
              <span>{schoolInfo.phone}</span>
            </a>
            
            <span className="hidden sm:inline text-blue-400/50">|</span>
            
            <a 
              href={`mailto:${schoolInfo.email}`} 
              className="flex items-center gap-1.5 hover:text-[#FFB800] transition-colors"
              title="Official Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
              <span>{schoolInfo.email}</span>
            </a>
          </div>

          {/* Right: Portals & Social Icons */}
          <div className="flex items-center gap-4 text-slate-200">
            {/* Quick Portals */}
            <div className="flex items-center gap-3 text-xs font-medium">
              <button 
                onClick={() => onOpenPortal('student')}
                className="hover:text-[#FFB800] transition-colors flex items-center gap-1"
              >
                <GraduationCap className="w-3 h-3 text-[#FFB800]" />
                Student Portal
              </button>
              <span className="text-blue-400/50">|</span>
              <button 
                onClick={() => onOpenPortal('parent')}
                className="hover:text-[#FFB800] transition-colors flex items-center gap-1"
              >
                <Users className="w-3 h-3 text-[#FFB800]" />
                Parent Portal
              </button>
              <span className="text-blue-400/50">|</span>
              <button 
                onClick={() => onOpenPortal('teacher')}
                className="hover:text-[#FFB800] transition-colors flex items-center gap-1"
              >
                <Lock className="w-3 h-3 text-[#FFB800]" />
                Teacher Login
              </button>
            </div>

            <span className="hidden sm:inline text-blue-400/50">|</span>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5">
              <a 
                href={schoolInfo.socialMedia.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="p-1 rounded hover:bg-white/10 hover:text-[#FFB800] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href={schoolInfo.socialMedia.youtube} 
                target="_blank" 
                rel="noreferrer"
                className="p-1 rounded hover:bg-white/10 hover:text-[#FFB800] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href={schoolInfo.socialMedia.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-1 rounded hover:bg-white/10 hover:text-[#FFB800] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href={schoolInfo.socialMedia.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="p-1 rounded hover:bg-white/10 hover:text-[#FFB800] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
