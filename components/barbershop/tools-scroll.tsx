"use client"
import { useRef, useState } from "react"
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import dynamic from "next/dynamic"

const ScissorsCanvas = dynamic(
  () => import("./tool-canvases").then((m) => m.ScissorsCanvas),
  { ssr: false }
)
const RazorCanvas = dynamic(
  () => import("./tool-canvases").then((m) => m.RazorCanvas),
  { ssr: false }
)
const ClipperCanvas = dynamic(
  () => import("./tool-canvases").then((m) => m.ClipperCanvas),
  { ssr: false }
)

const stepActiveColors = ["#f59e0b", "#38bdf8", "#34d399"]
const bgWords   = ["TESOURA", "NAVALHA", "MAQUININHA"]
const titles    = ["CORTE PERFEITO", "BARBEADO FINO", "DEGRADÊ PRECISO"]
const subtitles = ["Scissor Cut", "Straight Razor Shave", "Electric Fade"]
const subtitleColors = ["text-amber-400", "text-sky-400", "text-emerald-400"]

export default function ToolsScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.42) setActiveStep(0)
    else if (v < 0.75) setActiveStep(1)
    else setActiveStep(2)
  })

  const sOp = useTransform(scrollYProgress, [0.02, 0.09, 0.34, 0.42], [0, 1, 1, 0])
  const sSc = useTransform(scrollYProgress, [0.02, 0.1,  0.34, 0.42], [0.4, 1, 1, 0.4])
  const rOp = useTransform(scrollYProgress, [0.42, 0.52, 0.66, 0.75], [0, 1, 1, 0])
  const rSc = useTransform(scrollYProgress, [0.42, 0.52, 0.66, 0.75], [0.4, 1, 1, 0.4])
  const cOp = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1])
  const cSc = useTransform(scrollYProgress, [0.75, 0.85, 0.96, 1], [0.3, 1.05, 1, 1])

  const t0 = useTransform(scrollYProgress, [0.02, 0.1, 0.34, 0.42], [0, 1, 1, 0])
  const t1 = useTransform(scrollYProgress, [0.42, 0.52, 0.66, 0.75], [0, 1, 1, 0])
  const t2 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1])
  const titleOpacities = [t0, t1, t2]

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="h-[360vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#080808]">

        {/* ghost bg words */}
        {bgWords.map((w, i) => (
          <motion.div key={w} style={{ opacity: titleOpacities[i] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[13vw] font-black text-white/[0.025] select-none tracking-tight">{w}</span>
          </motion.div>
        ))}

        {/* headings */}
        {titles.map((title, i) => (
          <motion.div key={title} style={{ opacity: titleOpacities[i] }}
            className="absolute top-[20%] inset-x-0 text-center pointer-events-none z-10">
            <p className="text-[clamp(2rem,6.5vw,5rem)] font-black text-white tracking-tighter leading-none">
              {title}
            </p>
            <p className={`font-mono text-xs tracking-[0.4em] uppercase mt-4 ${subtitleColors[i]}`}>
              {subtitles[i]}
            </p>
          </motion.div>
        ))}

        {/* 3-D tools */}
        <motion.div style={{ opacity: sOp, scale: sSc }}
          className="absolute inset-0 flex items-center justify-center">
          <ScissorsCanvas />
        </motion.div>

        <motion.div style={{ opacity: rOp, scale: rSc }}
          className="absolute inset-0 flex items-center justify-center">
          <RazorCanvas />
        </motion.div>

        <motion.div style={{ opacity: cOp, scale: cSc }}
          className="absolute inset-0 flex items-center justify-center">
          <ClipperCanvas />
        </motion.div>

        {/* progress bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="flex gap-6">
            {["Tesoura", "Navalha", "Maquininha"].map((label, i) => (
              <span key={label}
                className="text-[11px] font-mono uppercase tracking-widest transition-colors duration-500"
                style={{ color: activeStep === i ? stepActiveColors[i] : "rgba(255,255,255,0.18)" }}>
                {label}
              </span>
            ))}
          </div>
          <div className="w-52 h-px bg-white/8 rounded-full overflow-hidden">
            <motion.div className="h-full bg-amber-400 rounded-full" style={{ width: progressWidth }} />
          </div>
        </div>
      </div>
    </section>
  )
}
