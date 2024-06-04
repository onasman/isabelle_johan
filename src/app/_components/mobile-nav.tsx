'use client'
import * as React from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import Image from 'next/image'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className="relative flex w-full items-center justify-center md:hidden">
        <Link href="/">
          <Image src="/stamp.svg" alt="logo" width={50} height={50} />
        </Link>
        <Link href="/osa" className="absolute right-0">
          <Button size={'default'}>OSA</Button>
        </Link>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="absolute mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="z-[1000] pr-0">
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
            <div className="relative flex h-screen flex-col items-center space-y-3 pr-6">
              <Image src="/stamp.svg" alt="logo" width={100} height={100} />
              <nav className="flex flex-col items-center space-y-4 py-4">
                <MobileLink onOpenChange={setOpen} href="/love-story">
                  Our love story
                </MobileLink>
                <MobileLink onOpenChange={setOpen} href="/bra-att-veta">
                  Bra att veta
                </MobileLink>
                <MobileLink onOpenChange={setOpen} href="/toastmasters">
                  Toastmasters
                </MobileLink>
                <MobileLink onOpenChange={setOpen} href="/onskelista">
                  Önskelista
                </MobileLink>
              </nav>
              <Image
                src="/flowers_05.svg"
                alt="logo"
                className="absolute bottom-48"
                width={70}
                height={70}
              />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}

interface MobileLinkProps extends LinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href)
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
