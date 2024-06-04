import Image from 'next/image'
import { cn } from '~/lib/utils'

const Card = ({
  imageSrc,
  markdown,
  className,
}: {
  markdown: JSX.Element
  imageSrc?: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        'relative mb-8 block w-full bg-white shadow-sm md:w-[calc(50%-8px)] md:first-of-type:mr-4',
        className,
      )}
    >
      {imageSrc && (
        <div className="relative aspect-video overflow-hidden">
          <Image alt={imageSrc} src={imageSrc} fill className="object-cover" />
        </div>
      )}
      <div className="prose relative p-8 md:p-12">{markdown}</div>
    </div>
  )
}

const CardContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex flex-wrap items-stretch', className)}>
      {children}
    </div>
  )
}

export { CardContainer, Card }
