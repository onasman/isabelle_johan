import { sanityFetch } from "~/lib/sanity.fetch";
import { RichText } from "./ui/richtext";

export default async function Schedule() {
  const { schedule } = await sanityFetch({
    query: "*[_type == 'content'][0]{ schedule }",
  });

  return (
    <section id="schema">
      <RichText value={schedule} />
    </section>
  );
}
