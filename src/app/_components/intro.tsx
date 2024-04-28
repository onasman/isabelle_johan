import { sanityFetch } from "~/lib/sanity.fetch";
import { RichText } from "./ui/richtext";

export default async function Intro() {
  const { intro } = await sanityFetch({
    query: "*[_type == 'content'][0]{ intro }",
  });

  return (
    <section id="intro">
      <RichText value={intro} />
    </section>
  );
}
