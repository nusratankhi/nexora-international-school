"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Academics } from "@/components/sections/Academics";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Facilities } from "@/components/sections/Facilities";
import { PrincipalMessage } from "@/components/sections/PrincipalMessage";
import { NewsEvents } from "@/components/sections/NewsEvents";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/layout/Footer";
import { ApplyModal } from "@/components/ui/ApplyModal";
import { VideoModal } from "@/components/ui/VideoModal";
import { PortalModal } from "@/components/ui/PortalModal";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [portalType, setPortalType] = useState<'student' | 'parent' | 'teacher' | null>(null);

  const handleOpenPortal = (type: 'student' | 'parent' | 'teacher') => {
    setPortalType(type);
  };

  const handleClosePortal = () => {
    setPortalType(null);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Top Information Bar */}
      <TopBar onOpenPortal={handleOpenPortal} />

      {/* 2. Main Sticky Navigation Bar */}
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 3. Hero Section with Carousel & Student Photography */}
        <Hero 
          onOpenAdmission={() => setIsApplyOpen(true)} 
          onOpenVideo={() => setIsVideoOpen(true)} 
        />

        {/* 4. Statistics Bar */}
        <Statistics />

        {/* 5. Key Features Section */}
        <Features />

        {/* 6. About Our School & Admissions Promo Section */}
        <About 
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenApply={() => setIsApplyOpen(true)}
          onOpenLearnMore={scrollToAbout}
        />

        {/* 7. Academic Programs Section */}
        <Academics onOpenApply={() => setIsApplyOpen(true)} />

        {/* 8. Why Choose Nexora Section */}
        <WhyChooseUs onOpenApply={() => setIsApplyOpen(true)} />

        {/* 9. Campus & Facilities Section */}
        <Facilities onOpenVideo={() => setIsVideoOpen(true)} />

        {/* 10. Principal's Message Section */}
        <PrincipalMessage />

        {/* 11. News & Events Section */}
        <NewsEvents />

        {/* 12. Photo Gallery Section with Interactive Lightbox */}
        <Gallery />

        {/* 13. Testimonial Section */}
        <Testimonials />

        {/* 14. Contact Section with Interactive Form */}
        <ContactSection />

        {/* 15. Call to Action Banner */}
        <CallToAction 
          onOpenApply={() => setIsApplyOpen(true)}
          onOpenContact={scrollToContact}
        />
      </main>

      {/* 16. Comprehensive Footer Section */}
      <Footer />

      {/* Interactive Global Modals */}
      <ApplyModal 
        isOpen={isApplyOpen} 
        onClose={() => setIsApplyOpen(false)} 
      />

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />

      <PortalModal 
        isOpen={portalType !== null} 
        onClose={handleClosePortal}
        initialType={portalType || 'student'} 
      />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
