"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, RoundedBox, Text } from "@react-three/drei"
import { useReducedMotion } from "framer-motion"
import type { Group } from "three"

const ORANGE = "#f97316"

function Calendar3D({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const group = useRef<Group>(null)
  const tStart = useRef(Math.random() * 1000)

  // Binder ring positions (L and R)
  const rings = useMemo(
    () => [
      { x: -0.75, y: 0.95, z: 0.14 },
      { x: 0.75, y: 0.95, z: 0.14 },
    ],
    [],
  )

  useFrame((state) => {
    const t = state.clock.getElapsedTime() - tStart.current
    const spin = reduceMotion ? 0 : 0.25
    if (group.current) {
      group.current.rotation.y = t * 0.4 * spin
      group.current.rotation.x = Math.sin(t * 0.6) * 0.08 * spin + Math.PI * 0.05
    }
  })

  return (
    <group ref={group}>
      {/* Calendar body */}
      <RoundedBox args={[2, 2.2, 0.28]} radius={0.18} smoothness={8}>
        <meshStandardMaterial color="#ffffff" roughness={0.25} metalness={0.2} />
      </RoundedBox>

      {/* Top header strip */}
      <mesh position={[0, 0.7, 0.141]}>
        <boxGeometry args={[1.92, 0.56, 0.28]} />
        <meshStandardMaterial color={ORANGE} emissive={ORANGE} emissiveIntensity={0.25} roughness={0.35} />
      </mesh>

      {/* Binder rings */}
      {rings.map((r, i) => (
        <group key={i} position={[r.x, r.y, r.z]}>
          <mesh rotation-x={Math.PI / 2}>
            <torusGeometry args={[0.12, 0.025, 16, 32]} />
            <meshStandardMaterial color="#d1d5db" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Big "7" */}
      <Text
        font="/fonts/Geist_Bold.json"
        position={[0, -0.15, 0.145]}
        fontSize={0.9}
        letterSpacing={-0.02}
        anchorX="center"
        anchorY="middle"
      >
        7
        <meshStandardMaterial color="#0a0a0a" metalness={0.1} roughness={0.4} />
      </Text>

      {/* "days" label */}
      <Text
        font="/fonts/Geist_Regular.json"
        position={[0, -0.7, 0.145]}
        fontSize={0.22}
        anchorX="center"
        anchorY="middle"
      >
        days
        <meshStandardMaterial color="#111827" metalness={0.05} roughness={0.5} />
      </Text>
    </group>
  )
}

export function WeekInMotion() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative w-full max-w-[280px] aspect-square mx-auto lg:ml-auto">
      <Canvas
        className="absolute inset-0 block !w-full !h-full"
        camera={{ position: [0, 1.4, 4.2], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1.8, 2.1, 0.26]} />
              <meshBasicMaterial color="#ffffff" opacity={0.4} transparent />
            </mesh>
          }
        >
          {/* Lights */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 6, 6]} intensity={0.6} />
          <directionalLight position={[-4, 3, -2]} intensity={0.35} color={ORANGE} />

          {/* Calendar */}
          <Calendar3D reduceMotion={!!prefersReducedMotion} />

          {/* Ground/contact shadows */}
          <ContactShadows position={[0, -1.3, 0]} opacity={0.35} scale={6} blur={2.5} far={3.5} />

          {/* Studio environment for soft reflections */}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}
