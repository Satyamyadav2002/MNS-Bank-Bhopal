import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/80 text-lg">
              Your trust is our priority. Learn how Mahanagar Nagrik Sahakari Bank protects your personal data.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-[#E5E0D8] prose prose-bank max-w-none">
            <p className="text-sm text-bank-muted font-bold tracking-wider uppercase mb-8">Last Updated: March 2026</p>
            
            <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-4">1. Introduction</h2>
            <p className="text-bank-charcoal/80 leading-relaxed mb-8">
              Mahanagar Nagrik Sahakari Bank Ltd. ("Bank", "we", "us", or "our") is committed to protecting the privacy and security of the personal information of our customers, members, and website visitors. This Privacy Policy details how we collect, use, process, and safeguard your data in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA), RBI guidelines, and other applicable Indian laws.
            </p>

            <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-4">2. Information We Collect</h2>
            <p className="text-bank-charcoal/80 leading-relaxed mb-4">
              We collect information necessary to provide you with banking products and services, comply with Know Your Customer (KYC) norms, and fulfill regulatory obligations:
            </p>
            <ul className="list-disc pl-6 text-bank-charcoal/80 space-y-2 mb-8">
              <li><strong>Personal Data:</strong> Name, address, date of birth, contact details (email, phone number).</li>
              <li><strong>KYC Data:</strong> Aadhaar number, PAN, voter ID, driving license, passport, or other officially valid documents (OVDs).</li>
              <li><strong>Financial Data:</strong> Income details, credit history, transaction records, beneficiary details.</li>
              <li><strong>Digital Data:</strong> Device info, IP address, location data (with prominent consent), and browsing cookies.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-4">3. How We Use Your Data</h2>
            <p className="text-bank-charcoal/80 leading-relaxed mb-4">We strictly process your personal data for the following lawful purposes:</p>
            <ul className="list-disc pl-6 text-bank-charcoal/80 space-y-2 mb-8">
              <li>Opening, maintaining, and servicing your accounts and loans.</li>
              <li>Processing financial transactions and remittances (UPI, NEFT, RTGS).</li>
              <li>Conducting risk assessments, fraud prevention, and credit checks.</li>
              <li>Communicating important account updates, OTPs, and alerts.</li>
              <li>Complying with statutory laws, court orders, and RBI reporting mandates.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-4">4. Data Sharing & Third Parties</h2>
            <p className="text-bank-charcoal/80 leading-relaxed mb-8">
              We do not sell your personal data. We may share data strictly on a need-to-know basis with:
              <br/><br/>
              • Regulatory bodies (RBI, FIU-IND, Income Tax Dept).<br/>
              • Authorized banking partners (NPCI, DICGC, Credit Bureaus like CIBIL/Experian).<br/>
              • Core Banking vendors acting as Data Processors bound by strict confidentiality agreements.
            </p>

            <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-4">5. Customer Rights</h2>
            <p className="text-bank-charcoal/80 leading-relaxed mb-8">
              Under the DPDPA, you hold the right to access your data, correct inaccuracies, withdraw consent (subject to banking continuation rules), and nominate a representative in the event of death/incapacity.
            </p>

            <div className="bg-bank-cream p-6 rounded-xl border-l-4 border-bank-red mt-12">
              <h3 className="font-bold text-bank-charcoal mb-2">Data Protection Officer</h3>
              <p className="text-sm text-bank-charcoal/80 mb-1">For privacy-related complaints or requests, contact our Data Protection Officer at:</p>
              <p className="text-sm font-bold text-bank-red">dpo@mnsbankbhopal.com | 0755-4098000</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
