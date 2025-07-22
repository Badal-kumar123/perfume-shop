// src/main.jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <CartProvider>
        <BrowserRouter>
        <ThemeProvider>
          <App />
          <ToastContainer position="top-right" autoClose={2000} />
           </ThemeProvider>
        </BrowserRouter>
      </CartProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
