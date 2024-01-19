// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-FkEtJGEQ67AfCmVOfYKpTvyFlN4ItXA",
  authDomain: "netflix-gpt-2df43.firebaseapp.com",
  projectId: "netflix-gpt-2df43",
  storageBucket: "netflix-gpt-2df43.appspot.com",
  messagingSenderId: "544918550837",
  appId: "1:544918550837:web:0c391fdc778e4fadc5f47c",
  measurementId: "G-Q0HE2GYY3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

