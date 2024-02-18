import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export default async function Header() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
