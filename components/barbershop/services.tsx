"use client"
import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Scissors, User, Zap, Clock } from "lucide-react"

const services = [
  {
    icon: Scissors,
    name: "Corte Clássico",
    price: "R$ 55",
    duration: "45 min",
    desc: "Tesoura ou máquina com acabamento em navalha, finalizado com produtos premium.",
    color: "text-amber-400",
    glow: "shadow-amber-500/10",
    border: "border-amber-400/15 hover:border-amber-400/50",
    tag: null,
  },
  {
    icon: User,
    name: "Barba Completa",
    price: "R$ 45",
    duration: "40 min",
    desc: "Modelagem completa, toalha quente, óleo de barba e navalha para acabamento impecável.",
    color: "text-sky-400",
    glow: "shadow-sky-500/10",
    border: "border-sky-400/15 hover:border-sky-400/50",
    tag: null,
  },
  {
    icon: Zap,
    name: "Degradê + Barba",
    price: "R$ 85",
    duration: "75 min",
    desc: "Combo completo: degradê profissional e barba modelada com navalha. O melhor dos dois mundos.",
    color: "text-emerald-400",
    glow: "shadow-emerald-500/15",
    border: "border-emerald-400/30 hover:border-emerald-400/60",
    tag: "MAIS POPULAR",
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-28 bg-[#0d0d0d]" id="servicos">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 font-mono text-xs tracking-[0.35em] uppercase mb-4">
            O Que Oferecemos
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white tracking-tight leading-none">
            NOSSOS SERVIÇOS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 45 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.55 }}
              className={`relative p-7 rounded-2xl border bg-[#111111] shadow-xl transition-all duration-300 cursor-pointer group ${s.border} ${s.glow} ${s.tag ? "ring-1 ring-emerald-400/15 md:scale-105" : ""}`}
            >
              {s.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-400 text-black text-[10px] font-black px-4 py-1 rounded-full tracking-widest">
                  {s.tag}
                </div>
              )}

              <s.icon className={`w-7 h-7 ${s.color} mb-5`} />
              <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
              <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{s.desc}</p>

              <div className="flex items-center gap-2 text-neutral-600 text-xs mb-6">
                <Clock className="w-3 h-3" />
                <span>{s.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-3xl font-black ${s.color}`}>{s.price}</span>
                <button
                  className={`text-[11px] font-mono uppercase tracking-widest ${s.color} border border-current rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-all hover:bg-current hover:text-black`}
                >
                  Agendar →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
