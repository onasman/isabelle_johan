import Container from '../_components/ui/container'
import ToastmasterMarkdown from '../_markdown/toastmaster.mdx'
import ToastmadamMarkdown from '../_markdown/toastmadam.mdx'
import ToastmastersMarkdown from '../_markdown/toastmasters.mdx'
import { Card, CardContainer } from '../_components/ui/card'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'
import Image from 'next/image'

export default async function Home() {
  return (
    <Container>
      <Section>
        <div className="relative aspect-[18/10] w-full">
          <Image alt={'toastmasters'} src={'/toastmasters.jpeg'} fill />
        </div>
        <div className="prose mb-20 max-w-full bg-white p-8 shadow-sm">
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
      <Image
        className="mb-4 mt-8"
        src="flowers_05.svg"
        alt="flower"
        width={100}
        height={100}
      />
      <FooterLinks
        left={{ src: '/bra-att-veta', label: 'Bra att veta' }}
        right={{ src: '/onskelista', label: 'Önskelista' }}
      />
    </Container>
  )
}
