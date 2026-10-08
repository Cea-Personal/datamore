// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/(my-app)/components/Navbar'
import Footer from '@/(my-app)/components/Footer'
import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Datamore | Data & Analytics and AI Automation',
  description: 'Datamore helps growing organizations turn scattered data and repetitive processes into reliable analytics and AI-powered workflows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" className={`scroll-smooth ${inter.className} ${lora.className}`}>
       <head>
         <link rel="icon" href="/favicon.ico" sizes="any" />
         <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
         <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
       </head>
      <body className="bg-background text-on-background font-body-md overflow-x-hidden">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}