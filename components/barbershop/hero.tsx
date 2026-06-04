"use client"
import { motion } from "framer-motion"
import { Calendar, Scissors } from "lucide-react"
import dynamic from "next/dynamic"

const BarberHeroScene = dynamic(() => import("./barber-hero-scene"), { ssr: false })

const title = "BLADE & FADE"

const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stats = [
  { num: "2.5K+", label: "Clientes Satisfeitos" },
  { num: "8+", label: "Anos de Experiência" },
  { num: "4.9★", label: "Avaliação Média" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080808] overflow-hidden flex items-center pt-16">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* LEFT */}
        <div className="relative z-10 py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-amber-400/25 bg-amber-400/5 rounded-full px-4 py-1.5 mb-8"
          >
            <Scissors className="w-3 h-3 text-amber-400" />
            <span className="text-amber-400 text-xs font-mono tracking-[0.25em] uppercase">
              Premium Barbershop • SP
            </span>
          </motion.div>

          <h1 className="text-[3.5rem] md:text-[5.5rem] font-black leading-none tracking-tighter mb-6 overflow-hidden">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${char === "&" ? "text-amber-400" : "text-white"}`}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-neutral-400 text-base md:text-lg max-w-md mb-10 leading-relaxed"
          >
            Onde cada corte é uma obra de arte. Precisão, estilo e uma experiência que você não vai esquecer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-amber-500/20">
              <Calendar className="w-4 h-4" />
              Agendar Agora
            </button>
            <button className="border border-white/15 hover:border-white/40 text-white/80 hover:text-white px-8 py-4 rounded-full transition-all hover:scale-105">
              Ver Serviços ↓
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex gap-8 pt-8 border-t border-white/8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-black text-white">{s.num}</p>
                <p className="text-neutral-600 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3-D Barber Scene */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="h-[500px] md:h-[680px] relative"
        >
          <BarberHeroScene />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
