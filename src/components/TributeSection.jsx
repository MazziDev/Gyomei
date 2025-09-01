import { motion } from 'framer-motion'

export function TributeSection() {

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 py-28 sm:py-36 text-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="container-responsive relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6 max-w-2xl"
        >
          <div className="text-5xl sm:text-6xl candle-flicker select-none" aria-hidden>🕯️</div>
          <h2 className="glow-text text-3xl sm:text-4xl font-bold tracking-tight text-center">
            Gyomei viverá para sempre em nossos corações.
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md">
            Força, compaixão e fé inabalável ecoam além do tempo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TributeSection
