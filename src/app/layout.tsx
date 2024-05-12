import './_styles/globals.css'
import { TRPCReactProvider } from '~/trpc/react'
import Header from './_components/header'
import { Cormorant_Garamond } from 'next/font/google'

export const metadata = {
  title: 'Isabelle & Johan',
  description: '...',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}
const coramant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${coramant.className} scroll-pt-20 scroll-smooth bg-background`}
    >
      <body>
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
