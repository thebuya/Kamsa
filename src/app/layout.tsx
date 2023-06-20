import './globals.css';
import './largedevices.css';
import './smalldevices.css';


import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
import WhatsAppButton from './components/WhatsappButton';
import BackToTopButton from './components/BackToTop';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kamsa Consultants Limited',
  description: 'Equipping Private and Public, Small'+
  ' and Medium sized entities with customized '+
  'financial and grants management education '+
  'to build a sustainable future through'+
  'training and advisory services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <WhatsAppButton/>
        <BackToTopButton/>
      </body>
    </html>
  )
}
