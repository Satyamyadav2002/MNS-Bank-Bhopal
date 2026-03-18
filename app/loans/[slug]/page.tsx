"use client"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { UtilityBar } from "@/components/home/utility-bar"
import { MobileNav } from "@/components/home/mobile-nav"
import { ArrowRight, CheckCircle2, FileText, Send, Calculator, Download, Home, Car, Percent, ArrowUpRight, ShieldCheck, Clock, Shield } from "lucide-react"
import { useState, use, useEffect, useRef } from "react"
import Link from "next/link"

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

const loanData: Record<string, any> = {
  "home-loans": {
    title: "Home Loan",
    tagline: "Build, buy, or renovate your dream home with low rates.",
    rate: 8.50,
    icon: Home,
    gradient: "from-[#C9922A] to-[#F0C96A]",
    overview: "Mahanagar Bank offers customized home loan solutions tailored to your unique needs. Whether you're purchasing a new apartment, constructing your dream house, or renovating your existing home, our quick processing and minimal documentation make the journey smoother.",
    features: [
      "Maximum tenure up to 30 years",
      "No prepayment charges for floating rate loans",
      "Funding up to 90% of property value",
      "Interest calculated on daily reducing balance"
    ],
    eligibility: [
      "Salaried individuals with min income ₹25,000/month",
      "Self-employed professionals with 3 years business vintage",
      "Age: 21 to 65 years at loan maturity",
      "CIBIL score of 700+"
    ],
    kfs: {
      apr: "8.72%",
      processingFee: "0.5% of loan amount (Max ₹10,000)",
      penalCharge: "2% p.a. on overdue amount",
      coolingPeriod: "3 Days"
    }
  },
  "vehicle-loans": {
    title: "Vehicle Loan",
    tagline: "Drive home your dream car today.",
    rate: 9.25,
    icon: Car,
    gradient: "from-[#C0001B] to-[#8B0015]",
    overview: "Get behind the wheel faster with Mahanagar Bank Vehicle Loans. We offer 100% on-road funding for select models with easy EMIs and flexible repayment tenures.",
    features: [
      "Up to 100% on-road funding",
      "Tenure up to 7 years",
      "Quick sanction in 48 hours",
      "Pre-approved offers for existing customers"
    ],
    eligibility: [
      "Net monthly income of ₹20,000+",
      "Age: 21 to 60 years",
      "Minimum 1 year of employment/business history",
      "Valid Driving License"
    ],
    kfs: {
      apr: "9.50%",
      processingFee: "₹1,500 flat",
      penalCharge: "2% p.a. on overdue EMI",
      coolingPeriod: "3 Days"
    }
  }
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [activeTab, setActiveTab] = useState("overview")
  
  const data = loanData[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    tagline: "Flexible financing for your needs.",
    rate: 10.00,
    icon: ArrowUpRight,
    gradient: "from-emerald-500 to-emerald-700",
    overview: "Mahanagar Bank offers competitive financing solutions designed to help you achieve your goals with ease. Enjoy transparent pricing and dedicated service.",
    features: ["Competitive interest rates", "Flexible repayment options", "Quick processing", "Minimal documentation"],
    eligibility: ["Resident Indian", "Stable source of income", "Good credit history"],
    kfs: {
      apr: "10.50%",
      processingFee: "1% of loan amount",
      penalCharge: "2% p.a.",
      coolingPeriod: "3 Days"
    }
  }

  const PageIcon = data.icon

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans">
      <UtilityBar />
      <Header />
      
      <main className="flex-1">
        
        {/* ═══════════ PREMIUM HERO BANNER ═══════════ */}
        <section className="relative overflow-hidden pt-[80px]">
          <div className="bg-gradient-to-br from-[#1E2030] via-[#2B2D42] to-[#1E2030] py-20 lg:py-28 px-4 relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-15 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C0001B]/[0.08] to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
            <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-gradient-to-tr from-[#C9922A]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none" />
            
            {/* Geometric grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: `linear-gradient(rgba(201,146,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.4) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />
            
            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C0001B]/40 to-transparent" />
            
            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C0001B]/10 to-[#9B0016]/5 border border-[#C0001B]/30 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
                  <PageIcon className="w-3.5 h-3.5 text-[#F5B5B5]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F5B5B5]">Financing · Loan</span>
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
                  }} className="bg-gradient-to-r from-[#C9922A] to-[#A87820] text-white px-9 h-14 rounded-full font-bold shadow-[0_8px_32px_rgba(201,146,42,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(201,146,42,0.4)] w-full sm:w-auto flex items-center justify-center gap-2 border-0 group">
                    Apply Now <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link href="/emi-calculator" className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-[#C0001B]/50 px-8 h-14 rounded-full font-bold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm">
                    <Calculator className="w-4.5 h-4.5 text-[#C0001B]" /> EMI Calculator
                  </Link>
                </div>
              </div>
              
              {/* Right Highlight Card - Premium Glassmorphism */}
              <div className="w-full lg:w-[380px] shrink-0">
                <div className="bg-white/10 backdrop-blur-[32px] rounded-[32px] p-8 border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.25)] relative overflow-hidden group hover:border-[#C0001B]/30 transition-all duration-500">
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${data.gradient} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />
                  
                  <div className="flexitems-baseline gap-2 mb-1">
                    <h3 className="text-white/60 font-bold text-[12px] uppercase tracking-[0.15em] relative z-10">Starting At</h3>
                  </div>
                  
                  <div className="font-serif text-[56px] font-bold text-white leading-none mb-3 relative z-10 flex items-baseline gap-1">
                    <AnimatedNumber end={data.rate} suffix="%" decimals={2} />
                  </div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#C9922A] mb-8 relative z-10">
                    Interest Rate (p.a.)
                  </p>
                  
                  <div className="border-t border-white/10 pt-5 flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <Clock className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[13px] font-bold text-white">Instant In-Principle Approval</span>
                      <span className="block text-[11px] text-white/50 font-medium">Fast-track processing enabled</span>
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
                 {tab === 'apply' ? 'Apply Now' : tab.charAt(0).toUpperCase() + tab.slice(1)}
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
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C9922A]">About This Loan</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-6 leading-tight">Overview</h2>
                  <p className="text-[#6B7280] text-lg lg:text-[19px] leading-relaxed mb-12">{data.overview}</p>
                  
                  {/* Premium KFS Panel (Key Facts Statement) */}
                  <div className="bg-gradient-to-br from-[#FAF7F2] to-white rounded-[24px] border border-[#C9922A]/30 p-8 lg:p-10 shadow-[0_8px_32px_rgba(201,146,42,0.05)] relative overflow-hidden group hover:border-[#C9922A]/50 transition-colors duration-500">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9922A]/[0.03] rounded-full blur-[40px] pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
                     
                     <div className="flex items-center gap-4 mb-8 border-b border-[#E5E0D8] pb-6">
                       <div className="w-12 h-12 bg-[#2B2D42] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                         <FileText className="w-6 h-6 text-[#C9922A]" />
                       </div>
                       <div>
                         <h3 className="font-serif text-[22px] font-bold text-[#2B2D42]">Key Facts Statement (KFS)</h3>
                         <p className="text-[13px] font-medium text-[#6B7280]">Mandatory disclosures as per RBI guidelines</p>
                       </div>
                     </div>
                     
                     <div className="grid sm:grid-cols-2 gap-y-8 gap-x-6 relative z-10">
                       <div className="bg-white/60 p-5 rounded-[16px] border border-[#E5E0D8]">
                         <p className="text-[11px] text-[#6B7280] font-bold mb-2 uppercase tracking-[0.1em] flex items-center gap-2">
                           <Percent className="w-3.5 h-3.5 text-[#C9922A]" /> Annual Percentage Rate
                         </p>
                         <p className="text-[24px] font-bold text-[#2B2D42] font-serif">{data.kfs.apr}</p>
                       </div>
                       <div className="bg-white/60 p-5 rounded-[16px] border border-[#E5E0D8]">
                         <p className="text-[11px] text-[#6B7280] font-bold mb-2 uppercase tracking-[0.1em] flex items-center gap-2">
                           <Calculator className="w-3.5 h-3.5 text-[#C0001B]" /> Processing Fee
                         </p>
                         <p className="text-[16px] font-bold text-[#2B2D42] w-full">{data.kfs.processingFee}</p>
                       </div>
                       <div className="bg-white/60 p-5 rounded-[16px] border border-[#E5E0D8]">
                         <p className="text-[11px] text-[#6B7280] font-bold mb-2 uppercase tracking-[0.1em] flex items-center gap-2">
                           <ArrowUpRight className="w-3.5 h-3.5 text-[#2B2D42]" /> Penal Charges
                         </p>
                         <p className="text-[16px] font-bold text-[#2B2D42]">{data.kfs.penalCharge}</p>
                       </div>
                       <div className="bg-white/60 p-5 rounded-[16px] border border-[#E5E0D8]">
                         <p className="text-[11px] text-[#6B7280] font-bold mb-2 uppercase tracking-[0.1em] flex items-center gap-2">
                           <Clock className="w-3.5 h-3.5 text-[#C9922A]" /> Cooling-Off Period
                         </p>
                         <p className="text-[16px] font-bold text-[#2B2D42]">{data.kfs.coolingPeriod}</p>
                       </div>
                     </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C0001B] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C0001B]">Benefits</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-8 leading-tight">Features & Advantages</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    {data.features.map((feature: string, idx: number) => (
                      <div key={idx} className="bg-white p-6 rounded-[20px] border border-[#E5E0D8]/80 premium-card hover:border-[#C0001B]/30 flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5ECE8] to-[#FAF7F2] border border-[#E5E0D8] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                            <CheckCircle2 className="w-5 h-5 text-[#C0001B]" />
                        </div>
                        <span className="font-bold text-[#2B2D42] text-[15px] pt-1.5">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'eligibility' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C9922A] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C9922A]">Requirements</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-8 leading-tight">Eligibility Criteria</h2>
                  
                  <div className="bg-white rounded-[24px] p-8 lg:p-10 border border-[#E5E0D8]/80 premium-card">
                    <ul className="space-y-6">
                      {data.eligibility.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-4 group border-b border-[#E5E0D8]/50 pb-6 last:border-0 last:pb-0">
                          <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#E5E0D8] group-hover:bg-[#C9922A]/10 group-hover:border-[#C9922A]/30 transition-colors duration-300">
                            <div className="w-2 h-2 rounded-full bg-[#C9922A] shadow-[0_0_10px_rgba(201,146,42,0.4)]" />
                          </div>
                          <span className="font-bold text-[#2B2D42] text-[17px] opacity-90 group-hover:opacity-100 transition-opacity">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'apply' && (
                <div id="apply-section" className="animate-in fade-in slide-in-from-bottom-4 duration-700 pt-8 mt-[-32px]">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-[#C0001B] to-transparent" />
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#C0001B]">Next Steps</span>
                  </div>
                  <h2 className="font-serif text-[32px] lg:text-[40px] font-bold text-[#2B2D42] mb-3 leading-tight">Apply for {data.title}</h2>
                  <p className="text-[#6B7280] text-lg mb-10">Fill the form below and our dedicated loan representative will contact you shortly.</p>
                  
                  <form className="bg-white rounded-[32px] p-8 lg:p-10 border border-[#E5E0D8] shadow-[0_24px_48px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    {/* Top gradient accent */}
                    <div className="absolute top-0 w-full left-0 h-1.5 bg-gradient-to-r from-[#C9922A] via-[#C0001B] to-[#C9922A] bg-[length:200%_auto] animate-gradient-slow" />
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-2 relative z-10 w-full">
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Full Name</label>
                        <input type="text" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C0001B]/50 focus:border-[#C0001B] outline-none transition-all font-medium text-[#2B2D42]" placeholder="e.g. Rahul Sharma" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Mobile Number</label>
                        <input type="tel" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C0001B]/50 focus:border-[#C0001B] outline-none transition-all font-medium text-[#2B2D42]" placeholder="+91" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Email Address</label>
                        <input type="email" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C0001B]/50 focus:border-[#C0001B] outline-none transition-all font-medium text-[#2B2D42]" placeholder="rahul@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Requested Amount (₹)</label>
                        <input type="number" className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C0001B]/50 focus:border-[#C0001B] outline-none transition-all font-bold text-[#2B2D42] font-mono text-lg" placeholder="500000" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[13px] font-bold text-[#2B2D42] uppercase tracking-[0.05em]">Employment Type</label>
                        <select className="w-full bg-[#FAF7F2] border border-[#E5E0D8] rounded-xl h-14 px-5 focus:ring-2 focus:ring-[#C0001B]/50 focus:border-[#C0001B] outline-none transition-all font-bold text-[#2B2D42] appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232B2D42' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}>
                          <option>Salaried</option>
                          <option>Self Employed (Business)</option>
                          <option>Self Employed (Professional)</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="button" className="w-full bg-gradient-to-r from-[#C0001B] to-[#9B0016] hover:from-[#9B0016] hover:to-[#6A000F] text-white font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_8px_24px_rgba(192,0,27,0.25)] mt-8 group relative z-10 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(192,0,27,0.35)]">
                      Submit Application <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-[12px] text-[#6B7280] text-center mt-5 font-medium relative z-10 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" /> By submitting, you agree to our Terms & Conditions and Privacy Policy.
                    </p>
                  </form>
                </div>
              )}

            </div>

            {/* Sidebar (Right 1/3) */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="bg-white rounded-[24px] p-7 border border-[#E5E0D8]/80 premium-card sticky top-[180px]">
                <h3 className="font-serif text-[22px] font-bold text-[#2B2D42] mb-6 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#C0001B]" /> Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link href="/emi-calculator" className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-white border border-[#E5E0D8] hover:border-[#C0001B]/30 transition-all duration-300 group hover:shadow-md">
                    <div className="flex items-center gap-3 text-[#2B2D42] font-bold text-[15px] mb-1">
                      <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#C0001B] group-hover:bg-[#C0001B] group-hover:text-white transition-colors duration-400">
                        <Calculator className="w-4.5 h-4.5"/>
                      </div>
                      EMI Calculator
                    </div>
                    <span className="text-[12px] text-[#6B7280] font-medium pl-12">Plan your repayment schedule</span>
                  </Link>
                  
                  <Link href="/download-forms" className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-white border border-[#E5E0D8] hover:border-[#C9922A]/30 transition-all duration-300 group hover:shadow-md">
                    <div className="flex items-center gap-3 text-[#2B2D42] font-bold text-[15px] mb-1">
                      <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#C9922A] group-hover:bg-[#C9922A] group-hover:text-white transition-colors duration-400">
                        <Download className="w-4.5 h-4.5"/>
                      </div>
                      Download Form
                    </div>
                    <span className="text-[12px] text-[#6B7280] font-medium pl-12">Download to apply offline</span>
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#2B2D42] to-[#1A1D2D] rounded-[24px] p-8 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.2)] text-white relative overflow-hidden group mt-6">
                <div className="absolute right-0 bottom-0 w-48 h-48 bg-[#C0001B]/20 blur-[50px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
                <h3 className="font-serif text-[24px] font-bold mb-3 relative z-10 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-[#F0C96A]" /> Need Assistance?
                </h3>
                <p className="text-white/70 text-sm mb-6 relative z-10 leading-relaxed">Speak directly to our loan advisors for personalized guidance.</p>
                <div className="text-[28px] font-bold text-[#F0C96A] tracking-wider mb-2 relative z-10 font-mono">1800 120 1234</div>
                <div className="text-[11px] text-white/50 uppercase tracking-[0.2em] font-bold relative z-10">Toll-Free • 24x7 Support</div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
