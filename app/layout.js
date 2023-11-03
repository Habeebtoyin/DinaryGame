import './globals.css'
import { Inter } from 'next/font/google'
// import Layout from '@/components/Layout'
import "../public/style/boxicons/boxicons-2.1.4/boxicons.min.css"
// import "../public/style/scss/main.scss"
import "../public/style/scss/styles.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dyelum',
  description: 'Dyelum',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={inter.className}>
          
          {children}
          
        </body>
    </html>
  )
}
