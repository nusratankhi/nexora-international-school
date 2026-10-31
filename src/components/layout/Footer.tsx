"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  ChevronRight,
  Shield,
  FileText,
  X
} from "lucide-react";
import { schoolInfo } from "@/data/school";
import { footerQuickLinks, footerProgramsLinks } from "@/data/navigation";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#051C3B] text-slate-300 pt-16 pb-8 border-t border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: School Identity & Social (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#hero" className="inline-block bg-white p-2.5 rounded-xl shadow-md">
              <div className="relative h-12 w-56">
                <Image
                  src="/images/logo/nexora-logo.png"
                  alt="Nexora International School"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300/90 leading-relaxed max-w-sm">
              Nexora International School is dedicated to fostering intellectual excellence, creative discovery, ethical leadership, and global perspectives in every young learner.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                Follow Nexora School
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={schoolInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0759C7] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={schoolInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0759C7] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={schoolInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0759C7] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={schoolInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0759C7] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFB800] transition-colors flex items-center gap-1.5 group text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#FFB800] group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic & School (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              Explore Nexora
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerProgramsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFB800] transition-colors flex items-center gap-1.5 group text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#FFB800] group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              Contact School
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <span>{schoolInfo.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFB800] shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-[#FFB800] transition-colors">
                  {schoolInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFB800] shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-[#FFB800] transition-colors">
                  {schoolInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <span>{schoolInfo.officeHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {schoolInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#FFB800] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#FFB800] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy / Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 text-slate-800">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'privacy' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#082D5C]">
                  <Shield className="w-6 h-6 text-[#0759C7]" />
                  <h3 className="text-xl font-bold">Privacy Policy</h3>
                </div>
                <p className="text-xs text-slate-500">Effective Date: Academic Year 2025-2026</p>
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    Nexora International School respects the privacy of students, parents, guardians, and website visitors. Personal information collected through enrollment applications, inquiry forms, and portal credentials is used exclusively for legitimate academic, pastoral, and school administrative operations.
                  </p>
                  <p>
                    We implement industry-standard encryption, role-based access security controls, and strict data confidentiality protocols in compliance with international educational data protection standards.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#082D5C]">
                  <FileText className="w-6 h-6 text-[#0759C7]" />
                  <h3 className="text-xl font-bold">Terms & Conditions</h3>
                </div>
                <p className="text-xs text-slate-500">Effective Date: Academic Year 2025-2026</p>
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    By accessing the official website and online portals of Nexora International School, users agree to uphold ethical, lawful, and academic conduct standards. All curricular materials, school crest trademarks, photography, and instructional content remain the intellectual property of Nexora International School.
                  </p>
                  <p>
                    Online admission submissions and communications represent legitimate expressions of interest and are governed by school enrollment bylaws.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-6 mt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-full bg-[#082D5C] text-white text-xs sm:text-sm font-semibold hover:bg-[#0759C7] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
