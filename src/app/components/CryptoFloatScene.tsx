"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const coins = [
  { img: "/btc.png" },
  { img: "/eth.png" },
  { img: "/bnb.png" },
  { img: "/matic.png" },
  { img: "/sol.png" },
  { img: "/usdt.png" },
];

function FloatingCoin({ img, index }: { img: string; index: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + index;
    if (ref.current) {
      ref.current.rotation.y = t;
      ref.current.position.y = Math.sin(t) * 0.5;
    }
  });

  return (
    <Float speed={1} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={ref} position={[Math.random() * 4 - 2, Math.random() * 2 - 1, Math.random() * 3 - 2]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial transparent>
          <Html>
            <img src={img} alt="coin" className="w-10 h-10" />
          </Html>
        </meshBasicMaterial>
      </mesh>
    </Float>
  );
}

export default function CryptoFloatScene() {
  return (
    <div className="w-full h-screen bg-black flex">
      {/* Left - Animated Coins */}
      <div className="w-2/3 h-full">
        <Canvas camera={{ position: [0, 0, 5] }}>
          {coins.map((coin, i) => (
            <FloatingCoin key={i} img={coin.img} index={i} />
          ))}
        </Canvas>
      </div>

      {/* Right - Black Empty Side */}
      <div className="w-1/3 h-full bg-black" />
    </div>
  );
}
