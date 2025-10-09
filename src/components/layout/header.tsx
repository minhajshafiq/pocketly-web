"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems } from "@/constants/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
      <div className="container flex h-16 sm:h-18 items-center px-4 sm:px-6">
        {/* Logo - Left */}
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

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center space-x-10 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - Right */}
        <div className="hidden md:flex items-center">
          <Button size="sm" className="font-medium cursor-pointer rounded-full hover:scale-105 transition-transform duration-300">
            Rejoindre la waitlist
          </Button>
        </div>

        {/* Mobile CTA - Visible on mobile */}
        <div className="flex md:hidden items-center space-x-2">
          <Button size="sm" className="px-3 text-xs cursor-pointer rounded-full">
            Rejoindre la waitlist
          </Button>
        </div>

        {/* Smooth Mobile Menu Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            duration: 0.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "tween"
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2 cursor-pointer rounded-full relative overflow-hidden hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <motion.div
              className="relative w-5 h-5"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ 
                duration: 0.35, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween"
              }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  opacity: isMenuOpen ? 0 : 1,
                  scale: isMenuOpen ? 0.7 : 1,
                  rotate: isMenuOpen ? 90 : 0
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "tween"
                }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  scale: isMenuOpen ? 1 : 0.7,
                  rotate: isMenuOpen ? 0 : -90
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "tween"
                }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </Button>
        </motion.div>
      </div>

      {/* Smooth Mobile Navigation - Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -5 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -5 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3 },
              type: "tween"
            }}
            className="md:hidden absolute top-full left-0 right-0 z-50 border-t bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-md shadow-lg overflow-hidden"
            style={{ willChange: "transform, opacity, height" }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.35, 
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween"
              }}
              className="container px-6 py-8"
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <div key={item.href}>
                    <motion.div
                      initial={{ x: -20, opacity: 0, scale: 0.98 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.35, 
                        delay: 0.15 + (index * 0.08),
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "tween"
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      style={{ willChange: "transform" }}
                    >
                      <Link
                        href={item.href}
                        className="group block text-lg font-medium text-black transition-all duration-300 hover:text-foreground py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:shadow-md hover:translate-x-1 border border-transparent hover:border-primary/20 text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span
                          className="relative inline-block"
                          whileHover={{ x: 3 }}
                          transition={{ 
                            duration: 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            type: "tween"
                          }}
                        >
                          {item.title}
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                      </Link>
                    </motion.div>
                    
                    {/* Séparateur entre les sections */}
                    {index < navItems.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.25 + (index * 0.08),
                          ease: [0.25, 0.46, 0.45, 0.94],
                          type: "tween"
                        }}
                        className="mx-4 my-2"
                      >
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
