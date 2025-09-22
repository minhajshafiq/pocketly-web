import { NavItem, SocialLink, Feature, PricingPlan } from "@/types"

export const siteConfig = {
  name: "Pocketly",
  description: "L'application mobile qui révolutionne votre quotidien",
  url: "https://pocketly.app",
  ogImage: "https://pocketly.app/og.jpg",
  links: {
    twitter: "https://twitter.com/pocketly",
    github: "https://github.com/pocketly",
  },
}

export const navItems: NavItem[] = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Fonctionnalités",
    href: "#features",
  },
  {
    title: "Tarifs",
    href: "#pricing",
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    href: "https://twitter.com/pocketly",
    icon: "twitter",
  },
  {
    name: "GitHub",
    href: "https://github.com/pocketly",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/pocketly",
    icon: "linkedin",
  },
]

export const features: Feature[] = [
  {
    id: "1",
    title: "Interface intuitive",
    description: "Une expérience utilisateur fluide et moderne conçue pour la simplicité.",
    icon: "smartphone",
  },
  {
    id: "2",
    title: "Synchronisation cloud",
    description: "Vos données sont sauvegardées et synchronisées en temps réel.",
    icon: "cloud",
  },
  {
    id: "3",
    title: "Sécurité avancée",
    description: "Protection de vos données avec un chiffrement de niveau bancaire.",
    icon: "shield",
  },
  {
    id: "4",
    title: "Notifications intelligentes",
    description: "Recevez des alertes personnalisées et pertinentes.",
    icon: "bell",
  },
  {
    id: "5",
    title: "Mode hors ligne",
    description: "Fonctionnalités complètes même sans connexion internet.",
    icon: "wifi-off",
  },
  {
    id: "6",
    title: "Support 24/7",
    description: "Une équipe dédiée disponible à tout moment pour vous aider.",
    icon: "headphones",
  },
]


export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Gratuit",
    price: 0,
    period: "pour toujours",
    features: [
      "Gestion de base des finances",
      "Suivi des dépenses",
      "1 compte bancaire",
      "Support par email",
      "Synchronisation limitée",
    ],
    cta: "Commencer gratuitement",
  },
  {
    id: "premium",
    name: "Premium",
    price: 5.99,
    period: "par mois",
    features: [
      "Toutes les fonctionnalités gratuites",
      "Comptes bancaires illimités",
      "Budgets avancés",
      "Analytics détaillés",
      "Support prioritaire",
      "Synchronisation en temps réel",
      "Export des données",
    ],
    isPopular: true,
    cta: "Essayer Premium",
  },
  {
    id: "lifetime",
    name: "À vie",
    price: 159.99,
    period: "paiement unique",
    features: [
      "Toutes les fonctionnalités Premium",
      "Mises à jour à vie",
      "Support prioritaire à vie",
      "Fonctionnalités exclusives",
      "Pas de frais récurrents",
      "Garantie satisfait ou remboursé",
      "Accès anticipé aux nouvelles fonctionnalités",
    ],
    cta: "Acheter à vie",
  },
]
