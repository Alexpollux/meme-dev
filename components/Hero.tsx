'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-6">
            Disponible pour des missions freelance
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-950 tracking-tight leading-tight mb-6">
            Alexandre Meme
            <br />
            <span className="text-zinc-400">Développeur Fullstack</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl leading-relaxed mb-10">
            Développeur Fullstack passionné par les interfaces soignées et les architectures solides.
            Je conçois des applications web complètes avec une préférence pour l'écosystème React / Next.js / Node.js.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projets"
              className="bg-zinc-950 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border border-zinc-300 text-zinc-950 text-sm font-medium px-6 py-3 rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a href="#projets" className="text-zinc-400 hover:text-zinc-600 transition-colors">
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  )
}
