"use client"
import { useState } from "react"
import Link from "next/link"
import { Home, Package, Calculator, MapPin, PhoneCall } from "lucide-react"

export function MobileNav() {
  const [activeTab, setActiveTab] = useState("Home")

  const tabs = [
    { name: "Home", href: "#", icon: Home },
    { name: "Products", href: "#products", icon: Package },
    { name: "Calculator", href: "#calculator", icon: Calculator },
    { name: "Branches", href: "#branches", icon: MapPin },
    { name: "Contact", href: "#contact", icon: PhoneCall },
  ]

  return (
    <div className="mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50 lg:hidden flex" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name
        return (
          <Link 
            key={tab.name}
            href={tab.href} 
            onClick={() => setActiveTab(tab.name)}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 relative active:scale-[0.92] transition-all duration-200"
            style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            <tab.icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#C0001B]' : 'text-[#6B7280]'}`} />
            <span className={`text-[10px] font-bold transition-colors duration-300 ${isActive ? 'text-[#C0001B]' : 'text-[#6B7280]'}`}>
              {tab.name}
            </span>
            
            {/* Gold gradient indicator dot */}
            <div className={`absolute bottom-1.5 w-1 h-1 rounded-full bg-[#C0001B] transition-all duration-400 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
          </Link>
        )
      })}
    </div>
  )
}
