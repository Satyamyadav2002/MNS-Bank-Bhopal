import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import Link from "next/link"
import { Home, Car, UserCircle, Briefcase, ChevronRight } from "lucide-react"

export default function LoansIndexPage() {
  const loanCategories = [
    { title: "Home Loans", href: "/loans/home-loans", icon: Home, desc: "Build or buy your dream home with competitive interest rates." },
    { title: "Vehicle Loans", href: "/loans/vehicle-loans", icon: Car, desc: "Drive home your new car or two-wheeler instantly." },
    { title: "Personal Loans", href: "/loans/personal-loans", icon: UserCircle, desc: "Unsecured finance for all your immediate personal needs." },
    { title: "Business Loans", href: "/loans/business-loans", icon: Briefcase, desc: "Working capital and term loans for growing enterprises." },
    { title: "Education Loans", href: "/loans/education-loan", icon: Briefcase, desc: "Fund your children's higher education with customized terms." },
    { title: "Gold Loans", href: "/loans/gold-loan", icon: Briefcase, desc: "Quick liquidity against your gold ornaments." }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
           <div className="max-w-4xl mx-auto relative z-10">
             <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Loan Products</h1>
             <p className="text-white/80 text-lg max-w-2xl mx-auto">
               Discover our range of flexible, low-interest loan products tailored for your personal and business needs.
             </p>
           </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanCategories.map((loan, idx) => (
              <Link key={idx} href={loan.href} className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-sm hover:border-bank-gold-mid/50 hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-full bg-bank-red/10 flex items-center justify-center text-bank-red mb-6 group-hover:bg-bank-red group-hover:text-white transition-colors">
                  <loan.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-bank-charcoal mb-3 group-hover:text-bank-red transition-colors">{loan.title}</h3>
                <p className="text-bank-muted mb-6 leading-relaxed">{loan.desc}</p>
                <div className="inline-flex items-center text-bank-gold-dark font-bold text-sm tracking-wide">
                  Explore <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
