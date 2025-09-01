import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import WhyHire22 from "@/components/WhyHire22"
import Testimonials from "@/components/Testimonials"
import CEOSection from "@/components/CEOSection"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyHire22 />
      <Testimonials />
      <CEOSection />
      <FAQ />
      <Footer />
    </main>
  )
}