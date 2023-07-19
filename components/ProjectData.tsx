"use client"

import { FC, useState, useEffect, useRef } from 'react'
import { ProjectInterface } from '@interfaces/projectDataInterface'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { motion } from 'framer-motion'



interface props {
    data:ProjectInterface
}

const ProjectData:FC<props> = ({data}) => {
const [hover, setHover]= useState<boolean>(false)
const image = useRef<null | HTMLSpanElement>(null)
const ImageNode = image.current


useEffect(()=>{
 
  const handleHoverEvent = ():void=>{
    setHover(!hover)
  }
  ImageNode?.addEventListener("mouseover", handleHoverEvent )
  return () => {
    ImageNode?.removeEventListener("mouseover", handleHoverEvent)
  }
},[hover, ImageNode])

  return (
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 10 }}
     viewport={{ once: true }}
     transition={{ duration: 1.5 }}
     exit={{ opacity: 0 }}
     >
    <div key={data.name} className="w-full h-full  flex flex-col lg:flex-row items-center justify-center lg:pb-5 p-1 pb-16 lg:mb-14 ">
      
    <span ref={image} className={`flex opacity-70  w-full h-[300px] lg:h-[55vh] rounded-l-md  bg-no-repeat bg-cover `}>
    <Image  priority  data-aos="zoom-in-down" width={500}  height={500} src={data.image} alt='project image'  />
    </span>
    
     
     <div data-aos="zoom-out-up"  className="flex gap-5   flex-col   h-full lg:h-[55vh]  justify-center  w-full  bg-[#000000b5]  lg:bg-gradient-to-l from-[#0c0f11] to-[#0d1114] py-3  px-2  lg:px-8  shadow-xl shadow-[#00000082] rounded-r-md">
      <span className="text-[#F78D26] text-lg lg:text-3xl font-headers">{data.name}</span>
      <span className="text-gray-300 font-para text-base lg:text-lg">{data.description}</span>
        <div className="flex flex-col w-full gap-3">
          <span className="text-lg lg:text-xl text-[#F78D26] font-headers">Built With:</span>
        <span className="font-headers text-gray-300 text-base lg:text-lg  flex flex-wrap gap-3 items-center  w-full">
          {data.stack.map(technologies=>(
            <span key={technologies} className="lg:px-1 flex ">{technologies}</span>
          ))}
        </span>
        </div>
        <span className="text-white font-headers flex gap-5">
          <a href={data.livesite}  target="_blank" rel="noopener noreferrer" className={`${data.livesite ? "block" : "hidden"} flex gap-2 px-1.5 py-2 items-center justify-center bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90`}>
            <span >View Live</span>
            <FontAwesomeIcon icon={faEye} />
          </a>
          <a href={data.sourceCode}  target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center justify-center px-1.5 py-2 bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90">
            <span >Source Code</span> 
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
    </div>
  
    
</div>
</motion.div>
  )
}

export default ProjectData