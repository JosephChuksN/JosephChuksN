import React from 'react'
import chukwudi from  '../assets/chukwudi.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faReact, faJs, faCss3, faHtml5, faBootstrap} from "@fortawesome/free-brands-svg-icons"
import { Slide } from 'react-awesome-reveal'


const About:React.FC = () => {

   

  return (
    <div className="flex flex-col gap-10 md:w-3/5 mx-auto px-5 md:px-0 lg:pt-10 pt-16">
        
    <span className="text-4xl text-white font-semibold font-headers flex gap-1">
    <span className="text-[#F78D26]">{`{`}</span> 
    About Me 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
    
    <div className="flex flex-col lg:flex-row w-full lg:gap-0 gap-14 content-start">
    <Slide damping={0.3} direction="left">
    <div className="flex flex-col gap-5 lg:w-4/5 ">
    <span className="text-gray-300 text-base font-para ">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Nullam sed congue nisl. Proin libero nibh, 
     posuere nec ante non, varius aliquet ipsum. Mauris dignissim neque risus, vitae 
     fermentum tortor consectetur eget. Quisque neque ante, pharetra at varius et, 
     commodo finibus diam. Proin sed blandit turpis
    </span>
    <span className="text-gray-300 text-base font-para ">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Nullam sed congue nisl. Proin libero nibh, 
     posuere nec ante non, varius aliquet ipsum. Mauris dignissim neque risus, vitae 
     fermentum tortor consectetur eget turpis.
    </span>
    <span className="text-gray-300 flex flex-col gap-3">
    <span className="font-headers">My skills:</span>
    <div className="grid grid-cols-2 gap-2 font-para lg:w-3/5 items-center">
    <span className="flex gap-2 items-center"><FontAwesomeIcon icon={faJs} className="text-yellow-600 text-lg" />JavaScript</span>
    <span className="flex gap-2 items-center"><FontAwesomeIcon icon={faReact} className="text-[#61DBFB] text-lg" />React</span>
    <span className="flex gap-2 items-center"><FontAwesomeIcon icon={faHtml5} className="text-[#e34c26] text-lg" />Html5</span>
    <span className="flex gap-2 items-center"><FontAwesomeIcon icon={faCss3} className="text-[#264de4] text-lg" />Css3</span>
    <span className="flex gap-2 items-center"><FontAwesomeIcon icon={faBootstrap} className="text-[#563d7c] text-lg" />Bootstrap</span>
  </div>
    </span>
    </div>
    </Slide>
    <Slide damping={0.5}  direction="right">
    <div className=" mx-auto flex items-center p-3 bg-[#F78D26] w-64 h-64 lg:w-72 lg:h-72 rounded-md relative">
    <span className= 'hover:bottom-0 hover:right-0  transition-all delay-75 duration-300 ease-in-out flex items-center bg-no-repeat bg-cover w-64 h-64 lg:w-72 lg:h-72 rounded-md absolute bottom-3 right-3' style={{backgroundImage:`url(${chukwudi})`}}></span>
    </div>
    </Slide>
    
    </div>
    </div>
  )
}

export default About