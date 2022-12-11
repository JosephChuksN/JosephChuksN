import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import SocailNetworks from './components/SocailNetworks';



const  App:React.FC = () => {


  return (
    <div>
      

     <Navbar />
     <Routes>
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="projects" element={<Projects />} />
     </Routes>
     <SocailNetworks />
    </div>
  );
}

export default App;
