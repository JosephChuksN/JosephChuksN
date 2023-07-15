import { FC } from 'react'
import ProjectData from '../../components/ProjectData'
import { projectDatas } from '../../projectData'
import { ProjectInterface } from '@interfaces/projectDataInterface'
import { db } from '../../firebaseConfig'
import { doc, getDoc, collection } from 'firebase/firestore'









const Projects = async () => {


    const docRef = doc(db, "Projects", "ZjIPKomQGW992tlgadgN")
  
    const docSnap = await getDoc(docRef)
    const projects = docSnap!.data()!.Projects



  return (
    <div  className="flex flex-col  lg:gap-20 gap-10 l md:w-3/5 mx-auto px-5 md:px-0  translate-y-10 relative">
      
      <span className="text-4xl text-white font-semibold font-headers flex gap-1 ">
    <span className="text-[#F78D26]">{`{`}</span> 
    Projects 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
   {projects.map((data: ProjectInterface)=>(
    
      <ProjectData 
       key={data.name}
       data={data}
       
       />
    ))}</div>
   
  )
}

export default Projects;




