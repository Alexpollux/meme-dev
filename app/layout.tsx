import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Alexandre Meme — Développeur Fullstack Freelance',
  description: 'Développeur Fullstack freelance spécialisé React, Next.js et Node.js. Découvrez mes projets et contactez-moi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
