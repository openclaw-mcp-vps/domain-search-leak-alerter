export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Losing Domains<br />
          <span className="text-[#58a6ff]">You Already Searched</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Every domain you search leaks intent. We watch those domains 24/7 and alert you the moment someone registers one — before you miss your chance.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="text-white font-semibold mb-1">Track Any Domain</h3>
            <p className="text-sm text-[#8b949e]">Paste domains you've searched. We monitor them via WHOIS around the clock.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get email or webhook notifications the moment a tracked domain changes status.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="text-white font-semibold mb-1">Stay Ahead</h3>
            <p className="text-sm text-[#8b949e]">Act fast before squatters lock up the domain you need for your next venture.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Monitor up to 100 domains",
              "WHOIS checks every 30 minutes",
              "Email + webhook alerts",
              "Dashboard to manage tracked domains",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secured by Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does domain leak monitoring work?</h3>
            <p className="text-sm text-[#8b949e]">When you search for a domain, registrars may log that query. We monitor your list of searched domains via WHOIS and alert you if any transition from available to registered.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How quickly will I be notified?</h3>
            <p className="text-sm text-[#8b949e]">We check every 30 minutes. As soon as a domain's WHOIS record shows a new registrant, you'll receive an email and/or webhook alert within minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel anytime from your Lemon Squeezy customer portal with no questions asked. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Domain Search Leak Alerter. All rights reserved.
      </footer>
    </main>
  );
}
