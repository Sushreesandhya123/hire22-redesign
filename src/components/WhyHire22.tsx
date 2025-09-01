"use client"
import { motion } from 'framer-motion'
import { Target, Award, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: "Interview-Ready Talent",
    description: "Connect with pre-screened professionals who are actively seeking senior leadership roles and ready for immediate interviews.",
    color: "from-amber-100 to-yellow-100"
  },
  {
    icon: Award,
    title: "AI-Ranked Candidates",
    description: "Our SARA AI system ranks candidates using advanced algorithms that analyze skills, experience, and role alignment for optimal matching.",
    color: "from-gray-100 to-slate-100"
  },
  {
    icon: Clock,
    title: "Hire in 22 Hours",
    description: "Revolutionary speed in executive hiring. Get qualified candidates for C-level and VP positions delivered within 22 hours of posting.",
    color: "from-blue-50 to-indigo-50"
  },
  {
    icon: Shield,
    title: "Guaranteed Quality",
    description: "Each candidate undergoes rigorous vetting including background verification, skill assessment, and cultural fit analysis.",
    color: "from-green-50 to-emerald-50"
  }
]

export default function WhyHire22() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Why Choose Hire22.ai?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the future of executive recruitment with our cutting-edge AI platform
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}