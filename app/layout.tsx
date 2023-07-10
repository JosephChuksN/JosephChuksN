import './globals.css'
import SocailNetworks from '../components/SocailNetworks'
import Navbar from '../components/Navbar'


export const metadata = {
  title: 'Joseph Nwosu',
  description: 'Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <SocailNetworks />
      </body>
    </html>
  )
}
