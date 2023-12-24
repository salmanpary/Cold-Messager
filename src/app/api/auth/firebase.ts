import { getApp, getApps } from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAGRr5SmbXh38mTZOTI48Ql9Y01hl3yH0Q",
	authDomain: "cold-messager.firebaseapp.com",
	projectId: "cold-messager",
	storageBucket: "cold-messager.appspot.com",
	messagingSenderId: "675865509237",
	appId: "1:675865509237:web:d4ff37010141e4f5d0273c",
	measurementId: "G-BCS1LQDDQR",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export { app };
