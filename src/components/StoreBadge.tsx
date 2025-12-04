import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'

interface StoreBadgeProps {
  store: 'appstore' | 'googleplay'
  href?: string
}

function StoreBadge({ store, href = '#' }: StoreBadgeProps) {
  const isAppStore = store === 'appstore'
  
  return (
    <motion.a
      href={href}
      className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isAppStore ? (
        <>
          <Apple size={24} />
          <div className="flex flex-col items-start">
            <span className="text-xs leading-tight">Download on the</span>
            <span className="text-lg leading-tight">App Store</span>
          </div>
        </>
      ) : (
        <>
          <Play size={24} className="fill-white" />
          <div className="flex flex-col items-start">
            <span className="text-xs leading-tight">Get it on</span>
            <span className="text-lg leading-tight">Google Play</span>
          </div>
        </>
      )}
    </motion.a>
  )
}

export default StoreBadge

