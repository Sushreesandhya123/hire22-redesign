"use client"
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import Image from "next/image"
import logo from '@/assets/hire22-logo.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src={logo} 
                alt="Hire22 Logo" 
                priority
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              India&apos;s premier AI-powered platform for executive and senior-level recruitment. 
              Connecting exceptional talent with visionary organizations.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 80 4567 8901</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@hire22.ai</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-5 mt-6 text-gray-400">
              <Link href="https://www.facebook.com/hire22ai" target="_blank" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com/hire22ai" target="_blank" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/company/hire22" target="_blank" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.youtube.com/@Hire22/" target="_blank" aria-label="YouTube">
                <Youtube className="w-5 h-5 hover:text-white transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/hire22.ai" target="_blank" aria-label="Instagram">
                <Instagram className="w-5 h-5 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Employer Zone */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Employer Zone</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/register" className="hover:text-white transition-colors">Register to Hire</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SARA AI Recruiter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Candidate Zone */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Candidate Zone</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Create Profile</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Anonymous Policy</Link></li>
            </ul>
          </div>

          {/* HR Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">HR Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">HR Checklists</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">HR Policies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Job Descriptions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Interview Questions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">HR Frameworks</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Hire22.ai | Premium Executive Recruitment Platform
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
