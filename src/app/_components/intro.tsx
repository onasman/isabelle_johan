import { unstable_noStore as noStore } from "next/cache";
import { sanityFetch } from "~/lib/sanity.fetch";
import { RichText } from "./ui/richtext";
import { PortableTextProps } from "@portabletext/react";

export default async function Intro() {
  noStore();
  const data = await sanityFetch<{ intro?: PortableTextProps["value"] }>({
    query: "*[_type == 'content'][0]{ intro }",
  });

  return (
    <section id="intro">
      <RichText value={data?.intro} />
    </section>
  );
}
