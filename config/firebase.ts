import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-o5hQR6mMVGNsb0pgrBB-AWjzUWKBSX8",
  authDomain: "sv-project-23-3c522.firebaseapp.com",
  projectId: "sv-project-23-3c522",
  storageBucket: "sv-project-23-3c522.appspot.com",
  messagingSenderId: "493315017639",
  appId: "1:493315017639:web:d0236602354ed87565c482",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
