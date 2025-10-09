"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { roadmapItems } from "@/constants/site"
import { 
  Smartphone, 
  Rocket, 
  Monitor, 
  Users,
  CheckCircle,
  Clock,
  Calendar
} from "lucide-react"

const iconMap = {
  smartphone: Smartphone,
  rocket: Rocket,
  monitor: Monitor,
  users: Users,
}

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    badge: "Terminé",
    badgeVariant: "default" as const,
  },
  current: {
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    badge: "En cours",
    badgeVariant: "secondary" as const,
  },
  upcoming: {
    icon: Calendar,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    badge: "À venir",
    badgeVariant: "outline" as const,
  },
}

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20 max-w-4xl mx-auto"
        >
          <Badge variant="outline" className="w-fit mx-auto text-sm font-medium">
            Roadmap
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Notre vision pour l&apos;avenir
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les étapes de développement de Pocketly et les fonctionnalités à venir.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden sm:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {roadmapItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                const status = statusConfig[item.status]
                const StatusIcon = status.icon
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start sm:items-center"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${status.borderColor} ${status.bgColor} flex items-center justify-center z-10 hidden sm:flex`}>
                      <StatusIcon className={`w-2.5 h-2.5 ${status.color}`} />
                    </div>
                    
                    <div className="ml-0 sm:ml-16 flex-1">
                      <Card className={`hover:shadow-xl transition-all duration-300 border-0 shadow-sm hover:border-primary/20 group ${status.borderColor} rounded-2xl`}>
                        <CardHeader className="p-6 sm:p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-xl sm:text-2xl leading-tight font-semibold">
                                  {item.title}
                                </CardTitle>
                              </div>
                            </div>
                            <Badge variant={status.badgeVariant} className="ml-4">
                              {status.badge}
                            </Badge>
                          </div>
                          <CardDescription className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
