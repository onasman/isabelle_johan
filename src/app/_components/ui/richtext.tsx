import { PortableText, PortableTextProps } from '@portabletext/react'

export function RichText({ value }: Partial<PortableTextProps>) {
  return (
    <div className="prose">
      <PortableText value={value ?? { _type: '' }} />
    </div>
  )
}
