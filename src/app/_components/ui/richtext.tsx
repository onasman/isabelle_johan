import { PortableText, PortableTextProps } from '@portabletext/react'

export function RichText({ value }: Partial<PortableTextProps>) {
  if (!value) return null
  return (
    <div className="prose max-w-none">
      <PortableText value={value} />
    </div>
  )
}
