import './_styles/globals.css'
import { TRPCReactProvider } from '~/trpc/react'
import Header from './_components/header'
import localFont from '@next/font/local'
import { Toaster } from './_components/ui/toaster'

const ptSerif = localFont({
  src: [
    {
      path: '../../public/fonts/PTSerif-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PTSerif-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PTSerif-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PTSerif-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-ptserif',
})

export const metadata = {
  title: 'Isabelle & Johan',
  description: '...',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${ptSerif.className} scroll-pt-6 bg-background md:scroll-pt-20 md:scroll-smooth`}
      suppressHydrationWarning={true}
    >
      <body>
        <Header />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  )
}
