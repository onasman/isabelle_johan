import Image from 'next/image'
import Link from 'next/link'
import { cn } from '~/lib/utils'

const Container = ({
  children,
  showLogo = true,
}: {
  children: React.ReactNode
  showLogo?: boolean
}) => {
  return (
    <main
      className={cn(
        'top-16 mx-auto flex max-w-5xl flex-col items-center overflow-visible px-6 pb-32 md:pt-12 lg:px-0 ',
        { 'pt-12': !showLogo },
      )}
    >
      {showLogo && (
        <Link href={'/'}>
          <Image
            src="/elements_flowers_10.svg"
            className="hidden md:block"
            alt="sigill"
            width={100}
            height={100}
          />
        </Link>
      )}
      {children}
    </main>
  )
}

export default Container
