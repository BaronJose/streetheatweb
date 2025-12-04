import { Link } from 'react-router-dom'

function Terms() {
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
          TERMS OF SERVICE
        </h1>

        <p className="text-textSecondary leading-relaxed mb-4">
          <strong>Last Updated:</strong> December 1, 2025
        </p>

        <p className="text-textSecondary leading-relaxed mb-8">
          These terms and conditions apply to the <strong>StreetHeat</strong> app (hereby referred to as "Application") for mobile devices that was created by <strong>BaronXDev</strong> (hereby referred to as "Service Provider"). By downloading or using the Application, you agree to these terms.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          1. USER GENERATED CONTENT (UGC)
        </h2>
        <p className="text-textSecondary leading-relaxed mb-4">
          StreetHeat is a community-driven platform. Users may post photos, comments, ratings, and location updates ("Content").
        </p>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Ownership:</strong> You retain ownership of any Content you post.</li>
          <li><strong>License:</strong> By posting, you grant the Service Provider a non-exclusive, worldwide, royalty-free license to use, display, and reproduce your Content within the App and for marketing purposes.</li>
          <li><strong>Prohibited Content:</strong> You agree NOT to post content that is illegal, offensive, defamatory, pornographic, or promotional spam.</li>
          <li><strong>Moderation:</strong> The Service Provider reserves the right to remove any Content without notice. Repeated violations will result in immediate account termination.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          2. BUSINESS VERIFICATION & CLAIMS
        </h2>
        <p className="text-textSecondary leading-relaxed mb-4">
          Business owners may "Claim" a listing by providing proof of ownership.
        </p>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Accuracy:</strong> You agree that all information provided during verification is accurate.</li>
          <li><strong>Fraud:</strong> Falsely claiming a business you do not own is a violation of these Terms and will result in a permanent ban.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          3. PREMIUM SUBSCRIPTIONS ("StreetHeat Pro")
        </h2>
        <p className="text-textSecondary leading-relaxed mb-4">
          StreetHeat offers optional paid features for verified business owners.
        </p>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Billing:</strong> Subscriptions are billed monthly (30 days).</li>
          <li><strong>Cancellation:</strong> You may cancel at any time by contacting support. Service continues until the end of the billing period.</li>
          <li><strong>Refunds:</strong> All payments are final. No partial refunds will be issued for unused time.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          4. FOUNDER'S RATE GUARANTEE
        </h2>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Price Lock:</strong> Users who subscribe under the "Founder's Rate" ($9.99/month) are guaranteed this price for the lifetime of their <strong>continuous</strong> subscription.</li>
          <li><strong>Lapse Policy:</strong> If your subscription is cancelled or lapses due to non-payment (failure to renew within 5 days of the due date), you <strong>forfeit</strong> the Founder's Rate. Any future re-subscription will be at the standard market rate.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          5. LIABILITY & ACCURACY
        </h2>
        <ul className="list-disc pl-5 text-textSecondary space-y-2 mb-4">
          <li><strong>Location Data:</strong> StreetHeat uses your location to identify nearby businesses. You acknowledge that GPS data is not perfectly accurate. The Service Provider is not liable for any travel costs, fuel, or inconvenience caused by incorrect data or closed businesses.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
          6. CONTACT US
        </h2>
        <p className="text-textSecondary leading-relaxed mb-4">
          If you have any questions about these Terms, please contact us at: <strong>support@baronxdev.com</strong>
        </p>

        <hr className="border-white/10 my-8" />
      </div>
    </div>
  )
}

export default Terms
