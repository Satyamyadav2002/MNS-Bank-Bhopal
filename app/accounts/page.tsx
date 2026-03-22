import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import Link from "next/link"
import { Wallet, Building2, ShieldCheck, Landmark, ChevronRight } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function AccountsIndexPage() {
  const accountCategories = [
    { title: "Savings Account", href: "/accounts/savings-account", icon: Wallet, desc: "For individuals and families looking for safe, everyday banking." },
    { title: "Current Account", href: "/accounts/current-account", icon: Building2, desc: "Uninterrupted banking for firms, partnerships, and companies." },
    { title: "Salary Account", href: "/accounts/salary-account", icon: ShieldCheck, desc: "Zero balance corporate payroll accounts with special benefits." },
    { title: "Trust Account", href: "/accounts/trust-account", icon: Landmark, desc: "Tailored services for co-operative societies, trusts, and clubs." }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
           <div className="max-w-4xl mx-auto relative z-10">
             <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Bank Accounts</h1>
             <p className="text-white/80 text-lg max-w-2xl mx-auto">
               Open an account with Mahanagar Bank today to enjoy seamless digital banking and personalized customer service.
             </p>
           </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {accountCategories.map((acc, idx) => (
              <Link key={idx} href={acc.href} className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-sm hover:border-bank-gold-mid/50 hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-700 group-hover:text-emerald-100 transition-colors">
                  <acc.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-bank-charcoal mb-3 group-hover:text-emerald-700 transition-colors">{acc.title}</h3>
                <p className="text-bank-muted mb-6 leading-relaxed text-lg">{acc.desc}</p>
                <div className="inline-flex items-center text-bank-gold-dark font-bold text-sm tracking-wide">
                  Explore Account <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}
