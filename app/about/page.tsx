import { FC } from 'react'
import Link from 'next/link'
import chuksdev from '@assets/Chuksdev.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { skills } from '@skills'




const About:FC = () => {

  

  return (
    <div className="flex flex-col pb-10 gap-10 md:w-3/5 mx-auto px-5 md:px-0 translate-y-10">
        
    <span className="text-4xl text-white font-semibold font-headers flex gap-1">
    <span className="text-[#F78D26]">{`{`}</span> 
    About Me 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
    
    <div className="flex flex-col lg:flex-row w-full lg:gap-0 gap-14 content-start">
    
    <div className="flex flex-col gap-5 lg:w-3/5 ">
    <span className="text-gray-300 text-base font-para ">
    Hi, my name is Joseph Nwosu, I am an analytical and reliable Frontend developer with 
    solid experience in frontend software engineering, and backend software engineering. 
    Exhaustive knowledge of development, production, testing, and maintenance of frontend 
    software systems to build frontend systems, provide systems support, identify technical 
    issues, and collaborate with multi-function teams. Skilled in adapting to new situations 
    and challenges to best enhance the organizational brand.Check out some of the things I built in my  
    <strong className="font-semibold text-[#F78D26] px-1.5 text-lg">
       <Link href="/projects">projects</Link>
    </strong> 
     section
    </span>
    <span className="text-gray-300 text-base font-para">
    I am open and prepared to take on job opportunities and internship positions
     where I can contribute, improve, master, and add value. If you have a review of a fine opening that 
     corresponds to my skills and experience don't hold back to 
     <strong className="font-semibold text-[#F78D26] px-1.5 text-lg">
     <Link href="/contact">contact</Link>
    </strong>
       me.
    </span>
    <a href="https://github.com/JosephChuksN"  target="_blank" rel="noopener noreferrer">
    <span className="flex items-center gap-3 text-[#F78D26] font-headers hover:scale-110 transition-all delay-100 duration-300 cursor-pointer w-36">
      View Github 
      <FontAwesomeIcon className="text-white text-xl" icon={ faGithub} />
      </span></a>
    <span className="text-gray-300 flex flex-col gap-3">
    <span className="font-headers text-lg text-[#F78D26]">My skills:</span>
    <div className="flex flex-wrap gap-3 font-para lg:w-full items-center ">
      {skills.map(skill =>(

        <span key={skill.name} className=" flex items-center gap-3 rounded-md bg-[#00000082] text-gray-50 py-2 px-3 text-base">
          <Image  src={skill.icon} alt='skill logo' 
          width={30}
          height={30}
          className="rounded-sm"
          />
          <span>{skill.name}</span>
        </span>
      ))}
  </div>
    </span>
    </div>
    
    
    <div className=" mx-auto flex items-center p-3 bg-[#F78D26] w-72  h-96 rounded-md relative mb-16 lg:mb-auto">
    <Image priority src={chuksdev} alt='photo' width={0} height={0}  style={{ width: '100%', height: '100%' }}
        className= 'hover:bottom-0 hover:right-0  transition-all delay-75 duration-300 ease-in-out flex items-center rounded-md absolute bottom-3 right-3'
        />
    
    </div>
    
    
    </div>
    </div>
  )
}

export default About