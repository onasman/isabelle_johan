'use client'
import * as React from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

export function MainNav() {
  return (
    <div className="relative hidden w-full items-center justify-center md:flex">
      <Link href="/" className="absolute left-0">
        <Image src="/stamp.svg" alt="logo" width={50} height={50} />
      </Link>
      <nav className="text-m flex items-center gap-6">
        <NavLink href="/#annat">Bra att veta</NavLink>
        <NavLink href="/#schema">Schema</NavLink>
        <NavLink href="/#toastmasters">Toastmasters</NavLink>
        <NavLink href="/information">Information in english</NavLink>
      </nav>
      <Link href="#osa" className="absolute right-0">
        <Button size={'default'}>OSA</Button>
      </Link>
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

function NavLink({ href, className, children, ...props }: MobileLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        className,
        'transition-colors hover:text-foreground/80',
        pathname?.startsWith(href) ? 'text-foreground' : 'text-foreground/60',
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
