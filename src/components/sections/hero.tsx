"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Rocket, Play, Star, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/10 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3" />
      
      <div className="container relative py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Content - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 sm:space-y-10 text-center lg:text-left order-2 lg:order-1 w-full"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-fit mx-auto lg:mx-0"
              >
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </motion.div>
                  <span className="text-sm font-semibold text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Votre argent. Votre liberté. Votre avenir.
                  </span>
                </div>
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Prenez le contrôle de vos finances…{" "}
                <span className="text-primary">
                  en 3 minutes
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Pocketly automatise votre gestion d&apos;argent. Planifiez, suivez, économisez. 
                <span className="font-semibold text-foreground"> Tout devient simple.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-full">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Rejoindre la waitlist
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-8 sm:px-10 w-full sm:w-auto border-2 hover:bg-muted/50 transition-all duration-300 cursor-pointer rounded-full">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Voir la démo
              </Button>
            </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-r from-primary to-primary/60 border-2 border-background"
                          />
                        ))}
                      </div>
                      <span>+5k utilisateurs en waitlist</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>Bêta privée - Accès limité</span>
                    </div>
                  </div>
          </motion.div>

          {/* App Mockup - Mobile First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full max-w-2xl mx-auto lg:mx-auto flex justify-center lg:justify-end"
          >
            <Image 
              src="/mockup.png" 
              alt="Pocketly App - Gestion financière intelligente"
              width={800}
              height={600}
              className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
