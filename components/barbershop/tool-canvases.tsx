"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import * as THREE from "three"

/* ── Scissors ──────────────────────────────────────────────── */
function Scissors3D() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.9 })

  return (
    <Float speed={1.2} floatIntensity={0.25} rotationIntensity={0.05}>
      <group ref={ref} scale={1.6}>
        {([0.27, -0.27] as number[]).map((ang, i) => (
          <group key={i} rotation={[0, 0, ang]}>
            <mesh position={[0, 1.0, 0]}>
              <boxGeometry args={[0.11, 2.3, 0.065]} />
              <meshStandardMaterial color="#dde8f4" metalness={0.95} roughness={0.04} />
            </mesh>
            <mesh position={[0, 1.0, -0.036]}>
              <boxGeometry args={[0.055, 2.3, 0.012]} />
              <meshStandardMaterial color="#f0f6ff" metalness={0.98} roughness={0.02} />
            </mesh>
            <mesh position={[0, -0.62, 0]}>
              <cylinderGeometry args={[0.058, 0.058, 0.88, 20]} />
              <meshStandardMaterial color="#dde8f4" metalness={0.95} roughness={0.04} />
            </mesh>
            <mesh position={[0, -1.18, 0]}>
              <torusGeometry args={[0.31, 0.07, 20, 56]} />
              <meshStandardMaterial color="#dde8f4" metalness={0.95} roughness={0.04} />
            </mesh>
          </group>
        ))}
        <mesh>
          <cylinderGeometry args={[0.11, 0.11, 0.14, 28]} />
          <meshStandardMaterial color="#9ca0a8" metalness={0.88} roughness={0.12} />
        </mesh>
      </group>
    </Float>
  )
}

/* ── Straight Razor ────────────────────────────────────────── */
function Razor3D() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.75 })

  return (
    <Float speed={1.0} floatIntensity={0.2} rotationIntensity={0.04}>
      <group ref={ref} scale={1.3}>
        <mesh position={[1.1, 0, 0]}>
          <boxGeometry args={[2.0, 0.48, 0.05]} />
          <meshStandardMaterial color="#cdd8ec" metalness={0.97} roughness={0.03} />
        </mesh>
        <mesh position={[1.1, 0.3, 0]}>
          <boxGeometry args={[2.0, 0.08, 0.1]} />
          <meshStandardMaterial color="#b0bdd0" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[1.1, -0.26, 0]}>
          <boxGeometry args={[2.0, 0.04, 0.01]} />
          <meshStandardMaterial color="#eef4ff" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[2.2, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.33, 0.33, 0.05]} />
          <meshStandardMaterial color="#cdd8ec" metalness={0.97} roughness={0.03} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.22, 24]} />
          <meshStandardMaterial color="#9a9fa8" metalness={0.88} roughness={0.12} />
        </mesh>
        {([0.09, -0.09] as number[]).map((z, i) => (
          <mesh key={i} position={[-0.88, 0, z]}>
            <boxGeometry args={[1.52, 0.42, 0.08]} />
            <meshStandardMaterial color={i === 0 ? "#3d2010" : "#2c1808"} roughness={0.88} metalness={0.05} />
          </mesh>
        ))}
        {([-0.48, -1.28] as number[]).map((x, i) => (
          <mesh key={i} position={[x, 0, 0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.16, 20]} />
            <meshStandardMaterial color="#8c9098" metalness={0.85} roughness={0.15} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

/* ── Electric Clipper ──────────────────────────────────────── */
function Clipper3D() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.7 })

  return (
    <Float speed={0.9} floatIntensity={0.18} rotationIntensity={0.04}>
      <group ref={ref} scale={1.2}>
        <mesh position={[0, 0.25, 0]}>
          <capsuleGeometry args={[0.5, 1.3, 10, 28]} />
          <meshStandardMaterial color="#111827" metalness={0.45} roughness={0.55} />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.505, 0.505, 0.2, 28]} />
          <meshStandardMaterial color="#c0c8d0" metalness={0.92} roughness={0.08} />
        </mesh>
        <mesh position={[0, 0.28, 0.49]}>
          <boxGeometry args={[0.62, 0.5, 0.04]} />
          <meshStandardMaterial color="#1e2535" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.35, 0.52]}>
          <cylinderGeometry args={[0.1, 0.1, 0.05, 24]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={1.2} metalness={0.1} roughness={0.5} />
        </mesh>
        {[-0.18, -0.04, 0.1, 0.24].map((y, i) => (
          <mesh key={i} position={[0, y, 0.495]}>
            <boxGeometry args={[0.72, 0.04, 0.02]} />
            <meshStandardMaterial color="#0a0f1a" metalness={0.3} roughness={0.7} />
          </mesh>
        ))}
        <mesh position={[0, -0.78, 0]}>
          <boxGeometry args={[1.02, 0.28, 0.62]} />
          <meshStandardMaterial color="#1c2233" metalness={0.55} roughness={0.45} />
        </mesh>
        <mesh position={[0, -0.98, 0]}>
          <boxGeometry args={[1.06, 0.12, 0.58]} />
          <meshStandardMaterial color="#0f131e" metalness={0.6} roughness={0.4} />
        </mesh>
        {Array.from({ length: 13 }).map((_, i) => (
          <mesh key={i} position={[-0.46 + i * 0.077, -1.12, 0]}>
            <boxGeometry args={[0.05, 0.22, 0.5]} />
            <meshStandardMaterial color="#c8d4e0" metalness={0.96} roughness={0.04} />
          </mesh>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[-0.42 + i * 0.077, -1.1, 0.07]}>
            <boxGeometry args={[0.04, 0.18, 0.38]} />
            <meshStandardMaterial color="#e0eaf4" metalness={0.98} roughness={0.02} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

/* ── Shared Canvas wrapper ─────────────────────────────────── */
function ToolCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={2.5} />
      <directionalLight position={[-4, 2, -3]} intensity={0.8} color="#e8f0ff" />
      <pointLight position={[0, 5, 3]} intensity={1} color="#fff8f0" />
      <Environment preset="studio" />
      {children}
    </Canvas>
  )
}

/* ── Exports ───────────────────────────────────────────────── */
export function ScissorsCanvas() {
  return (
    <div className="w-[min(55vw,420px)] h-[min(55vw,420px)]">
      <ToolCanvas><Scissors3D /></ToolCanvas>
    </div>
  )
}

export function RazorCanvas() {
  return (
    <div className="w-[min(70vw,560px)] h-[min(42vw,320px)]">
      <ToolCanvas><Razor3D /></ToolCanvas>
    </div>
  )
}

export function ClipperCanvas() {
  return (
    <div className="w-[min(42vw,320px)] h-[min(70vw,520px)]">
      <ToolCanvas><Clipper3D /></ToolCanvas>
    </div>
  )
}
