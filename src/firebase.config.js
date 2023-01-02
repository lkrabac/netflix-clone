// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBggi8GTzV7iAIiQNFeVcGP-cx0YCkLH5U",
  authDomain: "fakelinkedbook.firebaseapp.com",
  projectId: "fakelinkedbook",
  storageBucket: "fakelinkedbook.appspot.com",
  messagingSenderId: "618870467472",
  appId: "1:618870467472:web:b432777639ae9a60862115",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;