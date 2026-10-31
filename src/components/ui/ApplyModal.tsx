"use client";

import React, { useState } from "react";
import { 
  X, 
  GraduationCap, 
  User, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Sparkles,
  Database
} from "lucide-react";
import { schoolInfo } from "@/data/school";
import { submitAdmissionApplication } from "@/services/admissionsService";
import { isFirebaseConfigured } from "@/lib/firebase";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "Male",
    gradeApplying: "Grade 1",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    address: "",
    previousSchool: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    id: string;
    isLiveFirebase: boolean;
    message: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.studentName.trim()) errs.studentName = "Student name is required";
    if (!formData.dateOfBirth) errs.dateOfBirth = "Date of birth is required";
    if (!formData.parentName.trim()) errs.parentName = "Parent/Guardian name is required";
    if (!formData.parentEmail.trim() || !/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      errs.parentEmail = "Valid parent email is required";
    }
    if (!formData.parentPhone.trim() || formData.parentPhone.length < 8) {
      errs.parentPhone = "Valid phone number is required";
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
      const res = await submitAdmissionApplication(formData);
      setSubmissionResult(res);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setSubmitError(null);
    setFormData({
      studentName: "",
      dateOfBirth: "",
      gender: "Male",
      gradeApplying: "Grade 1",
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      address: "",
      previousSchool: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submissionResult ? (
          <div>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0759C7] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Academic Year {schoolInfo.admissions.academicYear} Enrollment</span>
                </div>

                {/* Firebase Connection Status Indicator */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  isFirebaseConfigured
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}>
                  <Database className="w-3 h-3" />
                  <span>{isFirebaseConfigured ? "Firebase Firestore: Connected" : "Firebase: Config Ready"}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#082D5C]">
                Online Admission Application
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Please provide student and guardian details. Application deadline is {schoolInfo.admissions.deadline}.
              </p>
            </div>

            {submitError && (
              <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Student Information Section */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 space-y-4">
                <h4 className="text-xs font-bold text-[#082D5C] uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#0759C7]" />
                  <span>Student Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Aryan Rahman"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.studentName ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.dateOfBirth ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.dateOfBirth && <p className="text-xs text-red-500 mt-1">{errors.dateOfBirth}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Grade Applying For
                    </label>
                    <select
                      value={formData.gradeApplying}
                      onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-[#0759C7]"
                    >
                      <option value="Playgroup">Playgroup (Early Years)</option>
                      <option value="Nursery">Nursery (Early Years)</option>
                      <option value="Kindergarten">Kindergarten</option>
                      <option value="Grade 1">Grade 1 (Primary)</option>
                      <option value="Grade 2">Grade 2 (Primary)</option>
                      <option value="Grade 3">Grade 3 (Primary)</option>
                      <option value="Grade 4">Grade 4 (Primary)</option>
                      <option value="Grade 5">Grade 5 (Primary)</option>
                      <option value="Grade 6">Grade 6 (Secondary)</option>
                      <option value="Grade 7">Grade 7 (Secondary)</option>
                      <option value="Grade 8">Grade 8 (Secondary)</option>
                      <option value="Grade 9">Grade 9 (IGCSE)</option>
                      <option value="Grade 10">Grade 10 (IGCSE)</option>
                      <option value="Grade 11">Grade 11 (A-Levels)</option>
                      <option value="Grade 12">Grade 12 (A-Levels)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-[#0759C7]"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Section */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 space-y-4">
                <h4 className="text-xs font-bold text-[#082D5C] uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#0759C7]" />
                  <span>Parent / Guardian Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Dr. Mahfuzul Alam"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.parentName ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.parentName && <p className="text-xs text-red-500 mt-1">{errors.parentName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      placeholder="parent@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.parentEmail ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.parentEmail && <p className="text-xs text-red-500 mt-1">{errors.parentEmail}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      placeholder="+880 1700 000000"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:ring-2 focus:ring-[#0759C7] ${
                        errors.parentPhone ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-white"
                      }`}
                    />
                    {errors.parentPhone && <p className="text-xs text-red-500 mt-1">{errors.parentPhone}</p>}
                  </div>
                </div>
              </div>

              {/* Actions & Integration Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 text-center sm:text-left">
                  {isFirebaseConfigured ? "🔥 Connected to Firebase Firestore collection 'admissions'" : "⚡ Local validation ready • Add Firebase keys in .env.local"}
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-slate-600 hover:bg-slate-100 text-sm font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-7 py-2.5 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white text-sm font-bold shadow-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Saving to Firebase...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Feedback with Live Firebase Confirmation */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#082D5C]">
              {submissionResult.isLiveFirebase ? "Application Saved to Firebase!" : "Application Form Validated!"}
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.parentName}</strong>. The application for <strong>{formData.studentName}</strong> ({formData.gradeApplying}) has been recorded.
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="font-bold text-[#082D5C]">Database Status:</span>
                <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                  submissionResult.isLiveFirebase ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                }`}>
                  {submissionResult.isLiveFirebase ? "🔥 Live Firebase Firestore" : "Local Mock Verified"}
                </span>
              </div>
              <p>• <strong>Document Reference ID:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[#0759C7]">{submissionResult.id}</code></p>
              <p>• <strong>Firestore Collection:</strong> <code>admissions</code></p>
              <p>• <strong>Admissions Office:</strong> {schoolInfo.admissionsEmail}</p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-2.5 rounded-full bg-[#082D5C] text-white font-semibold text-sm hover:bg-[#0759C7] transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
