'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Maison Leroux',
    description: 'Site vitrine premium pour un domaine viticole. Mise en avant des cuvées, des valeurs du domaine et prise de contact.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Alexpollux/maison-leroux',
    demo: 'https://maison-leroux.vercel.app/',
  },
  {
    name: 'FeedBak',
    description: 'SaaS de collecte de feedbacks clients. Plans Free/Pro, paiement Stripe, dashboard analytics et export CSV.',
    tags: ['Next.js', 'Prisma', 'Supabase', 'Stripe'],
    github: 'https://github.com/Alexpollux/FeedBak',
    demo: 'https://feed-bak.vercel.app',
  },
  {
    name: 'El Humo',
    description: 'Site restaurant mexicain avec back-office CMS intégré. Gestion du menu et des réservations en temps réel, sans toucher au code.',
    tags: ['Next.js', 'Prisma', 'Supabase', 'Resend'],
    github: 'https://github.com/Alexpollux/ElHumo',
    demo: 'https://elhumo.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projets" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Projets</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight">
            Ce que j'ai construit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-zinc-950 text-lg mb-2">{project.name}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
                >
                  <ExternalLink size={15} />
                  Démo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
