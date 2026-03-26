"use client"
import { Shield, MapPin, Zap, Award, ArrowRight, Heart, Handshake } from "lucide-react"
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
    let t0: number | null = null
    const step = (ts: number) => {
      if (!t0) t0 = ts
      const progress = Math.min((ts - t0) / 1800, 1)
      const ease = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(ease * end))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [started, end])
  return <div ref={ref}>{count}{suffix}</div>
}

const milestones = [
  { year: "1954", event: "Founded as Bhopal's first cooperative bank" },
  { year: "1980", event: "Crossed 10,000 members milestone" },
  { year: "2005", event: "Launched digital banking services" },
  { year: "2024", event: "Serving 50,000+ families across Bhopal" },
]

const pillars = [
  {
    icon: Handshake,
    num: "01",
    title: "Cooperative Values",
    desc: "A true member-owned bank where profits are returned to the community, not just shareholders. Every member has an equal voice.",
  },
  {
    icon: Shield,
    num: "02",
    title: "DICGC Protected",
    desc: "Your hard-earned deposits are 100% safe — insured up to ₹5 Lakh by DICGC under the Reserve Bank of India.",
  },
  {
    icon: MapPin,
    num: "03",
    title: "Bhopal's Own",
    desc: "Deeply rooted locally since 1954, we understand the financial needs of Bhopal's families, traders, and professionals.",
  },
  {
    icon: Zap,
    num: "04",
    title: "Fast Approvals",
    desc: "Say goodbye to endless paperwork. Loans processed and disbursed in just 3–5 working days. No hidden charges.",
  },
]

const stats = [
  { number: 70,  suffix: "+",  label: "Years of Trust" },
  { number: 50,  suffix: "K+", label: "Happy Members" },
  { number: 3,   suffix: "",   label: "City Branches" },
  { number: 100, suffix: "%",  label: "RBI Compliant" },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">About Mahanagar Bank</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Seven Decades of{" "}
            <span className="text-[#C0001B] italic">Unwavering Trust</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Since 1954, Mahanagar Nagrik Sahakari Bank has been the heartbeat of Bhopal's financial community — a bank built by the people, for the people.
          </p>
        </div>

        {/* Two-column: Story + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Left — Story */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#C0001B]/6 rounded-full px-4 py-2 text-[#C0001B] text-xs font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5" /> Our Story
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              Born from a vision to empower{" "}
              <span className="italic text-[#C0001B]">every family in Bhopal</span>
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              In 1954, a group of visionary citizens came together with a simple but powerful idea — create a bank that truly belongs to Bhopal. Not driven by corporate profits, but by the welfare of its members. Today, we proudly serve over <strong className="text-gray-800">50,000 families</strong>, managing their savings, funding their dreams, and walking alongside them through every milestone of life.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              As a <strong className="text-gray-800">RBI-regulated</strong> and <strong className="text-gray-800">DICGC-insured</strong> cooperative bank, we combine the warmth of personal banking with the security of institutional safeguards.
            </p>
            <Link href="/about-us" className="inline-flex items-center gap-2 text-[#C0001B] font-bold text-sm hover:gap-3 transition-all">
              Read Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — Stats + Timeline */}
          <div className="space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-[#C0001B]/20 hover:shadow-md transition-all group">
                  <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-[#C0001B] transition-colors">
                    <AnimatedNumber end={s.number} suffix={s.suffix} />
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 text-sm mb-5 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C0001B]" /> Our Journey
              </h4>
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C0001B] shrink-0 group-hover:scale-125 transition-transform" />
                      {i < milestones.length - 1 && <div className="w-px h-8 bg-[#C0001B]/20" />}
                    </div>
                    <div className="pb-4 -mt-0.5">
                      <span className="text-xs font-bold text-[#C0001B]">{m.year}</span>
                      <p className="text-xs text-gray-500 font-medium leading-snug mt-0.5">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom — Pillar cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/25 hover:shadow-lg transition-all overflow-hidden">
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />
              {/* Ghost number */}
              <span className="absolute top-3 right-4 text-6xl font-bold text-[#C0001B]/15 select-none">{p.num}</span>
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-4 group-hover:bg-[#C0001B] transition-colors relative z-10">
                <p.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 relative z-10">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
