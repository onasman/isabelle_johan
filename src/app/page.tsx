import Dinner from "./_components/dinner";
import Intro from "./_components/intro";
import Other from "./_components/other";
import RSVP from "./_components/rsvp";
import Schedule from "./_components/schedule";
import Wedding from "./_components/wedding";

export default async function Home() {
  return (
    <main className="top-16 flex w-full max-w-screen-lg flex-col overflow-visible pt-12">
      <Intro />
      <Schedule />
      <Wedding />
      <Dinner />
      <Other />
      <RSVP />
    </main>
  );
}
