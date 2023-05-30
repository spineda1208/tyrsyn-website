import './globals.css'
import { Roboto } from 'next/font/google'
import NavBar from './navbar'
import PageFooter from './footer'

const roboto = Roboto({
  weight: ['400', '700', '900'],
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
        <main>{children}</main>
        <PageFooter/>
      </body>
    </html>
  )
}
