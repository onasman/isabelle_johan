import dynamic from 'next/dynamic'
import Dinner from './_components/dinner'
import Intro from './_components/intro'
import Other from './_components/other'
import Schedule from './_components/schedule'
import Wedding from './_components/wedding'
import Container from './_components/ui/container'
const RSVP = dynamic(() => import('./_components/rsvp'), { ssr: false })

export default async function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl uppercase">Isabelle & Johan</h1>
        <h3 className="text-4xl">2024.10.24</h3>
      </div>
      <Intro />
      <Schedule />
      <Wedding />
      <Dinner />
      <Other />
      <RSVP />
    </Container>
  )
}
