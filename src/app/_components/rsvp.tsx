'use client'

import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './ui/form'
import { FormInput } from './ui/input'
import { Button } from './ui/button'
import { PlusIcon, Trash2Icon } from 'lucide-react'
import { api } from '~/trpc/react'
import { useQuery } from '@tanstack/react-query'
import { client } from '~/lib/sanity.client'
import { groq } from 'next-sanity'
import { RichText } from './ui/richtext'

const required_error = 'Vänligen fyll i detta fält'
const defaultValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  allergies: '',
  comment: '',
}
const FormSchema = z.object({
  people: z.array(
    z.object({
      firstname: z.string({ required_error }).min(1, required_error),
      lastname: z.string({ required_error }).min(1, required_error),
      phone: z.string({ required_error }).min(1, required_error),
      email: z.string({ required_error }).min(1, required_error),
      allergies: z.string({ required_error }).min(1, required_error),
      comment: z.string().nullable(),
    }),
  ),
})

export default function RSVP() {
  const { mutate: addRSVP, isLoading } = api.rsvp.addRSVP.useMutation()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { people: [defaultValues] },
  })
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'people',
    rules: { minLength: 1 },
  })

  const { data } = useQuery(['rsvp'], async () =>
    client.fetch(groq`*[_type == 'content'][0]{ rsvp }`),
  )

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addRSVP(data.people)
  }

  return (
    <section id="rsvp">
      <RichText value={data?.rsvp} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className="flex justify-between">
                <div className="prose">
                  <h3>{`Person nr ${index + 1}`}</h3>
                </div>
                <Button type="button" onClick={() => remove(index)}>
                  <Trash2Icon />
                </Button>
              </div>
              <div className="flex w-full flex-1 space-x-4">
                <FormInput
                  key={field.id + 'firstname'}
                  name={`people.${index}.firstname`}
                  control={form.control}
                  label="Förnamn"
                  inputProps={{ id: 'fname' }}
                />
                <FormInput
                  key={field.id + 'lastname'}
                  name={`people.${index}.lastname`}
                  control={form.control}
                  label="Efternamn"
                  inputProps={{ id: 'lname' }}
                />
              </div>
              <div className="flex w-full flex-1 space-x-4">
                <FormInput
                  key={field.id + 'phone'}
                  name={`people.${index}.phone`}
                  control={form.control}
                  label="Telefonnummer"
                  inputProps={{ id: 'phone' }}
                />
                <FormInput
                  key={field.id + 'email'}
                  name={`people.${index}.email`}
                  control={form.control}
                  label="E-post"
                  inputProps={{ id: 'email' }}
                />
              </div>
              <div className="flex w-full flex-1 space-x-4">
                <FormInput
                  key={field.id + 'allergies'}
                  name={`people.${index}.allergies`}
                  control={form.control}
                  label="Har du några kostpreferenser eller allergier?"
                />
                <FormInput
                  key={field.id + 'comment'}
                  name={`people.${index}.comment`}
                  control={form.control}
                  label="Är det något annat Isabelle & Johan behöver veta?"
                />
              </div>
            </div>
          ))}
          <div>
            <span>Lägg till ytterligare person</span>
            <Button type="button" onClick={() => append(defaultValues)}>
              <PlusIcon />
            </Button>
          </div>
          <Button type="submit" variant={'default'}>
            SKICKA
          </Button>
        </form>
      </Form>
    </section>
  )
}
