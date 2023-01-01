import React from 'react'
import chukwudi from  '../assets/chukwudi.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Slide } from 'react-awesome-reveal'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const About:React.FC = () => {

   

  return (
    <div className="flex flex-col  gap-10 md:w-3/5 mx-auto px-5 md:px-0 translate-y-20">
        
    <span className="text-4xl text-white font-semibold font-headers flex gap-1">
    <span className="text-[#F78D26]">{`{`}</span> 
    About Me 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
    
    <div className="flex flex-col lg:flex-row w-full lg:gap-0 gap-14 content-start">
    <Slide damping={0.3} direction="left" triggerOnce={true}>
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
    <a href="https://github.com/JosephChuksN"  target="_blank" rel="noopener noreferrer">
    <span className="flex items-center gap-3 text-[#F78D26] font-headers hover:scale-75 transition-all delay-100 duration-300 cursor-pointer w-36">
      View Github 
      <FontAwesomeIcon icon={faLink} />
      </span></a>
    <span className="text-gray-300 flex flex-col gap-3">
    <span className="font-headers text-lg text-[#F78D26]">My skills:</span>
    <div className="flex flex-wrap gap-3 font-para lg:w-3/5 items-center">
    <span className="rounded-md bg-[#00000082] text-gray-50 py-1.5 px-3 text-base">JavaScript</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">React</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">TypeScript</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">Git</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">Github</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">Firebase</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">Sass</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">Html5</span>
    <span className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base" >Css3</span>
    <span  className="rounded-md bg-[#00000082] text-gray-50  py-1.5 px-3 text-base">TailwindCss</span>
  </div>
    </span>
    </div>
    </Slide>
    <Slide damping={0.5}  direction="right" triggerOnce={true} >
    <div className=" mx-auto flex items-center p-3 bg-[#F78D26] w-64 h-64 lg:w-72 lg:h-72 rounded-md relative mb-16 lg:mb-auto">
    <span className= 'hover:bottom-0 hover:right-0  transition-all delay-75 duration-300 ease-in-out flex items-center bg-no-repeat bg-cover w-64 h-64 lg:w-72 lg:h-72 rounded-md absolute bottom-3 right-3' style={{backgroundImage:`url(${chukwudi})`}}></span>
    </div>
    </Slide>
    
    </div>
    </div>
  )
}

export default About