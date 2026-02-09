'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="space-y-6 py-8 md:py-12 lg:py-24">
      <div className="container flex max-w-[64rem] flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-5xl font-black tracking-tight text-center sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
          <span>Cloud</span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ops Works</span>
        </div>
        <p className="max-w-[46ch] text-xl text-muted-foreground md:text-2xl">
          DevOps & SRE, shipped faster with reusable Terraform modules and the Tronador accelerator.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}