import React from 'react'
import ProjectData from './ProjectData'
import { projectDatas } from '../projectData'
import { Slide } from 'react-awesome-reveal'

const Projects:React.FC = () => {



  return (
    <div  className="flex flex-col  gap-10 md:w-3/5 mx-auto px-5 md:px-0 lg:pt-0 pt-12 translate-y-20 relative">
      <span className="text-4xl text-white font-semibold font-headers flex gap-1 mb-3">
    <span className="text-[#F78D26]">{`{`}</span> 
    Projects 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
   {projectDatas.map(data=>(
      <ProjectData 
       data={data}
       />
    ))}</div>
   
  )
}

export default Projects