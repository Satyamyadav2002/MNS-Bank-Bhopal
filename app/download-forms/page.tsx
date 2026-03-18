import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { FileDown, FileText, Search, Download } from "lucide-react"

export default function DownloadFormsPage() {
  const formCategories = [
    {
      title: "Account Opening & KYC",
      forms: [
        { name: "Saving / Current Account Opening Form (Individual)", kb: "450 KB" },
        { name: "Non-Individual / Corporate Account Opening Form", kb: "512 KB" },
        { name: "KYC Updation Form (Re-KYC)", kb: "120 KB" },
        { name: "FATCA / CRS Declaration Form", kb: "85 KB" }
      ]
    },
    {
      title: "Loans & Advances",
      forms: [
        { name: "Common Loan Application Form", kb: "850 KB" },
        { name: "Gold Loan Application Annexure", kb: "150 KB" },
        { name: "Guarantor Consent Form", kb: "90 KB" }
      ]
    },
    {
      title: "Digital Banking & Tech",
      forms: [
        { name: "Internet Banking Registration Form", kb: "220 KB" },
        { name: "Mobile Banking Activation Form", kb: "180 KB" },
        { name: "ATM / Debit Card Request Form", kb: "140 KB" },
        { name: "Stop Payment / Block Card Request", kb: "95 KB" }
      ]
    },
    {
      title: "Other Services",
      forms: [
        { name: "NEFT / RTGS Remittance Form", kb: "110 KB" },
        { name: "Locker Allotment Request", kb: "160 KB" },
        { name: "Form 15G / 15H (Tax Deduction)", kb: "280 KB" },
        { name: "Deceased Claim Form (Annexure 1)", kb: "320 KB" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Download Forms</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Easily access and download all necessary bank forms, applications, and declarations in PDF format.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 flex items-center justify-center text-bank-muted">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search forms by name or category..." 
              className="w-full bg-white border-2 border-[#E5E0D8] shadow-sm rounded-full h-16 pl-16 pr-6 font-bold text-lg text-bank-charcoal focus:outline-none focus:border-bank-gold-mid focus:ring-4 focus:ring-bank-gold-mid/10 transition-all"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {formCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-[#E5E0D8] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E5E0D8]">
                  <div className="w-12 h-12 bg-bank-cream rounded-xl flex items-center justify-center shrink-0">
                     <FileText className="w-6 h-6 text-bank-red" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-bank-charcoal">{category.title}</h2>
                </div>
                
                <ul className="space-y-4">
                  {category.forms.map((form, fIdx) => (
                    <li key={fIdx} className="group">
                      <a href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-bank-red/5 transition-colors border border-transparent hover:border-bank-red/10">
                        <div className="flex items-start gap-4 pr-4 border-r border-[#E5E0D8] group-hover:border-bank-red/20 flex-1 transition-colors">
                           <FileDown className="w-6 h-6 text-bank-gold-dark shrink-0 mt-0.5" />
                           <div>
                             <h3 className="font-bold text-bank-charcoal group-hover:text-bank-red transition-colors">{form.name}</h3>
                             <p className="text-xs text-bank-muted font-mono mt-1">PDF • {form.kb}</p>
                           </div>
                        </div>
                        <div className="shrink-0 pl-4 text-bank-charcoal/30 group-hover:text-bank-red transition-colors">
                          <Download className="w-5 h-5" />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
