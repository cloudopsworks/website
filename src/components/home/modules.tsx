import { Github, Package, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const modules = [
  {
    name: "AWS VPC",
    description: "Production-ready VPC with public/private subnets, NAT gateways, and flow logs.",
    stars: "1.2k",
    href: "https://github.com/cloudopsworks/terraform-aws-vpc",
  },
  {
    name: "EKS Cluster",
    description: "Managed Kubernetes cluster with IRSA, EBS CSI, and cluster autoscaler.",
    stars: "987",
    href: "https://github.com/cloudopsworks/terraform-aws-eks",
  },
  {
    name: "Aurora PostgreSQL",
    description: "Highly available RDS Aurora cluster with data API, secrets integration.",
    stars: "756",
    href: "https://github.com/cloudopsworks/terraform-aws-aurora-postgresql",
  },
  {
    name: "Lambda Layers",
    description: "Shared layers for Python/Node.js runtimes with security scanning.",
    stars: "543",
    href: "https://github.com/cloudopsworks/terraform-aws-lambda-layers",
  },
]

export function Modules() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-8">
            <Github className="h-5 w-5" />
            <span>Featured Terraform Modules</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Reusable <span className="text-primary">Infrastructure Code</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Battle-tested Terraform modules for AWS, battle-ready for production.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {modules.map((mod, index) => (
            <div key={index} className="group bg-background rounded-2xl p-8 border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Package className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold mb-2 truncate group-hover:text-primary">{mod.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{mod.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>{mod.stars} stars</span>
                  </div>
                </div>
              </div>
              <Button asChild size="sm" className="w-full">
                <Link href={mod.href} target="_blank" rel="noopener noreferrer">
                  View on GitHub <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}