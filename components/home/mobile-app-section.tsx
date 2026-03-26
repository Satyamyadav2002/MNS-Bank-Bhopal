"use client"
import Link from "next/link"
import { ArrowRight, Repeat, CreditCard, Zap, BarChart3, Landmark, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const leftFeatures = [
  { icon: Repeat, label: "Instant Fund Transfers", sub: "NEFT · RTGS · IMPS · UPI" },
  { icon: Zap, label: "One-stop Bill Pay", sub: "Electricity · Gas · Water · LIC" },
  { icon: BarChart3, label: "Account Insights", sub: "Statements · Mini Passbook" },
]

const rightFeatures = [
  { icon: CreditCard, label: "Manage Debit Card", sub: "Block · Limits · Hotlist" },
  { icon: Landmark, label: "Open FD Instantly", sub: "Earn up to 7.00% p.a." },
  { icon: ShieldCheck, label: "Secure & DICGC Safe", sub: "Insured up to ₹5,00,000" },
]

const floatingCards = [
  { label: "Bill Payments", top: "12%", left: "18%", rotate: "-6deg" },
  { label: "Send Money", top: "8%", left: "36%", rotate: "4deg" },
  { label: "Manage Cards", top: "14%", right: "20%", rotate: "-3deg" },
  { label: "Fixed Deposits", bottom: "22%", left: "22%", rotate: "5deg" },
  { label: "Apply Loan", bottom: "18%", right: "16%", rotate: "-4deg" },
  { label: "UPI / QR Pay", top: "46%", left: "10%", rotate: "3deg" },
  { label: "Add Nominee", bottom: "40%", right: "10%", rotate: "6deg" },
]

export function MobileAppSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The best of digital banking is now{" "}
            <span className="italic text-[#C0001B]">open</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            Get the full power of MNS Bank on your phone —{" "}
            <Link href="/mobile-banking" className="text-[#C0001B] font-semibold hover:underline">
              Explore Mobile Banking →
            </Link>
          </p>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left features */}
          <div className="space-y-8">
            {leftFeatures.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-center gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C0001B]/8 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-[#C0001B]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{f.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Centre — phone mockup */}
          <div className="relative flex justify-center items-center min-h-[420px]">
            {/* Glow */}
            <div className="absolute w-64 h-64 bg-[#C0001B]/10 rounded-full blur-3xl" />

            {/* Floating feature cards */}
            {floatingCards.map((card, i) => (
              <div
                key={card.label}
                className={`absolute px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100 text-xs font-bold text-gray-700 whitespace-nowrap z-20 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{
                  top: card.top,
                  bottom: card.bottom,
                  left: card.left,
                  right: card.right,
                  transform: `rotate(${card.rotate})`,
                  transitionDelay: `${200 + i * 80}ms`,
                }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#C0001B] mr-1.5 align-middle" />
                {card.label}
              </div>
            ))}

            {/* Phone body */}
            <div
              className={`relative z-10 w-[160px] sm:w-[180px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              {/* Phone frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-gradient-to-b from-[#C0001B] to-[#7A0012] rounded-[2rem] overflow-hidden aspect-[9/19] flex flex-col items-center justify-center relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-900 rounded-full" />
                  {/* Screen content */}
                  <div className="text-center px-4 mt-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                      <Landmark className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white font-bold text-lg leading-tight">MNS</div>
                    <div className="text-white/70 text-[10px] font-semibold tracking-widest uppercase">Bank</div>
                    <div className="mt-4 space-y-1.5">
                      {["Bill Pay", "Send Money", "Fixed Deposit"].map(item => (
                        <div key={item} className="bg-white/15 rounded-lg px-3 py-1.5 text-white text-[10px] font-semibold flex items-center justify-between">
                          {item}
                          <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="space-y-8">
            {rightFeatures.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-center gap-4 lg:flex-row-reverse lg:text-right transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C0001B]/8 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-[#C0001B]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{f.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/mobile-banking"
            className="inline-flex items-center gap-2 bg-[#C0001B] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#8B0015] transition-colors shadow-[0_4px_16px_rgba(192,0,27,0.25)]"
          >
            Download the App <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/net-banking"
            className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3.5 rounded-full hover:bg-[#FFF5F6] transition-colors"
          >
            Use Net Banking
          </Link>
        </div>
      </div>
    </section>
  )
}
