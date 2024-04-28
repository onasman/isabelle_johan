import { unstable_noStore as noStore } from "next/cache";
import { client } from "~/lib/sanity.client";
import { RichText } from "./ui/richtext";
import { PortableTextProps } from "@portabletext/react";

export default async function Wedding() {
  noStore();
  const data = await client.fetch<{
    wedding?: PortableTextProps["value"];
  }>("*[_type == 'content'][0]{ wedding }");

  return (
    <section id="vigsel">
      <RichText value={data?.wedding} />
    </section>
  );
}
