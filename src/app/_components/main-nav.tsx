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
    <div className="relative hidden w-full items-center md:flex">
      <nav className="text-m flex gap-6">
        <NavLink href="/love-story">Our love story</NavLink>
        <NavLink href="/bra-att-veta">Bra att veta</NavLink>
        <NavLink href="/toastmasters">Toastmasters</NavLink>
        <NavLink href="/onskelista">Önskelista</NavLink>
      </nav>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Link href="/" className="pointer-events-auto hidden lg:block">
          <Image src="/stamp.svg" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <Link href="/osa" className="ml-auto">
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
