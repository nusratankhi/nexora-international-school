"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  GraduationCap, 
  Sparkles,
  Phone,
  Mail
} from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { schoolInfo } from "@/data/school";

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active nav based on scroll position
      const sections = ['hero', 'about', 'academics', 'why-choose-us', 'facilities', 'gallery', 'news', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5" 
          : "bg-white py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="#hero" 
            className="flex items-center group shrink-0"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div className="relative h-12 sm:h-14 md:h-16 w-48 sm:w-56 md:w-64 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/logo/nexora-logo.png"
                alt="Nexora International School"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {mainNavigation.map((item) => {
              const isHome = item.label === "Home";
              const isActive = isHome ? (activeSection === "hero") : (item.href === `#${activeSection}`);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                  onMouseLeave={() => hasChildren && handleMouseLeave()}
                >
                  {isHome ? (
                    <a
                      href={item.href}
                      className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 bg-[#0759C7] text-white shadow-sm hover:bg-[#0648A3]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#0759C7] font-semibold"
                          : "text-slate-700 hover:text-[#0759C7] hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180 text-[#0759C7]" : "text-slate-400"
                          }`} 
                        />
                      )}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-3 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between text-xs font-semibold text-[#082D5C] uppercase tracking-wider">
                        <span>{item.label}</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                      </div>
                      {item.children?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-3 py-2 mx-1.5 rounded-lg text-sm text-slate-700 hover:text-[#0759C7] hover:bg-[#F4F7FC] transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="font-medium text-slate-800 hover:text-[#0759C7]">
                            {sub.label}
                          </div>
                          {sub.description && (
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {sub.description}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action: Apply Now Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenApply}
              className="sm:inline-flex hidden items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#082D5C] text-white text-xs font-semibold"
            >
              Apply
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#082D5C]" /> : <Menu className="w-6 h-6 text-[#082D5C]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] bg-slate-900/60 backdrop-blur-sm z-50">
          <div className="bg-white max-h-[85vh] overflow-y-auto px-6 py-6 border-b border-slate-200 shadow-2xl">
            <div className="flex flex-col space-y-3">
              {mainNavigation.map((item) => (
                <div key={item.label} className="border-b border-slate-100 pb-2">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-[#0759C7]"
                  >
                    <span>{item.label}</span>
                    {item.label === "Home" && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-[#0759C7]">Current</span>
                    )}
                  </a>
                  {item.children && (
                    <div className="pl-4 mt-1 space-y-1.5 border-l-2 border-blue-100">
                      {item.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-sm text-slate-600 hover:text-[#0759C7]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApply();
                  }}
                  className="w-full py-3 rounded-xl bg-[#082D5C] text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[#0759C7] transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-[#FFB800]" />
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
                  <a href={`tel:${schoolInfo.phone}`} className="flex items-center gap-1.5 hover:text-[#082D5C]">
                    <Phone className="w-3.5 h-3.5 text-[#FFB800]" />
                    {schoolInfo.phone}
                  </a>
                  <a href={`mailto:${schoolInfo.email}`} className="flex items-center gap-1.5 hover:text-[#082D5C]">
                    <Mail className="w-3.5 h-3.5 text-[#FFB800]" />
                    {schoolInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
