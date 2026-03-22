"use client"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { UtilityBar } from "@/components/home/utility-bar"
import { MobileNav } from "@/components/home/mobile-nav"
import { ArrowRight, CheckCircle2, Send, Download, ShieldCheck, Wallet, FileText, Landmark, Shield, PiggyBank, Briefcase, Users, Star } from "lucide-react"
import { useState, use } from "react"
import Link from "next/link"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

const accountData: Record<string, any> = {
  "savings-account": {
    title: "Savings Account",
    tagline: "Build your financial future step by step.",
    stat: "4.00%",
    statLabel: "Interest Rate (p.a.)",
    icon: PiggyBank,
    gradient: "from-[#C9922A] to-[#F0C96A]",
    overview: "Mahanagar Bank Savings Account is designed to help you save your hard-earned money safely while earning attractive interest. With zero to minimal balance requirements, it's the perfect everyday banking account for individuals and families.",
    features: [
      "Interest calculated on daily balance",
      "Free personalized RuPay Debit Card",
      "Free Internet & Mobile Banking",
      "Nomination facility available",
      "Anywhere banking across all branches"
    ],
    eligibility: [
      "Resident Indians (Individuals, singly or jointly)",
      "Minors (with guardian's consent)",
      "Hindu Undivided Families (HUF)",
      "Clubs, Societies, and Trusts"
    ]
  },
  "salary-account": {
    title: "Salary Account",
    tagline: "Effortless banking for working professionals.",
    stat: "Zero",
    statLabel: "Minimum Balance",
    icon: Briefcase,
    gradient: "from-blue-500 to-indigo-600",
    overview: "Designed for corporate employees and government officials. Enjoy zero balance requirements, free unlimited ATM withdrawals, and special rates on retail loans.",
    features: [
      "Zero Minimum Balance Requirement",
      "Free Anywhere Banking",
      "Concession on Loan Processing Fees",
      "Free accidental insurance cover ₹2 Lakhs",
      "Sweep-in/Sweep-out facility for higher returns"
    ],
    eligibility: [
      "Employees of approved corporations",
      "Government & PSU employees",
      "Minimum 10 employees per organization"
    ]
  },
  "current-account": {
    title: "Current Account",
    tagline: "Uninterrupted banking for your growing business.",
    stat: "Unlimited",
    statLabel: "Daily Transactions",
    icon: Landmark,
    gradient: "from-[#C0001B] to-[#8B0015]",
    overview: "Specifically tailored for businessmen, firms, companies, and institutions who need to conduct numerous daily transactions. Enjoy liquidity, overdraft facilities, and seamless digital collections to keep your business moving.",
    features: [
      "No restriction on number and amount of deposits",
      "Free NEFT/RTGS collections",
      "Overdraft / Cash Credit facility (subject to approval)",
      "Free monthly account statements",
      "Corporate Internet Banking access"
    ],
    eligibility: [
      "Sole Proprietorships & Partnerships",
      "Limited Liability Partnerships (LLP)",
      "Private & Public Limited Companies",
      "Trusts, Associations, and Clubs"
    ]
  },
  "trust-account": {
    title: "Trust Account",
    tagline: "Dedicated services for societies and trusts.",
    stat: "Priority",
    statLabel: "Service Desk",
    icon: Users,
    gradient: "from-emerald-500 to-emerald-700",
    overview: "Specialized accounts catering to the unique needs of trusts, societies, NGOs, and educational institutions with dedicated relationship management and custom fee structures.",
    features: [
      "Zero maintenance charges",
      "Customized MIS reporting",
      "Bulk payment and salary upload facilities",
      "Dedicated Relationship Manager",
      "Multi-level authorization for net banking"
    ],
    eligibility: [
      "Registered Educational Institutions",
      "Registered Societies & Clubs",
      "NGOs & Charitable Trusts",
      "Resident Welfare Associations (RWA)"
    ]
  }
}

export default function AccountPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [activeTab, setActiveTab] = useState("overview")
  
  const data = accountData[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    tagline: "Secure and flexible banking.",
    stat: "Zero",
    statLabel: "Hidden Charges",
    icon: Wallet,
    gradient: "from-[#2B2D42] to-[#1A1D2D]",
    overview: "Mahanagar Bank offers reliable checking and savings accounts tailored to your operational needs. Enjoy a secure environment to deposit and withdraw your funds at your convenience.",
    features: ["Competitive benefits", "Digital banking suite", "Wide branch network", "Dedicated customer support"],
    eligibility: ["Resident Indian", "Valid KYC Documents Form (Aadhaar, PAN)"]
  }

  const PageIcon = data.icon

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <UtilityBar />
      <Header />
      
      <main className="flex-1">
        
        {/* ═══════════ PREMIUM HERO BANNER ═══════════ */}
        <section className="relative overflow-hidden pt-[80px]">
          <div className="bg-gradient-to-br from-[#1E2030] via-[#2B2D42] to-[#1E2030] py-20 lg:py-28 px-4 relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-15 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C9922A]/[0.08] to-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-gradient-to-tr from-[#C0001B]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none" />
            {/* Geometric grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
              backgroundImage: `linear-gradient(rgba(201,146,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.4) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />
            {/* Gold top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9922A]/50 to-transparent" />
            
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
                  <PageIcon className="w-3.5 h-3.5 text-[#F0C96A]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">Bank Account</span>
                </div>
                
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    {data.title}
                  </span>
                </h1>
                
                <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
                  {data.tagline}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button onClick={() => {
                    const el = document.getElementById('apply-section')
                    el?.scrollIntoView({ behavior: 'smooth' })
                    setActiveTab('apply')
                  }} className="bg-gradient-to-r from-[#C0001B] to-[#9B0016] text-white px-9 h-14 rounded-full font-bold shadow-[0_8px_32px_rgba(192,0,27,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(192,0,27,0.4)] w-full sm:w-auto flex items-center justify-center gap-2 border-0 group">
                    Apply Now <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link href="/auth/register" className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 px-8 h-14 rounded-full font-bold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm">
                    <ShieldCheck className="w-5 h-5 text-[#C9922A]"/> Verify KYC Online
                  </Link>
                </div>
              </div>
              
              {/* Right Highlight Card - Premium Glassmorphism */}
              <div className="w-full lg:w-[380px] shrink-0">
                <div className="bg-white/10 backdrop-blur-[32px] rounded-[32px] p-8 border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.25)] relative overflow-hidden group hover:border-[#C9922A]/30 transition-all duration-500">
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${data.gradient} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center mb-8 shadow-lg`}>
                    <PageIcon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="font-serif text-[48px] font-bold text-white leading-none mb-3">
                    {data.stat}
                  </div>
                  <p className="text-[15px] font-bold uppercase tracking-[0.1em] text-[#C9922A] mb-8">
                    {data.statLabel}
                  </p>
                  
                  <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <Shield className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[13px] font-bold text-white">Full DICGC Cover</span>
                      <span className="block text-[11px] text-white/50 font-medium">Deposits insured up to ₹5 Lakh</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════ TAB NAVIGATION ═══════════ */}
        <div className="bg-white border-b border-[#E5E0D8] sticky top-[80px] z-40 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
           <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto relative no-scrollbar">
             {['overview', 'features', 'eligibility', 'apply'].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-8 py-6 font-bold text-[15px] relative whitespace-nowrap transition-colors duration-300 ${activeTab === tab ? 'text-[#C0001B]' : 'text-[#6B7280] hover:text-[#2B2D42]'}`}
               >
                 {tab === 'apply' ? 'Account Opening' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                 {/* Gold indicator */}
                 {activeTab === tab && (
                   <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C0001B] to-[#C9922A] rounded-t-full" />
                 )}
               </button>
             ))}
           </div>
        </div>

        {/* ═══════════ TAB CONTENT AREA ═══════════ */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content (Left 2/3) */}
            <div className="lg:col-span-2 min-h-[400px]">
              
              {activeTab === 'overview' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C9922A] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C9922A]">About This Account</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-6 leading-tight">Overview</h2>
                  <p className="text-[#6B7280] text-lg lg:text-[19px] leading-relaxed mb-10">{data.overview}</p>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C9922A] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C9922A]">Benefits</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-8 leading-tight">Features & Facilities</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    {data.features.map((feature: string, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-[#E5E0D8]/80 premium-card hover:border-[#C9922A]/30 flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5ECE8] to-[#FAF7F2] border border-[#E5E0D8] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <Star className="w-4.5 h-4.5 text-[#C9922A]" />
                        </div>
                        <span className="font-bold text-[#2B2D42] text-[15px] pt-2">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'eligibility' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C9922A] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C9922A]">Criteria</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-8 leading-tight">Who can open this account?</h2>
                  
                  <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-[#E5E0D8]/80 premium-card">
                    <ul className="space-y-6 mb-10">
                      {data.eligibility.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-4 group">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#C0001B] to-[#9B0016] shadow-[0_0_10px_rgba(192,0,27,0.3)] shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <span className="font-bold text-[#2B2D42] text-[17px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-5 lg:p-6 bg-gradient-to-br from-[#FAF7F2] to-[#F5ECE8] rounded-[20px] border border-[#E5E0D8] border-l-4 border-l-[#C9922A] text-[14px] text-[#6B7280] leading-relaxed">
                        <strong className="text-[#2B2D42]">Regulatory Note:</strong> Standard KYC documents (Aadhaar, PAN Card, two passport size photographs) are mandatory as per RBI guidelines to open any account.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'apply' && (
                <div id="apply-section" className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-8 mt-[-32px]">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C0001B] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C0001B]">Onboarding</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-3 leading-tight">Account Opening Request</h2>
                  <p className="text-[#6B7280] text-lg mb-10">Drop your details below. Our executive will reach out to help you open your account quickly.</p>
                  
                  <form className="bg-white rounded-[32px] p-8 lg:p-10 border border-[#E5E0D8] shadow-[0_24px_48px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    {/* Decorative gold background splash */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#C9922A]/[0.03] to-transparent pointer-events-none rounded-bl-full" />
                    
                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Full Name / Entity Name</label>
                        <input type="text" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C9922A]/50 focus:border-[#C9922A] outline-none transition-all font-medium text-[#2B2D42]" placeholder="e.g. John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Mobile Number</label>
                        <input type="tel" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C9922A]/50 focus:border-[#C9922A] outline-none transition-all font-medium text-[#2B2D42]" placeholder="+91" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Preferred Branch</label>
                        <select className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C9922A]/50 focus:border-[#C9922A] outline-none transition-all font-bold text-[#2B2D42] appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232B2D42' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}>
                          <option>Head Office, Bairagarh</option>
                          <option>T.T. Nagar</option>
                          <option>Karond</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="button" className="w-full bg-gradient-to-r from-[#2B2D42] to-[#1A1D2D] hover:from-[#1A1D2D] hover:to-[#000000] text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_8px_24px_rgba(43,45,66,0.25)] mt-8 group relative z-10 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(43,45,66,0.35)]">
                      Request Callback <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-[12px] text-[#6B7280] text-center mt-5 font-medium relative z-10 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" /> By submitting, you consent to receive calls regarding account opening.
                    </p>
                  </form>
                </div>
              )}

            </div>

            {/* Sidebar (Right 1/3) */}
            <div className="lg:col-span-1">
              
              <div className="bg-white rounded-[24px] p-7 border border-[#E5E0D8]/80 premium-card sticky top-[180px]">
                <h3 className="font-serif text-[22px] font-bold text-[#2B2D42] mb-6 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#C9922A]" /> Quick Links
                </h3>
                <div className="space-y-3">
                  <Link href="/service-charges" className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-white border border-[#E5E0D8] hover:border-[#C9922A]/30 transition-all duration-300 group hover:shadow-md">
                    <div className="flex items-center gap-3 text-[#2B2D42] font-bold text-[15px] mb-1">
                      <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#C9922A] group-hover:bg-[#C9922A] group-hover:text-white transition-colors duration-400">
                        <FileText className="w-4.5 h-4.5"/>
                      </div>
                      Service Charges
                    </div>
                    <span className="text-[12px] text-[#6B7280] font-medium pl-12">View applicable fees</span>
                  </Link>
                  
                  <Link href="/download-forms" className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-white border border-[#E5E0D8] hover:border-[#C0001B]/30 transition-all duration-300 group hover:shadow-md">
                    <div className="flex items-center gap-3 text-[#2B2D42] font-bold text-[15px] mb-1">
                      <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#C0001B] group-hover:bg-[#C0001B] group-hover:text-white transition-colors duration-400">
                        <Download className="w-4.5 h-4.5"/>
                      </div>
                      Account Form PDF
                    </div>
                    <span className="text-[12px] text-[#6B7280] font-medium pl-12">Download to apply offline</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
      </BankingSegmentProvider>
    </div>
  )
}
