import  { FC } from 'react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

import { Metadata } from 'next'


export const metadata:Metadata = {
  title: 'Joseph Nwosu | Home',
  description: 'Joseph Nwosu portfolio website home page'
}


const Home:FC = ()=>{


    return(
        <div className=" md:w-3/5 mx-auto px-3  md:px-10 pt-12 lg:pt-0 translate-y-10">
        
        <div className="p lg:pt-10 flex flex-col gap-7 md:gap-5 ">
      <span className="text-[#F78D26] font-headers">Hello <span className="text-lg ">👋</span>, My name is</span>
      <span className="text-5xl md:text-6xl font-medium text-white font-headers">Joseph Nwosu</span>
      <span className="text-gray-300 text-2xl md:text-4xl font-headers">I am a Frontend Developer and Tech enthusiast.</span>
      <span className="text-gray-300 md:w-3/5 md:text-lg font-para">
        I build and create proficient website, 
        helping buisnesses and individuals implement manual processes into computerised refined 
        Websites.
      </span>
      <span className="text-gray-300 font-headers flex gap-5 items-center cursor-pointer">
        See More 
        <span className="text-3xl transition-all delay-100 duration-200 ease-in-out text-[#F78D26] hover:scale-125 hover:translate-x-3 ">
        <Link href="/about"><BsArrowRight /></Link>
        </span>
     </span>
        </div>
        
     </div>
    )


}

export default Home;