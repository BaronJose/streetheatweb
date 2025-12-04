import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, MessageSquare, CreditCard, ChevronDown, ChevronUp, Smartphone, ShieldCheck, Zap } from 'lucide-react'
import StoreButton from '../components/StoreButtons'

// FAQ Data
const FAQS = [
  {
    question: "Is it free to use?",
    answer: "Yes, StreetHeat is 100% free for foodies. Find food trucks, see what's open, and get directions—all at no cost."
  },
  {
    question: "I own a food truck. How do I claim my spot?",
    answer: "Download the app and tap 'Claim Your Spot' in the menu. Verify your business, add your menu and hours, and start connecting with customers instantly."
  },
  {
    question: "Are there pro features for vendors?",
    answer: "Yes! Vendors can upgrade to Pro for advanced analytics, priority placement, menu management, and customer messaging tools."
  },
  {
    question: "Which cities are you in?",
    answer: "We're currently launching in Madera, CA, with plans to expand to Fresno, Bakersfield, and the Central Valley. Check the app for the latest locations."
  }
]

// Testimonials Data
const TESTIMONIALS = [
  {
    quote: "Finally, an app that actually knows where the taco trucks are. Game changer!",
    author: "Maria Rodriguez",
    role: "Local Foodie"
  },
  {
    quote: "As a street food scout, this app saves me hours of driving around. The real-time updates are spot-on.",
    author: "James Chen",
    role: "Street Scout"
  },
  {
    quote: "Claiming our spot was so easy. We've seen a 40% increase in customers since joining StreetHeat.",
    author: "Carlos & Rosa Martinez",
    role: "Vendor Owner"
  }
]

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-text overflow-x-hidden">
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
                className="text-xl text-textSecondary mb-8 leading-relaxed max-w-lg"
              >
                Find the best taco trucks, stands, and pop-ups in real-time. Verified by the community, powered by locals.
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
              {/* iPhone Frame */}
              <div className="relative">
                <div className="relative rounded-[3rem] bg-black p-2 shadow-2xl border-4 border-black">
                  {/* Screen Bezel */}
                  <div className="rounded-[2.5rem] overflow-hidden bg-black">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    {/* Screen Content */}
                    <div className="relative w-full max-w-[300px]">
                      <img
                        src="/mockup-map.png"
                        alt="StreetHeat Map View"
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Zig-Zag Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-24">
          {/* Feature 1: Live Verification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 mb-4">
                <ShieldCheck size={20} />
                <span className="text-sm font-medium">Live Verification</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Green Dot = Open
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed">
                See at a glance which trucks are open right now. Green means serving, red means closed. No more wasted trips.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md h-96 bg-card rounded-2xl flex items-center justify-center border border-white/10">
                <p className="text-textSecondary">Live Map Screenshot</p>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse gap-12 items-center"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
                <CreditCard size={20} />
                <span className="text-sm font-medium">Payment Info</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Know Before You Go
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed">
                See accepted payment methods (Cash, Card, Venmo) before you arrive. Never be caught without the right payment.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md h-96 bg-card rounded-2xl flex items-center justify-center border border-white/10">
                <p className="text-textSecondary">Payment Methods Screenshot</p>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Real-Time Intel */}
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
                Chat with people in line. Ask about wait times, what's good today, or if they're running low on your favorite item.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md h-96 bg-card rounded-2xl flex items-center justify-center border border-white/10">
                <p className="text-textSecondary">Chat Screenshot</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card/50">
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
                className="bg-background rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Smartphone className="text-primary" size={20} />
                  </div>
                </div>
                <p className="text-text text-lg mb-4 leading-relaxed">
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

      {/* Business CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/50 overflow-hidden"
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
                Claim your spot today and connect with thousands of hungry customers. Manage your menu, hours, and location in real-time.
              </p>
              <Link
                to="/business-guide"
                className="inline-block bg-white text-black font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors no-underline"
              >
                View Partner Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
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
                className="bg-card rounded-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-semibold text-white pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-primary flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-textSecondary flex-shrink-0" size={24} />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
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
      <footer className="border-t border-white/10 bg-background py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-textSecondary text-sm">
              © 2025 StreetHeat. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/terms"
                className="text-textSecondary hover:text-primary transition-colors text-sm no-underline"
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                className="text-textSecondary hover:text-primary transition-colors text-sm no-underline"
              >
                Privacy
              </Link>
              <a
                href="mailto:support@streetheat.com"
                className="text-textSecondary hover:text-primary transition-colors text-sm no-underline"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
