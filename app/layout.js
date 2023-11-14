import './globals.css'
import { Inter } from 'next/font/google'
// import Layout from '@/components/Layout'
import "../public/style/boxicons/boxicons-2.1.4/boxicons.min.css"
// import "../public/style/scss/main.scss"
import "../public/style/scss/styles.scss"
import "react-toastify/dist/ReactToastify.css";
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dyleum',
  description: 'Dyleum',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>

      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

      </body>



    </html>
  )
}
