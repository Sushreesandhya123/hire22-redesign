"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: "What is CoNCT and how does it work?",
    answer: "CoNCT (Connect) is our proprietary matching system that anonymously connects employers with senior-level candidates. It ensures confidential, secure interactions until both parties are ready to proceed.",
    category: "Platform"
  },
  {
    question: "How does Job CoNCT work?",
    answer: "Simply post your job requirements, and our AI system creates a comprehensive profile. SARA AI then matches you with pre-screened candidates based on skills, experience, location, and availability within 22 hours.",
    category: "Platform"
  },
  {
    question: "What is SARA AI and how accurate is it?",
    answer: "SARA (Smart AI Recruitment Assistant) is our proprietary AI system that analyzes candidates using advanced algorithms. It has a 98% accuracy rate in matching candidates to job requirements, considering factors like skills, experience, CTC expectations, and cultural fit.",
    category: "AI Technology"
  },
  {
    question: "What is a Super Profile?",
    answer: "Super Profiles are comprehensive candidate profiles that include detailed background verification, skill assessments, leadership competency scores, and our proprietary JoinX Score ranking. These profiles represent our top 10% of candidates.",
    category: "Profiles"
  },
  {
    question: "How does the JoinX Score work?",
    answer: "JoinX Score is our AI-driven ranking system that evaluates candidates on multiple parameters including technical skills, leadership experience, cultural fit, availability, and salary expectations to provide a comprehensive match score.",
    category: "AI Technology"
  },
  {
    question: "How many credits do I get when I register?",
    answer: "New clients receive 3 complimentary credits to explore our platform. Each credit allows you to post one executive-level position and receive matched candidate profiles.",
    category: "Billing"
  },
  {
    question: "Are there any hidden costs with Hire22.ai?",
    answer: "No hidden costs. Our pricing is transparent with different packages for startups, mid-size companies, and enterprises. All features within your chosen plan are included with no surprise charges.",
    category: "Billing"
  }
]

// Get unique categories
const categories = [...new Set(faqs.map(faq => faq.category))]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section id="faq" className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full px-4 py-1.5 mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            Need Help?
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
          >
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about our executive hiring platform. Can&apos;t find the answer you&apos;re looking for? 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Contact our support team <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>

        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'All' 
              ? 'bg-blue-100 text-blue-700 shadow-sm' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
          >
            All Questions
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category 
                ? 'bg-blue-100 text-blue-700 shadow-sm' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={`${faq.question}-${activeCategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg shadow-gray-100/50 border border-gray-100 overflow-hidden group"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg mt-0.5">
                        <HelpCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg pr-8">
                          {faq.question}
                        </h3>
                        <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 ml-11">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Additional CTA */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-100 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4" />
            Still have questions?
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">We're here to help</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Our support team is available to answer any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 font-medium rounded-lg transition-colors shadow-sm hover:shadow-md">
              Schedule a Demo
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}