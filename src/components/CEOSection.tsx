"use client"
import { motion } from 'framer-motion'
import { MessageCircle, Award, Users, TrendingUp } from 'lucide-react'
import ceo from '@/assets/joby-us.webp'
import Image from 'next/image'


export default function CEOSection() {
  return (
    <section id="ceo" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CEO Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-amber-500/20 rounded-full text-amber-300 text-sm font-medium mb-4">
                Message from Leadership
              </span>
              <h2 className="text-4xl font-bold mb-6">
                The Perfect Hiring Story
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Need help finding top talent with Hire22.ai? Want to discuss the future of executive hiring?
              </p>
            </div>

            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                &quot;I&apos;m Joby Joseph, a Serial Entrepreneur with 15 years in HR Technology. After founding Freshersworld.com—which served 30,000+ companies with 15 million user signups and 1.5 million app downloads—I recognized a critical gap in senior-level recruitment.&quot;
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                &quot;Hire22.ai represents the next evolution in executive hiring. We&apos;re not just matching resumes; we&apos;re revolutionizing how organizations connect with transformational leaders.&quot;
              </p>
            </div>

            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 flex items-center space-x-3">
              <MessageCircle className="w-5 h-5" />
              <span>Schedule a Call with CEO</span>
            </button>
          </motion.div>

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative"
>
  {/* Profile Card */}
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
    <div className="text-center mb-6">
      {/* CEO Image */}
      <div className="w-35 h-35 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
        <Image
        src={ceo}
        alt="CEO Joby Joseph"
        className="w-full h-full object-cover"
        width={140}
        height={140}
        />
      </div>

      <h3 className="text-2xl font-semibold">Joby Joseph</h3>
      <p className="text-amber-300">Founder & CEO, Hire22.ai</p>
    </div>

    {/* Achievements */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="text-center">
        <Users className="w-6 h-6 text-amber-400 mx-auto mb-2" />
        <p className="text-2xl font-bold">30K+</p>
        <p className="text-sm text-gray-400">Companies Served</p>
      </div>
      <div className="text-center">
        <TrendingUp className="w-6 h-6 text-amber-400 mx-auto mb-2" />
        <p className="text-2xl font-bold">15M+</p>
        <p className="text-sm text-gray-400">User Signups</p>
      </div>
    </div>

    <div className="text-center">
      <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
      <p className="text-sm text-gray-300">15 Years HR Tech Experience</p>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  )
}