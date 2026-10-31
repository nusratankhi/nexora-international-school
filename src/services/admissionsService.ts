import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface AdmissionFormData {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  gradeApplying: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  address?: string;
  previousSchool?: string;
}

export async function submitAdmissionApplication(data: AdmissionFormData) {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "admissions"), {
        ...data,
        status: "Pending Review",
        createdAt: serverTimestamp(),
        source: "Nexora School Web Portal",
      });
      return {
        success: true,
        id: docRef.id,
        isLiveFirebase: true,
        message: `Application submitted successfully and saved to Firebase Firestore with Document ID: ${docRef.id}`,
      };
    } catch (error: any) {
      console.error("Firestore submission error:", error);
      throw new Error(error.message || "Failed to save application to Firestore.");
    }
  } else {
    // Graceful offline/demo mode when .env.local is not yet filled with real keys
    return {
      success: true,
      id: `DEMO-${Date.now().toString(36).toUpperCase()}`,
      isLiveFirebase: false,
      message: "Application validated locally. To persist directly into live Firebase, add your Firebase keys in .env.local.",
    };
  }
}
