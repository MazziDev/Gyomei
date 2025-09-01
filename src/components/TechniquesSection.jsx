import { Hammer, Mountain, Shield, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const techniques = [
  {
    title: 'Forma 1: Impacto Rochedo',
    desc: 'Um golpe inicial devastador que canaliza a massa e firmeza da pedra para quebrar a defesa do inimigo.',
    icon: Hammer,
  },
  {
    title: 'Forma 2: Guardião Monolito',
    desc: 'Postura defensiva inabalável, absorvendo impacto enquanto prepara o contra‑ataque.',
    icon: Shield,
  },
  {
    title: 'Forma 3: Pico Ascendente',
    desc: 'Explosão vertical de poder esmagando o alvo com força ascendente, como o crescimento de um monólito.',
    icon: Mountain,
  },
  {
    title: 'Forma 4: Camadas Tectônicas',
    desc: 'Sequência de golpes sobrepostos que acumulam pressão e colapsam a guarda oponente.',
    icon: Layers,
  },
]

export function TechniquesSection() {
  return (
    <section className="py-24 sm:py-28 bg-neutral-950 border-t border-neutral-800/60">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-br from-neutral-50 via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Técnicas da Respiração da Pedra
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Manifestando estabilidade, peso e resiliência impenetrável em cada movimento.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {techniques.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 * i }}
                className="group relative h-full"
              >
                <div className="flex h-full flex-col rounded-xl border border-neutral-800/70 bg-neutral-900/60 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600/15 text-brand-500">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2 text-neutral-100">
                    {t.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400 flex-1">
                    {t.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechniquesSection
