import Container from '../_components/ui/container'
import OnskelistaMarkdown from '../_markdown/onskelista.mdx'
import { Section } from '../_components/section'
import FooterLinks from '~/components/footer-links'

export default async function Home() {
  return (
    <Container>
      <Section>
        <div className="prose mb-20 max-w-full bg-white p-8 shadow-sm">
          <OnskelistaMarkdown />
        </div>
      </Section>

      <FooterLinks
        left={{ src: '/toastmasters', label: 'Toastmasters' }}
        right={{ src: '/osa', label: 'OSA' }}
      />
    </Container>
  )
}
