"use client"
import { FC, useState } from 'react'

const ContactForm:FC = () => {

   const [name, setName] = useState<string>("")
   const [email, setEmail] = useState<string>("")
   const [message, setMessage] = useState<string>("")

   console.log("go")

  return (
    
        <form className="flex flex-col gap-5 w-full" action="https://getform.io/f/b720c0ca-a4f7-4b5c-8cc8-aa14137afbd0" method="POST">
        <input className="rounded-sm p-2 bg-[#00000082] text-gray-100 font-para" 
         type="text" 
         name="name"  
         value={name}
         onChange={(e)=>{setName(e.target.value)}}
         placeholder="Name"
         />
        <input className="rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para" 
        type="email" 
        name="email"  
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="Email"
        />
        <textarea className="rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para"
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
       
  )
}

export default ContactForm