import { unstable_noStore as noStore } from 'next/cache'
import { sanityFetch } from '~/lib/sanity.fetch'
import { RichText } from './ui/richtext'
import { PortableTextProps } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '~/lib/sanity.client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import { Image as SanityImage } from 'sanity'

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
export default async function Intro() {
  noStore()
  const data = await sanityFetch<{ intro?: PortableTextProps['value'] }>({
    query: "*[_type == 'content'][0]{ intro }",
  })
  const imageData = await sanityFetch<{ mainImage: SanityImage }>({
    query: "*[_type == 'content'][0]{ mainImage }",
  })

  return (
    <section id="intro">
      <div className="relative -mb-20 mt-10 h-screen overflow-hidden">
        <Image
          src={urlFor(imageData.mainImage).url()}
          alt="Wedding pgoto"
          fill
          className="top-96 -mt-32 overflow-hidden object-contain"
        />
      </div>
      <RichText value={data?.intro} />
    </section>
  )
}
