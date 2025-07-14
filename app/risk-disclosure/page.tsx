"use client";
import Link from "next/link";

export default function RiskDisclosurePage() {
  return (
    <main className="bg-black min-h-screen text-gray-300 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">
        Risk Disclosure Statement
      </h1>

      <p className="mb-6 text-sm text-gray-500">Effective Date: July 1, 2025</p>

      <section className="space-y-6 text-base leading-7">
        <p>
          Trading in cryptocurrencies, forex, and commodities involves
          significant risks and is not suitable for all investors. This Risk
          Disclosure Statement outlines the potential risks associated with
          trading on WhiteRock24.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          1. Market Volatility
        </h2>
        <p>
          Prices of digital assets can be highly volatile and may fluctuate
          significantly over short periods. Market conditions can be influenced
          by regulatory changes, technological developments, and broader
          economic factors.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          2. Leverage Risks
        </h2>
        <p>
          Trading on margin or leverage amplifies both potential gains and
          losses. Losses can exceed your initial deposit.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          3. Regulatory Risk
        </h2>
        <p>
          The regulatory environment for digital assets is evolving. Changes in
          laws or regulations may impact your ability to trade or hold certain
          assets.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          4. No Guarantee of Profit
        </h2>
        <p>
          There is no guarantee that you will achieve profits. You should only
          trade with funds you can afford to lose.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          5. Independent Advice
        </h2>
        <p>
          You are strongly advised to consult with a qualified financial advisor
          before engaging in trading activities.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-cyan-400 hover:underline">
          ← Return to Home
        </Link>
      </div>
    </main>
  );
}
