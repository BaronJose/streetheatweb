import { motion } from 'framer-motion'

// Apple Logo SVG Path
const AppleLogo = () => (
  <svg
    className="w-8 h-8 fill-current"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.49-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
      fill="currentColor"
    />
  </svg>
)

// Google Play Triangle SVG
const GooglePlayLogo = () => (
  <svg
    className="w-8 h-8 fill-current"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
      fill="currentColor"
    />
    <path
      d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"
      fill="currentColor"
    />
    <path
      d="M14.54 11.15L6.05 2.66L16.81 8.88L14.54 11.15Z"
      fill="currentColor"
    />
    <path
      d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z"
      fill="currentColor"
    />
  </svg>
)

interface StoreButtonProps {
  store: 'apple' | 'google'
  url?: string
}

function StoreButton({ store, url }: StoreButtonProps) {
  const isApple = store === 'apple'
  const defaultUrl = isApple
    ? 'https://apps.apple.com/app/streetheat'
    : 'https://play.google.com/store/apps/details?id=com.streetheat'

  return (
    <motion.a
      href={url || defaultUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-200 no-underline cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        {isApple ? <AppleLogo /> : <GooglePlayLogo />}
      </div>

      {/* Text Stack */}
      <div className="flex flex-col items-start leading-none">
        <span className="text-xs uppercase tracking-wide text-white/70 leading-tight">
          {isApple ? 'Download on the' : 'GET IT ON'}
        </span>
        <span className="text-lg font-bold leading-none text-white">
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </motion.a>
  )
}

export default StoreButton
