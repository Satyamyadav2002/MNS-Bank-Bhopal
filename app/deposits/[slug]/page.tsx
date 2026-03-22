"use client"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { UtilityBar } from "@/components/home/utility-bar"
import { MobileNav } from "@/components/home/mobile-nav"
import { ArrowRight, CheckCircle2, Send, Calculator, ArrowUpRight, TrendingUp, ShieldCheck, Clock, PiggyBank, Landmark, Shield, FileText } from "lucide-react"
import { useState, use, useEffect, useRef } from "react"
import Link from "next/link"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

// Animated Number Component
function AnimatedNumber({ end, prefix = "", suffix = "", decimals = 0 }: { end: number, prefix?: string, suffix?: string, decimals?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / 2000, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(easeProgress * end)
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [started, end])

  return <div ref={ref} className="inline">{prefix}{count.toFixed(decimals)}{suffix}</div>
}

const depositData: Record<string, any> = {
  "fixed-deposits": {
    title: "Fixed Deposits (FD)",
    tagline: "Secure your lump sum with highest assured returns.",
    stat: 7.00,
    statLabel: "Max Interest Rate p.a.",
    icon: TrendingUp,
    gradient: "from-[#C9922A] to-[#F0C96A]",
    overview: "Mahanagar Bank Fixed Deposits offer an excellent way to grow your savings safely. We provide flexible tenures ranging from 7 days to 10 years, ensuring you have a tailor-made investment plan that matches your financial goals completely immune to market volatility.",
    features: [
      "Flexible tenure from 7 days to 10 years",
      "Additional 0.50% interest for Senior Citizens",
      "Loan/Overdraft facility up to 90% of deposit value",
      "Auto-renewal facility available",
      "Quarterly, Monthly, or Cumulative interest payout options"
    ],
    eligibility: [
      "Resident Individuals (singly or jointly)",
      "Minors (through guardians)",
      "HUF, Trusts, Clubs, and Societies",
      "Corporate bodies and firms"
    ]
  },
  "recurring-deposits": {
    title: "Recurring Deposits (RD)",
    tagline: "Build a large corpus through small monthly steps.",
    stat: 100,
    statPrefix: "₹",
    statLabel: "Min. Monthly Installment",
    icon: Clock,
    gradient: "from-[#C0001B] to-[#8B0015]",
    overview: "Don't have a lump sum? No problem. Our Recurring Deposit lets you save a fixed amount every month while earning interest rates equivalent to Fixed Deposits, helping you systematically achieve short-term and long-term goals.",
    features: [
      "Minimum installment of just ₹100 per month",
      "Tenure ranges from 12 months to 120 months",
      "Interest compounded quarterly",
      "TDS applicable as per current Income Tax rules",
      "Passbook facility for tracking deposits"
    ],
    eligibility: [
      "Resident Individuals (singly or jointly)",
      "Minors (through guardians)",
      "HUF (Hindu Undivided Family)"
    ]
  }
}

export default function DepositPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [activeTab, setActiveTab] = useState("overview")
  
  const data = depositData[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    tagline: "Safe investments, guaranteed returns.",
    stat: 100,
    statLabel: "Guaranteed Yield",
    icon: PiggyBank,
    gradient: "from-[#2B2D42] to-[#1A1D2D]",
    overview: "Invest your savings with Mahanagar Bank to yield safe and guaranteed returns. Our deposit schemes are designed to grow your wealth steadily without market risks.",
    features: ["Assured returns regardless of market conditions", "Nomination facility", "Loan against deposit", "Senior citizen benefits"],
    eligibility: ["Resident Indian with valid KYC", "Existing account holders"]
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
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C9922A]/[0.1] to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-gradient-to-tr from-[#C0001B]/[0.08] to-transparent rounded-full blur-[80px] pointer-events-none" />
            {/* Geometric grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: `linear-gradient(rgba(201,146,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.4) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />
            {/* Gold top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9922A]/50 to-transparent" />
            
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9922A]/10 to-[#F0C96A]/5 border border-[#C9922A]/30 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
                  <PageIcon className="w-3.5 h-3.5 text-[#F0C96A]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F0C96A]">Investment · Deposit</span>
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
                    Invest Now <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link href="/interest-rates" className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-[#C9922A] px-8 h-14 rounded-full font-bold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm">
                    <FileText className="w-4.5 h-4.5 text-[#C9922A]" /> View Complete Rates
                  </Link>
                </div>
              </div>
              
              {/* Right Highlight Card - Premium Glassmorphism */}
              <div className="w-full lg:w-[380px] shrink-0">
                <div className="bg-white/10 backdrop-blur-[32px] rounded-[32px] p-8 border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.25)] relative overflow-hidden group hover:border-[#C9922A]/30 transition-all duration-500">
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${data.gradient} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center mb-8 shadow-lg relative z-10 hover:scale-110 transition-transform duration-500`}>
                    <ArrowUpRight className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="font-serif text-[48px] font-bold text-white leading-none mb-3 relative z-10 flex items-baseline gap-1">
                    <AnimatedNumber end={data.stat} prefix={data.statPrefix} suffix={data.slug === 'recurring-deposits' ? '' : '%'} decimals={data.slug === 'recurring-deposits' ? 0 : 2} />
                  </div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#C9922A] mb-8 relative z-10">
                    {data.statLabel}
                  </p>
                  
                  <div className="border-t border-white/10 pt-5 flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[13px] font-bold text-white">Guaranteed Returns</span>
                      <span className="block text-[11px] text-white/50 font-medium">Under DICGC Protection</span>
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
                 {tab === 'apply' ? 'Start Investing' : tab.charAt(0).toUpperCase() + tab.slice(1)}
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
            <div className="lg:col-span-2 min-h-[500px]">
              
              {activeTab === 'overview' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C9922A] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C9922A]">About This Deposit</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-6 leading-tight">Overview</h2>
                  <p className="text-[#6B7280] text-lg lg:text-[19px] leading-relaxed mb-12">{data.overview}</p>
                  
                  {/* Premium Rate Table Card (FD specific visually pleasing) */}
                  <div className="bg-white rounded-[24px] border border-[#E5E0D8]/80 premium-card overflow-hidden">
                    <div className="bg-gradient-to-r from-[#FAF7F2] to-white px-7 py-5 border-b border-[#E5E0D8] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-[#C9922A]" />
                        <h4 className="font-bold text-[#2B2D42] text-[16px]">Snapshot: Interest Rates</h4>
                      </div>
                      <Link href="/interest-rates" className="text-[12px] font-bold text-[#C0001B] uppercase tracking-wider hover:underline">Full Table →</Link>
                    </div>
                    <div className="p-0">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-[#E5E0D8] bg-white">
                            <th className="p-5 text-[11px] font-bold text-[#6B7280] uppercase tracking-[0.1em]">Tenure</th>
                            <th className="p-5 text-[11px] font-bold text-[#6B7280] uppercase tracking-[0.1em]">General Public</th>
                            <th className="p-5 text-[11px] font-bold text-[#6B7280] uppercase tracking-[0.1em]">Senior Citizen</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-[#E5E0D8] hover:bg-[#FAF7F2]/50 transition-colors">
                            <td className="p-5 font-bold text-[#2B2D42] text-[15px]">1 Year Special Scheme</td>
                            <td className="p-5 font-bold text-[#2B2D42] text-[17px]">7.00%</td>
                            <td className="p-5 font-bold text-[#C9922A] text-[17px]">7.50%</td>
                          </tr>
                          <tr className="border-b border-[#E5E0D8] hover:bg-[#FAF7F2]/50 transition-colors">
                            <td className="p-5 font-bold text-[#2B2D42] text-[15px]">1 Year to 2 Years</td>
                            <td className="p-5 font-bold text-[#2B2D42] text-[17px]">6.50%</td>
                            <td className="p-5 font-bold text-[#C9922A] text-[17px]">7.00%</td>
                          </tr>
                          <tr className="hover:bg-[#FAF7F2]/50 transition-colors">
                            <td className="p-5 font-bold text-[#2B2D42] text-[15px]">2 Years to 5 Years</td>
                            <td className="p-5 font-bold text-[#2B2D42] text-[17px]">6.25%</td>
                            <td className="p-5 font-bold text-[#C9922A] text-[17px]">6.75%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C9922A] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C9922A]">Benefits</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-8 leading-tight">Key Features</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    {data.features.map((feature: string, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-[#E5E0D8]/80 premium-card hover:border-[#C9922A]/30 flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5ECE8] to-[#FAF7F2] border border-[#E5E0D8] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <CheckCircle2 className="w-5 h-5 text-[#C9922A]" />
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
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-8 leading-tight">Eligibility</h2>
                  
                  <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-[#E5E0D8]/80 premium-card">
                    <ul className="space-y-6 mb-10">
                      {data.eligibility.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-4 group">
                          <div className="w-3 h-3 rounded-full bg-[#C9922A] shadow-[0_0_10px_rgba(201,146,42,0.4)] shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <span className="font-bold text-[#2B2D42] text-[17px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-5 lg:p-6 bg-gradient-to-br from-[#FAF7F2] to-[#F5ECE8] rounded-[20px] border border-[#E5E0D8] border-l-4 border-l-[#C0001B] text-[14px] text-[#6B7280] leading-relaxed">
                        <strong className="text-[#2B2D42] block mb-1 uppercase tracking-wider text-[11px]">Important Note:</strong> KYC documents are absolutely mandatory. A PAN card is required if the deposit amount exceeds ₹50,000 to comply with RBI regulations.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'apply' && (
                <div id="apply-section" className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-8 mt-[-32px]">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C0001B] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C0001B]">Begin Your Journey</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-3 leading-tight">Start Investing</h2>
                  <p className="text-[#6B7280] text-lg mb-10">Leave your details and our relationship manager will assist you in creating a deposit account.</p>
                  
                  <form className="bg-white rounded-[32px] p-8 lg:p-10 border border-[#E5E0D8] shadow-[0_24px_48px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    {/* Decorative gold background splash */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#C9922A]/[0.03] to-transparent pointer-events-none rounded-bl-full" />
                    
                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Full Name</label>
                        <input type="text" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C9922A]/50 focus:border-[#C9922A] outline-none transition-all font-medium text-[#2B2D42]" placeholder="e.g. Rahul Sharma" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Mobile Number</label>
                        <input type="tel" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C9922A]/50 focus:border-[#C9922A] outline-none transition-all font-medium text-[#2B2D42]" placeholder="+91" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Intended Amount (₹)</label>
                        <input type="number" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C9922A]/50 focus:border-[#C9922A] outline-none transition-all font-bold text-[#2B2D42] font-mono text-lg" placeholder="100000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Customer Status</label>
                        <select className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C9922A]/50 focus:border-[#C9922A] outline-none transition-all font-bold text-[#2B2D42] appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232B2D42' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}>
                          <option>Existing Customer</option>
                          <option>New Customer</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="button" className="w-full bg-gradient-to-r from-[#C9922A] to-[#A87820] hover:from-[#A87820] hover:to-[#8B6510] text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_8px_24px_rgba(201,146,42,0.3)] mt-8 group relative z-10 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(201,146,42,0.4)]">
                      Submit Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-[12px] text-[#6B7280] text-center mt-5 font-medium relative z-10 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" /> MNS Bank will never ask for your OTP/PIN over a call.
                    </p>
                  </form>
                </div>
              )}

            </div>

            {/* Sidebar (Right 1/3) */}
            <div className="lg:col-span-1">
              
              {/* Maturity Calculator Teaser */}
              <div className="bg-gradient-to-br from-[#2B2D42] to-[#1A1D2D] rounded-[24px] p-8 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.2)] text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C9922A]/20 to-transparent blur-[30px] rounded-full pointer-events-none transition-all duration-700 group-hover:opacity-60" />
                
                <div className="w-16 h-16 bg-white/10 rounded-[20px] mx-auto flex items-center justify-center border border-white/20 mb-6 relative z-10 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/15 transition-all duration-400">
                  <Calculator className="w-8 h-8 text-[#F0C96A]" />
                </div>
                <h3 className="font-serif text-[24px] font-bold text-white mb-3 relative z-10">Maturity Calculator</h3>
                <p className="text-sm text-white/60 mb-8 relative z-10 leading-relaxed">
                  Find out exactly how much your deposit will grow over time with our dynamic calculator.
                </p>
                <Link href="/interest-rates" className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9922A] to-[#F0C96A] hover:opacity-90 text-[#2B2D42] font-bold h-12 px-8 rounded-full text-sm transition-all w-full relative z-10 shadow-[0_4px_16px_rgba(201,146,42,0.4)]">
                  Calculate Now
                </Link>
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
