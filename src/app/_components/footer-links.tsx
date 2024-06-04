import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Props = {
  left?: { src: string; label: string }
  right?: { src: string; label: string }
}

export default async function FooterLinks({ left, right }: Props) {
  return (
    <div className="prose mt-12 flex w-full">
      {left && (
        <Link
          href={left.src}
          className={'mr-auto transition-colors hover:text-foreground/80'}
        >
          <Button size={'default'}>
            <ArrowLeft className="mr-2" />
            {left.label}
          </Button>
        </Link>
      )}
      {right && (
        <Link
          href={right.src}
          className={'ml-auto transition-colors hover:text-foreground/80'}
        >
          <Button size={'default'}>
            {right.label}
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      )}
    </div>
  )
}
