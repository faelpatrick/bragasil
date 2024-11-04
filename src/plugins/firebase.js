import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Exemplo com Firestore
import { getAuth } from "firebase/auth"; // Exemplo com Auth

// chek url if bragasil.vercel.app use import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_VERCEL else use import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const authDomain = window.location.hostname === 'bragasil.vercel.app'
? import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_VERCEL
: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;

// Configuração do Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// console.log(firebaseConfig);
// Inicializa o Firebase
const appFirebase = initializeApp(firebaseConfig);

// Exporta serviços específicos do Firebase
const analytics = getAnalytics(appFirebase);
const firestore = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

export { appFirebase, analytics, firestore, auth };
