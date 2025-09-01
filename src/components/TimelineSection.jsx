import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    label: 'Infância',
    title: 'Infância marcada pela adversidade',
    description: 'Gyomei desenvolve senso de proteção e espiritualidade enquanto supera perdas e desafios.',
  },
  {
    id: 2,
    label: 'Templo',
    title: 'Treinou e cuidou no templo',
    description: 'Passa a proteger e guiar crianças órfãs, fortalecendo corpo e fé em silêncio disciplinado.',
  },
  {
    id: 3,
    label: 'Ataque Oni',
    title: 'Noite do ataque dos Onis',
    description: 'Defende o templo com as mãos nuas, revelando força brutal e instintos que chamam atenção dos Caçadores.',
  },
  {
    id: 4,
    label: 'Hashira',
    title: 'Ascensão a Hashira da Pedra',
    description: 'Após treinamento intensivo, torna-se um dos pilares mais temidos e respeitados.',
  },
  {
    id: 5,
    label: 'Confronto',
    title: 'Luta contra Kokushibo',
    description: 'Enfrenta o Lua Superior mostrando equilíbrio entre resistência absoluta e precisão.',
  },
  {
    id: 6,
    label: 'Batalha Final',
    title: 'Batalha final contra Muzan',
    description: 'Emprega cada fibra de força e fé na ofensiva derradeira pela sobrevivência da humanidade.',
  },
]

export function TimelineSection() {
  return (
  <section id="linha-do-tempo" className="py-28 sm:py-32 bg-neutral-950 border-t border-neutral-800/60">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-br from-neutral-50 via-neutral-300 to-neutral-500 bg-clip-text text-transparent mb-4">
            Linha do Tempo
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Momentos marcantes da trajetória de Gyomei Himejima.
          </p>
        </motion.div>

        <ol className="relative max-w-3xl mx-auto pl-4 sm:pl-6 before:absolute before:top-0 before:bottom-0 before:left-2 sm:before:left-3 before:w-px before:bg-gradient-to-b before:from-brand-600/40 before:via-neutral-700 before:to-brand-600/30">
          {events.map((e, i) => (
            <motion.li
              key={e.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.05 }}
              className="relative pl-8 sm:pl-10 py-6 group"
            >
              <span className="absolute left-0 sm:left-[-2px] top-8 -translate-x-1/2 sm:translate-x-0 flex h-4 w-4 items-center justify-center">
                <span className="h-4 w-4 rounded-full bg-brand-600 shadow shadow-brand-600/40 ring-2 ring-white dark:ring-neutral-950 group-hover:scale-110 transition-transform" />
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-brand-600/90 mb-2">
                <span className="px-2 py-0.5 rounded bg-brand-600/10 dark:bg-brand-600/15 text-brand-600">{e.label}</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                {e.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {e.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default TimelineSection
