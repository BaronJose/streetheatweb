import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  delay?: number
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-textSecondary leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default FeatureCard

