import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection.jsx'
import BiographySection from './components/BiographySection.jsx'
import TechniquesSection from './components/TechniquesSection.jsx'
import TimelineSection from './components/TimelineSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import TributeSection from './components/TributeSection.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.25)
  const [panelOpen, setPanelOpen] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      // Import dinâmico para bundler resolver caminho correto em produção (GitHub Pages base)
      const audio = new Audio(new URL('./assets/music.mp3', import.meta.url).href)
      audio.loop = true
      audio.volume = volume
      audioRef.current = audio
    } else {
      audioRef.current.volume = muted ? 0 : volume
    }
  }, [volume, muted])

  const handleEnter = () => {
    setEntered(true)
    if (audioRef.current && !playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const toggleMute = () => {
    setMuted(m => !m)
  }

  const handleVolume = (e) => {
    const v = Number(e.target.value)
    setVolume(v)
    if (audioRef.current && !muted) {
      audioRef.current.volume = v
    }
  }

  const AudioPanel = () => (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2">
      <div className="backdrop-blur bg-neutral-900/80 border border-neutral-700/70 shadow-xl shadow-black/40 rounded-2xl px-4 py-3 w-60 transition-all" >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold tracking-wide text-neutral-300">Inabalável | Okabe</span>
          <button
            onClick={() => setPanelOpen(o => !o)}
            className="text-[10px] uppercase tracking-wide text-neutral-400 hover:text-neutral-200 transition"
          >
            {panelOpen ? 'Fechar' : 'Abrir'}
          </button>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={toggleAudio}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-500 text-white shadow focus-ring"
          >
            {playing ? 'Parar' : 'Tocar'}
          </button>
          <button
            onClick={toggleMute}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-700 hover:bg-neutral-600 text-neutral-100 transition"
          >
            {muted ? 'Unmute' : 'Mute'}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {panelOpen && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 font-medium tracking-wide">Volume</span>
                <span className="text-[11px] tabular-nums text-neutral-300">{Math.round((muted ? 0 : volume) * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const next = Math.max(0, +(volume - 0.25).toFixed(2))
                    setVolume(next)
                    if (next === 0 && !muted) {
                      // manter não mutado para permitir subir depois sem clicar em unmute, mas zera volume
                    }
                  }}
                  className="flex-1 px-2 py-1.5 rounded-md text-sm font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition"
                >
                  -25%
                </button>
                <button
                  onClick={() => {
                    const next = Math.min(1, +(volume + 0.25).toFixed(2))
                    if (muted && next > 0) setMuted(false)
                    setVolume(next)
                  }}
                  className="flex-1 px-2 py-1.5 rounded-md text-sm font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition"
                >
                  +25%
                </button>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-neutral-700/70 to-transparent my-3" />
              <p className="text-[11px] leading-relaxed text-neutral-500">Use os botões para ajustar em passos de 25%.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  return (
    <div className="dark min-h-screen flex flex-col bg-neutral-950 text-neutral-100 relative">
      <Header />
  <AudioPanel />
      <Main />
      <TributeSection />
      <Footer />
      <IntroOverlay entered={entered} onEnter={handleEnter} />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 h-16 border-b border-gray-700 bg-[linear-gradient(90deg,#050506,#0d0d10,#141417)]/95 backdrop-blur supports-[backdrop-filter]:bg-[linear-gradient(90deg,#050506cc,#0d0d10cc,#141417cc)]">
      <div className="h-full flex items-center px-8">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, textShadow: '0 0 12px rgba(255,255,255,0.35)' }}
          className="text-2xl font-bold tracking-tight text-white select-none transition-transform"
        >
          Gyomei Himejima
        </motion.h1>
      </div>
    </header>
  )
}

function Main() {
  return (
    <main className="flex-1">
      <HeroSection />
  <BiographySection />
  <TechniquesSection />
  <TimelineSection />
  <GallerySection />
    </main>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800 py-8 text-sm text-neutral-500">
      <div className="container-responsive flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between">
        <p className="text-neutral-500">&copy; {new Date().getFullYear()} Gyomei Himejima. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

function IntroOverlay({ entered, onEnter }) {
  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-[linear-gradient(120deg,#050506,#0c0c10,#141417)] backdrop-blur-xl"
          onClick={onEnter}
        >
          <div className="text-center px-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.25)] mb-6"
            >
              Gyomei Himejima
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.65, ease: 'easeOut' }}
              className="text-neutral-300 text-base sm:text-lg tracking-wide"
            >
              Clique para entrar
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Slider removido a pedido do usuário; controles agora são botões de passo.
