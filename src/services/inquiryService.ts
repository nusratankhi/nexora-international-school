import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function submitContactInquiry(data: ContactFormData) {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "inquiries"), {
        ...data,
        status: "Unread",
        createdAt: serverTimestamp(),
        source: "Nexora School Web Contact",
      });
      return {
        success: true,
        id: docRef.id,
        isLiveFirebase: true,
        message: `Inquiry saved directly to Firebase Firestore with Document ID: ${docRef.id}`,
      };
    } catch (error: any) {
      console.error("Firestore inquiry error:", error);
      throw new Error(error.message || "Failed to save message to Firestore.");
    }
  } else {
    return {
      success: true,
      id: `INQ-${Date.now().toString(36).toUpperCase()}`,
      isLiveFirebase: false,
      message: "Inquiry processed in local mode. Connect Firebase in .env.local to save to Firestore.",
    };
  }
}
