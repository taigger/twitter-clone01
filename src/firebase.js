import firebase from "firebase/compat/app";
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';
import 'firebase//compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe5lMbmNQE1yXaZGi32g1oZWvV5swFQ7g",
  authDomain: "twitter-clone01-596fa.firebaseapp.com",
  projectId: "twitter-clone01-596fa",
  storageBucket: "twitter-clone01-596fa.appspot.com",
  messagingSenderId: "627574053708",
  appId: "1:627574053708:web:ad930d4586027694a0cde9",
  measurementId: "G-G9L7FP0T2S"
};

// Initialize Firebase.
// 下記を追加
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
