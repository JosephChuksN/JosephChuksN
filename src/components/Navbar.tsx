import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { NavItems } from '../interfaces/NavbarInterface'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar:React.FC = () => {
    const [show, setshow] = useState<boolean>(false)
    const activeItem:string = "text-[#F78D26] scale-75 transition-all delay-75 duration-300 ease-in-out"
    const navbar = useRef< null | HTMLDivElement>(null)

   let threshHold:number = 0;

    const handleNavigation = ():void =>{
      const navNode = navbar.current
         const currentScroll = window.pageYOffset
         if(currentScroll <= 0){
          navNode?.classList.remove("shadow-lg", "backdrop-blur-lg", "md:py-4")
          navNode?.classList.add("md:py-8")
         }
         if(currentScroll > threshHold  && !navNode?.classList.contains("-translate-y-full")){
          navNode?.classList.remove("shadow-lg",  "backdrop-blur-lg")
          navNode?.classList.add("-translate-y-full")   
         }
         if(currentScroll < threshHold  && navNode?.classList.contains("-translate-y-full")){
          navNode?.classList.remove("-translate-y-full", "md:py-8")
          navNode?.classList.add("shadow-lg", "backdrop-blur-lg", "md:py-4" )
          
         }
     
     
       threshHold = currentScroll


    }
    
useEffect(() =>{
  window.addEventListener("scroll", handleNavigation)

  return () =>{
    window.removeEventListener("scroll", handleNavigation)
  }


},[threshHold])


    const NavItems:NavItems[] =[
      {name:"Home", link:"/"},
      {name:"About", link:"about"},
      {name:"Projects", link:"projects"},
      {name:"Resume", link:"resume"},
      {name:"Contact", link:"contact"}
    ]
   

  return (
    <div ref={navbar} className={`shadow-[#00000082] transition-all delay-75 duration-200 ease-in-out fixed w-full py-4 md:py-8 font-headers text-white z-50 `}>
    <div className=" flex justify-between items-center px-3 lg:px-56 relative">
       <span className="text-2xl p-0.5 flex items-center justify-center font-bold text-[#F78D26] border-2 rounded-full border-[#F78D26] w-12 h-12  ">JN</span>
       <span onClick={()=>{setshow(!show)}} className="lg:hidden text-3xl p-1 text-[#F78D26]"><FontAwesomeIcon icon={faBars} /></span>

       <div  className={`fixed overscroll-none lg:static py-36 lg:py-0 justify-start items-center lg:justify-between lg:items-start top-0  left-0  h-full w-full lg:w-1/3 flex flex-col md:flex-row bg-[#0d1114] transition-all duration-500 delay-100 ease-in-out z-10 lg:bg-transparent gap-10 lg:opacity-100  font-medium text-2xl lg:text-base   ${show? "opacity-100" : "opacity-0"}`}>
        
            <span onClick={()=>{setshow(!show)}} className="absolute top-8 right-5 p-1 text-[#F78D26] text-4xl lg:hidden"><FontAwesomeIcon icon={faClose} /></span>
        
          {NavItems.map(items=>(
        <NavLink onClick={()=>{setshow(!show)}}  className={({isActive}:{isActive:boolean}): string => {return isActive ? activeItem : ""}} key={items.name} to={items.link}><span className=" transition-all delay-100 duration-500 ease-in-out cursor-pointer hover:opacity-70 hover:text-[#F78D26]" key={items.name}>{items.name}</span></NavLink>
          ))}
       </div>

    </div>
    </div>
  )
}

export default Navbar