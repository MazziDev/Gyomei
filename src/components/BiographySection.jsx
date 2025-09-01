import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}

const paragraph = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

export function BiographySection() {
  return (
  <section id="biography" className="relative py-24 sm:py-28 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_60%_40%,rgba(52,111,255,0.10),transparent_65%)]" />
      <div className="container-responsive relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto max-w-3xl backdrop-blur-md bg-neutral-900/70 border border-neutral-800/70 rounded-2xl shadow-xl shadow-black/40 p-8 sm:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.18)] mb-8"
          >
            Biografia
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6 text-neutral-300 leading-relaxed sm:leading-loose text-base sm:text-lg text-center"
          >
            <motion.p variants={paragraph}>
              Gyomei Himejima teve uma infância marcada pela adversidade e pela perda, desenvolvendo desde cedo uma profunda espiritualidade e um senso aguçado de proteção aos mais fracos.
            </motion.p>
            <motion.p variants={paragraph}>
              Encontrou propósito cuidando de crianças órfãs em um templo isolado, onde sua serenidade e devoção contrastavam com sua força física impressionante.
            </motion.p>
            <motion.p variants={paragraph}>
              Numa noite fatídica, demônios atacaram o templo. Gyomei, mesmo sem treinamento formal do Corpo de Caçadores, lutou com as mãos nuas e instinto feroz para proteger as crianças.
            </motion.p>
            <motion.p variants={paragraph}>
              Seu potencial inesgotável chamou atenção dos Caçadores de Oni. Após treinamento rigoroso, canalizou fé, disciplina e poder bruto tornando-se o Hashira da Pedra.
            </motion.p>
            <motion.p variants={paragraph}>
              Reconhecido como o mais forte dos Hashiras, Gyomei combina compaixão profunda com força inabalável, mantendo um equilíbrio entre devoção espiritual e a dura realidade da guerra contra os Onis.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BiographySection
