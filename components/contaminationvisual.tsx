"use client";

import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface Point {
  x: number;
  y: number;
  color: string;
}

export default function AnimatedVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coloredPercentage, setColoredPercentage] = useState(0);
  const { percentage } = useSpring({ 
    from: { percentage: 0 },
    to: { percentage: coloredPercentage },
    config: { duration: 250 }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const totalPoints = 1000;
    const newPoints: Point[] = [];

    for (let i = 0; i < totalPoints; i++) {
      const x = Math.random() * canvas!.width;
      const y = Math.random() * canvas!.height;
      newPoints.push({ x, y, color: 'black' });
    }

    const targetPercentage = 57;
    const pointsToColor = Math.floor((targetPercentage / 100) * totalPoints);

    let coloredPoints = 0;
    const intervalId = setInterval(() => {
      if (coloredPoints >= pointsToColor) {
        clearInterval(intervalId);
        return;
      }

      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * newPoints.length);
        if (newPoints[randomIndex].color === 'black') {
          newPoints[randomIndex].color = '#ab77ff';
          coloredPoints++;
          setColoredPercentage(Math.round((coloredPoints / totalPoints) * 100));
          if (coloredPoints >= pointsToColor) break;
        }
      }

      ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
      newPoints.forEach(point => {
        ctx!.fillStyle = point.color;
        ctx?.beginPath();
        ctx?.arc(point.x, point.y, 4, 0, 2 * Math.PI);
        ctx?.fill();
      });
    }, 1);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex relative w-full items-center justify-end">
      <div className="flex relative items-center w-full overflow-hidden">
        <canvas ref={canvasRef} width={800} height={500} />
      </div>
      <div className="ml-[20px] w-[50px] h-[500px] relative bg-slate-400">
        <animated.div style={{ 
          position: 'absolute', 
          bottom: 0, 
          width: '100%', 
          height: percentage.to(p => `${p}%`), 
          backgroundColor: '#ab77ff' 
        }} />
        <div className="absolute bottom-[-40px] w-[50px] flex justify-center items-center text-[var(--solid-colors--black)]">
          {coloredPercentage}%
        </div>
      </div>
    </div>
  );
};