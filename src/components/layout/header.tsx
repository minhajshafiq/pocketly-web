"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems } from "@/constants/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-18 items-center justify-between px-4 sm:px-6">
        {/* Logo - Mobile First */}
              <Link href="/" className="flex items-center space-x-3">
                <Image 
                  src="/play_store_512.png" 
                  alt="Pocketly App Icon"
                  width={28}
                  height={28}
                  className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg"
                />
                <span className="text-xl sm:text-2xl font-bold tracking-tight">Pocketly</span>
              </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button size="sm" className="font-medium cursor-pointer rounded-full">
            Télécharger
          </Button>
        </div>

        {/* Mobile CTA - Visible on mobile */}
        <div className="flex md:hidden items-center space-x-2">
          <Button size="sm" className="px-3 text-xs cursor-pointer rounded-full">
            Télécharger
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-2 cursor-pointer rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation - Enhanced */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container px-4 py-6">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground py-3 px-2 rounded-lg hover:bg-muted/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t">
                     <Button size="sm" className="justify-start text-base py-3 cursor-pointer rounded-full">
                       Télécharger l&apos;app
                     </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
