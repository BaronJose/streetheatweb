import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          to="/"
          className="inline-block text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="bg-card rounded-xl p-8">
          <p className="text-textSecondary">
            [Legal text will be pasted here]
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy

