"use client"
import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import Image from "next/image"
import { Instagram } from "lucide-react"

const barbers = [
  {
    name: "Marcus Silva",
    role: "Fundador & Master Barber",
    specialty: "Degradê & Cortes Clássicos",
    img: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&q=80",
    ig: "@marcuscuts",
  },
  {
    name: "Rafael Costa",
    role: "Especialista em Barba",
    specialty: "Barba & Navalha Clássica",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    ig: "@rafaelbarba",
  },
  {
    name: "Diego Nunes",
    role: "Barber Stylist",
    specialty: "Coloração & Tratamentos",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    ig: "@diegostyle",
  },
]

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-28 bg-[#0a0a0a]" id="sobre">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 font-mono text-xs tracking-[0.35em] uppercase mb-4">
            Conheça Nossos Profissionais
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white tracking-tight leading-none">
            O NOSSO TIME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {barbers.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.55 }}
              className="group relative bg-[#111111] border border-white/5 hover:border-amber-400/20 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-white font-bold text-lg">{b.name}</p>
                <p className="text-amber-400 text-xs font-mono tracking-widest uppercase mt-1">
                  {b.role}
                </p>
                <p className="text-neutral-600 text-sm mt-2">{b.specialty}</p>

                <div className="flex items-center gap-1.5 mt-4 text-neutral-500 hover:text-white transition-colors cursor-pointer">
                  <Instagram className="w-3.5 h-3.5" />
                  <span className="text-xs">{b.ig}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
