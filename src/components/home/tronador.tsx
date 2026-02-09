import { Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Tronador() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold mb-8">
              <Play className="h-5 w-5" />
              Tronador Accelerator
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Accelerate your <span className="text-primary">CI/CD</span> & IaC workflows
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Drop-in Makefile with reusable targets, automated README generation, and Terraform tooling. 
              Get deployment-ready projects in minutes, not hours.
            </p>
            <div className="bg-muted/50 rounded-2xl p-6 mb-8 font-mono text-sm border">
              <code>-include $(shell curl -sSL -o .tronador https://cowk.io/acc; echo .tronador)</code>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Tronador <Download className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/tronador">Documentation</a>
              </Button>
            </div>
          </div>
          <div className="lg:order-1">
            {/* Placeholder for image */}
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl h-96 flex items-center justify-center">
              <span className="text-6xl opacity-20">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}