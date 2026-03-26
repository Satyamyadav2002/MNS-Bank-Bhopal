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
    { icon: Shield, num: 5, suffix: "L", label: "DICGC Insured", duration: 1500 },
    { icon: Landmark, num: 100, suffix: "%", label: "RBI Regulated", duration: 1500 },
    { icon: Award, num: 70, suffix: "+", label: "Years Trust", duration: 2000 },
    { icon: Users, num: 50, suffix: "k+", label: "Members", duration: 2500 },
    { icon: Building2, num: 3, suffix: "", label: "Branches", duration: 1000 },
  ]

  return (
    <div className="relative z-20 -mt-12 mx-auto max-w-[92%] lg:max-w-6xl" ref={ref}>
      <div className="bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden relative">
        {/* Red top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C0001B] via-[#E5293E] to-[#C0001B]" />
        
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <div key={i} className="group relative py-9 px-4 flex flex-col items-center justify-center hover:bg-gray-50/50 transition-all duration-300 cursor-default">
              {/* Vertical divider */}
              {i > 0 && (
                <div className="absolute left-0 top-[20%] bottom-[20%] w-px bg-gray-100 hidden lg:block" />
              )}
              
              <div className="w-11 h-11 bg-[#C0001B]/8 rounded-xl flex items-center justify-center mb-3.5 group-hover:bg-[#C0001B] group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-5 h-5 text-[#C0001B] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-mono text-[32px] font-bold text-gray-900 tracking-tight">
                  {isVisible ? <CountUp end={stat.num} duration={stat.duration} /> : "0"}
                </span>
                <span className="font-mono text-[22px] font-bold text-[#C0001B]">{stat.suffix}</span>
              </div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] mt-1.5">{stat.label}</span>
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
