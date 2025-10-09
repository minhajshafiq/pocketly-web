export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}


export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  isPopular?: boolean
  cta: string
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface RoadmapItem {
  id: string
  title: string
  description: string
  status: "completed" | "current" | "upcoming"
  date?: string
  icon: string
}
