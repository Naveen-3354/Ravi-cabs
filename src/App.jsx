import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import About from './components/pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App
