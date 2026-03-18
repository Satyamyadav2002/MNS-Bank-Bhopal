import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
           <div className="max-w-4xl mx-auto relative z-10">
             <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
             <p className="text-white/80 text-lg max-w-2xl mx-auto">
               Standard terms and conditions regarding the use of Mahanagar Bank's website and services.
             </p>
           </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-[#E5E0D8] shadow-sm prose prose-bank max-w-none">
            
            <p className="text-sm text-bank-muted mb-8 italic">Last Updated: March 2026</p>

            <h3 className="font-serif text-2xl font-bold text-bank-charcoal mt-8 mb-4">1. Acceptance of Terms</h3>
            <p className="text-bank-charcoal/80 leading-relaxed">
               By accessing and using this portal, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement. 
            </p>

            <h3 className="font-serif text-2xl font-bold text-bank-charcoal mt-8 mb-4">2. Accuracy of Information</h3>
            <p className="text-bank-charcoal/80 leading-relaxed">
               While we strive to ensure that all information on this website, including interest rates, charges, and loan terms, is accurate and up-to-date, Mahanagar Nagrik Sahakari Bank Ltd. assumes no liability for any errors or omissions. The details provided herein are subject to change without notice in accordance with RBI directives and bank policy.
            </p>

            <h3 className="font-serif text-2xl font-bold text-bank-charcoal mt-8 mb-4">3. Banking Services</h3>
            <p className="text-bank-charcoal/80 leading-relaxed">
               All products and services offered on this website are subject to the specific terms and conditions accompanying those specific products. The calculators (such as the EMI and Maturity calculators) provided on the site are for indicative planning purposes only and do not form a contract. Actual rates and schedules may vary at the time of sanction or opening.
            </p>

            <h3 className="font-serif text-2xl font-bold text-bank-charcoal mt-8 mb-4">4. Privacy and Security</h3>
            <p className="text-bank-charcoal/80 leading-relaxed">
               We take your privacy seriously. The collection and use of personal data submitted through our inline forms are governed by our Privacy Policy, aligned with the DPDP Act 2023. We will never ask for your confidential ATM PIN, Net Banking Password, or OTP over phone or email.
            </p>
            
            <h3 className="font-serif text-2xl font-bold text-bank-charcoal mt-8 mb-4">5. Limitation of Liability</h3>
            <p className="text-bank-charcoal/80 leading-relaxed">
               Under no circumstances shall Mahanagar Bank or its affiliates be liable for any direct, indirect, incidental, special or consequential damages that result from the use of, or the inability to use, these materials or services.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
