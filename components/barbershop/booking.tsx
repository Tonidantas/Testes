"use client"
import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Calendar, Phone, MapPin } from "lucide-react"

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-[#0d0d0d]" id="agendar">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-amber-400 font-mono text-xs tracking-[0.35em] uppercase mb-6">
            Pronto Para Transformar?
          </p>
          <h2 className="text-[clamp(3rem,10vw,7rem)] font-black text-white tracking-tighter leading-none mb-8">
            AGENDE<br />SEU HORÁRIO
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto mb-12 text-base md:text-lg leading-relaxed">
            Reserve agora e garanta seu lugar na melhor barbearia da cidade.<br />
            Atendimento de segunda a sábado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-black font-bold px-10 py-5 rounded-full text-base transition-all hover:scale-105 shadow-xl shadow-amber-500/20">
              <Calendar className="w-5 h-5" />
              Agendar Online
            </button>
            <button className="flex items-center justify-center gap-3 border border-white/15 hover:border-white/40 text-white/80 hover:text-white px-10 py-5 rounded-full text-base transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              (11) 9 9999-9999
            </button>
          </div>

          {/* Info chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: MapPin, text: "Rua das Flores, 123 — São Paulo, SP" },
              { icon: Calendar, text: "Seg–Sex: 9h–20h  •  Sáb: 9h–18h" },
              { icon: Phone, text: "Whatsapp disponível" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/4 border border-white/8 rounded-full px-5 py-2.5 text-neutral-500 text-xs"
              >
                <Icon className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
