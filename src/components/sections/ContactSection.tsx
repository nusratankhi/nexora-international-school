"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare,
  AlertCircle,
  Database
} from "lucide-react";
import { schoolInfo } from "@/data/school";
import { submitContactInquiry } from "@/services/inquiryService";
import { isFirebaseConfigured } from "@/lib/firebase";

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    id: string;
    isLiveFirebase: boolean;
    message: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Valid email address is required";
    }
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 10) {
      errs.message = "Please write a message with at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await submitContactInquiry(form);
      setSubmissionResult(res);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setSubmitError(null);
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0759C7] text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082D5C] tracking-tight">
            Get in Touch with Nexora
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Have questions regarding admissions, curriculum, fee schedules, or visiting our campus? Our admissions counselors and administrative staff are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: School Contact Cards & Map Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#082D5C] rounded-3xl p-6 sm:p-8 text-white space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0759C7]/40 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold text-white">
                School Information Office
              </h3>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Campus Location</div>
                    <div className="font-semibold text-white mt-0.5">{schoolInfo.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="w-5 h-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone Support</div>
                    <a href={`tel:${schoolInfo.phone}`} className="font-semibold text-white hover:text-[#FFB800] mt-0.5 block">
                      {schoolInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Official Email</div>
                    <a href={`mailto:${schoolInfo.email}`} className="font-semibold text-white hover:text-[#FFB800] mt-0.5 block">
                      {schoolInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-5 h-5 text-[#FFB800]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Administration Hours</div>
                    <div className="font-semibold text-white mt-0.5">{schoolInfo.officeHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mock Card */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-[#082D5C] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0759C7]" />
                <span>Find Us on Map</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conveniently situated in Dhaka-1207 with broad multilane road connectivity, dedicated school bus transportation zones, and secure private parking.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0759C7] hover:underline"
              >
                <span>Open in Google Maps Directions</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            {!submissionResult ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#082D5C]">
                      Send an Inquiry Message
                    </h3>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      isFirebaseConfigured ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-200/70 text-slate-700"
                    }`}>
                      <Database className="w-3 h-3" />
                      {isFirebaseConfigured ? "Firestore Live" : "DB Ready"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Fill out the form below. We will respond within one business day.
                  </p>
                </div>

                {submitError && (
                  <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Tariq Rahman"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.name ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.email ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+880 1700 000000"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Grade 7 Admission Inquiry"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.subject ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your questions or notes here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] resize-none ${
                      errors.message ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-400">
                    {isFirebaseConfigured ? "🔥 Connected to Firestore collection 'inquiries'" : "⚡ Validation active • Ready for Firebase keys"}
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Saving to Firebase...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-[#082D5C]">
                  {submissionResult.isLiveFirebase ? "Message Saved to Firestore!" : "Message Validated Successfully!"}
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your inquiry has been processed.
                </p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                    <span className="font-bold text-[#082D5C]">Database Status:</span>
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                      submissionResult.isLiveFirebase ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                    }`}>
                      {submissionResult.isLiveFirebase ? "🔥 Firestore Live" : "Local Mock Verified"}
                    </span>
                  </div>
                  <p>• <strong>Document Reference ID:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[#0759C7]">{submissionResult.id}</code></p>
                  <p>• <strong>Firestore Collection:</strong> <code>inquiries</code></p>
                  <p>• <strong>Official School Desk:</strong> {schoolInfo.email}</p>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2 rounded-full bg-[#082D5C] text-white font-semibold text-xs hover:bg-[#0759C7] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
