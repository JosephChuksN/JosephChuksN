"use client"
import { FC, useState } from 'react'
import loadingGif from '@assets/loading.gif'
import Image from 'next/image'

interface props {
  name: string;
  email: string;
  message: string;
  loading:boolean
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setMessage: (value: string) => void;
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

}

const ContactForm: FC<props> = ({
   name, 
   email, 
   message,
   loading, 
   setName, 
   setEmail, 
   setMessage, 
   sendMessage}) => {
  

  return (
    <form className="flex flex-col gap-5 w-full" onSubmit={sendMessage}>
      <input
        className="rounded-sm p-2 bg-[#00000082] text-gray-100 font-para"
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Name"
        required
      />
      <input
        className="rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para"
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
        required
      />
      <textarea
        className="rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para"
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        cols={10}
        rows={8}
        placeholder="Your message"
        required
      />
      <button
        type="submit"
        className="bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-3">
            <Image 
            src={loadingGif} 
            alt="loading" 
            width={20} 
            height={20} 
            priority={true}
            />
            sending...
          </span>
        ) : (
         <p>Send message</p>
        )}
      </button>
    </form>
  );
};

export default ContactForm