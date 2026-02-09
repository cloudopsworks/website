import { Hero } from "@/components/home/hero"
import { Services } from "@/components/home/services"
import { Modules } from "@/components/home/modules"
import { Tronador } from "@/components/home/tronador"
import { Stats } from "@/components/home/stats"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Modules />
      <Tronador />
      <Stats />
      <CTA />
    </>
  )
}