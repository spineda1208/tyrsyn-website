import './globals.css'
import { Roboto } from 'next/font/google'
import NavBar from './navbar'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['cyrillic'],
})

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
      <body className={roboto.className}>
        <NavBar/>
        <main className='justify-center items-center'>{children}</main>
      </body>
    </html>
  )
}
