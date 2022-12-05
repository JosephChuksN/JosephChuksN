import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import { Slide } from 'react-awesome-reveal'


const Home:React.FC = () => {
  return (
    <div className=" md:w-3/5 mx-auto px-3 md:px-10">
        <Slide>
    <div className="pt-16 lg:pt-10 flex flex-col gap-7 md:gap-5 ">
      <span className="text-[#F78D26] font-headers">Hello <span className="text-lg ">👋</span>, My name is</span>
      <span className="text-5xl md:text-6xl font-medium text-white font-headers">Joseph Nwosu</span>
      <span className="text-gray-300 text-2xl md:text-4xl font-headers">I am a Frontend Developer and Tech enthusiast.</span>
      <span className="text-gray-300 md:w-3/5 md:text-lg font-para">
        I build and create proficient website, 
        helping buisnesses and individuals implement manual processes into computerised refined 
        Websites.
      </span>
      <span className="text-gray-300 font-headers flex gap-5 items-center">
        See More 
      <span className="text-3xl transition-all delay-100 duration-200 ease-in-out hover:text-[#F78D26] hover:scale-125  ">
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </span>
      </span>
      
        </div>
        </Slide>
     </div>
  )
}

export default Home;