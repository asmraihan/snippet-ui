import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Star } from 'lucide-react';
import { Badge } from "./ui/badge";


export async function SiteHeader() {
  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <MobileNav />
        <div className="w-full mr-4 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <div className="flex  items-center justify-between gap-2 md:justify-end">
          <Link href={"https://github.com/asmraihan/snippet-ui"} target="_blank" rel="noreferrer">
            <Badge
              aria-hidden="true"
              className="rounded-md px-3.5 py-1.5"
              variant="secondary"
            >
              <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" />
              1000 stars on GitHub
            </Badge>
            <span className="sr-only">GitHub</span>
          </Link>
          <nav className="flex items-center gap-2">
            <ModeToggle />
          </nav>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
}
