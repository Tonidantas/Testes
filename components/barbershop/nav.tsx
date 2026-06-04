"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Scissors, Menu, X } from "lucide-react"

const links = ["Serviços", "Galeria", "Sobre", "Contato"]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-amber-400" />
          <span className="text-white font-black text-base tracking-tight">
            BLADE <span className="text-amber-400">&</span> FADE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/50 hover:text-white text-sm font-medium transition-colors"
            >
              {l}
            </a>
          ))}
          <button className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-6 py-2 rounded-full text-sm transition-all hover:scale-105">
            Agendar
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 flex flex-col gap-5"
        >
          {links.map((l) => (
            <a key={l} href="#" className="text-white/60 hover:text-white text-sm">
              {l}
            </a>
          ))}
          <button className="bg-amber-400 text-black font-bold py-3 rounded-full text-sm">
            Agendar
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
