"use client"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import { Shield, Users, Landmark, Trophy, Target, Eye, Heart, Award, ArrowRight, MapPin, CheckCircle2, Handshake, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

function AnimatedNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); ob.disconnect() } }, { threshold: 0.3 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])
  useEffect(() => {
    if (!started) return
    let t0: number | null = null
    const step = (ts: number) => { if (!t0) t0 = ts; const p = Math.min((ts - t0) / 2000, 1); setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end)); if (p < 1) requestAnimationFrame(step) }
    requestAnimationFrame(step)
  }, [started, end])
  return <div ref={ref} className="inline">{count}{suffix}</div>
}

const stats = [
  { label: "Years of Trust", value: 70, suffix: "+" },
  { label: "Happy Members",  value: 50, suffix: "K+" },
  { label: "City Branches",  value: 3,  suffix: "" },
  { label: "Awards Won",     value: 15, suffix: "+" },
]

const milestones = [
  { year: "1954", title: "Foundation Stone",   desc: "Mahanagar Nagrik Sahakari Bank was established in the heart of Bhopal by visionary community leaders." },
  { year: "1975", title: "Expansion Era",      desc: "Crossed the 5,000 members milestone and opened our second branch in TT Nagar." },
  { year: "1995", title: "Modernization",      desc: "Introduced computerized banking — a first among cooperative banks in Bhopal." },
  { year: "2005", title: "Digital Banking",     desc: "Launched internet banking and RTGS/NEFT services for every member." },
  { year: "2020", title: "Mobile Revolution",   desc: "Launched Mobile Banking App and UPI payments — banking 24/7 from anywhere." },
  { year: "2024", title: "50K+ Families",       desc: "Proudly serving over 50,000 families across Bhopal with premium services." },
]

const values = [
  { icon: Handshake, title: "Cooperative Spirit",   desc: "Every member is an owner. We believe in shared prosperity — bank's success is community's success." },
  { icon: Shield,    title: "Trust & Safety",       desc: "DICGC-insured deposits up to ₹5 Lakh. RBI-regulated. Your money is safe with us." },
  { icon: Heart,     title: "People First",         desc: "No automated menus. Real people, real conversations. Every member known by name." },
  { icon: Target,    title: "Financial Inclusion",   desc: "From daily wage workers to business owners — we serve every segment with dignity." },
]

const board = [
  { name: "Shri. Ramesh Kumar",  role: "Chairman",         initials: "RK" },
  { name: "Smt. Sunita Sharma",  role: "Vice-Chairperson", initials: "SS" },
  { name: "Shri. Amit Singh",    role: "Managing Director", initials: "AS" },
  { name: "Dr. R.K. Jain",       role: "Director",         initials: "RJ" },
]

export default function AboutUsPage() {
  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />

        {/* Hero */}
        <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] py-20 text-center px-4 relative overflow-hidden">
          <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Landmark className="w-3.5 h-3.5 text-white/80" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">Est. 1954 · Bhopal, Madhya Pradesh</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Our Journey of<br /><span className="italic">Unwavering Trust</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Since 1954, Mahanagar Bank has been the financial backbone of Bhopal — built on cooperative principles of mutual help and growth.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-20 -mt-8 mx-auto max-w-5xl px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="py-7 px-5 text-center relative group hover:bg-gray-50/50 transition-colors">
                {i > 0 && <div className="absolute left-0 top-[20%] bottom-[20%] w-px bg-gray-200 hidden lg:block" />}
                <div className="text-3xl font-bold text-[#C0001B] mb-1"><AnimatedNumber end={s.value} suffix={s.suffix} /></div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <main className="flex-1">
          {/* Mission & Vision */}
          <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#C0001B]/20 hover:shadow-md transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />
                <div className="w-12 h-12 bg-[#C0001B] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-500 leading-relaxed">
                  To provide accessible, inclusive, and modern financial services to our community, fostering economic independence and empowering our members through transparent cooperative banking — where every rupee deposited strengthens the fabric of Bhopal.
                </p>
              </div>
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#C0001B]/20 hover:shadow-md transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />
                <div className="w-12 h-12 bg-[#C0001B] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-500 leading-relaxed">
                  To be the most trusted, technologically advanced, and customer-centric Urban Cooperative Bank in Madhya Pradesh — setting the standard for personalised banking and proving that cooperative values and modern excellence can thrive together.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="bg-gray-50 border-t border-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">Our Core Values</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Stand For</h2>
                <p className="text-gray-500 max-w-md mx-auto">These principles guide every decision we make and every relationship we build.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {values.map((v, i) => (
                  <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />
                    <div className="w-11 h-11 rounded-xl bg-[#C0001B]/8 flex items-center justify-center mb-4 group-hover:bg-[#C0001B] transition-colors">
                      <v.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
              <div className="text-center mb-14">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">Our Journey</span>
                <h2 className="text-3xl font-bold text-gray-900">Milestones That Define Us</h2>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-[#C0001B]/15" />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <div key={i} className="relative flex gap-6 group">
                      <div className="absolute left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C0001B] border-2 border-white shadow-sm shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                      <div className="pl-12">
                        <span className="text-xs font-bold text-[#C0001B]">{m.year}</span>
                        <h3 className="font-bold text-gray-900 mt-0.5 mb-1">{m.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Board of Directors */}
          <section className="bg-gray-50 border-t border-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">Leadership</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Board of Directors</h2>
                <p className="text-gray-500 max-w-md mx-auto">Guided by experienced leaders dedicated to ethical conduct and cooperative prosperity.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {board.map((b, i) => (
                  <div key={i} className="group text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-[#C0001B] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all shadow-[0_4px_16px_rgba(192,0,27,0.2)]">
                      <span className="text-2xl font-bold text-white">{b.initials}</span>
                    </div>
                    <h3 className="font-bold text-gray-900">{b.name}</h3>
                    <p className="text-xs font-bold text-[#C0001B] uppercase tracking-widest mt-1">{b.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to join the <span className="italic text-[#C0001B]">Mahanagar family</span>?
              </h2>
              <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Open your account today and experience the warmth of cooperative banking backed by 70 years of trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/savings-account" className="inline-flex items-center justify-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_16px_rgba(192,0,27,0.25)]">
                  Open Account <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-xl hover:bg-[#FFF5F6] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
