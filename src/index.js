import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

  // web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyANKapmgABfZFz1Ix5tSYETkYx0bYKfkxw",
    authDomain: "cart-a93cc.firebaseapp.com",
    projectId: "cart-a93cc",
    storageBucket: "cart-a93cc.appspot.com",
    messagingSenderId: "596791050912",
    appId: "1:596791050912:web:3593de755ef79dcc9a3fc5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


