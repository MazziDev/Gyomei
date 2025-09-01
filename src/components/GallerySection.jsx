import { motion } from 'framer-motion'

// Ajuste os nomes conforme os arquivos adicionados em src/assets/gallery
const images = [
  { src: '/src/assets/gallery/1.jpg', alt: 'Fanart 1 de Gyomei' },
  { src: '/src/assets/gallery/2.jpg', alt: 'Fanart 2 de Gyomei' },
  { src: '/src/assets/gallery/3.jpg', alt: 'Fanart 3 de Gyomei' },
  { src: '/src/assets/gallery/4.jpg', alt: 'Fanart 4 de Gyomei' },
  { src: '/src/assets/gallery/5.jpg', alt: 'Fanart 5 de Gyomei' },
  { src: '/src/assets/gallery/6.jpg', alt: 'Fanart 6 de Gyomei' },
]

export function GallerySection() {
  return (
  <section className="py-24 sm:py-28 bg-neutral-950 border-t border-neutral-800/60" id="galeria">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-br from-neutral-50 via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Galeria
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Imagens e fanarts que evocam a presença e espiritualidade de Gyomei.
          </p>
        </motion.div>
  <div className="grid gap-5 sm:gap-6 grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.figure
              key={img.src + i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.04 }}
              className="relative group overflow-hidden rounded-2xl bg-neutral-800/40 border border-neutral-800/60 aspect-[4/5] sm:aspect-[3/4] transition-colors"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-[1.035]"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-neutral-950/70 via-neutral-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3 sm:p-4">
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-neutral-300 line-clamp-2">
                  {img.alt}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
