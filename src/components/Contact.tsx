import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col  gap-10 md:w-3/5 mx-auto px-5 md:px-0 lg:pt-10 pt-16 translate-y-20">
          <span className="text-4xl text-white font-semibold font-headers flex gap-1 mb-3">
    <span className="text-[#F78D26]">{`{`}</span> 
    Contact 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
    <div className="flex flex-col lg:flex-row w-full  gap-10 content-start justify-center px-5 py-3">
        <span className="text-gray-300 font-para  text-base w-[50%] p-2">
        Interested in working together? Reach out to me through the 
        contact form below. Feel free to reach out to me 
        through my social media handles or send a mail  <br />
        <a className="text-[#F78D26] " href="mailto:hellonwosu@gmail.com">hellonwosu@gmail.com</a>
        </span>
        <div className="w-[50%]">
        <form className="flex flex-col gap-5 w-full p-2" action="">
        <input className="rounded-sm p-2 bg-[#ffffff0f]" 
         type="text" 
         name=""  
         placeholder="Name"
         />
        <input className="rounded-sm p-2 bg-[#ffffff0f]" 
        type="email" 
        name=""  
        placeholder="Email"
        />
        <textarea className="rounded-sm p-2 bg-[#ffffff0f] resize-none"
        name=""
        cols={10}
        rows={8}
        placeholder="Your message"
         />
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact