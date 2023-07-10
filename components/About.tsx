"use client"
import { FC } from 'react'
import Link from 'next/link'
import chukwudi from '../assets/chukwudi.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Slide } from 'react-awesome-reveal'






const About:FC = () => {

  const skills:string[] = ["JavaScript","React","TypeScript", "Git", "Github", "HTML5", "Css3", "Sass",  "Tailwind", "Firebase", ]

   


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
    Hi, my name is Joseph Nwosu, I am a highly motivated and 
    progress-focused Front-end developer with over 2 
    years of experience in web development and also a tech 
    enthusiast who is eager to learn and solve problems in 
    anything relating to the tech ecosystem. I enjoy collective 
    brainstorming sessions which allow me to coordinate activities 
    to achieve a common goal.Check out some of the things I built in my  
    <strong className="font-semibold text-[#F78D26] px-1.5">
       <Link href="/projects">projects</Link>
    </strong> 
     section
    </span>
    <span className="text-gray-300 text-base font-para">
    I am open and prepared to take on job opportunities and internship positions
     where I can contribute, improve, master, and add value. If you have a review of a fine opening that 
     corresponds to my skills and experience don't hold back to 
     <strong className="font-semibold text-[#F78D26] px-1.5">
     <Link href="/contact">contact</Link>
    </strong>
       me.
    </span>
    <a href="https://github.com/JosephChuksN"  target="_blank" rel="noopener noreferrer">
    <span className="flex items-center gap-3 text-[#F78D26] font-headers hover:scale-75 transition-all delay-100 duration-300 cursor-pointer w-36">
      View Github 
      <FontAwesomeIcon className="text-white text-base" icon={ faGithub} />
      </span></a>
    <span className="text-gray-300 flex flex-col gap-3">
    <span className="font-headers text-lg text-[#F78D26]">My skills:</span>
    <div className="flex flex-wrap gap-3 font-para lg:w-full items-center">
      {skills.map(skill =>(
        <span key={skill} className="rounded-md bg-[#00000082] text-gray-50 py-1.5 px-3 text-base">{skill}</span>
      ))}
  </div>
    </span>
    </div>
    </Slide>
    <Slide damping={0.5}  direction="right" triggerOnce={true} >
    <div className=" mx-auto flex items-center p-3 bg-[#F78D26] w-64 h-64 lg:w-72 lg:h-72 rounded-md relative mb-16 lg:mb-auto">
        <Image src={chukwudi} alt='photo'
        className= 'hover:bottom-0 hover:right-0  transition-all delay-75 duration-300 ease-in-out flex items-center w-64 h-64 lg:w-72 lg:h-72 rounded-md absolute bottom-3 right-3'
        />
    
    </div>
    </Slide>
    
    </div>
    </div>
  )
}

export default About