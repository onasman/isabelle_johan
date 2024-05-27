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
        <Image
          alt={imageSrc}
          className="block h-auto w-auto max-w-full overflow-hidden"
          src={imageSrc}
        />
      )}
      <div className="prose relative p-8 md:p-12">{markdown}</div>
    </div>
  )
}

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap items-stretch">{children}</div>
}

export { CardContainer, Card }
