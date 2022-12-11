import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col  gap-10 md:w-3/5 mx-auto px-5 md:px-0 lg:pt-10 pt-16 translate-y-20">
          <span className="text-4xl text-white font-semibold font-headers flex gap-1 mb-3">
    <span className="text-[#F78D26]">{`{`}</span> 
    Contact 
    <span className="text-[#F78D26]">{`}`}</span>
    </span>
    <div>
        <span>
        Interested in working together? Reach out to me through the 
        contact form below. Feel free to reach out to me 
        through my social media handles or send a mail
        <a href="mailto:hellonwosu@gmail.com">hellonwosu@gmail.com</a>
        </span>
        <div>
            <form action="">

            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact