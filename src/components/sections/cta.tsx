"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Star, Play } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 sm:space-y-10 max-w-5xl mx-auto"
        >
          <div className="space-y-6 sm:space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto bg-white/25 text-white border-white/40 px-4 py-2 text-sm font-medium hover:bg-white/25 hover:text-white hover:border-white/40">
              <Star className="h-3 w-3 mr-2 fill-white text-white" />
              Rejoignez +5k utilisateurs en waitlist
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-xl">
              Il est temps de reprendre le contrôle de vos finances.
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
              Pocketly vous accompagne pour économiser plus, dépenser mieux et atteindre vos objectifs plus vite.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto font-bold cursor-pointer rounded-full"
            >
              <Rocket className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
              Rejoindre la waitlist
            </Button>
            
            <Button
              size="lg"
              variant="secondary"
              className="text-lg sm:text-xl px-10 sm:px-12 py-4 sm:py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 w-full sm:w-auto font-semibold transition-all duration-300 cursor-pointer rounded-full shadow-lg hover:shadow-xl"
            >
              <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              Voir la démo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 sm:space-x-8 text-sm sm:text-base text-white/90 font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-sm" />
              <span>Gratuit pour commencer</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-sm" />
              <span>Données sécurisées</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-sm" />
              <span>Économies garanties</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
