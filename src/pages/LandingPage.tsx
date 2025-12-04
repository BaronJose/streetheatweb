import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, MessageSquare, CreditCard, ChevronDown, ChevronUp, Smartphone, ShieldCheck, Zap } from 'lucide-react'
import StoreButton from '../components/StoreButtons'
import PhoneMockup from '../components/PhoneMockup'
// Logo - using public path since it's in public folder
const logoImg = '/logo.png'

// FAQ Data
const FAQS = [
  {
    question: "Is StreetHeat free to use?",
    answer: "Yes! StreetHeat is 100% free for foodies. You can find trucks, verify open status, and view live updates without paying a dime."
  },
  {
    question: "How do 'Live Updates' work?",
    answer: "It's like Waze for food. Users at the location can post real-time status updates—like 'Line is short' or 'Ran out of Asada'—to help others know what to expect. These updates expire after 24 hours to ensure info is always fresh."
  },
  {
    question: "I own a food truck. How do I claim my spot?",
    answer: "Find your truck on the map, scroll to the bottom of the details card, and tap 'Own this business? Claim it.' You'll need to upload a photo of your business license or a selfie inside the truck to verify ownership."
  },
  {
    question: "What do I get with StreetHeat Pro?",
    answer: "Pro owners unlock premium marketing tools: A professional Photo Carousel header, the ability to display accepted Payment Methods (Zelle, CashApp, Card, etc.), and direct Social Media links (Instagram, TikTok) on their profile."
  }
]

// Testimonials Data
const TESTIMONIALS = [
  {
    quote: "Finally, an app that actually knows where the taco trucks are. Game changer for finding my favorite spots!",
    author: "Maria Rodriguez",
    role: "Local Foodie"
  },
  {
    quote: "As a street food scout, this app saves me hours of driving around. The real-time updates are spot-on and the community verification is brilliant.",
    author: "James Chen",
    role: "Street Scout"
  },
  {
    quote: "Claiming our spot was so easy. We've seen a 40% increase in customers since joining StreetHeat. The live verification feature builds trust.",
    author: "Carlos & Rosa Martinez",
    role: "Vendor Owner"
  }
]

function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background text-text overflow-x-hidden">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center no-underline cursor-pointer">
              <img src={logoImg} alt="StreetHeat Logo" className="h-32 object-contain" />
            </Link>
            <Link
              to="/business-guide"
              className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors cursor-pointer no-underline"
            >
              Partner Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Glow Effect Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 text-primary text-sm font-medium mb-6 bg-primary/10"
              >
                🚀 Now Live in Beta
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{
                  background: 'linear-gradient(to right, #FF4500, #FF6B35, #FF8C42)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                The Waze for Street Food.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-textSecondary mb-8 leading-relaxed"
              >
                Find taco trucks & pop-ups verified in real-time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </motion.div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="flex justify-center md:justify-end"
            >
              <PhoneMockup imageSrc="/mockup-map.png" alt="StreetHeat Map View" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Zig-Zag Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">
          {/* Row 1: Live Verification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
                <Zap size={20} />
                <span className="text-sm font-medium">Live Verification</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Green Dot = Open
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed">
                See at a glance which trucks are open right now. Green means serving, red means closed. Our "I'm Here" button lets customers verify locations in real-time, so you never waste a trip.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <PhoneMockup imageSrc="/detail.png" alt="Live Verification Map" />
            </div>
          </motion.div>

          {/* Row 2: Know Before You Go */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse gap-12 items-center"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 mb-4">
                <CreditCard size={20} />
                <span className="text-sm font-medium">Payment Info</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Know Before You Go
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed">
                See accepted payment methods (Cash, Card, Venmo, Zelle) before you arrive. Our Premium Chip feature shows exactly what each vendor accepts, so you're never caught without the right payment.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <PhoneMockup imageSrc="/detail.png" alt="Payment Methods" />
            </div>
          </motion.div>

          {/* Row 3: Real-Time Intel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                <MessageSquare size={20} />
                <span className="text-sm font-medium">Community Chat</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Real-Time Intel
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed">
                See real-time status reports from people at the truck. Know if the line is long or if they are sold out before you drive.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <PhoneMockup imageSrc="/intel.png" alt="Real-Time Updates" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          >
            Loved by Foodies & Vendors
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="text-primary" size={20} />
                  </div>
                </div>
                <p className="text-textSecondary text-lg mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-textSecondary text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA Banner */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-r from-orange-900/80 to-background border-2 border-primary/50 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Own a Food Truck?
              </h2>
              <p className="text-xl text-textSecondary mb-8 leading-relaxed">
                Claim your spot and turn your pin into a destination. Manage your profile, menu, and hours in real-time.
              </p>
              <Link
                to="/business-guide"
                className="inline-block bg-white text-black font-semibold py-4 px-8 rounded-full hover:scale-105 hover:bg-gray-100 transition-all duration-200 cursor-pointer no-underline"
              >
                View Partner Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="text-xl font-semibold text-white pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFaqIndex === index ? (
                      <ChevronUp className="text-primary flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-textSecondary flex-shrink-0" size={24} />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-textSecondary leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="StreetHeat Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold text-white">
                Street<span className="text-primary">Heat</span>
              </span>
            </div>
            <div className="flex gap-6">
              <Link
                to="/terms"
                className="text-textSecondary hover:text-primary transition-colors text-sm no-underline cursor-pointer"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="text-textSecondary hover:text-primary transition-colors text-sm no-underline cursor-pointer"
              >
                Privacy
              </Link>
              <a
                href="mailto:support@streetheat.com"
                className="text-textSecondary hover:text-primary transition-colors text-sm no-underline cursor-pointer"
              >
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-textSecondary text-sm">
              © 2025 BaronXDev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
