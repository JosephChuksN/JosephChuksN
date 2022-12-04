import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';



const  App:React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d1114] to-[#0c0f11] h-[100vh]">
      
     <Navbar />
     <Routes>
     <Route index element={<Home />} />
     <Route path='about' element={<About />} />
     </Routes>
    </div>
  );
}

export default App;
