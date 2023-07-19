import '@styles/globals.css'
import SocailNetworks from '../components/SocailNetworks'
import Navbar from '../components/Navbar'
import { Metadata } from 'next'


export const metadata:Metadata = {
  title: 'Joseph Nwosu | Porfolio',
  description: `Joseph is an analytical and reliable Frontend engineer with 
  solid experience in frontend software engineering, and backend software engineering. 
  Exhaustive knowledge of development, production, testing, and maintenance of frontend 
  software systems to build frontend systems, provide systems support, identify technical 
  issues, and collaborate with multi-function teams.`
  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel='icon' href='/portfoliologo.ico' />
      <body className="min-h-[100vh]">
        <Navbar />
        {children}
        <SocailNetworks />
      </body>
    </html>
  )
}
