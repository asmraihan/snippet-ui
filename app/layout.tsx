import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@/styles/mdx.css";
import { fontSans } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Snippet UI",
  description: "Snippet UI is a Open source, TypeScript ready, Copy and paste library crafted for Design Engineers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
        <TooltipProvider>
          {children}
          <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
