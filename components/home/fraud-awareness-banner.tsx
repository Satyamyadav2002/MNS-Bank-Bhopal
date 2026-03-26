"use client"
import { Shield, AlertTriangle, Smartphone, KeyRound, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const tips = [
  { icon: KeyRound,     text: "Never share your OTP, PIN, or password with anyone — including bank staff." },
  { icon: Smartphone,   text: "Download MNS Mobile Banking only from Google Play or App Store." },
  { icon: AlertTriangle, text: "MNS Bank will never call to ask for your card number, CVV, or UPI PIN." },
]

export function FraudAwarenessBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100/60 border-b border-amber-200 py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-center gap-6 overflow-x-auto text-sm">
            <span className="font-bold text-amber-800 shrink-0">🔒 Stay Safe:</span>
            {tips.map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 text-amber-700 shrink-0">
                <t.icon className="w-3.5 h-3.5" /> {t.text}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/cyber-awareness" className="text-xs font-bold text-[#C0001B] hover:underline shrink-0">Learn More</Link>
          <button onClick={() => setVisible(false)} className="text-amber-400 hover:text-amber-600 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
