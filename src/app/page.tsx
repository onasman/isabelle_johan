import dynamic from 'next/dynamic'
import Container from './_components/ui/container'
import localFont from '@next/font/local'
import Image from 'next/image'
import IntroMarkdown from './_markdown/intro.mdx'
import ToastmasterMarkdown from './_markdown/toastmaster.mdx'
import ToastmadamMarkdown from './_markdown/toastmadam.mdx'
import ToastmastersMarkdown from './_markdown/toastmasters.mdx'
import DresscodeMarkdown from './_markdown/dresscode.mdx'
import TransportMarkdown from './_markdown/transport.mdx'
import ScheduleMarkdown from './_markdown/schedule.mdx'
import { Card, CardContainer } from './_components/ui/card'
import { Section } from './_components/section'

const RSVP = dynamic(() => import('./_components/rsvp'), { ssr: false })

const mackinac = localFont({
  src: '../../public/fonts/mackinac_1895.ttf',
  variable: '--font-mackinac',
})

export default async function Home() {
  return (
    <Container>
      <div className="mb-6 flex flex-col items-center">
        <h1
          className={`${mackinac.className} mb-8 text-center text-6xl text-[#C39E2C] md:text-8xl`}
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
        <Section id="annat" title="BRA ATT VETA">
          <CardContainer>
            <Card markdown={<DresscodeMarkdown />} />
            <Card markdown={<TransportMarkdown />} />
          </CardContainer>
        </Section>
        <Section id="schema" title="SCHEMA">
          <div className="prose mb-20 max-w-full bg-white p-20 shadow-sm">
            <ScheduleMarkdown />
          </div>
        </Section>
        <Section id="toastmasters" title="TOASTMASTERS">
          <div className="prose mb-20 max-w-full bg-white p-20 shadow-sm">
            <ToastmastersMarkdown />
          </div>
          <CardContainer>
            <Card
              // imageSrc="/toastmaster.jpg"
              markdown={<ToastmasterMarkdown />}
            />
            <Card
              // imageSrc="/toastmadam.jpg"
              markdown={<ToastmadamMarkdown />}
            />
          </CardContainer>
        </Section>
        <Section id="osa" title="OSA">
          <RSVP />
        </Section>
        <h1
          className={`${mackinac.className} mt-36 text-center text-6xl text-[#C39E2C] md:text-8xl`}
        >
          {`Let's get married`}
        </h1>
      </section>
    </Container>
  )
}
