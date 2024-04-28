import { client } from "~/lib/sanity.client";
import { RichText } from "./ui/richtext";

export default async function Wedding() {
  const { wedding } = await client.fetch("*[_type == 'content'][0]{ wedding }");

  return (
    <section id="vigsel">
      <RichText value={wedding} />
    </section>
  );
}
