import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container max-w-md px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          Ready to <span className="text-primary">ship faster</span>?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          Let&apos;s build your cloud infrastructure together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}