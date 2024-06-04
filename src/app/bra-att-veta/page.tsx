import Container from '../_components/ui/container'
import DresscodeMarkdown from '../_markdown/dresscode.mdx'
import TransportMarkdown from '../_markdown/transport.mdx'
import { Card, CardContainer } from '../_components/ui/card'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'
import Image from 'next/image'

export default async function Home() {
  return (
    <Container>
      <Section>
        <CardContainer>
          <Card markdown={<DresscodeMarkdown />} />
          <Card markdown={<TransportMarkdown />} />
        </CardContainer>
      </Section>
      <Image
        className="mb-4 mt-8"
        src="flowers_05.svg"
        alt="flower"
        width={100}
        height={100}
      />
      <FooterLinks
        left={{ src: '/love-story', label: 'Our love story' }}
        right={{ src: '/toastmasters', label: 'Toastmasters' }}
      />
    </Container>
  )
}
