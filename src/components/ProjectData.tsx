import React, {useState, useEffect, useRef} from 'react'
import { ProjectInterface } from '../interfaces/projectDataInterface'
import { Slide } from 'react-awesome-reveal'

interface props {
    data:ProjectInterface
}

const ProjectData:React.FC<props> = ({data}) => {
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
    <div key={data.name} className="w-full h-full  flex flex-col lg:flex-row items-center justify-center lg:pb-5 p-1 pb-16 ">
      <div className="lg:w-[39rem] w-full h-full">
      <Slide triggerOnce={true}  damping={0.3} direction="left">
     <span ref={image} className={`flex  w-full h-[300px] lg:h-[65vh] rounded-l-md  bg-no-repeat bg-cover ${hover ? "scale-110": ""} `} style={{backgroundImage:`url(${data.image})`}}></span>
     </Slide>
      </div>
     <div className="w-full lg:w-[30rem] " >
     <Slide damping={0.5}  direction="right" triggerOnce={true}>
     <div  className="flex gap-10  lg:gap-3 flex-col   h-full lg:h-[65vh]  justify-center   w-full  bg-[#000000b5]  lg:bg-gradient-to-l from-[#0c0f11] to-[#0d1114] py-3 px-2  lg:px-10  shadow-xl shadow-[#00000082] rounded-r-md">
      <span className="text-[#F78D26] text-xl font-headers">{data.name}</span>
      <span className="text-gray-300 font-para">{data.description}</span>
        <span className="font-headers text-gray-50 flex gap-3 items-center  w-full">
          {data.technologies.map(technologies=>(
            <span key={technologies}>{technologies}</span>
          ))}
        </span>
        <span className="text-white font-headers flex gap-5">
          <a href={data.liveSite} className="border-2 p-1 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out hover:text-[#F78D26] hover:border-[#F78D26] hover:scale-90"><span >View Live</span></a>
          <a href={data.sourceCode} className="border-2 p-1 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out hover:text-[#F78D26] hover:border-[#F78D26] hover:scale-90"><span >Source Code</span></a>
        </span>
    </div>
    </Slide>
     </div>
    
</div>

  )
}

export default ProjectData