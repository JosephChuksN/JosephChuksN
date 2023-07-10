"use client"
import React, {useState} from 'react'

const Contact = () => {

   const [name, setName] = useState<string>("")
   const [email, setEmail] = useState<string>("")
   const [message, setMessage] = useState<string>("")



  return (
    <div className="flex flex-col  gap-10 md:w-3/5 mx-auto px-5 md:px-0  translate-y-20 pb-14">
          <span className="text-4xl text-white font-semibold font-headers flex gap-1 mb-3 ">
    <span className="text-[#F78D26]">{`{`}</span> 
    Contact 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
    <div className="flex flex-col lg:flex-row w-full  gap-10 content-start justify-center lg:px-5 lg:py-3">
        <span className="text-gray-300 font-para  text-lg lg:w-[50%] lg:p-2">
        Interested in working together? Reach out to me through the 
        contact form below. Feel free to reach out to me 
        through my social media handles or send a mail  <br />
        <span className="text-[#F78D26] transition-all delay-75 duration-300 ease-in-out hover:underline underline-offset-8 ">
         <a  href="mailto:hellonwosu@gmail.com">
            hellonwosu@gmail.com
         </a>
        </span>
        </span>
        <div className="lg:w-[50%]">
        <form className="flex flex-col gap-5 w-full" action="https://getform.io/f/b720c0ca-a4f7-4b5c-8cc8-aa14137afbd0" method="POST">
        <input className="rounded-sm p-2 bg-[#ffffff0f] text-gray-100 font-para" 
         type="text" 
         name="name"  
         value={name}
         onChange={(e)=>{setName(e.target.value)}}
         placeholder="Name"
         />
        <input className="rounded-sm p-2 bg-[#ffffff0f]  text-gray-100 font-para" 
        type="email" 
        name="email"  
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="Email"
        />
        <textarea className="rounded-sm p-2 bg-[#ffffff0f]  text-gray-100 resize-none font-para"
        name="message"
        value={message}
        onChange={(e)=>{setMessage(e.target.value)}}
        cols={10}
        rows={8}
        placeholder="Your message"
         />
         <button type="submit" className="bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers">
            Send message
         </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact