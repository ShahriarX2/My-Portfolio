'use client';

import { motion } from 'framer-motion';

const Blob = ({ top, left, size, color, animation }) => {
  return (
    <motion.div
      className="absolute rounded-full mix-blend-multiply filter blur-2xl opacity-40"
      style={{
        top,
        left,
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={animation}
    />
  );
};

export const Blobs = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <Blob
        top="-20%"
        left="-10%"
        size="400px"
        color="#3b82f6"
        animation={{
          x: [0, 100, 0],
          y: [0, -150, 0],
          scale: [1, 1.2, 1],
          transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <Blob
        top="-10%"
        left="80%"
        size="350px"
        color="#8b5cf6"
        animation={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1, 1.15, 1],
          transition: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <Blob
        top="20%"
        left="50%"
        size="500px"
        color="#3b82f6"
        animation={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
          transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <Blob
        top="60%"
        left="10%"
        size="300px"
        color="#8b5cf6"
        animation={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
          transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <Blob
        top="80%"
        left="60%"
        size="450px"
        color="#3b82f6"
        animation={{
          x: [0, 120, 0],
          y: [0, -100, 0],
          scale: [1, 1.25, 1],
          transition: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </div>
  );
};
