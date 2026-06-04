"use client"
import { useRef, useState } from "react"
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion"
import { Scissors } from "lucide-react"

function StraightRazorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Handle body */}
      <rect x="2" y="38" width="78" height="34" rx="10" fill="currentColor" opacity="0.75" />
      <circle cx="22" cy="55" r="5" fill="white" opacity="0.25" />
      <circle cx="48" cy="55" r="5" fill="white" opacity="0.25" />
      {/* Pivot */}
      <circle cx="80" cy="55" r="9" fill="currentColor" />
      <circle cx="80" cy="55" r="4" fill="white" opacity="0.3" />
      {/* Blade spine */}
      <path d="M89 38 L378 28 L378 48 L89 48 Z" fill="currentColor" opacity="0.75" />
      {/* Blade body */}
      <path d="M89 48 L378 48 L390 55 L378 82 L89 72 Z" fill="currentColor" />
      {/* Edge shine */}
      <path
        d="M89 72 L378 82 L390 55"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Tip */}
      <path d="M378 28 L408 55 L378 82 Z" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

function ClipperIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect x="18" y="8" width="124" height="195" rx="24" fill="currentColor" opacity="0.88" />
      {/* Top accent */}
      <rect x="30" y="20" width="100" height="55" rx="10" fill="white" opacity="0.04" />
      {/* Power button */}
      <circle cx="80" cy="52" r="20" fill="white" opacity="0.08" />
      <circle cx="80" cy="52" r="13" fill="white" opacity="0.07" />
      <path d="M80 44 L80 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
      <path
        d="M72 46.5 A11 11 0 1 1 88 46.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      {/* Grip lines */}
      {[115, 130, 145, 160].map((y) => (
        <rect key={y} x="33" y={y} width="94" height="5" rx="2.5" fill="white" opacity="0.08" />
      ))}
      {/* Blade housing */}
      <rect x="8" y="195" width="144" height="30" rx="6" fill="currentColor" />
      {/* Blade guard */}
      <rect x="3" y="220" width="154" height="30" rx="5" fill="currentColor" />
      {/* Teeth */}
      {Array.from({ length: 19 }).map((_, i) => (
        <rect
          key={i}
          x={6 + i * 8}
          y={245}
          width="5"
          height="20"
          rx="2.5"
          fill="white"
          opacity="0.5"
        />
      ))}
    </svg>
  )
}

const stepColors = ["text-amber-400", "text-sky-400", "text-emerald-400"]
const stepActiveColors = ["#f59e0b", "#38bdf8", "#34d399"]

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

  /* ---- Scissors ---- */
  const sRotate = useTransform(scrollYProgress, [0.02, 0.4], [0, 540])
  const sOpacity = useTransform(scrollYProgress, [0.02, 0.09, 0.33, 0.42], [0, 1, 1, 0])
  const sScale = useTransform(scrollYProgress, [0.02, 0.1, 0.33, 0.42], [0.3, 1.25, 1.1, 0])

  /* ---- Razor ---- */
  const rRotate = useTransform(scrollYProgress, [0.42, 0.7], [-25, 25])
  const rOpacity = useTransform(scrollYProgress, [0.42, 0.52, 0.65, 0.75], [0, 1, 1, 0])
  const rScale = useTransform(scrollYProgress, [0.42, 0.52, 0.65, 0.75], [0.3, 1.2, 1.1, 0])
  const rX = useTransform(scrollYProgress, [0.42, 0.56], [-200, 0])

  /* ---- Clipper ---- */
  const cOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1])
  const cScale = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0.2, 1.25, 1.1, 1])
  const cRotate = useTransform(scrollYProgress, [0.75, 0.92], [18, 0])

  /* ---- Section titles ---- */
  const t0 = useTransform(scrollYProgress, [0.02, 0.1, 0.34, 0.42], [0, 1, 1, 0])
  const t1 = useTransform(scrollYProgress, [0.42, 0.52, 0.66, 0.75], [0, 1, 1, 0])
  const t2 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1])

  const titleOpacities = [t0, t1, t2]

  const bgWords = ["TESOURA", "NAVALHA", "MAQUININHA"]
  const titles = ["CORTE PERFEITO", "BARBEADO FINO", "DEGRADÊ PRECISO"]
  const subtitles = ["Scissor Cut", "Straight Razor Shave", "Electric Fade"]
  const subtitleColors = ["text-amber-400", "text-sky-400", "text-emerald-400"]

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="h-[360vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#080808]">

        {/* Fullscreen bg words (ghost) */}
        {bgWords.map((word, i) => (
          <motion.div
            key={word}
            style={{ opacity: titleOpacities[i] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span className="text-[13vw] font-black text-white/[0.025] select-none tracking-tight">
              {word}
            </span>
          </motion.div>
        ))}

        {/* Section headings */}
        {titles.map((title, i) => (
          <motion.div
            key={title}
            style={{ opacity: titleOpacities[i] }}
            className="absolute top-[24%] inset-x-0 text-center pointer-events-none"
          >
            <p className="text-[clamp(2.5rem,7vw,5.5rem)] font-black text-white tracking-tighter leading-none">
              {title}
            </p>
            <p
              className={`font-mono text-xs tracking-[0.4em] uppercase mt-4 ${subtitleColors[i]}`}
            >
              {subtitles[i]}
            </p>
          </motion.div>
        ))}

        {/* ---- SCISSORS ---- */}
        <motion.div
          style={{ rotate: sRotate, scale: sScale, opacity: sOpacity }}
          className="absolute"
        >
          <Scissors
            className="w-[clamp(10rem,20vw,16rem)] h-[clamp(10rem,20vw,16rem)] text-amber-400"
            strokeWidth={0.7}
          />
        </motion.div>

        {/* ---- RAZOR ---- */}
        <motion.div
          style={{ rotate: rRotate, scale: rScale, opacity: rOpacity, x: rX }}
          className="absolute"
        >
          <StraightRazorIcon className="w-[clamp(14rem,35vw,26rem)] text-sky-400" />
        </motion.div>

        {/* ---- CLIPPER ---- */}
        <motion.div
          style={{ scale: cScale, opacity: cOpacity, rotate: cRotate }}
          className="absolute"
        >
          <ClipperIcon className="w-[clamp(8rem,14vw,11rem)] text-emerald-400" />
        </motion.div>

        {/* Bottom progress */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="flex gap-6 items-center">
            {["Tesoura", "Navalha", "Maquininha"].map((label, i) => (
              <span
                key={label}
                className="text-[11px] font-mono uppercase tracking-widest transition-colors duration-500"
                style={{ color: activeStep === i ? stepActiveColors[i] : "rgba(255,255,255,0.18)" }}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="w-52 h-px bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-400 rounded-full"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
