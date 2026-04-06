'use client'

import { motion } from 'framer-motion'
const links = [
  {
    label: 'alexandre.meme@meme-dev.com',
    href: 'mailto:alexandre.meme@meme-dev.com',
    tag: 'Email',
  },
  {
    label: 'linkedin.com/in/alexandre-meme',
    href: 'https://www.linkedin.com/in/alexandre-meme/',
    tag: 'LinkedIn',
  },
  {
    label: 'github.com/Alexpollux',
    href: 'https://github.com/Alexpollux',
    tag: 'GitHub',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tight mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-zinc-600 max-w-md">
            Vous avez un projet ? Écrivez-moi, je réponds sous 24h.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group inline-flex items-center gap-3 text-zinc-600 hover:text-zinc-950 transition-colors w-fit"
            >
              <span className="text-xs font-semibold bg-zinc-100 group-hover:bg-zinc-200 text-zinc-500 px-2.5 py-1.5 rounded-md transition-colors w-20 text-center">
                {link.tag}
              </span>
              <span className="text-sm font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
