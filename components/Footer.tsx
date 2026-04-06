export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-semibold text-zinc-950 tracking-tight">
          meme<span className="text-accent">.</span>dev
        </span>
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Alexandre Meme
        </p>
      </div>
    </footer>
  )
}
