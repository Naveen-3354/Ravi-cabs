import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
        <div className='text-lg '>Hello World</div>
 
      <Footer />
    </div>
  );
}

export default App
