import { Inter } from "next/font/google";
import  "./globals.css";
import Header from "./Components/Header";



const inter = Inter ({ subsets: ['latin'] })

export const metadata = {
  title: "Create Next App",
  description: 'Generation by create next app',
}
export default function Rootlayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <Header/>
        
        {children}
        </body>

    </html>
  )
}
  