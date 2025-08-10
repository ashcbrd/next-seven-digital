"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, Float, MeshTransmissionMaterial, RoundedBox, Text } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useReducedMotion } from "framer-motion"
import { Suspense, useMemo, useRef } from "react"
import type { Group, Mesh } from "three"
import * as THREE from "three"

const ORANGE = "#f97316"

function DayRow({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const dots = useRef<Mesh[]>([])
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const speed = reduceMotion ? 0.5 : 1.2
    dots.current.forEach((m, i) => {
      if (!m) return
      // Wave of emphasis left-to-right across 7 days
      const phase = (t * speed - i * 0.25) % (Math.PI * 2)
      const pulse = Math.max(0, Math.sin(phase))
      ;(m.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.25 + pulse * 0.9
      m.scale.setScalar(0.9 + pulse * 0.12)
    })
  })

  return (
    <group position={[0, -0.5, 0.08]}>
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) dots.current[i] = el
          }}
          position={[-0.75 + i * 0.25, 0, 0]}
        >
          <sphereGeometry args={[0.06, 24, 24]} />
          <meshStandardMaterial color="#ffffff" emissive={ORANGE} emissiveIntensity={0.25} roughness={0.4} />
        </mesh>
      ))}
    </group>
  )
}

function CalendarBadge() {
  return (
    <group position={[1.15, 0.35, 0.11]} rotation={[-0.08, 0.2, 0.06]}>
      <RoundedBox args={[0.8, 0.9, 0.08]} radius={0.1} smoothness={6}>
        <meshStandardMaterial color="#ffffff" metalness={0.15} roughness={0.2} />
      </RoundedBox>
      {/* Top strip */}
      <mesh position={[0, 0.35, 0.045]}>
        <boxGeometry args={[0.76, 0.22, 0.01]} />
        <meshStandardMaterial color={ORANGE} emissive={ORANGE} emissiveIntensity={0.65} roughness={0.25} />
      </mesh>
      {/* 7 */}
      <Text
        font="/fonts/Geist_Bold.json"
        position={[0, -0.05, 0.05]}
        fontSize={0.46}
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.03}
      >
        7
        <meshStandardMaterial color="#0a0a0a" metalness={0.2} roughness={0.5} />
      </Text>
    </group>
  )
}

function BrowserWindow({ reduceMotion = false }: { reduceMotion?: boolean }) {
  // Gentle self-rotation
  const group = useRef<Group>(null)
  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    const spin = reduceMotion ? 0.04 : 0.12
    group.current.rotation.y = t * spin
  })

  // Content bars inside the window
  const bars = useMemo(
    () => [
      { y: 0.25, w: 1.4, h: 0.08, e: 0.7 },
      { y: 0.05, w: 1.6, h: 0.06, e: 0.5 },
      { y: -0.12, w: 1.2, h: 0.06, e: 0.4 },
    ],
    [],
  )

  return (
    <group ref={group}>
      {/* Outer glass frame */}
      <RoundedBox args={[2.6, 1.7, 0.14]} radius={0.16} smoothness={8} position={[0, 0.05, 0]}>
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.9}
          roughness={0.06}
          anisotropicBlur={0.6}
          chromaticAberration={0.025}
          ior={1.35}
          color="#ffffff"
          distortion={0.06}
          temporalDistortion={0.06}
          samples={10}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.06}
        />
      </RoundedBox>

      {/* Top bar pills (browser controls) */}
      <group position={[-1.05, 0.66, 0.09]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#ef4444" roughness={0.4} metalness={0.2} />
        </mesh>
        <mesh position={[0.14, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.4} metalness={0.2} />
        </mesh>
        <mesh position={[0.28, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#22c55e" roughness={0.4} metalness={0.2} />
        </mesh>
      </group>

      {/* Content bars */}
      <group position={[0, 0.1, 0.09]}>
        {bars.map((b, i) => (
          <mesh key={i} position={[0, b.y, 0]}>
            <boxGeometry args={[b.w, b.h, 0.01]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive={ORANGE}
              emissiveIntensity={b.e}
              roughness={0.35}
              metalness={0.1}
            />
          </mesh>
        ))}
      </group>

      {/* Week dots + badge */}
      <DayRow reduceMotion={reduceMotion} />
      <CalendarBadge />
    </group>
  )
}

export function HeroSculpture() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto lg:ml-auto">
      {/* No CSS or mesh background — the canvas is fully transparent */}
      <Canvas
        className="absolute inset-0 block !w-full !h-full"
        camera={{ position: [0, 0.7, 4.4], fov: 32, near: 0.1, far: 30 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        {/* Keep background transparent */}
        <color attach="background" args={["transparent"]} />
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 6, 6]} intensity={0.95} />
        <directionalLight position={[-4, 2, -2]} intensity={0.55} color={ORANGE} />

        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1.8, 1.1, 0.1]} />
              <meshBasicMaterial color="#ffffff" opacity={0.25} transparent />
            </mesh>
          }
        >
          <Float
            speed={prefersReducedMotion ? 0.3 : 0.95}
            rotationIntensity={prefersReducedMotion ? 0.12 : 0.55}
            floatIntensity={prefersReducedMotion ? 0.18 : 0.85}
          >
            <BrowserWindow reduceMotion={!!prefersReducedMotion} />
          </Float>

          {/* Grounding without background planes */}
          <ContactShadows position={[0, -1.45, 0]} opacity={0.32} scale={8} blur={2.6} far={3.6} />
          <Environment preset="studio" />

          {/* Tasteful bloom for neon accents */}
          <EffectComposer multisampling={8}>
            <Bloom intensity={0.75} luminanceThreshold={0.18} luminanceSmoothing={0.16} mipmapBlur />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}
