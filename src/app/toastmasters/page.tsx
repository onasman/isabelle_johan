import Container from '../_components/ui/container'
import ToastmasterMarkdown from '../_markdown/toastmaster.mdx'
import ToastmadamMarkdown from '../_markdown/toastmadam.mdx'
import ToastmastersMarkdown from '../_markdown/toastmasters.mdx'
import { Card, CardContainer } from '../_components/ui/card'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'

export default async function Home() {
  return (
    <Container>
      <Section id="toastmasters" title="TOASTMASTERS">
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
      <FooterLinks
        left={{ src: '/schema', label: 'schema' }}
        right={{ src: '/osa', label: 'OSA' }}
      />
    </Container>
  )
}
