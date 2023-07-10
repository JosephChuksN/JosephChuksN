"use client"

import React from 'react'
import {Fade} from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocailNetworks:React.FC = () => {
  return (
    <div>
           <span className="fixed flex flex-row lg:flex-col lg:left-14 bottom-0 gap-8 py-4 lg:py-0 w-full lg:w-10 left-0 px-3 bg-[#ffffff06] backdrop-blur-sm lg:bg-transparent z-10  lg:gap-7 text-white text-base lg:text-lg">
            <span className="lg:hidden flex items-center font-thin text-sm font-headers opacity-100 text-white w-1/2">find me on:</span>
      <Fade damping={0.5} delay={1000} cascade={true} direction="up">
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

export default SocailNetworks