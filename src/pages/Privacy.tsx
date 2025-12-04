import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-text p-8 md:p-20">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-block text-primary hover:text-primary/80 mb-8 transition-colors no-underline cursor-pointer"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">
          PRIVACY POLICY
        </h1>

        <p className="text-textSecondary leading-relaxed mb-4">
          <strong>Last Updated:</strong> December 1, 2025
        </p>

        <p className="text-textSecondary leading-relaxed mb-8">
          This privacy policy applies to the <strong>StreetHeat</strong> app created by <strong>BaronXDev</strong>.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          1. INFORMATION WE COLLECT
        </h2>
        <p className="text-textSecondary leading-relaxed mb-4">
          The Application collects information to provide location-based services and community features.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">
          A. Information You Provide
        </h3>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Account Data:</strong> When you register, we collect your <strong>Email Address</strong> and <strong>Display Name</strong>.</li>
          <li><strong>User Content:</strong> Photos, comments, and ratings you post are stored on our servers and displayed publicly.</li>
          <li><strong>Verification Data:</strong> If you claim a business, we collect the image of your <strong>Business License</strong> or photo ID for verification purposes only.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">
          B. Information Collected Automatically
        </h3>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Location Data:</strong> We collect your precise location (GPS) <strong>only while the app is in use</strong> to show nearby food spots and verify your physical presence for "Live Updates."</li>
          <li><strong>Device Data:</strong> We may collect your device model, OS version, and IP address for analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          2. HOW WE USE YOUR DATA
        </h2>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>To Provide the Service:</strong> Displaying map pins, connecting you with vendors, and processing subscriptions.</li>
          <li><strong>To Maintain Integrity:</strong> Using location data to prevent spam reviews (Geo-Fencing).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          3. DATA RETENTION & DELETION
        </h2>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Retention:</strong> We retain User Content and Account Data as long as your account is active.</li>
          <li><strong>Deletion:</strong> You can delete your account and data at any time via <strong>Settings &gt; Delete Account</strong> in the app, or by emailing <strong>contact@baronxdev.com</strong>.</li>
          <li><strong>Live Updates:</strong> "Live" comments are automatically deleted from our database after 24 hours.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          4. CONTACT US
        </h2>
        <p className="text-textSecondary leading-relaxed mb-4">
          If you have any questions regarding privacy, please contact us at: <strong>support@baronxdev.com</strong>
        </p>
      </div>
    </div>
  )
}

export default Privacy
