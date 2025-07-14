"use client";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen text-gray-300 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

      <p className="mb-6 text-sm text-gray-500">Effective Date: July 1, 2025</p>

      <section className="space-y-6 text-base leading-7">
        <p>
          These Terms of Service ("Terms") constitute a legally binding
          agreement between you and WhiteRock24 ("we," "us," "our"). By
          accessing or using our platform, you agree to be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          1. Eligibility
        </h2>
        <p>
          You must be at least 18 years of age or the age of majority in your
          jurisdiction to use our services. By accessing the platform, you
          represent and warrant that you meet this requirement.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          2. User Obligations
        </h2>
        <p>
          You agree to use the platform in compliance with all applicable laws
          and regulations. Misuse of the platform for illegal activities,
          including but not limited to money laundering, is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          3. Disclaimer of Warranties
        </h2>
        <p>
          All services are provided "as is" without warranty of any kind. We
          disclaim all warranties, express or implied, including but not limited
          to merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          4. Limitation of Liability
        </h2>
        <p>
          Under no circumstances shall WhiteRock24 be liable for any indirect,
          incidental, or consequential damages arising from the use of the
          platform.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">5. Amendments</h2>
        <p>
          We reserve the right to amend these Terms at any time. Users will be
          notified of any material changes, and continued use of the platform
          constitutes acceptance of the revised Terms.
        </p>

        <h2 className="text-xl font-semibold text-white mt-8">
          6. Governing Law
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the jurisdiction in which WhiteRock24 operates, without regard to
          its conflict of law provisions.
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
