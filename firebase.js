// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdO_W7GNplmInraDfHEjX1wmonryV5or8",
  authDomain: "satuki-diary.firebaseapp.com",
  projectId: "satuki-diary",
  storageBucket: "satuki-diary.appspot.com",
  messagingSenderId: "577749830697",
  appId: "1:577749830697:web:c15bb3f99db8c84189a038",
  measurementId: "G-VQY4VLRR4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ブラウザのみで動作する
if(typeof window !== 'undefined'){
    const analytics = getAnalytics(app);
  }
  