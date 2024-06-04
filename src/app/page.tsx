import Container from './_components/ui/container'
import localFont from '@next/font/local'
import Image from 'next/image'
import IntroMarkdown from './_markdown/intro.mdx'
import FooterLinks from './_components/footer-links'
import { Section } from './_components/section'
import { Card, CardContainer } from './_components/ui/card'
import FridayScheduleMarkdown from './_markdown/friday.mdx'
import SaturdayScheduleMarkdown from './_markdown/saturday.mdx'
import Link from 'next/link'
import { Button } from './_components/ui/button'

const mackinac = localFont({
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
      <div className="mb-20 w-full border-[1px]" />
      <section className="hidden w-full flex-col items-center md:flex">
        <div className="flex w-full space-x-12">
          <div className="relative aspect-[4/5] w-4/5 overflow-hidden bg-white shadow-sm">
            <Image
              src={'/vertical/ij_2.jpeg'}
              alt="i+j"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative block h-full w-full bg-white shadow-sm">
            <div className="prose relative p-12">
              <FridayScheduleMarkdown />
            </div>
          </div>
        </div>
        <Image
          className="my-10 -rotate-45"
          src="elements_flowers_08.svg"
          alt="flower"
          width={100}
          height={100}
        />
        <div className="flex w-full space-x-8">
          <div className="relative block h-full w-full bg-white shadow-sm">
            <div className="prose relative p-12">
              <SaturdayScheduleMarkdown />
            </div>
          </div>
          <div className="relative aspect-[4/5] w-4/5 overflow-hidden bg-white shadow-sm">
            <Image
              src={'/vertical/ij_10.jpeg'}
              alt="i+j"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="md:hidden">
        <CardContainer>
          <Card
            markdown={<FridayScheduleMarkdown />}
            imageSrc="/vertical/ij_2.jpeg"
          />
          <Card
            markdown={<SaturdayScheduleMarkdown />}
            imageSrc="/vertical/ij_10.jpeg"
          />
        </CardContainer>
      </section>
      <div className="my-20 w-full border-[1px]" />
      <div className="prose mb-12 flex w-full flex-col items-center justify-center bg-white py-12 shadow-sm">
        <h3 className="mb-8">Vi hoppas att ni kan komma!</h3>
        <Link href="/osa">
          <Button size={'default'} className="px-12">
            OSA
          </Button>
        </Link>
      </div>
      <FooterLinks right={{ src: '/love-story', label: 'Our love story' }} />
      <h1
        className={`${mackinac.className} mb-8 mt-28 text-center text-6xl md:text-8xl`}
      >
        {`Let's get Married!`}
      </h1>
    </Container>
  )
}
