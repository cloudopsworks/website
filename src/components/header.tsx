'use client'

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold tracking-tight text-xl">Cloud Ops Works</span>
        </Link>
        <div className="flex flex-1 items-center justify-center md:justify-end">
          <nav className="hidden items-center space-x-6 text-sm font-medium sm:inline-flex">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Services
            </Link>
            <Link
              href="/modules"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Modules
            </Link>
            <Link
              href="/tronador"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Tronador
            </Link>
            <Link
              href="/case-studies"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}