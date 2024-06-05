import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BuildBy from "./build-by";

export function SiteFooter() {
  return (
    <footer
    id="footer-bottom"
    aria-labelledby="footer-bottom-heading"
    className="container flex items-center space-x-4 w-full"
  >
    <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
      Built by{" "}
      {/* <Link
        href="https://github.com/asmraihan"
        target="_blank"
        rel="noreferrer"
        className=""
      > */}
        <BuildBy /> 
        {/* <span className="sr-only">Twitter</span> */}
      {/* </Link> */}
      .
    </div>
    <div className="flex items-center space-x-1">
      <Link
        href="https://github.com/asmraihan"
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({
            size: "icon",
            variant: "ghost",
          })
        )}
      >
        <Icons.gitHub className="size-4" aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </Link>
    </div>
  </footer>
  );
}
