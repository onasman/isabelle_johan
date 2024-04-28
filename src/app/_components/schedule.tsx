import { sanityFetch } from "~/lib/sanity.fetch";
import { RichText } from "./ui/richtext";
import { PortableTextProps } from "@portabletext/react";

export default async function Schedule() {
  const data = await sanityFetch<{
    schedule?: PortableTextProps["value"];
  }>({
    query: "*[_type == 'content'][0]{ schedule }",
  });

  return (
    <section id="schema">
      <RichText value={data.schedule} />
    </section>
  );
}
