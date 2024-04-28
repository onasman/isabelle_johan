import { sanityFetch } from "~/lib/sanity.fetch";
import { RichText } from "./ui/richtext";
import { PortableTextProps } from "@portabletext/react";

export default async function Intro() {
  const { intro } = await sanityFetch<{ intro: PortableTextProps["value"] }>({
    query: "*[_type == 'content'][0]{ intro }",
  });

  return (
    <section id="intro">
      <RichText value={intro} />
    </section>
  );
}
