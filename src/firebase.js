// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// 🔴 Cole aqui o firebaseConfig do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyDzf4Hob7gEal48SdyvEgfgQp7vNcVklx4",
  authDomain: "e-commerce-58172.firebaseapp.com",
  projectId: "e-commerce-58172",
  storageBucket: "e-commerce-58172.firebasestorage.app",
  messagingSenderId: "495334805834",
  appId: "1:495334805834:web:e0539add2f10c32b2631b3"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");

// (Opcional) escopos extras para Microsoft, ex:
// microsoftProvider.addScope("User.Read");
