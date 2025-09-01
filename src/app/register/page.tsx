import Header from "@/components/Header"
import RegistrationForm from "@/components/RegistrationForm"
import Footer from "@/components/Footer"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <RegistrationForm />
      <Footer />
    </main>
  )
}