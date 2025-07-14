"use client";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black min-h-screen text-gray-300 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

      <p className="mb-6 text-sm text-gray-500">Effective Date: July 1, 2025</p>

      <section className="space-y-6 text-base leading-7">
        <p>
          WhiteRock24 ("we," "us," "our") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Personal identifiers such as name, email address, and phone number.
          </li>
          <li>Financial information related to trading activities.</li>
          <li>Technical data including IP addresses and device information.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          2. Use of Information
        </h2>
        <p>The data collected is used to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide and improve our services.</li>
          <li>Comply with legal and regulatory obligations.</li>
          <li>Ensure platform security and fraud prevention.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">
          3. Data Sharing
        </h2>
        <p>
          We do not sell your personal information. Data may be shared with
          third-party service providers strictly for the purpose of delivering
          our services or complying with legal requirements.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          4. Data Retention
        </h2>
        <p>
          Personal data is retained only for as long as necessary to fulfill the
          purposes outlined in this policy or as required by law.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          5. Your Rights
        </h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data by contacting us at{" "}
          <span className="text-cyan-400">support@whiterock24.com</span>.
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
