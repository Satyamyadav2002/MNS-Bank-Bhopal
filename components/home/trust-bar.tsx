"use client"
import { Shield, Landmark, Award, Users, Building2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function TrustBar() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Shield, num: 5, suffix: "L", label: "DICGC Insured", duration: 1500, color: "text-[#C0001B]", bg: "bg-[#C0001B]/8" },
    { icon: Landmark, num: 100, suffix: "%", label: "RBI Regulated", duration: 1500, color: "text-[#C9922A]", bg: "bg-[#C9922A]/10" },
    { icon: Award, num: 70, suffix: "+", label: "Years Trust", duration: 2000, color: "text-[#C0001B]", bg: "bg-[#C0001B]/8" },
    { icon: Users, num: 50, suffix: "k+", label: "Members", duration: 2500, color: "text-[#C9922A]", bg: "bg-[#C9922A]/10" },
    { icon: Building2, num: 3, suffix: "", label: "Branches", duration: 1000, color: "text-[#C0001B]", bg: "bg-[#C0001B]/8" },
  ]

  return (
    <div className="relative z-20 -mt-12 mx-auto max-w-[92%] lg:max-w-6xl" ref={ref}>
      <div className="bg-white rounded-[20px] shadow-[0_16px_48px_rgba(0,0,0,0.06)] border border-[#C9922A]/15 overflow-hidden relative">
        {/* Gold separator top */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#C9922A]/30 to-transparent" />
        
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <div key={i} className="group relative py-9 px-4 flex flex-col items-center justify-center hover:bg-gradient-to-b from-[#FAF7F2]/50 to-transparent transition-all duration-400 cursor-default">
              {/* Vertical divider */}
              {i > 0 && (
                <div className="absolute left-0 top-[20%] bottom-[20%] w-px bg-gradient-to-b from-transparent via-[#E5E0D8] to-transparent hidden lg:block" />
              )}
              
              <div className={`w-11 h-11 ${stat.bg} rounded-xl flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform duration-400`}>
                <stat.icon className={`w-5.5 h-5.5 ${stat.color}`} />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-mono text-[32px] font-bold text-[#2B2D42] tracking-tight">
                  {isVisible ? <CountUp end={stat.num} duration={stat.duration} /> : "0"}
                </span>
                <span className="font-mono text-[22px] font-bold text-gold-gradient">{stat.suffix}</span>
              </div>
              <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-[0.1em] mt-1.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CountUp({ end, duration }: { end: number, duration: number }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart for premium feel
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>
}
