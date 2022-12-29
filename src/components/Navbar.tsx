import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'
import useNavbarControl from '../hooks/useNavbarControl'
import portfoliologo from '../assets/portfoliologo.png'
import { NavHookInterface } from '../interfaces/navHookInterface'
import useScrollDirection from '../hooks/useScrollDirection'
import { NavItems } from '../interfaces/NavbarInterface'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar:React.FC = () => {
    
    const activeItem:string = "text-[#F78D26] scale-75 transition-all delay-75 duration-300 ease-in-out"
    const navbar = useRef< null | HTMLDivElement>(null)
    const {isNavOpen,  controlNavigation} = useNavbarControl()
    const { scrollDirection} = useScrollDirection()

  //  let threshHold:number = 0;

    // const handleNavScroll = ():void =>{
    //   const navNode = navbar.current
    //      const currentScroll = window.pageYOffset
    //      if(currentScroll <= 0){
    //       navNode?.classList.remove("shadow-lg", "backdrop-blur-lg", "md:py-4", "fixed")
    //       navNode?.classList.add("md:py-8", "sticky", "top-0")
    //      }
    //      if(currentScroll > threshHold  && !navNode?.classList.contains("-translate-y-full")){
    //       navNode?.classList.remove("shadow-lg",  "backdrop-blur-lg")
    //       navNode?.classList.add("-translate-y-full")   
    //      }
    //      if(currentScroll < threshHold  && navNode?.classList.contains("-translate-y-full")){
    //       navNode?.classList.remove("-translate-y-full", "md:py-8", "sticky", "top-0")
    //       navNode?.classList.add("shadow-lg", "backdrop-blur-lg", "md:py-4", "fixed" )
          
    //      }
     
     
    //    threshHold = currentScroll


    // }
    
// useEffect(() =>{
//   window.addEventListener("scroll", handleNavScroll)

//   return () =>{
//     window.removeEventListener("scroll", handleNavScroll)
//   }


// },[threshHold])


    const NavItems:NavItems[] =[
      {name:"Home", link:"/"},
      {name:"About", link:"about"},
      {name:"Projects", link:"projects"},
      {name:"Contact", link:"contact"}
    ]
   

  return (
    <div ref={navbar} className={`sticky shadow-[#00000082] ${scrollDirection === "down"? "-translate-y-full" : "top-0 backdrop-blur-lg "} transition-all delay-75 duration-500 ease-in-out w-full py-4 md:py-8 font-headers text-white z-50 `}>
    <div className=" flex justify-between items-center px-3 lg:px-56 relative">
       <img className=" flex items-center justify-center   w-12 h-12  " src={portfoliologo} alt="logo" />
       <span onClick={controlNavigation} className="lg:hidden text-3xl p-1 text-[#F78D26]"><FontAwesomeIcon icon={faBars} /></span>

       <div  className={`fixed flex box-border overscroll-none lg:static py-36 lg:py-0 justify-start items-center lg:justify-between lg:items-start top-0  left-0  h-[100vh] lg:h-7 w-full lg:w-1/3  flex-col md:flex-row bg-[#0d1114] transition-all duration-500 delay-100 ease-in-out z-10 lg:bg-transparent gap-10 lg:opacity-100  font-medium text-2xl lg:text-base   ${isNavOpen? "opacity-100" : "opacity-0"}`}>
        
            <span onClick={controlNavigation} className="absolute top-8 right-5 p-1 text-[#F78D26] text-4xl lg:hidden"><FontAwesomeIcon icon={faClose} /></span>
        
          {NavItems.map(items=>(
        <NavLink onClick={controlNavigation}  className={({isActive}:{isActive:boolean}): string => {return isActive ? activeItem : ""}} key={items.name} to={items.link}><span className=" transition-all delay-100 duration-500 ease-in-out cursor-pointer hover:opacity-70 hover:text-[#F78D26]" key={items.name}>{items.name}</span></NavLink>
        
          ))}
       </div>

    </div>
    </div>
  )
}

export default Navbar