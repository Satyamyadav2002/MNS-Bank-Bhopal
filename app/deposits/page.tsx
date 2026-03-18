import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import Link from "next/link"
import { Percent, PiggyBank, ArrowUpRight, ShieldCheck, ChevronRight } from "lucide-react"

export default function DepositsIndexPage() {
  const depositCategories = [
    { title: "Fixed Deposits", href: "/deposits/fixed-deposits", icon: Percent, desc: "Guaranteed returns with flexible tenures up to 10 years." },
    { title: "Recurring Deposits", href: "/deposits/recurring-deposits", icon: PiggyBank, desc: "Build wealth systematically with small monthly deposits." },
    { title: "Tax Saver FD", href: "/deposits/tax-saver-fd", icon: ArrowUpRight, desc: "Save tax under 80C with a strict 5-year lock-in." },
    { title: "Senior Citizen FD", href: "/deposits/senior-citizen-fd", icon: ShieldCheck, desc: "Extra 0.50% interest to secure your golden years." }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
           <div className="max-w-4xl mx-auto relative z-10">
             <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Deposit Products</h1>
             <p className="text-white/80 text-lg max-w-2xl mx-auto">
               Secure your future with DICGC insured deposits giving you maximum yield and total peace of mind.
             </p>
           </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {depositCategories.map((dep, idx) => (
              <Link key={idx} href={dep.href} className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-sm hover:border-bank-gold-mid/50 hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-full bg-[#FEF9C3] flex items-center justify-center text-[#713F12] mb-6 group-hover:bg-[#713F12] group-hover:text-[#FEF9C3] transition-colors">
                  <dep.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-bank-charcoal mb-3 group-hover:text-[#713F12] transition-colors">{dep.title}</h3>
                <p className="text-bank-muted mb-6 leading-relaxed text-lg">{dep.desc}</p>
                <div className="inline-flex items-center text-bank-gold-dark font-bold text-sm tracking-wide">
                  View Rates & Apply <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
