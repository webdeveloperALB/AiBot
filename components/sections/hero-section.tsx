"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Brain,
  Percent,
  Eye,
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  Sparkles,
  Globe,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Professional Custom SVG Icons
function InstitutionalTradingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Trading Chart with Candlesticks */}
      <path d="M3 21h18" />
      <path d="M5 21V7" />
      <path d="M5 7l2-2 2 2" />
      <rect x="4" y="9" width="2" height="4" fill="currentColor" />
      <rect x="7" y="11" width="2" height="6" fill="currentColor" />
      <rect x="10" y="8" width="2" height="3" fill="currentColor" />
      <rect x="13" y="12" width="2" height="5" fill="currentColor" />
      <rect x="16" y="6" width="2" height="8" fill="currentColor" />
      <rect x="19" y="10" width="2" height="7" fill="currentColor" />
      {/* Trend lines */}
      <path d="M5 15l3-2 3-1 3 2 3-3 3 1" strokeWidth="1" opacity="0.6" />
      <path d="M5 12l3-1 3 1 3-2 3 1 3-1" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function AIAnalyticsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Neural Network Pattern */}
      <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.6" />

      {/* Connections */}
      <path d="M6 6l6 6" opacity="0.4" />
      <path d="M18 6l-6 6" opacity="0.4" />
      <path d="M6 18l6-6" opacity="0.4" />
      <path d="M18 18l-6-6" opacity="0.4" />
      <path d="M12 4v8" opacity="0.3" />
      <path d="M12 12v8" opacity="0.3" />
      <path d="M4 12h8" opacity="0.3" />
      <path d="M12 12h8" opacity="0.3" />

      {/* Data flow indicators */}
      <path d="M8 8l1-1" strokeWidth="2" opacity="0.7" />
      <path d="M16 8l-1-1" strokeWidth="2" opacity="0.7" />
      <path d="M8 16l1 1" strokeWidth="2" opacity="0.7" />
      <path d="M16 16l-1 1" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

function YieldOptimizationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Compound Growth Curve */}
      <path
        d="M3 20c2-8 4-12 6-13 2-1 4 0 6 2 2 2 4 6 6 11"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Growth Bars */}
      <rect
        x="4"
        y="18"
        width="1.5"
        height="2"
        fill="currentColor"
        opacity="0.6"
      />
      <rect
        x="7"
        y="16"
        width="1.5"
        height="4"
        fill="currentColor"
        opacity="0.7"
      />
      <rect
        x="10"
        y="14"
        width="1.5"
        height="6"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="13"
        y="11"
        width="1.5"
        height="9"
        fill="currentColor"
        opacity="0.9"
      />
      <rect x="16" y="8" width="1.5" height="12" fill="currentColor" />
      <rect x="19" y="5" width="1.5" height="15" fill="currentColor" />

      {/* Percentage Indicators */}
      <text x="5" y="15" fontSize="3" fill="currentColor" opacity="0.8">
        %
      </text>
      <text x="11" y="10" fontSize="3" fill="currentColor" opacity="0.8">
        %
      </text>
      <text x="17" y="6" fontSize="3" fill="currentColor" opacity="0.8">
        %
      </text>

      {/* Optimization Arrow */}
      <path d="M2 22l3-3" strokeWidth="2" />
      <path d="M2 22l3 0" strokeWidth="2" />
      <path d="M2 22l0 3" strokeWidth="2" />

      {/* Target Ring */}
      <circle cx="20" cy="4" r="2" fill="none" strokeWidth="1" opacity="0.6" />
      <circle cx="20" cy="4" r="1" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function PredictionMarketsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Crystal Ball / Prediction Sphere */}
      <circle cx="12" cy="12" r="8" fill="none" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" fill="none" strokeWidth="1" opacity="0.6" />
      <circle cx="12" cy="12" r="4" fill="none" strokeWidth="1" opacity="0.4" />

      {/* Future Trend Lines Inside */}
      <path d="M8 10c1 0 2 1 3 0s2-2 3 0" strokeWidth="1.5" opacity="0.8" />
      <path d="M8 12c1-1 2 0 3-1s2 1 3-1" strokeWidth="1.5" opacity="0.6" />
      <path d="M8 14c1 1 2-1 3 1s2-2 3 1" strokeWidth="1.5" opacity="0.4" />

      {/* Prediction Indicators */}
      <path d="M12 4v2" strokeWidth="2" />
      <path d="M12 18v2" strokeWidth="2" />
      <path d="M4 12h2" strokeWidth="2" />
      <path d="M18 12h2" strokeWidth="2" />

      {/* Probability Arcs */}
      <path d="M7 7l1.5 1.5" strokeWidth="1.5" opacity="0.7" />
      <path d="M17 7l-1.5 1.5" strokeWidth="1.5" opacity="0.7" />
      <path d="M7 17l1.5-1.5" strokeWidth="1.5" opacity="0.7" />
      <path d="M17 17l-1.5-1.5" strokeWidth="1.5" opacity="0.7" />

      {/* Market Outcome Dots */}
      <circle cx="10" cy="8" r="0.5" fill="currentColor" opacity="0.8" />
      <circle cx="14" cy="8" r="0.5" fill="currentColor" opacity="0.6" />
      <circle cx="10" cy="16" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="16" r="0.5" fill="currentColor" opacity="0.7" />

      {/* Forecast Arrow */}
      <path d="M12 12l3-3" strokeWidth="2" opacity="0.8" />
      <path d="M15 9l-1 0" strokeWidth="2" opacity="0.8" />
      <path d="M15 9l0 1" strokeWidth="2" opacity="0.8" />
    </svg>
  );
}

// [Previous 3D components remain the same - DiverseGeometricBodies, ElegantGrid, etc.]
// Diverse Geometric Bodies with varied shapes and sizes
function DiverseGeometricBodies() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      groupRef.current.children.forEach((group, groupIndex) => {
        if (group.children) {
          group.children.forEach((child, childIndex) => {
            const uniqueId = groupIndex * 10 + childIndex;
            // Change all movement calculations to be slower and smoother
            switch (uniqueId % 8) {
              case 0: // Circular motion - slower
                child.position.x += Math.sin(time * 0.3 + uniqueId) * 0.001;
                child.position.y += Math.cos(time * 0.2 + uniqueId) * 0.0015;
                child.position.z += Math.sin(time * 0.15 + uniqueId) * 0.0008;
                break;
              case 1: // Figure-8 motion - slower
                child.position.x += Math.sin(time * 0.25 + uniqueId) * 0.0015;
                child.position.y += Math.sin(time * 0.4 + uniqueId) * 0.001;
                child.position.z += Math.cos(time * 0.2 + uniqueId) * 0.0008;
                break;
              case 2: // Diagonal drift - slower
                child.position.x += Math.sin(time * 0.2 + uniqueId) * 0.0008;
                child.position.y += Math.cos(time * 0.25 + uniqueId) * 0.002;
                child.position.z += Math.sin(time * 0.3 + uniqueId) * 0.001;
                break;
              case 3: // Spiral motion - slower
                const radius =
                  0.001 + Math.sin(time * 0.15 + uniqueId) * 0.0005;
                child.position.x += Math.cos(time * 0.3 + uniqueId) * radius;
                child.position.y += Math.sin(time * 0.35 + uniqueId) * radius;
                child.position.z += Math.cos(time * 0.2 + uniqueId) * 0.0008;
                break;
              case 4: // Wave motion - slower
                child.position.x += Math.sin(time * 0.35 + uniqueId) * 0.0015;
                child.position.y +=
                  Math.sin(time * 0.25 + uniqueId * 2) * 0.001;
                child.position.z += Math.cos(time * 0.3 + uniqueId) * 0.0008;
                break;
              case 5: // Random drift - slower
                child.position.x +=
                  Math.sin(time * 0.2 + uniqueId * 1.5) * 0.001;
                child.position.y +=
                  Math.cos(time * 0.3 + uniqueId * 0.7) * 0.0015;
                child.position.z +=
                  Math.sin(time * 0.25 + uniqueId * 1.2) * 0.001;
                break;
              case 6: // Cross pattern - slower
                child.position.x += Math.cos(time * 0.25 + uniqueId) * 0.001;
                child.position.y += Math.sin(time * 0.35 + uniqueId) * 0.0015;
                child.position.z += Math.cos(time * 0.2 + uniqueId) * 0.0008;
                break;
              case 7: // Pendulum motion - slower
                child.position.x += Math.sin(time * 0.3 + uniqueId) * 0.002;
                child.position.y += Math.cos(time * 0.2 + uniqueId) * 0.0008;
                child.position.z += Math.sin(time * 0.25 + uniqueId) * 0.001;
                break;
            }
            // Also reduce rotation speeds
            child.rotation.x += 0.001 + (uniqueId % 3) * 0.0005;
            child.rotation.y += 0.0008 + (uniqueId % 4) * 0.0003;
            child.rotation.z += 0.0005 + (uniqueId % 2) * 0.0008;
          });
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* TOP LEFT CORNER - diverse shapes */}
      <group position={[-8, 4, -2]}>
        <mesh position={[0.3, 0.2, 0.1]}>
          <sphereGeometry args={[0.12]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.8}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.8, -0.3, -0.2]}>
          <coneGeometry args={[0.08, 0.16]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.8}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.1, 0.5, 0.3]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.6, 0.1, -0.1]}>
          <torusGeometry args={[0.06, 0.03]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
            emissive="#0891b2"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.2, -0.4, 0.2]}>
          <boxGeometry args={[0.07, 0.07, 0.07]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.8}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* TOP RIGHT CORNER - mixed geometries */}
      <group position={[8, 4, -3]}>
        <mesh position={[-0.2, 0.1, 0.3]}>
          <icosahedronGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.85}
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[-0.6, -0.4, -0.1]}>
          <cylinderGeometry args={[0.06, 0.06, 0.15]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.8}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.4, 0.3, 0.2]}>
          <octahedronGeometry args={[0.11]} />
          <meshStandardMaterial
            color="#f472b6"
            transparent
            opacity={0.8}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.1, -0.2, 0.4]}>
          <tetrahedronGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#818cf8"
            transparent
            opacity={0.8}
            emissive="#6366f1"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.8, 0.2, -0.3]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#67e8f9"
            transparent
            opacity={0.8}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, 0.6, 0.1]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#fb7185"
            transparent
            opacity={0.8}
            emissive="#e11d48"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* BOTTOM LEFT CORNER - varied shapes */}
      <group position={[-8, -3, -4]}>
        <mesh position={[0.4, 0.2, 0.2]}>
          <coneGeometry args={[0.09, 0.18]} />
          <meshStandardMaterial
            color="#f472b6"
            transparent
            opacity={0.8}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.1, -0.5, -0.3]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.9}
            emissive="#0891b2"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0.7, 0.1, 0.1]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#4ade80"
            transparent
            opacity={0.8}
            emissive="#22c55e"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.2, 0.4, -0.2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.12]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.8}
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.5, -0.2, 0.4]}>
          <torusGeometry args={[0.07, 0.03]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.8}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* BOTTOM RIGHT CORNER - complex geometries */}
      <group position={[8, -3, -2]}>
        <mesh position={[-0.3, 0.3, 0.1]}>
          <icosahedronGeometry args={[0.12]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.85}
            emissive="#7c3aed"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[-0.7, -0.2, 0.4]}>
          <coneGeometry args={[0.07, 0.14]} />
          <meshStandardMaterial
            color="#fb7185"
            transparent
            opacity={0.8}
            emissive="#e11d48"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.1, 0.1, -0.2]}>
          <octahedronGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.8}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.5, 0.5, 0.3]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.8}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.2, -0.4, -0.1]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.8}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.6, 0.2, 0.2]}>
          <sphereGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* FAR LEFT SIDE - diverse collection */}
      <group position={[-10, 0, -5]}>
        <mesh position={[0.2, 1.5, 0.3]}>
          <tetrahedronGeometry args={[0.11]} />
          <meshStandardMaterial
            color="#67e8f9"
            transparent
            opacity={0.8}
            emissive="#06b6d4"
            emissiveIntensity={0.35}
          />
        </mesh>
        <mesh position={[0.5, -1.2, -0.2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.16]} />
          <meshStandardMaterial
            color="#818cf8"
            transparent
            opacity={0.8}
            emissive="#6366f1"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.1, 0.3, 0.5]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#4ade80"
            transparent
            opacity={0.8}
            emissive="#22c55e"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.3, -0.5, 0.1]}>
          <coneGeometry args={[0.06, 0.12]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.6, 0.8, -0.3]}>
          <torusGeometry args={[0.08, 0.04]} />
          <meshStandardMaterial
            color="#f472b6"
            transparent
            opacity={0.8}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.4, 0.1, 0.2]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
            emissive="#0891b2"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* FAR RIGHT SIDE - complex shapes */}
      <group position={[10, 0, -6]}>
        <mesh position={[-0.2, 1.8, 0.1]}>
          <icosahedronGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.8}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.4, -1.5, 0.4]}>
          <octahedronGeometry args={[0.12]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.85}
            emissive="#a855f7"
            emissiveIntensity={0.35}
          />
        </mesh>
        <mesh position={[-0.1, 0.5, -0.3]}>
          <coneGeometry args={[0.08, 0.16]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.85}
            emissive="#3b82f6"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[-0.6, 0.2, 0.2]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
            emissive="#0891b2"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, -0.8, -0.1]}>
          <sphereGeometry args={[0.11]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.8}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.5, 1.1, 0.3]}>
          <cylinderGeometry args={[0.06, 0.06, 0.14]} />
          <meshStandardMaterial
            color="#fb7185"
            transparent
            opacity={0.8}
            emissive="#e11d48"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* TOP CENTER - header area shapes */}
      <group position={[0, 5, -3]}>
        <mesh position={[-1.5, 0.3, 0.2]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.8}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[1.8, 0.2, -0.1]}>
          <icosahedronGeometry args={[0.11]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.85}
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0.2, -0.5, 0.3]}>
          <torusGeometry args={[0.08, 0.04]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.8}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.8, 0.1, -0.2]}>
          <coneGeometry args={[0.07, 0.14]} />
          <meshStandardMaterial
            color="#4ade80"
            transparent
            opacity={0.8}
            emissive="#22c55e"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.5, 0.6, 0.1]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#f472b6"
            transparent
            opacity={0.8}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, -0.2, 0.4]}>
          <tetrahedronGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#67e8f9"
            transparent
            opacity={0.8}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* HEADER AREA - around main heading */}
      <group position={[0, 2, -3]}>
        <mesh position={[-2.5, 0.5, 0.4]}>
          <octahedronGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#67e8f9"
            transparent
            opacity={0.8}
            emissive="#06b6d4"
            emissiveIntensity={0.35}
          />
        </mesh>
        <mesh position={[2.3, 0.8, -0.2]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.8}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.8, -0.3, 0.1]}>
          <sphereGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#f472b6"
            transparent
            opacity={0.8}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[1.2, -0.7, 0.5]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.85}
            emissive="#7c3aed"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[-1.8, 0.2, -0.3]}>
          <coneGeometry args={[0.07, 0.14]} />
          <meshStandardMaterial
            color="#818cf8"
            transparent
            opacity={0.8}
            emissive="#6366f1"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.3, 0.4, 0.2]}>
          <icosahedronGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.8}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.5, 0.9, -0.1]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
            emissive="#0891b2"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* MIDDLE LEFT - geometric variety */}
      <group position={[-6, 0, -4]}>
        <mesh position={[0.3, 0.8, 0.2]}>
          <torusGeometry args={[0.09, 0.04]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.9}
            emissive="#0891b2"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0.6, -0.5, -0.3]}>
          <tetrahedronGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#818cf8"
            transparent
            opacity={0.8}
            emissive="#6366f1"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.1, 0.2, 0.4]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.4, -0.1, -0.1]}>
          <coneGeometry args={[0.06, 0.12]} />
          <meshStandardMaterial
            color="#4ade80"
            transparent
            opacity={0.8}
            emissive="#22c55e"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* MIDDLE RIGHT - mixed shapes */}
      <group position={[6, 0, -4]}>
        <mesh position={[-0.4, 0.6, 0.1]}>
          <icosahedronGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#4ade80"
            transparent
            opacity={0.8}
            emissive="#22c55e"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.1, -0.8, 0.4]}>
          <cylinderGeometry args={[0.07, 0.07, 0.14]} />
          <meshStandardMaterial
            color="#fb7185"
            transparent
            opacity={0.8}
            emissive="#e11d48"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.6, 0.1, -0.2]}>
          <octahedronGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#67e8f9"
            transparent
            opacity={0.8}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.2, 0.4, 0.3]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.8}
            emissive="#7c3aed"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* BOTTOM CENTER - varied geometries */}
      <group position={[0, -4, -3]}>
        <mesh position={[-1.8, 0.2, 0.3]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.9}
            emissive="#0891b2"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[1.5, 0.4, -0.1]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.85}
            emissive="#3b82f6"
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[0.2, -0.3, 0.2]}>
          <coneGeometry args={[0.07, 0.14]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.8}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.5, 0.1, -0.3]}>
          <torusGeometry args={[0.08, 0.04]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.8}
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0.8, -0.2, 0.4]}>
          <icosahedronGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.8}
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* DEEP BACKGROUND - distant shapes */}
      <group position={[0, 0, -8]}>
        <mesh position={[-4, 3, 0.5]}>
          <tetrahedronGeometry args={[0.07]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.6}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[4.5, -2.5, -0.3]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.6}
            emissive="#10b981"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[-2, -3, 0.2]}>
          <octahedronGeometry args={[0.06]} />
          <meshStandardMaterial
            color="#f472b6"
            transparent
            opacity={0.6}
            emissive="#ec4899"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[3, 2.5, 0.4]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#67e8f9"
            transparent
            opacity={0.6}
            emissive="#06b6d4"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[0, 1, -0.5]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.6}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[-3.5, 0.5, 0.1]}>
          <coneGeometry args={[0.05, 0.1]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.6}
            emissive="#f59e0b"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[2.5, -1, -0.2]}>
          <torusGeometry args={[0.06, 0.03]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.6}
            emissive="#0891b2"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh position={[-1.5, 2, 0.3]}>
          <icosahedronGeometry args={[0.07]} />
          <meshStandardMaterial
            color="#818cf8"
            transparent
            opacity={0.6}
            emissive="#6366f1"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>

      {/* VERY FAR BACKGROUND - tiny diverse shapes */}
      <group position={[0, 0, -12]}>
        <mesh position={[-6, 2, 0]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.4}
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[6, -1.5, 0.2]}>
          <tetrahedronGeometry args={[0.04]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.4}
            emissive="#f59e0b"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, -2.5, -0.3]}>
          <octahedronGeometry args={[0.05]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.4}
            emissive="#0891b2"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[-4, -1, 0.1]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#c084fc"
            transparent
            opacity={0.4}
            emissive="#8b5cf6"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[4, 1.5, -0.2]}>
          <coneGeometry args={[0.04, 0.08]} />
          <meshStandardMaterial
            color="#34d399"
            transparent
            opacity={0.4}
            emissive="#10b981"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[2, 0.5, 0.3]}>
          <cylinderGeometry args={[0.03, 0.03, 0.06]} />
          <meshStandardMaterial
            color="#f472b6"
            transparent
            opacity={0.4}
            emissive="#ec4899"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[-2, 3, -0.1]}>
          <torusGeometry args={[0.04, 0.02]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.4}
            emissive="#7c3aed"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>

      {/* EXTRA SCATTERED DIVERSE SHAPES - filling gaps */}
      <group position={[0, 0, -5]}>
        <mesh position={[-7, 1.5, 0.2]}>
          <icosahedronGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#818cf8"
            transparent
            opacity={0.7}
            emissive="#6366f1"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[7, -0.8, -0.1]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#4ade80"
            transparent
            opacity={0.7}
            emissive="#22c55e"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[0, 3.5, 0.4]}>
          <coneGeometry args={[0.06, 0.12]} />
          <meshStandardMaterial
            color="#fb7185"
            transparent
            opacity={0.7}
            emissive="#e11d48"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[-3, -2.5, -0.3]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#a78bfa"
            transparent
            opacity={0.7}
            emissive="#7c3aed"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[3.5, 2, 0.1]}>
          <cylinderGeometry args={[0.06, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#67e8f9"
            transparent
            opacity={0.7}
            emissive="#06b6d4"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[-5, 0.3, 0.3]}>
          <octahedronGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#fbbf24"
            transparent
            opacity={0.7}
            emissive="#f59e0b"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[5, -1.2, -0.2]}>
          <sphereGeometry args={[0.09]} />
          <meshStandardMaterial
            color="#22d3ee"
            transparent
            opacity={0.7}
            emissive="#0891b2"
            emissiveIntensity={0.25}
          />
        </mesh>
      </group>
    </group>
  );
}

// Elegant 3D Grid System
function ElegantGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      gridRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.08) * 0.03;
    }
  });

  return (
    <group ref={gridRef} position={[0, 0, -8]}>
      {/* Horizontal lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={`h-${i}`} position={[0, (i - 10) * 0.5, 0]}>
          <boxGeometry args={[12, 0.01, 0.01]} />
          <meshStandardMaterial
            color="#1e40af"
            transparent
            opacity={0.15}
            emissive="#1e40af"
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
      {/* Vertical lines */}
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh key={`v-${i}`} position={[(i - 12) * 0.5, 0, 0]}>
          <boxGeometry args={[0.01, 10, 0.01]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.05}
          />
        </mesh>
      ))}
    </group>
  );
}

// Diverse Floating Particles
function DiverseFloatingParticles() {
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.001;
        child.rotation.z += 0.002;
      });
    }
  });

  const shapes = ["box", "sphere", "tetrahedron", "octahedron", "cone"];

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 30 }).map((_, i) => {
        const shapeType = shapes[i % shapes.length];
        const position: [number, number, number] = [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 20,
        ];

        return (
          <mesh key={i} position={position}>
            {shapeType === "box" && <boxGeometry args={[0.02, 0.02, 0.02]} />}
            {shapeType === "sphere" && <sphereGeometry args={[0.015]} />}
            {shapeType === "tetrahedron" && (
              <tetrahedronGeometry args={[0.02]} />
            )}
            {shapeType === "octahedron" && (
              <octahedronGeometry args={[0.018]} />
            )}
            {shapeType === "cone" && <coneGeometry args={[0.015, 0.03]} />}
            <meshStandardMaterial
              color="#06b6d4"
              transparent
              opacity={0.6}
              emissive="#06b6d4"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Professional Depth Layers
function DepthLayers() {
  const layersRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (layersRef.current) {
      layersRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={layersRef}>
      {/* Background layers with different depths */}
      <mesh position={[0, 0, -15]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial
          color="#0f172a"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, -12]}>
        <planeGeometry args={[25, 15]} />
        <meshStandardMaterial
          color="#1e293b"
          transparent
          opacity={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, -9]}>
        <planeGeometry args={[20, 12]} />
        <meshStandardMaterial
          color="#334155"
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Professional 3D Scene
function ProfessionalScene() {
  return (
    <group>
      <DepthLayers />
      <ElegantGrid />
      <DiverseFloatingParticles />
      <DiverseGeometricBodies />
    </group>
  );
}

// 3D Background
function ProfessionalBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Enhanced lighting for better visibility */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.4}
        color="#ffffff"
      />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[10, -5, -3]} intensity={0.25} color="#8b5cf6" />
      <spotLight
        position={[0, 15, 0]}
        intensity={0.2}
        angle={Math.PI / 6}
        penumbra={1}
        color="#06b6d4"
      />
      <ProfessionalScene />
    </Canvas>
  );
}

export function EnhancedHeroSection() {
  const features = [
    {
      icon: Building2, // Better for institutional trading
      customIcon: InstitutionalTradingIcon,
      title: "Institutional Trading",
      description:
        "Advanced order types, deep liquidity pools, and sub-millisecond execution across 200+ trading pairs.",
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Brain, // Better for AI analytics
      customIcon: AIAnalyticsIcon,
      title: "AI-Powered Analytics",
      description:
        "Real-time market intelligence with predictive models trained on $50B+ in historical trading data.",
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Percent, // Better for yield optimization
      customIcon: YieldOptimizationIcon,
      title: "Yield Optimization",
      description:
        "Automated strategies delivering 12-45% APY through smart staking, farming, and arbitrage opportunities.",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Eye, // Better for prediction markets
      customIcon: PredictionMarketsIcon,
      title: "Prediction Markets",
      description:
        "Trade outcomes across crypto, politics, sports, and economics with transparent, on-chain settlement.",
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-500/10",
    },
  ];

  const stats = [
    { label: "Total Volume", value: "$2.4B+", icon: BarChart3 },
    { label: "Active Traders", value: "150K+", icon: Users },
    { label: "Markets", value: "200+", icon: Globe },
    { label: "Uptime", value: "99.9%", icon: Shield },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Professional 3D Background */}
      <div className="absolute inset-0 bg-black">
        <ProfessionalBackground />
        {/* Reduced overlay for better 3D visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm text-white px-6 py-2 text-sm rounded-full mb-6 shadow-lg border border-blue-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            NEXT-GENERATION DEFI INFRASTRUCTURE
          </Badge>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-8 relative">
            Trade Smarter.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Earn More.
            </span>
            <br />
            Predict Better.
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            The world's most advanced DeFi platform combining
            institutional-grade trading, AI-powered analytics, and decentralized
            prediction markets. Built for professionals, accessible to everyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-6 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center">
                Launch Platform
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 backdrop-blur-sm border border-blue-500/10">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-black text-white mb-1">
                  {value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(
            ({
              icon: Icon,
              customIcon: CustomIcon,
              title,
              description,
              color,
              bgColor,
            }) => (
              <Card
                key={title}
                className="group relative overflow-hidden bg-black backdrop-blur-sm border border-gray-700/30 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-8 space-y-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${bgColor} group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}
                  >
                    {/* Use custom icon if available, otherwise use Lucide icon */}
                    {CustomIcon ? (
                      <CustomIcon className="h-8 w-8 text-white" />
                    ) : (
                      <Icon className="h-8 w-8 text-white" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                  </p>

                  <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-500 text-sm mb-4">
            Trusted by 150,000+ traders • $2.4B+ in volume • SOC2 Type II
            certified
          </p>
          <div className="flex justify-center space-x-8 text-gray-600">
            <span>🔒 Bank-grade security</span>
            <span>⚡ Sub-second execution</span>
            <span>🌍 Global liquidity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
