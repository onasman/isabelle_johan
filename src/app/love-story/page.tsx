import Container from '../_components/ui/container'
import LoveStoryMarkdown from '../_markdown/love-story.mdx'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'
import { LoveStoryCarousel } from '~/components/love-story-carousel'
import Image from 'next/image'

export default async function Home() {
  return (
    <Container>
      <Section>
        <div className="prose mb-20 max-w-full bg-white p-8 shadow-sm">
          <LoveStoryMarkdown />
        </div>
      </Section>
      <LoveStoryCarousel />
      <Image
        className="mb-4 mt-8"
        src="flowers_05.svg"
        alt="flower"
        width={100}
        height={100}
      />
      <FooterLinks
        left={{ src: '/', label: 'Hem' }}
        right={{ src: '/bra-att-veta', label: 'Bra att veta' }}
      />
    </Container>
  )
}
