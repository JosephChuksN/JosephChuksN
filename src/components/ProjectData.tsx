import React from 'react'
import { ProjectInterface } from '../interfaces/projectDataInterface'

interface props {
    data:ProjectInterface
}

const ProjectData:React.FC<props> = ({data}) => {


  return (
    <div className="w-full h-[100vh]  flex  lg:static relative ">
     <span className="flex w-full lg:hover:opacity-90 transition-all duration-300 ease-in-out delay-75  opacity-40   lg:w-[38rem] h-full rounded-md  bg-no-repeat bg-cover" style={{backgroundImage:`url(${data.image})`}}></span>
     <div className="flex gap-10  lg:gap-3 flex-col h-full lg:h-[55%]  justify-center  absolute w-full lg:w-[55%] left-0 lg:left-[34rem] top-0  lg:top-48 bg-[#000000b5]  lg:bg-gradient-to-l from-[#0c0f11] to-[#0d1114] py-3 px-2  lg:px-10 shadow-xl shadow-[#00000082] rounded-md">
      <span className="text-white text-xl font-headers">{data.name}</span>
      <span className="text-gray-300 font-para">{data.description}</span>
        <span className="font-headers text-gray-50 flex flex-wrap gap-5">
          <span>{data.technologies}</span>
        </span>
        <span className="text-white font-headers flex gap-5">
          <span className="border-2 p-1 font-para rounded-md cursor-pointer text-base transition-all duration-100 delay-75 ease-in-out hover:text-[#F78D26] hover:border-[#F78D26] hover:scale-75">View Live</span>
          <span className="border-2 p-1 font-para rounded-md cursor-pointer text-base transition-all duration-100 delay-75 ease-in-out hover:text-[#F78D26] hover:border-[#F78D26] hover:scale-75">Source Code</span>
        </span>
    </div>
</div>

  )
}

export default ProjectData