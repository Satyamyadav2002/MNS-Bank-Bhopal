import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import Link from "next/link"
import { Home, Car, Users, Briefcase, GraduationCap, Coins, ArrowRight, Building2, FileText, CreditCard } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

const personalLoans = [
  { title: "Home Loan", href: "/home-loan", icon: Home, desc: "Make your dream home a reality with affordable long-tenure EMIs.", rate: "From 8.50% p.a.", tag: null },
  { title: "Gold Loan", href: "/gold-loan", icon: Coins, desc: "Quick approval with minimal documentation against gold jewellery.", rate: "From 9.00% p.a.", tag: "Quick" },
  { title: "Personal Loan", href: "/personal-loan", icon: Users, desc: "Unsecured finance for all your personal needs with fast processing.", rate: "From 12.00% p.a.", tag: null },
  { title: "Car Loan", href: "/car-loan", icon: Car, desc: "Drive your dream car today with competitive interest rates.", rate: "From 9.50% p.a.", tag: null },
  { title: "Education Loan", href: "/education-loan", icon: GraduationCap, desc: "Invest in your future with a loan for higher education.", rate: "From 10.00% p.a.", tag: null },
  { title: "Festival Loan", href: "/festival-loan", icon: CreditCard, desc: "Celebrate every occasion with easy seasonal finance.", rate: "Special Rate", tag: "Seasonal" },
  { title: "House Construction Loan", href: "/house-construction-loan", icon: Home, desc: "Build your house with a flexible drawdown schedule.", rate: "From 9.00% p.a.", tag: null },
  { title: "Loan Against FD", href: "/loan-against-fd", icon: FileText, desc: "Use your FD / RD as collateral for instant liquidity.", rate: "Upto 90% LTV", tag: null },
  { title: "Loan Against Property", href: "/loan-against-property", icon: Building2, desc: "Tap into your property's equity for large requirements.", rate: "From 10.50% p.a.", tag: null },
]

const businessLoans = [
  { title: "Working Capital Loan", href: "/working-capital-loan", icon: Briefcase, desc: "Keep your business operations running smoothly.", rate: "From 13.00% p.a.", tag: null },
  { title: "Overdraft Facility", href: "/overdraft-facility", icon: FileText, desc: "Flexible credit limits for short-term business needs.", rate: "Flexible", tag: null },
  { title: "Transport Loan", href: "/transport-loan", icon: Car, desc: "Finance for commercial vehicles and fleet expansion.", rate: "From 11.00% p.a.", tag: null },
  { title: "Professional Loan", href: "/professional-loan", icon: Users, desc: "For doctors, CAs, engineers and other professionals.", rate: "From 12.00% p.a.", tag: null },
  { title: "Micro Finance", href: "/micro-finance", icon: Coins, desc: "SHG / JLG lending for micro-entrepreneurs.", rate: "Competitive", tag: null },
]

export default function LoansPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Loan Products"
          subtitle="Choose from a range of flexible loan products designed for your personal and business needs."
          breadcrumbs={[{ label: "Loans" }]}
          ctaLabel="EMI Calculator"
          ctaHref="/emi-calculator"
        >
          {/* Personal Loans */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-1 bg-[#C0001B] rounded-full" />
              <h2 className="text-xl font-bold text-gray-900">Personal Loans</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {personalLoans.map(loan => (
                <LoanCard key={loan.href} {...loan} />
              ))}
            </div>
          </section>

          {/* Business Loans */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-1 bg-[#C0001B] rounded-full" />
              <h2 className="text-xl font-bold text-gray-900">Business Loans</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {businessLoans.map(loan => (
                <LoanCard key={loan.href} {...loan} />
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full" />
            <h3 className="text-2xl font-bold mb-2">Not sure which loan is right for you?</h3>
            <p className="text-white/80 mb-6">Talk to our relationship manager — we'll help you find the best fit.</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white text-[#C0001B] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}

function LoanCard({ title, href, icon: Icon, desc, rate, tag }: { title: string; href: string; icon: any; desc: string; rate: string; tag: string | null }) {
  return (
    <Link href={href} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/30 hover:shadow-[0_8px_32px_rgba(192,0,27,0.08)] transition-all relative overflow-hidden flex flex-col">
      {tag && (
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-[#C0001B] text-white px-2 py-0.5 rounded-full">{tag}</span>
      )}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-4 group-hover:bg-[#C0001B] transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-[16px] font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{desc}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm font-bold text-[#C0001B] bg-[#C0001B]/8 px-3 py-1 rounded-full">{rate}</span>
        <span className="text-sm font-bold text-[#C0001B] flex items-center gap-1 group-hover:gap-2 transition-all">
          Apply <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}
