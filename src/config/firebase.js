// Firebase configuration
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  enableNetwork,
  disableNetwork,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "your_api_key_here",
  authDomain: "your_auth_domain_here",
  projectId: "your_project_id_here",
  storageBucket: "enter_your_storage_bucket_here",
  messagingSenderId: "messaging_sender_id_here",
  appId: "your_app_Id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Enable offline persistence
try {
  // Enable offline persistence for better user experience
  enableNetwork(db);
} catch (error) {
  console.warn("Firestore offline persistence failed:", error);
}

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Facebook Auth Provider
export const facebookProvider = new FacebookAuthProvider();

export default app;
