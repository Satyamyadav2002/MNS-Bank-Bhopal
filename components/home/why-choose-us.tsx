"use client"
import { Users, Shield, MapPin, Zap, Award, Landmark, ArrowRight, Heart, Handshake } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
      const progress = Math.min((timestamp - startTimestamp) / 2000, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeProgress * end))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [started, end])

  return <div ref={ref}>{count}{suffix}</div>
}

export function WhyChooseUs() {
  const milestones = [
    { year: "1954", event: "Founded as Bhopal's first cooperative bank" },
    { year: "1980", event: "Crossed 10,000 members milestone" },
    { year: "2005", event: "Launched digital banking services" },
    { year: "2024", event: "Serving 50,000+ families across Bhopal" },
  ]

  const pillars = [
    { 
      icon: Handshake, 
      title: "Cooperative Values", 
      desc: "A true member-owned bank where profits are returned to the community, not just shareholders. Every member has an equal voice.",
      color: "text-[#C0001B]",
      gradient: "from-[#C0001B] to-[#8B0015]",
      bg: "from-[#C0001B]/10 to-[#C0001B]/5",
    },
    { 
      icon: Shield, 
      title: "DICGC Protected", 
      desc: "Your hard-earned deposits are 100% safe — insured up to ₹5 Lakh by DICGC under the Reserve Bank of India.",
      color: "text-emerald-600",
      gradient: "from-emerald-500 to-emerald-700",
      bg: "from-emerald-500/10 to-emerald-500/5",
    },
    { 
      icon: MapPin, 
      title: "Bhopal's Own", 
      desc: "Deeply rooted locally since 1954, we understand the financial needs of Bhopal's families, traders, and professionals.",
      color: "text-[#C9922A]",
      gradient: "from-[#C9922A] to-[#A87820]",
      bg: "from-[#C9922A]/10 to-[#C9922A]/5",
    },
    { 
      icon: Zap, 
      title: "Fast Approvals", 
      desc: "Say goodbye to endless paperwork. Our loans are processed and disbursed in just 3-5 working days. No hidden charges.",
      color: "text-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      bg: "from-blue-500/10 to-blue-500/5",
    },
  ]
  
  return (
    <section className="relative overflow-hidden">
      
      {/* ═══════ TOP: ABOUT THE BANK — Editorial Split Layout ═══════ */}
      <div className="py-28 bg-white relative">
        {/* Decorative background */}
        <div className="absolute top-0 left-[50%] w-[700px] h-[700px] bg-gradient-to-b from-[#C9922A]/[0.025] to-transparent rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#C0001B]/[0.02] to-transparent rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-25 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
              <span className="eyebrow-label border-0 pl-0">ABOUT MAHANAGAR BANK</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
            </div>
            <h2 className="font-serif text-3xl lg:text-[48px] font-bold text-[#2B2D42] mb-5 leading-tight">
              Seven Decades of<br />
              <span className="bg-gradient-to-r from-[#8B6510] via-[#C9922A] to-[#F0C96A] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Unwavering Trust
              </span>
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-[17px] leading-relaxed">
              Since 1954, Mahanagar Nagrik Sahakari Bank has been the heartbeat of Bhopal&apos;s financial community — 
              a bank built by the people, for the people.
            </p>
          </div>

          {/* Editorial Content: Two Column */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* Left — Story */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-[#C0001B]/[0.06] rounded-full px-4 py-2 text-[#C0001B] text-[12px] font-bold uppercase tracking-[0.1em]">
                <Heart className="w-3.5 h-3.5" />
                Our Story
              </div>
              
              <h3 className="font-serif text-[28px] lg:text-[34px] font-bold text-[#2B2D42] leading-[1.2]">
                Born from a vision to empower<br />
                <span className="italic text-[#C9922A]">every family in Bhopal</span>
              </h3>
              
              <p className="text-[#6B7280] text-[16px] leading-[1.8]">
                In 1954, a group of visionary citizens came together with a simple but powerful idea — 
                create a bank that truly belongs to Bhopal. Not driven by corporate profits, but by the 
                welfare of its members. Today, we proudly serve over <strong className="text-[#2B2D42]">50,000 families</strong>, 
                managing their savings, funding their dreams, and walking alongside them through every milestone of life.
              </p>
              
              <p className="text-[#6B7280] text-[16px] leading-[1.8]">
                As a <strong className="text-[#2B2D42]">RBI-regulated</strong> and <strong className="text-[#2B2D42]">DICGC-insured</strong> cooperative 
                bank, we combine the warmth of personal banking with the security of institutional safeguards.
              </p>
              
              <Link href="/about-us" className="inline-flex items-center gap-2 text-[#C0001B] font-bold text-[15px] group mt-2 hover:gap-3 transition-all duration-300">
                Read Our Full Story
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Right — Stats + Timeline */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: 70, suffix: "+", label: "Years of Trust", color: "from-[#C0001B] to-[#8B0015]" },
                  { number: 50, suffix: "K+", label: "Happy Members", color: "from-[#C9922A] to-[#A87820]" },
                  { number: 3, suffix: "", label: "City Branches", color: "from-[#2B2D42] to-[#1E2030]" },
                  { number: 100, suffix: "%", label: "RBI Compliant", color: "from-emerald-500 to-emerald-700" },
                ].map((stat, i) => (
                  <div key={i} className="group bg-white rounded-[20px] border border-[#E5E0D8]/80 p-6 text-center premium-card hover:border-[#C9922A]/25 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="font-serif text-[36px] font-bold text-[#2B2D42] leading-none mb-1.5">
                      <AnimatedNumber end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-[12px] font-bold text-[#6B7280] uppercase tracking-[0.1em]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Mini Timeline */}
              <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5ECE8] rounded-[22px] p-7 border border-[#E5E0D8]/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#C9922A]/[0.04] to-transparent rounded-full blur-[30px] pointer-events-none" />
                
                <h4 className="font-bold text-[#2B2D42] text-[15px] mb-5 flex items-center gap-2 relative z-10">
                  <Award className="w-4 h-4 text-[#C9922A]" />
                  Our Journey
                </h4>
                
                <div className="space-y-0 relative z-10">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      {/* Timeline line + dot */}
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#C0001B] to-[#C9922A] shadow-[0_0_8px_rgba(201,146,42,0.3)] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        {i < milestones.length - 1 && (
                          <div className="w-px h-8 bg-gradient-to-b from-[#C9922A]/30 to-[#C9922A]/10" />
                        )}
                      </div>
                      <div className="pb-4 -mt-0.5">
                        <span className="font-mono text-[13px] font-bold text-[#C9922A]">{m.year}</span>
                        <p className="text-[13px] text-[#6B7280] font-medium leading-snug mt-0.5">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══════ BOTTOM: WHY CHOOSE US — Premium Pillar Cards ═══════ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                className="group bg-white/80 backdrop-blur-sm rounded-[22px] p-7 premium-card border border-[#E5E0D8]/80 hover:border-[#C9922A]/25 relative overflow-hidden"
              >
                {/* Top accent gradient */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pillar.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Decorative number */}
                <span className="absolute top-3 right-4 font-serif text-[68px] font-bold text-[#E5E0D8]/30 leading-none select-none pointer-events-none group-hover:text-[#C9922A]/8 transition-colors duration-500">0{i + 1}</span>
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-400 relative z-10`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-[18px] text-[#2B2D42] mb-2.5 relative z-10">{pillar.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-[13px] relative z-10">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
