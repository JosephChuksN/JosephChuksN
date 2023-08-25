"use client"

import { FC, useState } from 'react'
import ContactForm from '../../components/ContactForm'
import { showToast } from "react-next-toast";



const ContactPage:FC = () =>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)

     const data = { name, email, message };

     const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       setLoading(true)
       try {
         const requestOptions = {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(data),
         };
         const res = await fetch("../api/contact/cont", requestOptions).then(
           () => {
             showToast.success("message sent successfully");
           }
         );
       } catch (error) {
         showToast.error("message not");
       } finally {
         setName("");
         setEmail("");
         setMessage("");
         setLoading(false)
       }
     } 


    return (
      <div className="flex flex-col  gap-10 md:w-3/5 mx-auto px-5 md:px-0  translate-y-10 pb-14">
        <span className="text-4xl text-white font-semibold font-headers flex gap-1 mb-3 ">
          <span className="text-[#F78D26]">{`{`}</span>
          Contact
          <span className="text-[#F78D26]">{`}`}</span>
        </span>
        <div className="flex flex-col lg:flex-row w-full  gap-10 content-start justify-center lg:px-5 lg:py-3">
          <span className="text-gray-300 font-para  text-lg lg:w-[50%] lg:p-2">
            Interested in working together? Reach out to me through the contact
            form below. Feel free to reach out to me through my social media
            handles or send a mail <br />
            <span className="text-[#F78D26] transition-all delay-75 duration-300 ease-in-out hover:underline underline-offset-8 ">
              <a href="mailto:hellonwosu@gmail.com">hellonwosu@gmail.com</a>
            </span>
          </span>
          <div className="lg:w-[50%]">
            <ContactForm
              name={name}
              setName={setName}
              email={email}
              loading={loading}
              setEmail={setEmail}
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    );
}

export default ContactPage