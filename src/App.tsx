import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocailNetworks from './components/SocailNetworks';
import AOS from 'aos'
import 'aos/dist/aos.css';




const  App:React.FC = () => {


  useEffect(()=>{
    AOS.init({delay: 300, duration: 300, once: true, easing: "ease-in-out"})
  },[])

  return (
    <div>
      

     <Navbar />
     <Routes>
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="projects" element={<Projects />} />
     <Route path="contact" element={<Contact />} />
     </Routes>
     <SocailNetworks />
    </div>
  );
}

export default App;
