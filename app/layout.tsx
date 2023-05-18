import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Tyr & Syn',
    template: '%s | Tyr & Syn'
  },
  description: 'RFID technology company based in Guatemala',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <main className=''>{children}</main>
      </body>
    </html>
  )
}
