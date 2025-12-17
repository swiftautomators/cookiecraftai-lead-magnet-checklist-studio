import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';

const App: React.FC = () => {
  // In a real Next.js app, we would use Server Actions and standard routing.
  // Here we use HashRouter for client-side navigation compatibility.
  
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <header className="py-6 px-4 md:px-8 border-b border-cookie-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍪</span>
              <span className="font-serif text-xl font-bold text-cookie-900 tracking-tight">CookieCraft AI</span>
            </div>
            <nav className="hidden md:block">
              <a 
                href="https://www.cookiecraftai.com" 
                className="inline-flex items-center px-4 py-2 border border-cookie-200 text-sm font-medium rounded-full text-cookie-700 bg-cookie-50 hover:bg-cookie-100 transition-colors"
              >
                Visit cookiecraftai.com
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="bg-cookie-900 text-cookie-100 py-12 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍪</span>
                <span className="font-serif text-xl font-bold text-white">CookieCraft AI</span>
              </div>
              <p className="text-cookie-300 max-w-sm">
                Helping bakers turn their passion into profitable businesses with intelligent tools and guidance.
              </p>
            </div>
            <div className="text-right text-sm text-cookie-400">
              <p>&copy; {new Date().getFullYear()} CookieCraft AI. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;