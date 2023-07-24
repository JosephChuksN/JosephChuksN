import ProjectData from '../../components/ProjectData'
import { ProjectInterface } from '@interfaces/projectDataInterface'
import { db } from '@firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'


const Projects = async (): Promise<JSX.Element> => {


  const docRef = doc(db, "Projects", "ZjIPKomQGW992tlgadgN")
  
  const docSnap = await getDoc(docRef)
  const projects = docSnap!.data()!.Projects


  return (
    <div  className="flex flex-col  lg:gap-20 gap-10 l md:w-3/5 mx-auto px-5 md:px-0  translate-y-10 relative">
      <span className="text-4xl text-white font-semibold font-headers flex gap-1 "> Projects </span>
   {projects.map((data: ProjectInterface)=>(
      <ProjectData 
      key={data.name}
       data={data}
       
       />
    ))}</div>
   
  )
}

export default Projects