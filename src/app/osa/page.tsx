import dynamic from 'next/dynamic'
import Container from '../_components/ui/container'
import FooterLinks from '~/components/footer-links'
import localFont from '@next/font/dist/local'

const RSVP = dynamic(() => import('../_components/rsvp'), { ssr: false })

export default async function Home() {
  return (
    <Container>
      <section className="mt-12 flex flex-col items-center">
        <RSVP />
      </section>
      <FooterLinks left={{ src: '/toastmasters', label: 'Toastmasters' }} />
    </Container>
  )
}
