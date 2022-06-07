import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgaGBjY0Qzw39W24HKignCjvijQ9gt3l4",
  authDomain: "coderhouse-ecommerce-3cad8.firebaseapp.com",
  projectId: "coderhouse-ecommerce-3cad8",
  storageBucket: "coderhouse-ecommerce-3cad8.appspot.com",
  messagingSenderId: "347543528053",
  appId: "1:347543528053:web:6d7ce4b9def8da288b0e3c"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
