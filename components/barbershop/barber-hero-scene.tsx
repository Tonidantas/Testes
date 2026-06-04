"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import * as THREE from "three"

/* ── Barber Pole ─────────────────────────────────────────────── */
function BarberPole() {
  const texRef = useRef<THREE.Texture | null>(null)

  const texture = useMemo(() => {
    const c = document.createElement("canvas")
    c.width = 128
    c.height = 512
    const ctx = c.getContext("2d")!
    const palette = ["#ffffff", "#dc2626", "#ffffff", "#1d4ed8"]
    const h = 64
    for (let i = -2; i < 14; i++) {
      ctx.fillStyle = palette[((i % 4) + 4) % 4]
      ctx.beginPath()
      ctx.moveTo(0, i * h)
      ctx.lineTo(128, i * h - 128)
      ctx.lineTo(128, i * h - 128 + h)
      ctx.lineTo(0, i * h + h)
      ctx.closePath()
      ctx.fill()
    }
    const tex = new THREE.CanvasTexture(c)
    tex.wrapS = THREE.RepeatWrapping
    tex.wrapT = THREE.RepeatWrapping
    texRef.current = tex
    return tex
  }, [])

  useFrame((_, dt) => {
    if (texRef.current) texRef.current.offset.y -= dt * 0.18
  })

  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.42, 0.42, 4.8, 32, 1, false]} />
        <meshStandardMaterial map={texture} metalness={0.1} roughness={0.65} />
      </mesh>
      {/* chrome cap top */}
      <mesh position={[0, 2.55, 0]}>
        <cylinderGeometry args={[0.58, 0.42, 0.32, 32]} />
        <meshStandardMaterial color="#c8c8c8" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* ball top */}
      <mesh position={[0, 2.82, 0]}>
        <sphereGeometry args={[0.2, 24, 24]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* base */}
      <mesh position={[0, -2.55, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.22, 32]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.85} roughness={0.15} />
      </mesh>
    </group>
  )
}

/* ── Scissors (floating left) ────────────────────────────────── */
function HeroScissors() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.55 })

  return (
    <Float speed={1.4} floatIntensity={0.5} rotationIntensity={0.15}>
      <group ref={ref} position={[2.6, 0.6, 0.2]} scale={0.72}>
        {[0.28, -0.28].map((ang, i) => (
          <group key={i} rotation={[0, 0, ang]}>
            <mesh position={[0, 0.9, 0]}>
              <boxGeometry args={[0.1, 2.2, 0.065]} />
              <meshStandardMaterial color="#dde6f0" metalness={0.95} roughness={0.05} />
            </mesh>
            <mesh position={[0, -0.6, 0]}>
              <cylinderGeometry args={[0.055, 0.055, 0.85, 16]} />
              <meshStandardMaterial color="#dde6f0" metalness={0.95} roughness={0.05} />
            </mesh>
            <mesh position={[0, -1.15, 0]}>
              <torusGeometry args={[0.3, 0.068, 16, 48]} />
              <meshStandardMaterial color="#dde6f0" metalness={0.95} roughness={0.05} />
            </mesh>
          </group>
        ))}
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 0.13, 24]} />
          <meshStandardMaterial color="#888" metalness={0.85} roughness={0.15} />
        </mesh>
      </group>
    </Float>
  )
}

/* ── Straight Razor (floating right) ────────────────────────── */
function HeroRazor() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y -= dt * 0.45 })

  return (
    <Float speed={1.1} floatIntensity={0.4} rotationIntensity={0.1}>
      <group ref={ref} position={[-2.6, 0.1, 0.1]} scale={0.68}>
        {/* blade */}
        <mesh position={[1.05, 0, 0]}>
          <boxGeometry args={[1.9, 0.42, 0.045]} />
          <meshStandardMaterial color="#cdd8e8" metalness={0.96} roughness={0.04} />
        </mesh>
        {/* spine */}
        <mesh position={[1.05, 0.25, 0]}>
          <boxGeometry args={[1.9, 0.07, 0.09]} />
          <meshStandardMaterial color="#b0bac8" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* blade tip */}
        <mesh position={[2.08, -0.05, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.32, 0.32, 0.045]} />
          <meshStandardMaterial color="#cdd8e8" metalness={0.96} roughness={0.04} />
        </mesh>
        {/* pivot */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.2, 24]} />
          <meshStandardMaterial color="#999" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* handle */}
        <mesh position={[-0.88, 0, 0]}>
          <boxGeometry args={[1.45, 0.38, 0.17]} />
          <meshStandardMaterial color="#3e2612" roughness={0.85} metalness={0.05} />
        </mesh>
        {/* rivets */}
        {([-0.5, -1.25] as number[]).map((x, i) => (
          <mesh key={i} position={[x, 0, 0.11]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.048, 0.048, 0.14, 16]} />
            <meshStandardMaterial color="#888" metalness={0.85} roughness={0.15} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

/* ── Scene wrapper (mouse tilt) ──────────────────────────────── */
function Scene() {
  const root = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!root.current) return
    root.current.rotation.y +=
      (state.mouse.x * 0.22 - root.current.rotation.y) * 0.04
    root.current.rotation.x +=
      (-state.mouse.y * 0.08 - root.current.rotation.x) * 0.04
  })

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 7, 4]} intensity={2.2} />
      <directionalLight position={[-4, 2, -2]} intensity={0.7} color="#ffd0a0" />
      <pointLight position={[0, 4, 3]} intensity={0.9} color="#fff6e0" />
      <Environment preset="studio" />
      <group ref={root}>
        <BarberPole />
        <HeroScissors />
        <HeroRazor />
      </group>
    </>
  )
}

export default function BarberHeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 7.5], fov: 48 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  )
}
