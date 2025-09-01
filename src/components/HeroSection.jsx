import { motion } from 'framer-motion'

export function HeroSection({ background = '/src/assets/gyomei-hero.png' }) {
  const handleScroll = (e) => {
    e.preventDefault()
  const target = document.getElementById('biography')
  if (!target) return
  const header = document.querySelector('header')
  const headerOffset = header ? header.offsetHeight : 0
  const rect = target.getBoundingClientRect()
  const absoluteY = rect.top + window.scrollY
  const offset = absoluteY - headerOffset - 8 // pequeno espaçamento
  window.scrollTo({ top: offset < 0 ? 0 : offset, behavior: 'smooth' })
  }
  return (
    <section className="relative isolate overflow-hidden h-[100svh] min-h-screen flex items-center bg-neutral-950 text-neutral-100">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,7,0.75),rgba(8,8,10,0.78)_40%,rgba(10,10,12,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)] mix-blend-overlay" />
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div className="container-responsive relative py-28 sm:py-36 flex flex-col items-start justify-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]"
        >
          Gyomei Himejima
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 max-w-xl text-center sm:text-left text-lg sm:text-xl text-neutral-300 leading-relaxed"
        >
          O mais forte dos Hashiras
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: 'easeOut' }}
          className="mt-10"
        >
          <button
            onClick={handleScroll}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 hover:from-brand-500 hover:via-brand-500 hover:to-brand-500 active:scale-[0.97] transition-all px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-brand-600/30 focus-ring"
          >
            Conheça sua história
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
