"use client"

import  { FC } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import useNavbarControl from '../hooks/useNavbarControl'
import portfoliologo from '../assets/portfoliologo.png'
import Image from 'next/image'
import useScrollDirection from '../hooks/useScrollDirection'
import { NavItems } from '../interfaces/NavbarInterface'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar:FC = () => {

   const pathname = usePathname()
   const activeItem:string = "text-[#F78D26] scale-75 transition-all delay-75 duration-300 ease-in-out"
    const {isNavOpen,  controlNavigation} = useNavbarControl()
    const { scrollDirection} = useScrollDirection()


    const NavItems:NavItems[] =[
      {name:"Home", link:"/"},
      {name:"About", link:"/about"},
      {name:"Projects", link:"/projects"},
      {name:"Contact", link:"/contact"},
    ]


  return (
    <div  className={`sticky shadow-[#00000082] ${scrollDirection === "down"? "-translate-y-full" : "top-0 backdrop-blur-lg "} transition-all delay-75 duration-500 ease-in-out w-full py-4 md:py-8 font-headers text-white z-50 `}>
    <div className=" flex justify-between items-center px-5 lg:px-56 relative">
      <Link href='/' className="flex items-center gap-5 text-md">
        <Image priority={true} className=" flex items-center justify-center   w-12 h-12  " src={portfoliologo} alt="logo" />
        <span className="hidden lg:block">joseph nwosu</span>
      </Link>
     
       <span onClick={controlNavigation} className="lg:hidden text-3xl p-1 text-[#F78D26]"><FontAwesomeIcon icon={faBars} /></span>

       <div  className={`fixed flex box-border overscroll-none lg:static py-36 lg:py-0 justify-start items-center lg:justify-between lg:items-start top-0  left-0  h-[100vh] lg:h-7 w-full lg:w-2/5 lg:mr-10 flex-col md:flex-row bg-[#0d1114] transition-all duration-700 delay-100 ease-in-out  lg:bg-transparent gap-10 lg:opacity-100 z-10 font-medium text-2xl lg:text-base lg:visible   ${isNavOpen? "opacity-100  visible" : " opacity-0 invisible"}`}>
        
            <span onClick={controlNavigation} className="absolute top-3 right-5 p-1 text-[#F78D26] text-4xl lg:hidden"><FontAwesomeIcon icon={faClose} /></span>
        
          {NavItems.map(items=>{

        return (
          <Link 
        onClick={controlNavigation}  
        className={pathname == `${items.link}` ? activeItem : ''}
        key={items.name} href={items.link}>
          <span className="text-lg transition-all delay-100 duration-500 ease-in-out cursor-pointer hover:opacity-70 hover:text-[#F78D26]" key={items.name}>
            {items.name}
          </span>
        </Link>
        )
      
        })}
          <div className="h-full transition-all duration-300 delay-75 ease-in-out hover:scale-110">
        <Link target='_blank' href='https://drive.google.com/file/d/1MyyhX7NP9-1gAgv3IB4DMHVEFwDkbSwF/view?usp=sharing'>
         <span className="bg-[#F78D26] px-3 py-1 text-md lg:py-2 text-white lg:font-semibold  rounded-sm"> 
            Resume
         </span>
         </Link>
         </div>
       </div>
      
       
    </div>
    </div>
  )
}

export default Navbar