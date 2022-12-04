import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import{ faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Slide, Fade } from 'react-awesome-reveal'


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
        <span className="fixed flex flex-row lg:flex-col lg:left-14 bottom-0 gap-8 py-4 lg:py-0 w-full lg:w-10 left-0 px-3 bg-[#ffffff06] backdrop-blur-sm lg:bg-transparent z-10  lg:gap-7 text-white text-base lg:text-lg">
            <span className="lg:hidden flex items-center font-thin text-sm font-headers opacity-100 text-white w-1/2">find me on:</span>
      <Fade damping={0.3} delay={5} cascade={true} direction="up">
        <a className="lg:hover:-translate-y-1 flex items-center hover:text-[#F78D26] transition-all delay-75 duration-300 ease-in-out cursor-pointer hover:opacity-70" href="https://twitter.com/JosephChuksN" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a className="lg:hover:-translate-y-1 flex items-center hover:text-[#F78D26] transition-all delay-75 duration-300 ease-in-out cursor-pointer hover:opacity-70" href="https://www.linkedin.com/in/nwosujosephchuks" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="hover:-translate-y-1 flex items-center hover:text-[#F78D26] transition-all delay-75 duration-300 ease-in-out cursor-pointer hover:opacity-70" href="https://github.com/JosephChuksN" target="blank"><FontAwesomeIcon icon={faGithub} /></a>
        <a className="lg:hover:-translate-y-1 flex items-center hover:text-[#F78D26] transition-all delay-75 duration-300 ease-in-out cursor-pointer hover:opacity-70" href="https://www.instagram.com/malehsha" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </Fade>
        <span className="hidden h-44 lg:flex items-center justify-center ">
            <span className="h-full   border-l-2 border-[#F78D26]"></span>
        </span>
      </span>
     </div>
  )
}

export default Home;