import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { FileDown, Calendar, ArrowRight } from "lucide-react"

export default function TendersPage() {
  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Bank Tenders</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              All active requests for proposals (RFPs), quotes, and open tenders will be documented here.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm mb-12">
            <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-8 border-b border-[#E5E0D8] pb-4">Active Tenders</h2>
            
            <div className="bg-[#FEF9C3] p-12 text-center rounded-2xl border border-bank-gold-mid border-dashed">
              <p className="text-[#713F12] font-semibold text-lg mb-2">There are currently no active tenders.</p>
              <p className="text-[#713F12]/80 max-w-sm mx-auto">Please check back later or subscribe to our notifications to be updated on new RFPs.</p>
            </div>
            
            {/* Example of what a tender would look like: 
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-bank-cream/50 rounded-xl border border-[#E5E0D8] mb-4 hover:shadow-md transition-all">
              <div className="flex-1 w-full mb-4 md:mb-0">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Open</span>
                <h3 className="font-bold text-xl text-bank-charcoal mb-2">RFP for Supply and Installation of Server Infrastructure</h3>
                <p className="text-sm text-bank-muted mb-4 line-clamp-2">Mahanagar Bank invites sealed tenders for the supply, installation, and commissioning of new server infrastructure at the Head Office Data Center.</p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-bank-charcoal/70">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Published: 10 March 2026</span>
                  <span className="flex items-center gap-1 text-bank-red"><Calendar className="w-3.5 h-3.5" /> Closes: 30 March 2026, 17:00 IST</span>
                  <span>Ref: MNSB/IT/2026/01</span>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <button className="bg-white border border-[#E5E0D8] text-bank-charcoal px-4 py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-bank-cream transition-colors text-sm">
                  Corrigendum
                </button>
                <button className="bg-bank-red text-white px-5 py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-bank-red-dark transition-colors shadow-sm text-sm">
                  <FileDown className="w-4 h-4" /> Download RFP PDF
                </button>
              </div>
            </div>
            */}
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm">
             <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-8 border-b border-[#E5E0D8] pb-4">Archives (Past 6 Months)</h2>
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-bank-cream/80 text-bank-charcoal text-xs font-bold uppercase tracking-wider">
                   <th className="p-3 rounded-tl-lg">Reference No.</th>
                   <th className="p-3">Title</th>
                   <th className="p-3">Closing Date</th>
                   <th className="p-3 rounded-tr-lg">Status</th>
                 </tr>
               </thead>
               <tbody className="text-sm">
                 <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30 transition-colors">
                   <td className="p-3 font-mono text-bank-muted">MNSB/HR/2025/08</td>
                   <td className="p-3 font-semibold text-bank-charcoal">Empanelment of Recruitment Agencies</td>
                   <td className="p-3 text-bank-muted">15 Dec 2025</td>
                   <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-semibold text-xs">Closed</span></td>
                 </tr>
                 <tr className="border-b border-[#E5E0D8] hover:bg-bank-cream/30 transition-colors">
                   <td className="p-3 font-mono text-bank-muted">MNSB/ADM/2025/11</td>
                   <td className="p-3 font-semibold text-bank-charcoal">Supply of Printed Stationery (Registers & Forms)</td>
                   <td className="p-3 text-bank-muted">05 Nov 2025</td>
                   <td className="p-3"><span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-semibold text-xs">Awarded</span></td>
                 </tr>
               </tbody>
             </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
