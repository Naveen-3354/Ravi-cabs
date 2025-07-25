import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto">
        <Routes>
          <Route path="/about" element={<About />} />
          {/* You can add more routes for other pages here */}
          {/* <Route path="/cars" element={<p>Cars Page</p>} /> */}
          {/* <Route path="/services" element={<p>Services Page</p>} /> */}
          {/* <Route path="/blog" element={<p>Blog Page</p>} /> */}
          {/* <Route path="/contact" element={<p>Contact Page</p>} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
