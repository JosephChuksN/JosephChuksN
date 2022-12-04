import React, {useState} from 'react'
import { NavItems } from '../interfaces/NavbarInterface'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar:React.FC = () => {
    const [show, setshow] = useState<boolean>(false)
    const activeItem:string = " text-[#F78D26]"



    const NavItems:NavItems[] =[
      {name:"About", link:"about"},
      {name:"Projects", link:"arojects"},
      {name:"Resume", link:"resume"},
      {name:"Contact", link:"contact"}
    ]
      
  



  return (
    <div className="py-8 md:py-10 font-headers text-white z-50 relative lg:static">
    <div className=" flex justify-between items-center px-3 lg:px-56 ">
       <span className="text-2xl flex items-center justify-center font-bold text-[#F78D26] border-2 rounded-full border-[#F78D26] w-12 h-12  ">JN</span>
       <span onClick={()=>{setshow(!show)}} className="lg:hidden text-3xl p-1 text-[#F78D26]"><FontAwesomeIcon icon={faBars} /></span>

       <div className={`absolute  lg:static py-36 lg:py-0 justify-start items-center lg:justify-between lg:items-start top-0 left-0 h-[100vh] md:h-full w-full lg:w-1/3 flex flex-col md:flex-row bg-[#0d1114] transition-all duration-500  delay-100 ease-in-out z-10 lg:bg-transparent gap-10 lg:opacity-100  font-medium text-2xl lg:text-base   ${show? "opacity-100" : "opacity-0"}`}>
        
            <span onClick={()=>{setshow(!show)}} className="absolute top-8 right-5 p-1 text-[#F78D26] text-4xl lg:hidden"><FontAwesomeIcon icon={faClose} /></span>
        
          {NavItems.map(items=>(
           <span className="text-white transition-all delay-100 duration-500 ease-in-out cursor-pointer hover:opacity-70 hover:text-[#F78D26]" key={items.name}>{items.name}</span>
          ))}
       </div>

    </div>
    </div>
  )
}

export default Navbar