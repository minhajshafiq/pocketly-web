"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { features } from "@/constants/site"
import { 
  Smartphone, 
  Cloud, 
  Shield, 
  Bell, 
  WifiOff, 
  Headphones 
} from "lucide-react"

const iconMap = {
  smartphone: Smartphone,
  cloud: Cloud,
  shield: Shield,
  bell: Bell,
  "wifi-off": WifiOff,
  headphones: Headphones,
}

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-muted/20">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20 max-w-4xl mx-auto"
        >
          <Badge variant="outline" className="w-fit mx-auto text-sm font-medium">
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Tout ce dont vous avez besoin
          </h2>
                 <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                   Découvrez les fonctionnalités puissantes qui font de Pocketly
                   l&apos;application mobile de référence.
                 </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-pocketly transition-all duration-300 border-0 shadow-sm hover:border-primary/20 group rounded-2xl">
                  <CardHeader className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pocketly-gradient-soft rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl leading-tight font-semibold">{feature.title}</CardTitle>
                    <CardDescription className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
