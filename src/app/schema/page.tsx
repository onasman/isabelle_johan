import Container from '../_components/ui/container'
import localFont from '@next/font/local'
import FridayScheduleMarkdown from '../_markdown/friday.mdx'
import SaturdayScheduleMarkdown from '../_markdown/saturday.mdx'
import { Card, CardContainer } from '../_components/ui/card'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'

export default async function Home() {
  return (
    <Container>
      <Section id="schema" title="SCHEMA">
        <CardContainer>
          <Card markdown={<FridayScheduleMarkdown />} />
          <Card markdown={<SaturdayScheduleMarkdown />} />
        </CardContainer>
      </Section>
      <FooterLinks
        left={{ src: '/bra-att-veta', label: 'Bra att veta' }}
        right={{ src: '/toastmasters', label: 'Toastmasters' }}
      />
    </Container>
  )
}
