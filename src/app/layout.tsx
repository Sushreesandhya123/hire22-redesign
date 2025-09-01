import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hire22.ai - Premium AI-Powered Recruitment Platform',
  description: 'India\'s most sophisticated AI-powered platform for executive and senior-level hiring. Connect with interview-ready candidates in just 22 hours.',
  keywords: 'executive hiring, senior recruitment, AI recruitment, premium hiring platform, interview-ready candidates',
  authors: [{ name: 'Hire22.ai Team' }],
  openGraph: {
    title: 'Hire22.ai - Premium AI-Powered Recruitment',
    description: 'Sophisticated AI-powered hiring for executive and senior roles',
    url: 'https://hire22.ai',
    siteName: 'Hire22.ai',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body className={`${inter.className} ${playfair.className}`}>
        {children}
      </body>
    </html>
  )
}