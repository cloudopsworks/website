import { GitBranch, Activity, Cloud, DollarSign, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "CI/CD & IaC",
    description: "Enhance your development processes with CI/CD pipelines, Infrastructure as Code, and GitOps strategies.",
    icon: GitBranch,
    href: "/services",
  },
  {
    title: "Reliability Engineering",
    description: "Ensure reliability and observability with proactive incident response and monitoring solutions.",
    icon: Activity,
    href: "/services",
  },
  {
    title: "Cloud Landing Zones",
    description: "Build robust cloud environments with tailored landing zones, security guardrails, and effective account management.",
    icon: Cloud,
    href: "/services",
  },
  {
    title: "Cost Optimization",
    description: "Maximize cloud efficiency with cost management and performance tuning.",
    icon: DollarSign,
    href: "/services",
  },
  {
    title: "Security & Compliance",
    description: "Protect your infrastructure with comprehensive security audits and compliance checks.",
    icon: Shield,
    href: "/services",
  },
  {
    title: "Automation",
    description: "Streamline operations with automated workflows and intelligent orchestration.",
    icon: Zap,
    href: "/services",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Comprehensive <span className="text-primary">DevOps</span> Services
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            From CI/CD to security, we cover your entire cloud operations stack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group bg-background rounded-2xl p-8 border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary p-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full group-hover:translate-x-2 transition-transform">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}