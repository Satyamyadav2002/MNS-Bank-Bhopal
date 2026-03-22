"use client"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { UtilityBar } from "@/components/home/utility-bar"
import { MobileNav } from "@/components/home/mobile-nav"
import { Shield, Users, Landmark, Trophy, Target, Eye, Heart, Award, ArrowRight, Calendar, MapPin, CheckCircle2, Handshake, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"

function AnimatedNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / 2200, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeProgress * end))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [started, end])

  return <div ref={ref} className="inline">{count}{suffix}</div>
}

export default function AboutUsPage() {
  const stats = [
    { label: "Years of Trust", value: 70, suffix: "+", icon: Shield, gradient: "from-[#C0001B] to-[#8B0015]" },
    { label: "Happy Members", value: 50, suffix: "K+", icon: Users, gradient: "from-[#C9922A] to-[#A87820]" },
    { label: "City Branches", value: 3, suffix: "", icon: Landmark, gradient: "from-[#2B2D42] to-[#1E2030]" },
    { label: "Awards Won", value: 15, suffix: "+", icon: Trophy, gradient: "from-emerald-500 to-emerald-700" },
  ]

  const milestones = [
    { year: "1954", title: "Foundation Stone", desc: "Mahanagar Nagrik Sahakari Bank was established in the heart of Bhopal by visionary community leaders.", icon: Landmark },
    { year: "1975", title: "Expansion Era", desc: "Crossed the milestone of 5,000 members and opened our second branch in TT Nagar.", icon: MapPin },
    { year: "1995", title: "Modernization", desc: "Introduced computerized banking systems across all branches — a first among cooperative banks in Bhopal.", icon: Star },
    { year: "2005", title: "Digital Banking", desc: "Launched internet banking and RTGS/NEFT services, bringing modern banking to every member's doorstep.", icon: CheckCircle2 },
    { year: "2020", title: "Mobile Revolution", desc: "Launched our Mobile Banking App and UPI payments, making banking available 24/7 from anywhere.", icon: Heart },
    { year: "2024", title: "50K+ Families", desc: "Proudly serving over 50,000 families across Bhopal with premium cooperative banking services.", icon: Award },
  ]

  const values = [
    {
      icon: Handshake,
      title: "Cooperative Spirit",
      desc: "Every member is an owner. We believe in shared prosperity — where the bank's success is the community's success.",
      gradient: "from-[#C0001B] to-[#8B0015]",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      desc: "DICGC-insured deposits up to ₹5 Lakh. RBI-regulated. Your money is safer with us than anywhere else.",
      gradient: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Heart,
      title: "People First",
      desc: "No automated phone menus. Real people, real conversations. Every member is known by name, not number.",
      gradient: "from-[#C9922A] to-[#A87820]",
    },
    {
      icon: Target,
      title: "Financial Inclusion",
      desc: "From daily wage workers to business owners — we serve every segment with dignity and equal respect.",
      gradient: "from-blue-500 to-indigo-600",
    },
  ]

  const board = [
    { name: "Shri. Ramesh Kumar", role: "Chairman", initials: "RK", gradient: "from-[#C0001B] to-[#8B0015]" },
    { name: "Smt. Sunita Sharma", role: "Vice-Chairperson", initials: "SS", gradient: "from-[#C9922A] to-[#A87820]" },
    { name: "Shri. Amit Singh", role: "Managing Director", initials: "AS", gradient: "from-[#2B2D42] to-[#1E2030]" },
    { name: "Dr. R.K. Jain", role: "Director", initials: "RJ", gradient: "from-emerald-600 to-emerald-800" },
  ]

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans">
      <BankingSegmentProvider>
      <SegmentSwitcher />
      <UtilityBar />
      <Header />
      
      <main className="flex-1">

        {/* ═══════════ PREMIUM HERO BANNER ═══════════ */}
        <section className="relative overflow-hidden pt-[80px]">
          <div className="bg-gradient-to-br from-[#1E2030] via-[#2B2D42] to-[#1E2030] py-24 lg:py-32 text-center px-4 relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-15 pointer-events-none" />
            <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-[#C0001B]/[0.08] to-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-gradient-to-tl from-[#C9922A]/[0.06] to-transparent rounded-full blur-[80px] pointer-events-none" />
            {/* Geometric grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
              backgroundImage: `linear-gradient(rgba(201,146,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,146,42,0.4) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }} />
            {/* Gold top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9922A]/50 to-transparent" />
            
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-[#C9922A]/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <Landmark className="w-3.5 h-3.5 text-[#F0C96A]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F0C96A]">Est. 1954 · Bhopal, Madhya Pradesh</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-[1.1]">
                Our Journey of<br />
                <span className="bg-gradient-to-r from-[#C9922A] via-[#F0C96A] to-[#C9922A] bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Unwavering Trust
                </span>
              </h1>
              
              <p className="text-white/50 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                Since 1954, Mahanagar Bank has been the financial backbone for thousands of families and businesses across Bhopal — built on cooperative principles of mutual help and growth.
              </p>

              {/* Gold separator */}
              <div className="mx-auto mt-10 w-16 h-[2px] bg-gradient-to-r from-[#C9922A] to-[#F0C96A] rounded-full" />
            </div>
          </div>
        </section>

        {/* ═══════════ ANIMATED STATS STRIP ═══════════ */}
        <section className="relative z-20 -mt-10 mx-auto max-w-[90%] lg:max-w-5xl">
          <div className="bg-white rounded-[20px] shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-[#C9922A]/15 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="group relative py-8 px-6 flex flex-col items-center justify-center text-center hover:bg-gradient-to-b from-[#FAF7F2]/50 to-transparent transition-all duration-400 cursor-default">
                    {idx > 0 && (
                      <div className="absolute left-0 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#E5E0D8] to-transparent hidden lg:block" />
                    )}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-400 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-serif text-[34px] font-bold text-[#2B2D42] leading-none mb-1">
                      <AnimatedNumber end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[11px] font-bold text-[#6B7280] uppercase tracking-[0.1em]">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ MISSION & VISION ═══════════ */}
        <section className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-[24px] p-10 border border-[#E5E0D8]/80 premium-card hover:border-[#C0001B]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C0001B] to-[#8B0015] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-[#C0001B]/[0.03] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              
              <div className="w-14 h-14 bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl flex items-center justify-center mb-7 relative z-10 shadow-[0_4px_16px_rgba(192,0,27,0.25)] group-hover:scale-110 transition-transform duration-400">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif text-[28px] font-bold text-[#2B2D42] mb-4 relative z-10">Our Mission</h2>
              <p className="text-[#6B7280] leading-[1.8] relative z-10 text-[16px]">
                To provide accessible, inclusive, and modern financial services to our community, fostering economic independence and empowering our members through transparent cooperative banking — where every rupee deposited strengthens the fabric of Bhopal.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-[24px] p-10 border border-[#E5E0D8]/80 premium-card hover:border-[#C9922A]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9922A] to-[#F0C96A] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-[#C9922A]/[0.03] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              
              <div className="w-14 h-14 bg-gradient-to-br from-[#C9922A] to-[#A87820] rounded-2xl flex items-center justify-center mb-7 relative z-10 shadow-[0_4px_16px_rgba(201,146,42,0.25)] group-hover:scale-110 transition-transform duration-400">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif text-[28px] font-bold text-[#2B2D42] mb-4 relative z-10">Our Vision</h2>
              <p className="text-[#6B7280] leading-[1.8] relative z-10 text-[16px]">
                To be the most trusted, technologically advanced, and customer-centric Urban Cooperative Bank in Madhya Pradesh — setting the gold standard for personalized banking experiences and proving that cooperative values and modern excellence can thrive together.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ OUR VALUES ═══════════ */}
        <section className="section-warm-gradient py-24 relative">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
                <span className="eyebrow-label border-0 pl-0">OUR CORE VALUES</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
              </div>
              <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-[#2B2D42] mb-4">
                What We Stand For
              </h2>
              <p className="text-[#6B7280] max-w-xl mx-auto text-[16px] leading-relaxed">
                These principles guide every decision we make and every relationship we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((value, i) => (
                <div key={i} className="group bg-white/80 backdrop-blur-sm rounded-[22px] p-7 premium-card border border-[#E5E0D8]/80 hover:border-[#C9922A]/25 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${value.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-400`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[17px] text-[#2B2D42] mb-2.5">{value.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed text-[13px]">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TIMELINE ═══════════ */}
        <section className="py-28 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-[30%] w-[500px] h-[500px] bg-gradient-to-b from-[#C9922A]/[0.025] to-transparent rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
                <span className="eyebrow-label border-0 pl-0">OUR JOURNEY</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
              </div>
              <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-[#2B2D42]">
                Milestones That Define Us
              </h2>
            </div>

            {/* Premium Timeline */}
            <div className="relative">
              {/* Center vertical line */}
              <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C0001B]/20 via-[#C9922A]/30 to-[#C0001B]/20" />
              
              <div className="space-y-12">
                {milestones.map((item, i) => {
                  const Icon = item.icon
                  const isLeft = i % 2 === 0
                  return (
                    <div key={i} className={`relative flex items-start gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}>
                      {/* Content Card */}
                      <div className={`flex-1 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} pl-16 lg:pl-0`}>
                        <div className={`group bg-white/80 backdrop-blur-sm rounded-[20px] p-6 border border-[#E5E0D8]/80 premium-card hover:border-[#C9922A]/25 relative overflow-hidden ${isLeft ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C0001B]/20 via-[#C9922A]/30 to-[#C0001B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="font-mono text-[14px] font-bold text-[#C9922A] mb-2">{item.year}</div>
                          <h3 className="font-bold text-[18px] text-[#2B2D42] mb-2">{item.title}</h3>
                          <p className="text-[#6B7280] text-[13px] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                      
                      {/* Center Dot */}
                      <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 flex items-center justify-center shrink-0 z-10">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E0D8] shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-[#C9922A]" />
                        </div>
                      </div>

                      {/* Empty spacer for the other side */}
                      <div className="flex-1 hidden lg:block" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ BOARD OF DIRECTORS ═══════════ */}
        <section className="section-dark-premium py-24 relative">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-15 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
                <span className="eyebrow-label border-0 pl-0 text-[#C9922A]">LEADERSHIP</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
              </div>
              <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-4">
                Board of Directors
              </h2>
              <p className="text-white/40 max-w-xl mx-auto text-[16px] leading-relaxed">
                Guided by experienced leaders dedicated to ethical conduct and cooperative prosperity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {board.map((member, idx) => (
                <div key={idx} className="group text-center">
                  <div className="relative mx-auto mb-5">
                    {/* Avatar with gradient ring */}
                    <div className="w-28 h-28 mx-auto rounded-full p-[3px] bg-gradient-to-br from-[#C9922A]/40 to-[#C9922A]/10 group-hover:from-[#C9922A] group-hover:to-[#F0C96A] transition-all duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                        <span className="font-serif text-[28px] font-bold text-white/90">{member.initials}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-[16px] text-white mb-1">{member.name}</h3>
                  <p className="text-[#C9922A] font-bold text-[12px] uppercase tracking-[0.1em]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER ═══════════ */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-[#2B2D42] mb-5 leading-tight">
              Ready to join the <span className="italic text-[#C9922A]">Mahanagar family</span>?
            </h2>
            <p className="text-[#6B7280] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Open your account today and experience the warmth of cooperative banking backed by 70 years of trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/auth/register" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C0001B] to-[#9B0016] text-white rounded-full text-[16px] font-bold px-9 h-14 shadow-[0_8px_32px_rgba(192,0,27,0.3)] hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(192,0,27,0.4)] transition-all duration-500 group">
                Open Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact-us" className="inline-flex items-center justify-center gap-2 border-2 border-[#C0001B] text-[#C0001B] rounded-full text-[16px] font-bold px-9 h-14 hover:bg-[#C0001B] hover:text-white transition-all duration-300">
                Contact Us
              </a>
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
