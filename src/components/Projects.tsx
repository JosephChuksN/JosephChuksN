import React from 'react'
import linkpath from '../assets/linkpathphoto.png'

const Projects:React.FC = () => {
  return (
    <div  className="flex flex-col  gap-10 md:w-3/5 mx-auto px-5 md:px-0 lg:pt-10 pt-16 translate-y-20 relative">
      <span className="text-4xl text-white font-semibold font-headers flex gap-1">
    <span className="text-[#F78D26]">{`{`}</span> 
    Projects 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
<div className="w-full h-[50vh]  flex  ">
  <span className="flex w-full h-[80%]  lg:w-[38rem] lg:h-full rounded-md  bg-no-repeat bg-cover" style={{backgroundImage:`url(${linkpath})`}}></span>
  <div className="flex gap-3 flex-col absolute w-[55%] -right-36  top-56 bg-gradient-to-l from-[#0c0f11] to-[#0d1114] py-3 px-16 shadow-xl shadow-[#00000082] rounded-md">
    <span className="text-white text-xl font-headers">Linkpath</span>
    <span className="text-gray-300 font-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a 
      lacinia lacus condimentum id. Mauris sodales fringilla magna ut 
      ullamcorper. Cras nec interdum dui. Duis ac urna vitae ipsum</span>
      <span className="text-white font-headers flex gap-5">
        <span className="border-2 p-1">View Live</span>
        <span className="border-2 p-1">Source Code</span>
      </span>
  </div>
</div>


    </div>
  )
}

export default Projects