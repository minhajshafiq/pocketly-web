"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, ChevronDown } from "lucide-react"
import { pricingPlans } from "@/constants/site"
import { formatPrice } from "@/lib/utils"

export function Pricing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData = [
    {
      id: 1,
      question: "Puis-je changer de plan à tout moment ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre compte. Les changements prennent effet immédiatement et les prorations sont calculées automatiquement."
    },
    {
      id: 2,
      question: "Y a-t-il un essai gratuit ?",
      answer: "Oui, tous nos plans incluent un essai gratuit de 14 jours sans engagement. Vous pouvez tester toutes les fonctionnalités avant de vous engager."
    },
    {
      id: 3,
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Nous utilisons un chiffrement de niveau bancaire (AES-256) pour protéger vos données. Vos informations financières ne sont jamais stockées en clair."
    },
    {
      id: 4,
      question: "Puis-je annuler à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment sans frais cachés. Vos données restent accessibles jusqu'à la fin de votre période de facturation."
    },
    {
      id: 5,
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Nous acceptons toutes les cartes bancaires principales (Visa, Mastercard, American Express), PayPal, et les virements bancaires pour les entreprises."
    },
    {
      id: 6,
      question: "Offrez-vous un support client ?",
      answer: "Oui, nous offrons un support client dédié par email et chat. Les utilisateurs Premium bénéficient d'un support prioritaire avec réponse sous 24h."
    }
  ]

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-br from-background via-muted/5 to-muted/20">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20 max-w-4xl mx-auto"
        >
          <Badge variant="secondary" className="w-fit mx-auto bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
            💰 Tarifs
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Choisissez votre plan
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des tarifs transparents et flexibles pour tous vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 text-sm font-semibold shadow-lg">
                    <Star className="h-4 w-4 mr-2 fill-white" />
                    Populaire
                  </Badge>
                </div>
              )}

              <Card className={`h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl ${
                plan.isPopular
                  ? 'border-2 border-primary shadow-xl lg:scale-105 bg-gradient-to-br from-primary/5 to-transparent'
                  : 'border border-border/50 hover:border-primary/30 hover:shadow-xl'
              }`}>
                <CardHeader className="text-center pb-6 p-6 sm:p-8">
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-4">{plan.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl sm:text-5xl font-bold text-foreground">{formatPrice(plan.price)}</span>
                      <span className="text-muted-foreground text-lg">/{plan.period}</span>
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 p-6 sm:p-8 pt-0">
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm sm:text-base leading-relaxed text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      className={`w-full text-base font-semibold py-3 cursor-pointer rounded-full transition-all duration-300 ${
                        plan.isPopular
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl'
                          : 'bg-muted hover:bg-primary hover:text-white border border-border hover:border-primary'
                      }`}
                      variant={plan.isPopular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section - Animated Dropdowns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="w-fit mx-auto mb-6 text-sm font-medium">
              ❓ FAQ
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Questions fréquentes
            </h3>
            <p className="text-lg text-muted-foreground mb-12">
              Vous avez des questions ? Nous avons les réponses.
            </p>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqData.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-6 hover:bg-muted/30 transition-colors duration-200 flex items-center justify-between group"
                    >
                      <h4 className="font-semibold text-base group-hover:text-primary transition-colors pr-4">
                        {faq.question}
                      </h4>
                      <motion.div
                        animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            ease: "easeInOut",
                            opacity: { duration: 0.2 }
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="px-6 pb-6 pt-0"
                          >
                            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
