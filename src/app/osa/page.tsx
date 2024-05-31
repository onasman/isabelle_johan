import dynamic from 'next/dynamic'
import Container from '../_components/ui/container'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'
import localFont from '@next/font/dist/local'
import { mackinac } from '../page'

const RSVP = dynamic(() => import('../_components/rsvp'), { ssr: false })

export default async function Home() {
  return (
    <Container>
      <section className="mt-12 flex flex-col items-center">
        <RSVP />
      </section>
      <FooterLinks left={{ src: '/toastmasters', label: 'Toastmasters' }} />
      <h1
        className={`${mackinac.className} mt-36 text-center text-6xl md:text-8xl`}
      >
        {`Let's get married`}
      </h1>
    </Container>
  )
}
