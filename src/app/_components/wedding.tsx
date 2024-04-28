import { client } from "~/lib/sanity.client";
import { RichText } from "./ui/richtext";
import { PortableTextProps } from "@portabletext/react";

export default async function Wedding() {
  const { wedding } = await client.fetch<{
    wedding: PortableTextProps["value"];
  }>("*[_type == 'content'][0]{ wedding }");

  return (
    <section id="vigsel">
      <RichText value={wedding} />
    </section>
  );
}
