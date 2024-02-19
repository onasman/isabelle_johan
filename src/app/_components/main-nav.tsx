"use client";
import * as React from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

export function MainNav() {
  return (
    <div className="mx-auto hidden md:flex">
      <nav className="flex items-center gap-6 text-sm">
        <NavLink href="/#schema">Schema</NavLink>
        <NavLink href="/#vigsel">Vigsel</NavLink>
        <NavLink href="/#festen">Festen</NavLink>
        <NavLink href="/#annat">Bra att veta</NavLink>
        <NavLink href="/#rsvp">Anmälan</NavLink>
        <NavLink href="/information">Information in english</NavLink>
      </nav>
    </div>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function NavLink({ href, className, children, ...props }: MobileLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        className,
        "transition-colors hover:text-foreground/80",
        pathname?.startsWith(href) ? "text-foreground" : "text-foreground/60",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
