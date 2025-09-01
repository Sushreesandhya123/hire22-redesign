"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import logo from '@/assets/hire22-logo.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About CEO", href: "#ceo" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        
        {/* Logo */}
        {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
            <Image 
                src={logo} 
                alt="Hire22 Logo" 
                priority
            />
            {/* <span className="text-2xl font-bold text-gray-800">Hire22.ai</span> */}
            </Link>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/login" 
            className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link 
                  href="/login" 
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg text-center hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg text-center"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}