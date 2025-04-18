// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-black-700 text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.45)]">
        Welcome to CWY Shop</h1>
      <p className="text-lg sm:text-xl mb-8 text-center max-w-md">
        Your one‑stop portal for managing orders, customers, and products with ease.</p>
      <div className="space-x-4">
        <Link to="/login" className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition">Login</Link>
        <Link to="/signup" className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition">Sign Up</Link>
      </div>
    </div>
  );
}
