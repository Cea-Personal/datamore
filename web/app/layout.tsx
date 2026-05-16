// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'

export const metadata: Metadata = {
  title: 'Datamore',
  description: 'Empowering decision-makers with rigorous data engineering and strategic AI automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-on-background font-body-md overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}