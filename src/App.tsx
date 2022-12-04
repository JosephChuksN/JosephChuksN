import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';


const  App:React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d1114] to-[#0c0f11] h-[100vh]">
      
     <Navbar />
     <Home />
    </div>
  );
}

export default App;
