import  { FC } from 'react'
import Home from '@components/Home'

import { Metadata } from 'next'


export const metadata:Metadata = {
  title: 'Joseph Nwosu | Home',
  description: 'Joseph Nwosu portfolio website home page'
}


const HomePage:FC = ()=>{


    return(
        <>
         <Home />
         </>
    )


}

export default HomePage;