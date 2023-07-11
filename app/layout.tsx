import '@styles/globals.css'
import SocailNetworks from '../components/SocailNetworks'
import Navbar from '../components/Navbar'
import { Metadata } from 'next'


export const metadata:Metadata = {
  title: 'Joseph Nwosu | Porfolio',
  description: 'I am a front-end software engineer proficient in JavaScript, Next, React, and TypeScript',
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel='icon' href='/portfoliologo.ico' />
      <body>
        <Navbar />
        {children}
        <SocailNetworks />
      </body>
    </html>
  )
}
