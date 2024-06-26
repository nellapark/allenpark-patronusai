"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SEPARATION = 50, AMOUNTX = 200, AMOUNTY = 35, MIN_PARTICLE_SIZE = 6.0;

function Particles() {
  const count = useRef(0);
  const particles = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);

  const { positions, scales, linePositions } = useMemo(() => {
    const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
    const scales = new Float32Array(AMOUNTX * AMOUNTY);
    const linePositions = new Float32Array((AMOUNTX * (AMOUNTY - 1) + (AMOUNTX - 1) * AMOUNTY) * 6);

    let i = 0, j = 0, k = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);

        scales[j] = 1;

        if (iy < AMOUNTY - 1) {
          linePositions[k] = positions[i];
          linePositions[k + 1] = positions[i + 1];
          linePositions[k + 2] = positions[i + 2];
          linePositions[k + 3] = positions[i];
          linePositions[k + 4] = positions[i + 1];
          linePositions[k + 5] = positions[i + 2] + SEPARATION;
          k += 6;
        }

        if (ix < AMOUNTX - 1) {
          linePositions[k] = positions[i];
          linePositions[k + 1] = positions[i + 1];
          linePositions[k + 2] = positions[i + 2];
          linePositions[k + 3] = positions[i] + SEPARATION;
          linePositions[k + 4] = positions[i + 1];
          linePositions[k + 5] = positions[i + 2];
          k += 6;
        }

        i += 3;
        j++;
      }
    }

    return { positions, scales, linePositions };
  }, []);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    return geometry;
  }, [positions, scales]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    return geometry;
  }, [linePositions]);

  const particleMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0x2d40ea) },
      color2: { value: new THREE.Color(0xab77ff) },
      minSize: { value: MIN_PARTICLE_SIZE }
    },
    vertexShader: `
      attribute float scale;
      varying vec3 vPos;
      uniform float minSize;
      
      void main() {
        vPos = position;
        vec4 mvPosition = modelViewMatrix * vec4(vPos, 1.0);
        gl_PointSize = max(scale * (200.0 / -mvPosition.z), minSize);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vPos;
      
      void main() {
        if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
        
        float colorMix = smoothstep(-20.0, 20.0, vPos.y);
        vec3 color = mix(color1, color2, colorMix);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    depthTest: false
  }), []);

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({
    color: 0xffd0c7,
    linewidth: 1,
    depthTest: false
  }), []);

  useFrame(() => {
    const positions = particles.current!.geometry.attributes.position.array as unknown as number[];
    const scales = particles.current!.geometry.attributes.scale.array as unknown as number[];
    const linePositions = lines.current!.geometry.attributes.position.array as unknown as number[];

    let i = 0, j = 0, k = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i + 1] = (Math.sin((ix + count.current) * 0.3) * 50) +
                      (Math.sin((iy + count.current) * 0.5) * 50);
        
        scales[j] = Math.max((Math.sin((ix + count.current) * 0.3) + 1) * 10 +
        (Math.sin((iy + count.current) * 0.5) + 1) * 10, 1);
      

        if (iy < AMOUNTY - 1) {
          linePositions[k + 1] = positions[i + 1];
          linePositions[k + 4] = (Math.sin((ix + count.current) * 0.3) * 50) +
                                 (Math.sin((iy + 1 + count.current) * 0.5) * 50);
          k += 6;
        }

        if (ix < AMOUNTX - 1) {
          linePositions[k + 1] = positions[i + 1];
          linePositions[k + 4] = (Math.sin((ix + 1 + count.current) * 0.3) * 50) +
                                 (Math.sin((iy + count.current) * 0.5) * 50);
          k += 6;
        }

        i += 3;
        j++;
      }
    }

    particles.current!.geometry.attributes.position.needsUpdate = true;
    particles.current!.geometry.attributes.scale.needsUpdate = true;
    lines.current!.geometry.attributes.position.needsUpdate = true;

    count.current += 0.05;
  });

  return (
    <>
      <points ref={particles} renderOrder={1}>
        <bufferGeometry attach="geometry" {...particleGeometry} />
        <shaderMaterial attach="material" {...particleMaterial} />
      </points>
      <lineSegments ref={lines} renderOrder={0}>
        <bufferGeometry attach="geometry" {...lineGeometry} />
        <lineBasicMaterial attach="material" {...lineMaterial} />
      </lineSegments>
    </>
  );
};

export default function WaveAnimation () {
  return(
    <div className="h-[70vh] mt-[10vh] z-[-1]">
      <Canvas camera={{ position: [0, 450, 900], fov: 80, far: 5000 }}>
        <Particles />
      </Canvas>
    </div>
  )
}
