import { sanityFetch } from "~/lib/sanity.fetch";
import { RichText } from "./ui/richtext";
import { PortableTextProps } from "@portabletext/react";

export default async function Dinner() {
  const data = await sanityFetch<{ dinner?: PortableTextProps["value"] }>({
    query: "*[_type == 'content'][0]{ dinner }",
  });

  return (
    <section id="festen">
      <RichText value={data.dinner} />
    </section>
  );
}
