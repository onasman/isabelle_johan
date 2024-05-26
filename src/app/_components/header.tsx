import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export default async function Header() {
  return (
    <header className="sticky top-0 z-[1000] w-full border-b border-border/40 bg-white">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  )
}
