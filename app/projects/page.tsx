import { FC } from 'react'
import ProjectData from '../../components/ProjectData'
import { projectDatas } from '../../projectData'


const Projects:FC = () => {



  return (
    <div  className="flex flex-col  lg:gap-20 gap-10 l md:w-3/5 mx-auto px-5 md:px-0  translate-y-10 relative">
      <span className="text-4xl text-white font-semibold font-headers flex gap-1 ">
    <span className="text-[#F78D26]">{`{`}</span> 
    Projects 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
   {projectDatas.map(data=>(
      <ProjectData 
      key={data.name}
       data={data}
       
       />
    ))}</div>
   
  )
}

export default Projects