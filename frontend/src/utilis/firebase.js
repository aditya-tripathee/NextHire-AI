import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "nexthire-ai-19290.firebaseapp.com",
  projectId: "nexthire-ai-19290",
  storageBucket: "nexthire-ai-19290.firebasestorage.app",
  messagingSenderId: "318265440743",
  appId: "1:318265440743:web:5119402d0107cd08162542",
  measurementId: "G-WVVHNMF39Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
