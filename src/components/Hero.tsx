"use client"
import React from 'react'
import { ArrowRight, Users, Clock, Play, Award, Target, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9InJnYmEoMCwgMCwgMCwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSI+CiAgICA8cGF0aCBkPSJNNTkgMUwwIDU5Ii8+CiAgICA8cGF0aCBkPSJNMCAwTDU5IDU5Ii8+CiAgPC9nPgo8L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 text-indigo-700 text-sm font-semibold shadow-sm mb-6">
                <span className="mr-2">🚀</span>
                India&apos;s Premier AI-Powered Recruitment Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900">Find Executive Talent</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                In Record Time
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Exclusive platform connecting companies with pre-vetted, interview-ready senior executives in just <span className="font-semibold text-blue-600">22 hours</span>.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 space-y-3"
            >
              {[
                "AI-matched candidates with 98% success rate",
                "10,000+ premium senior-level professionals",
                "Zero recruitment fees until you hire"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/register"
                className="group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 overflow-hidden"
              >
                <span className="relative z-10">Start Hiring Now</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button className="group px-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 text-blue-600" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-amber-500 mr-1" />
                  <span className="text-2xl font-bold text-gray-800">98%</span>
                </div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-blue-500 mr-1" />
                  <span className="text-2xl font-bold text-gray-800">10K+</span>
                </div>
                <p className="text-sm text-gray-600">Premium Talent</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-purple-500 mr-1" />
                  <span className="text-2xl font-bold text-gray-800">22h</span>
                </div>
                <p className="text-sm text-gray-600">Avg. Time</p>
              </div>
            </motion.div>
          </div>

          {/* Right illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl blur-lg -z-10"></div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Executive Match</h3>
                  <Target className="w-6 h-6" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center bg-white/10 p-3 rounded-lg">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">CTO Candidate</p>
                      <p className="text-sm text-white/80">12+ years experience</p>
                    </div>
                    <div className="ml-auto bg-green-400/20 text-green-300 text-xs px-2 py-1 rounded-full">
                      98% Match
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white/10 p-3 rounded-lg">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">CFO Candidate</p>
                      <p className="text-sm text-white/80">15+ years experience</p>
                    </div>
                    <div className="ml-auto bg-green-400/20 text-green-300 text-xs px-2 py-1 rounded-full">
                      96% Match
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Matching in progress...</span>
                    <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white/60 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero