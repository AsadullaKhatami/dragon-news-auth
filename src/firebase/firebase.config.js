// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2HWoB4iTveyr3aIuoJG2Zkgm4KmGlGoA",
  authDomain: "dragon-news-a38fa.firebaseapp.com",
  projectId: "dragon-news-a38fa",
  storageBucket: "dragon-news-a38fa.firebasestorage.app",
  messagingSenderId: "885720420088",
  appId: "1:885720420088:web:38deb952479dfcb2e7b50d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;