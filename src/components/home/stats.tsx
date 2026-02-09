import { Clock, UserCheck, ShieldCheck } from "lucide-react"

const stats = [
  {
    value: "60%",
    label: "Faster infrastructure delivery",
    icon: Clock,
    color: "from-primary to-secondary",
  },
  {
    value: "Zero-touch",
    label: "Account provisioning",
    icon: UserCheck,
    color: "from-green-500 to-green-600",
  },
  {
    value: "Always",
    label: "Compliant",
    icon: ShieldCheck,
    color: "from-destructive to-destructive/80",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="group text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xl text-muted-foreground font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}