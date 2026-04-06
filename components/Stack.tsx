'use client'

import { motion } from 'framer-motion'

const stack = [
  'Next.js',
  'React',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'MySQL',
  'Prisma',
  'Python',
  'Docker',
  'Git',
]

export default function Stack() {
  return (
    <section id="stack" className="py-32 px-6 bg-white border-y border-zinc-200">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight">
            Technologies
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="text-sm font-medium bg-zinc-50 border border-zinc-200 text-zinc-700 px-4 py-2 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
