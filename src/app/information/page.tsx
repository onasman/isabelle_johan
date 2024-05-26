import { PortableTextProps } from '@portabletext/react'
import { unstable_noStore as noStore } from 'next/cache'
import { RichText } from '~/components/ui/richtext'
import { sanityFetch } from '~/lib/sanity.fetch'

export default async function Information() {
  noStore()
  const data = await sanityFetch<{ information?: PortableTextProps['value'] }>({
    query: "*[_type == 'content'][0]{ intro }",
  })

  return <RichText value={data?.information} />
}
