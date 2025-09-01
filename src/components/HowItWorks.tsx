"use client"
import { motion } from 'framer-motion'
import { FileText, Brain, Users, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: "Create a JobCoNCT",
    description: "Post your executive position with detailed requirements. Our intelligent system analyzes your needs and creates a comprehensive job profile.",
    step: "01"
  },
  {
    icon: Brain,
    title: "AI-Powered JoinX Scoring",
    description: "SARA AI intelligently evaluates candidates based on experience, CTC expectations, location preferences, and notice periods for perfect matching.",
    step: "02"
  },
  {
    icon: Users,
    title: "Receive Super Profiles",
    description: "Get curated profiles of interview-ready senior professionals, ranked by our proprietary JoinX Score system within 22 hours.",
    step: "03"
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our streamlined process connects you with top-tier executive talent in just three simple steps
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-10">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              )}

              <div className="glass-card rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 relative z-20">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-gray-700" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}