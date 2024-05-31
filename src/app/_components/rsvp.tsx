'use client'

import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './ui/form'
import { FormInput } from './ui/input'
import { Button } from './ui/button'
import { Loader2Icon } from 'lucide-react'
import { api } from '~/trpc/react'
import { Dialog, DialogDescription } from '@radix-ui/react-dialog'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { useState } from 'react'
import { useToast } from './ui/use-toast'
import { RadioButton } from './ui/radio-group'

const required_error = 'Vänligen fyll i detta fält'
const defaultValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  allergies: '',
  comment: '',
  friday: '',
  saturday: '',
}
const FormSchema = z.object({
  people: z.array(
    z.object({
      firstname: z.string({ required_error }).min(1, required_error),
      lastname: z.string({ required_error }).min(1, required_error),
      phone: z.string({ required_error }).min(1, required_error),
      email: z.string({ required_error }).min(1, required_error),
      friday: z.string().min(1, required_error),
      saturday: z.string().min(1, required_error),
      allergies: z.string({ required_error }).min(1, required_error),
      comment: z.string().nullable(),
    }),
  ),
})

export default function RSVP() {
  const { toast } = useToast()
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { people: [defaultValues] },
  })
  const { mutate: addRSVP, isLoading } = api.rsvp.addRSVP.useMutation({
    onSuccess: () => {
      setConfirmationModalOpen(true)
      form.reset()
    },
    onError: () =>
      toast({
        variant: 'destructive',
        title: 'Uh oh! Någonting gick fel.',
        description: (
          <p>
            Vänligen kontakta Oskar Näsman på{' '}
            <a className="font-bold" href="tel:+46729890976">
              +467 298 90 976
            </a>
            {' eller '}
            <a
              className="font-bold"
              href="mailto: oskar.nasman@eqtpartners.com"
            >
              oskar.nasman@eqtpartners.com
            </a>
          </p>
        ),
      }),
  })
  const { fields, append } = useFieldArray({
    control: form.control,
    name: 'people',
    rules: { minLength: 1 },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addRSVP(data.people)
  }

  const handleRSVPChange = (i: number) => {
    if (fields.length > i) form.reset({ people: fields.slice(0, i) })
    let additions = 0
    while (fields.length + additions < i) {
      append(defaultValues)
      additions += 1
    }
  }

  return (
    <div className="bg-white p-10 shadow-sm">
      <Dialog
        open={confirmationModalOpen}
        onOpenChange={setConfirmationModalOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tack!</DialogTitle>
            <DialogDescription>
              {`Du har nu osat. Stort tack för din anmälan. Ses på bröllopet!`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              onClick={() => setConfirmationModalOpen(false)}
            >
              Stäng
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="prose mb-10 max-w-full">
        <p className="mb-0">
          Fyll i formuläret nedan senast den 7e juli. Om du har frågor hör gärna
          av dig till vårt värdpar.
        </p>
        <p className="mt-0">
          Vi älskar barn och vi ÄLSKAR husdjur. Men vi vill fira vårt bröllop i
          vuxet sällskap. AKA inga barn eller hundar tack. Katter är ok.
        </p>
        <div className="flex items-center">
          <p className="mr-4">Hur många är ni?</p>
          <div className="flex space-x-2">
            {Array.from({ length: 5 }, (_, i) => (
              <Button
                key={i}
                variant={fields.length === i + 1 ? 'default' : 'outline'}
                onClick={() => handleRSVPChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className="flex justify-between">
                <h4 className="mb-4 text-2xl font-bold">{`Person nr ${index + 1}`}</h4>
              </div>
              <div className="grid w-full gap-x-4 md:grid-cols-2">
                <FormInput
                  name={`people.${index}.firstname`}
                  control={form.control}
                  label="Förnamn"
                  inputProps={{ id: 'fname' }}
                />
                <FormInput
                  name={`people.${index}.lastname`}
                  control={form.control}
                  label="Efternamn"
                  inputProps={{ id: 'lname' }}
                />
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
                <RadioButton
                  control={form.control}
                  name={`people.${index}.friday`}
                  label="Jag kommer att delta på fredagen"
                  options={[
                    { label: 'Ja', id: 'ja' },
                    { label: 'Nej', id: 'nej' },
                  ]}
                />
                <RadioButton
                  control={form.control}
                  name={`people.${index}.saturday`}
                  label="Jag kommer att delta på lördagen"
                  options={[
                    { label: 'Ja', id: 'ja' },
                    { label: 'Nej', id: 'nej' },
                  ]}
                />
                <FormInput
                  name={`people.${index}.allergies`}
                  control={form.control}
                  label="Har du några kostpreferenser eller allergier?"
                />
                <FormInput
                  key={field.id + 'comment'}
                  name={`people.${index}.comment`}
                  control={form.control}
                  label="Kan du berätta något kul om dig själv som endast du (eller väldigt få) vet?"
                />
              </div>
            </div>
          ))}
          <Button type="submit" variant={'default'} disabled={isLoading}>
            {isLoading ? (
              <Loader2Icon className="ml-auto animate-spin" />
            ) : (
              'Skicka'
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
