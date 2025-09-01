"use client"
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

// Logos
import Img1 from '@/assets/airbnb-logo.png'
import Img2 from '@/assets/cisco-logo.webp'
import Img3 from '@/assets/coolova-logo.png'
import Img4 from '@/assets/gojek-logo.png'
import Img5 from '@/assets/oracle-logo.webp'
import Img6 from '@/assets/vmware-logo.png'
import Img7 from '@/assets/wipro-logo1.webp'

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CHRO, TechCorp India",
    company: "TechCorp",
    rating: 5,
    content: "Hire22.ai transformed our executive hiring process. We found our new VP of Engineering in just 18 hours - someone who perfectly matched our culture and requirements."
  },
  {
    name: "Priya Sharma",
    position: "Head of Talent, FinanceFirst",
    company: "FinanceFirst",
    rating: 5,
    content: "The quality of candidates on Hire22.ai is exceptional. The AI matching is incredibly accurate, saving us weeks of screening time."
  },
  {
    name: "Arun Mehta",
    position: "CEO, StartupHub",
    company: "StartupHub",
    rating: 5,
    content: "As a fast-growing startup, we needed senior leadership quickly. Hire22.ai delivered three outstanding C-level candidates within 22 hours."
  }
]

const logos = [Img1, Img2, Img3, Img4, Img5, Img6, Img7,]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Trusted by leading companies across India for executive hiring excellence
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-gray-600" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div> */}
                {/* <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Moving Logos */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mt-20 relative overflow-hidden"
>
  <p className="text-center text-gray-500 mb-10">Trusted by 500+ leading companies</p>

  {/* Scrolling logos row */}
  <div className="relative w-full overflow-hidden">
    <motion.div
      className="flex items-center gap-16 whitespace-nowrap"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {/* duplicate the logos for seamless loop */}
      {logos.concat(logos).map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt="Company Logo"
        //   className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
        />
      ))}
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>
  )
}
