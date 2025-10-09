import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Pricing } from "@/components/sections/pricing"
import { Roadmap } from "@/components/sections/roadmap"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
