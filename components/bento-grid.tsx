import React from 'react'
import { motion } from 'framer-motion'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '' }) => (
  <motion.div
    className={`bg-gray-800 rounded-xl p-4 ${className}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
)

export default function BentoGrid() {
  return (
    <section className="py-12">
      <h2 className="text-lg text-muted-foreground mb-8">Gallery</h2>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        <BentoCard className="col-span-2 row-span-2">
          <h3 className="text-xl mb-2">Featured Project</h3>
          <p>A showcase of my best work in web development.</p>
        </BentoCard>
        <BentoCard>
          <h3 className="text-lg mb-2">Skills</h3>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </BentoCard>
        <BentoCard>
          <h3 className="text-lg mb-2">Blog</h3>
          <p>Latest post: "The Future of Web Development"</p>
        </BentoCard>
        <BentoCard className="col-span-2">
          <h3 className="text-lg mb-2">Current Project</h3>
          <p>Working on a revolutionary AI-powered code assistant.</p>
        </BentoCard>
        <BentoCard>
          <h3 className="text-lg mb-2">GitHub</h3>
          <p>500+ contributions in the last year</p>
        </BentoCard>
      </div>
    </section>
  )
}

