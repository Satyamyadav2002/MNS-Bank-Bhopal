import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { Building2, Phone, ExternalLink, ShieldCheck, FileText, Mails } from "lucide-react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

export default function GrievanceRedressalPage() {
  return (
    <div className="min-h-screen bg-bank-cream flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Page Header */}
        <section className="bg-bank-charcoal py-16 text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bank-gold-light via-bank-gold-dark to-bank-red z-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="w-16 h-16 bg-bank-red/20 rounded-2xl mx-auto flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-bank-red" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Grievance Redressal</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We are committed to resolving your complaints fairly and quickly. If you are not satisfied with our service, please follow the escalation matrix below.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="space-y-8">
            
            {/* Level 1 */}
            <div className="bg-white rounded-3xl p-8 border-l-4 border-bank-gold-light shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bank-gold-light/10 to-transparent pointer-events-none"></div>
              <div className="w-16 h-16 shrink-0 bg-bank-cream rounded-full flex items-center justify-center font-serif text-2xl font-bold text-bank-gold-dark shadow-inner">
                L1
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-2">Branch Level Resolution</h2>
                <p className="text-bank-muted mb-4">For your first point of contact, please approach the Branch Manager where your account is held. They are equipped to resolve the majority of operational issues.</p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-2 bg-bank-cream px-4 py-2 rounded-lg text-sm font-bold text-bank-charcoal"><Building2 className="w-4 h-4 text-bank-red" /> Contact Branch Manager</span>
                  <span className="inline-flex items-center gap-2 bg-bank-cream px-4 py-2 rounded-lg text-sm font-bold text-bank-charcoal"><FileText className="w-4 h-4 text-bank-red" /> Ask for Complaint Register</span>
                </div>
                <div className="mt-4 p-3 bg-red-50 text-red-800 text-sm font-semibold rounded-lg inline-block">
                  Expected Resolution TAT: 7 Working Days
                </div>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-white rounded-3xl p-8 border-l-4 border-bank-red shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bank-red/5 to-transparent pointer-events-none"></div>
              <div className="w-16 h-16 shrink-0 bg-bank-cream rounded-full flex items-center justify-center font-serif text-2xl font-bold text-bank-red shadow-inner">
                L2
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-2">Principal Nodal Officer</h2>
                <p className="text-bank-muted mb-4">If your complaint is not resolved within 7 working days at the branch level, or if you are dissatisfied with the resolution, escalate the matter to our Principal Nodal Officer at the Head Office.</p>
                
                <div className="bg-bank-cream/50 border border-[#E5E0D8] rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-bank-charcoal text-lg mb-1">Shri. [Name to be Provided]</h4>
                  <p className="text-sm text-bank-muted mb-3 italic">General Manager & Principal Nodal Officer</p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-bank-charcoal font-medium">
                      <Building2 className="w-4 h-4 text-bank-red" /> Head Office, Bairagarh, Bhopal
                    </div>
                    <div className="flex items-center gap-2 text-bank-charcoal font-medium">
                      <Phone className="w-4 h-4 text-bank-red" /> 0755-4098000
                    </div>
                    <div className="flex items-center gap-2 text-bank-charcoal font-medium sm:col-span-2">
                      <Mails className="w-4 h-4 text-bank-red" /> nodalofficer@mnsbankbhopal.com
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-red-50 text-red-800 text-sm font-semibold rounded-lg inline-block">
                  Expected Resolution TAT: 15 Working Days
                </div>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-white rounded-3xl p-8 border-l-4 border-bank-charcoal shadow-sm flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bank-charcoal/5 to-transparent pointer-events-none"></div>
              <div className="w-16 h-16 shrink-0 bg-bank-cream rounded-full flex items-center justify-center font-serif text-2xl font-bold text-bank-charcoal shadow-inner">
                L3
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold text-bank-charcoal mb-2">Reserve Bank of India (RBI) Ombudsman</h2>
                <p className="text-bank-muted mb-4">If the complaint is not resolved to your satisfaction within 30 days of registering, you have the right to approach the RBI Integrated Ombudsman.</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="bg-bank-charcoal hover:bg-black text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md">
                    File Complaint on RBI CMS <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="bg-[#E8F0FE] text-[#1967D2] px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 border border-[#D2E3FC]">
                    <Phone className="w-4 h-4" /> Toll-Free: 14448
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="mt-12 text-center">
            <button className="text-bank-red font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
              <FileText className="w-4 h-4" /> Download Grievance Redressal Policy PDF
            </button>
          </div>
        </section>
      </main>

      </BankingSegmentProvider>
      <Footer />
    </div>
  )
}
