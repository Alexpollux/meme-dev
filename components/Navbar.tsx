'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-zinc-50/90 backdrop-blur-sm border-b border-zinc-200' : 'bg-transparent'
    }`}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-zinc-950 tracking-tight">
          meme<span className="text-accent">.</span>dev
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {['Projets', 'Stack', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-medium bg-zinc-950 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Me contacter
        </a>
      </nav>
    </header>
  )
}
