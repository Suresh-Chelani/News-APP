// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCo6n1XgZHAfqgagXzybco6Sy6WDc7vQ7s",
    authDomain: "newsapp-cc357.firebaseapp.com",
    projectId: "newsapp-cc357",
    storageBucket: "newsapp-cc357.appspot.com",
    messagingSenderId: "902184640546",
    appId: "1:902184640546:web:42fa52c667771f9b7bea7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

export { app, auth };
