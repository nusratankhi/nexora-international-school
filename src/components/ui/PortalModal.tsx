"use client";

import React, { useState } from "react";
import { X, GraduationCap, Users, Lock, LogIn, CheckCircle } from "lucide-react";
import { schoolInfo } from "@/data/school";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'student' | 'parent' | 'teacher';
}

export const PortalModal: React.FC<PortalModalProps> = ({ 
  isOpen, 
  onClose,
  initialType = 'student'
}) => {
  const [activeTab, setActiveTab] = useState<'student' | 'parent' | 'teacher'>(initialType);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please enter both ID/Email and password");
      return;
    }

    setError("");
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setLoginSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setLoginSuccess(false);
    setUsername("");
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!loginSuccess ? (
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#082D5C]">
                Nexora Portal Access
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Select your institutional role to continue
              </p>

              {/* Role Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mt-4">
                <button
                  type="button"
                  onClick={() => { setActiveTab('student'); setError(""); }}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'student'
                      ? "bg-white text-[#082D5C] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('parent'); setError(""); }}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'parent'
                      ? "bg-white text-[#082D5C] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Parent
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('teacher'); setError(""); }}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'teacher'
                      ? "bg-white text-[#082D5C] shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Teacher
                </button>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {activeTab === 'student' ? "Student ID or Email" : activeTab === 'parent' ? "Registered Parent Email" : "Faculty Employee ID"}
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={
                    activeTab === 'student' ? "e.g. NX-2025-0142" : activeTab === 'parent' ? "parent@example.com" : "FAC-789"
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-[#0759C7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-[#0759C7]"
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3 rounded-full bg-[#082D5C] hover:bg-[#0759C7] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Sign In to {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Portal</span>
                  </>
                )}
              </button>

              <div className="pt-2 text-center text-xs text-slate-400">
                <span>Demo mode • Enter any test credentials</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#082D5C]">
              Portal Authentication Validated
            </h4>
            <p className="text-xs text-slate-600">
              Welcome to the {activeTab.toUpperCase()} dashboard prototype for Nexora International School.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 text-left">
              <p>• User: {username}</p>
              <p>• Role: {activeTab}</p>
              <p>• SSO Integration endpoint ready.</p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-full bg-[#082D5C] text-white text-xs font-semibold"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
