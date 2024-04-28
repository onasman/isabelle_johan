import { sanityFetch } from "~/lib/sanity.fetch";
import { RichText } from "./ui/richtext";

export default async function Dinner() {
  const { dinner } = await sanityFetch({
    query: "*[_type == 'content'][0]{ dinner }",
  });

  return (
    <section id="festen">
      <RichText value={dinner} />
    </section>
  );
}
