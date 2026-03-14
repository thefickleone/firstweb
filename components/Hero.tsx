"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 1, 1]} />
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Float>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
          <span className="block">Elevate Your</span>
          <span className="text-blue-500">Digital Vision</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Experience the future of web design with seamless 3D interactions and 
          buttery smooth performance.
        </p>
        <button className="mt-10 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
          Explore Projects
        </button>
      </div>
    </section>
  );
}
