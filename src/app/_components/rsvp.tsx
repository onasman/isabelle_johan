"use client";
// import { client } from "~/lib/sanity.client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { FormInput } from "./ui/input";

const required_error = "Vänligen fyll i detta fält";

const FormSchema = z.object({
  firstname: z.string({ required_error }),
  lastname: z.string({ required_error }),
  phone: z.string({ required_error }),
  email: z.string({ required_error }),
  allergies: z.string({ required_error }),
  comment: z.string().nullable(),
});

export default async function RSVP() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  // const { rsvp } = await client.fetch("*[_type == 'content'][0]{ rsvp }");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("hey", { data });
  }

  return (
    <section id="rsvp">
      {/* <RichText value={rsvp} /> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormInput
            name="firstname"
            control={form.control}
            label="Förnamn"
            inputProps={{ id: "fname" }}
          />
          <FormInput
            name="lastname"
            control={form.control}
            label="Efternamn"
            inputProps={{ id: "lname" }}
          />
          <FormInput
            name="phone"
            control={form.control}
            label="Telefonnummer"
            inputProps={{ id: "phone" }}
          />
          <FormInput
            name="email"
            control={form.control}
            label="E-post"
            inputProps={{ id: "email" }}
          />
          <FormInput
            name="allergies"
            control={form.control}
            label="Har du några kostpreferenser eller allergier?"
          />
          <FormInput
            name="comment"
            control={form.control}
            label="Är det något annat Isabelle & Johan behöver veta?"
          />
        </form>
      </Form>
    </section>
  );
}
