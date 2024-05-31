import Container from './_components/ui/container'
import localFont from '@next/font/local'
import Image from 'next/image'
import IntroMarkdown from './_markdown/intro.mdx'
import FooterLinks from './_components/footer-links'

export const mackinac = localFont({
  src: '../../public/fonts/mackinac_1895.ttf',
  variable: '--font-mackinac',
})

export default async function Home() {
  return (
    <Container showLogo={false}>
      <div className="mb-6 flex flex-col items-center">
        <h1
          className={`${mackinac.className} mb-8 text-center text-6xl md:text-8xl`}
        >
          Isabelle & Johan
        </h1>
        <h3 className="text-md uppercase md:text-lg">
          Den 6 - 7 September 2024
        </h3>
      </div>
      <div className="relative aspect-video w-full md:w-5/6">
        <Image src="/slott_brudpar.svg" alt="Wedding photo" fill />
      </div>
      <section className="flex w-full flex-col items-center">
        <div className="prose max-w-2xl text-center">
          <IntroMarkdown />
        </div>
      </section>
      <FooterLinks right={{ src: '/bra-att-veta', label: 'Bra att veta' }} />
    </Container>
  )
}
