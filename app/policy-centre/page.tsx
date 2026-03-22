import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { FileText, Download, ShieldAlert, Scale, Handshake } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function PolicyCentrePage() {
  const policies = [
    {
       category: "Regulatory & Compliance",
       icon: Scale,
       items: [
         { name: "Fair Practice Code", size: "245 KB" },
         { name: "KYC & AML Policy", size: "1.2 MB" },
         { name: "Citizen's Charter", size: "890 KB" },
         { name: "Cheque Collection Policy", size: "310 KB" }
       ]
    },
    {
       category: "Customer Protection",
       icon: ShieldAlert,
       items: [
         { name: "Customer Compensation Policy", size: "450 KB" },
         { name: "Unauthorised Electronic Banking Transactions Policy", size: "380 KB" },
         { name: "Grievance Redressal Policy", size: "520 KB" }
       ]
    },
    {
       category: "Loans & Advances",
       icon: Handshake,
       items: [
         { name: "Comprehensive Loan Policy", size: "2.4 MB" },
         { name: "MSME Restructuring Policy", size: "650 KB" },
         { name: "Co-Lending Policy", size: "420 KB" }
       ]
    }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bank-gold-dark/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Policy Centre</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Transparency is the cornerstone of cooperative banking. Access all our mandated policies and codes of practice here.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="space-y-12">
            {policies.map((group, idx) => {
               const Icon = group.icon
               return (
                 <div key={idx} className="bg-white rounded-[24px] overflow-hidden border border-[#E5E0D8] shadow-sm">
                   <div className="bg-bank-cream/80 px-8 py-6 border-b border-[#E5E0D8] flex items-center gap-4">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                       <Icon className="w-6 h-6 text-bank-red" />
                     </div>
                     <h2 className="font-serif text-2xl font-bold text-bank-charcoal">{group.category}</h2>
                   </div>
                   <div className="p-8">
                     <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                       {group.items.map((item, iIdx) => (
                         <a key={iIdx} href="#" className="flex items-center justify-between p-4 rounded-xl border border-transparent hover:border-[#E5E0D8] hover:bg-bank-cream/30 transition-all group">
                           <div className="flex items-start gap-4 pr-4">
                             <FileText className="w-6 h-6 text-bank-gold-dark shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                             <div>
                               <h3 className="font-semibold text-bank-charcoal group-hover:text-bank-red transition-colors text-base">{item.name}</h3>
                               <p className="text-xs text-bank-muted mt-1 font-mono uppercase">PDF Document • {item.size}</p>
                             </div>
                           </div>
                           <div className="w-10 h-10 rounded-full bg-bank-cream flex items-center justify-center text-bank-muted group-hover:bg-bank-red group-hover:text-white transition-colors shrink-0 shadow-sm">
                             <Download className="w-4 h-4" />
                           </div>
                         </a>
                       ))}
                     </div>
                   </div>
                 </div>
               )
            })}
          </div>
          
          <div className="mt-12 bg-[#FEF9C3] p-6 rounded-2xl border-l-4 border-bank-gold-dark flex items-start gap-4">
             <Scale className="w-6 h-6 text-bank-gold-dark shrink-0 mt-1" />
             <div>
               <h4 className="font-bold text-[#713F12] mb-1">Regulatory Updates</h4>
               <p className="text-sm text-[#713F12]/80 leading-relaxed">
                 These policies are subject to periodic review and are updated in accordance with the latest Reserve Bank of India (RBI) notifications and directives. Last comprehensive review: January 2026.
               </p>
             </div>
          </div>
        </section>
      </main>

      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}
