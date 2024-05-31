import Container from '../_components/ui/container'
import DresscodeMarkdown from '../_markdown/dresscode.mdx'
import TransportMarkdown from '../_markdown/transport.mdx'
import { Card, CardContainer } from '../_components/ui/card'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'

export default async function Home() {
  return (
    <Container>
      <Section id="annat" title="BRA ATT VETA">
        <CardContainer>
          <Card markdown={<DresscodeMarkdown />} />
          <Card markdown={<TransportMarkdown />} />
        </CardContainer>
      </Section>
      <FooterLinks
        left={{ src: '/', label: 'Hem' }}
        right={{ src: '/schema', label: 'Schema' }}
      />
    </Container>
  )
}
