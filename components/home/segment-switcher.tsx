"use client"
import { useBankingSegment } from "./banking-segment-context"
import { Building2, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function SegmentSwitcher() {
  const { segment, setSegment } = useBankingSegment()

  return (
    <div className="bg-[#1A1A2E] text-white text-xs relative z-[60]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
        {/* Segment Tabs */}
        <div className="flex items-center gap-0.5 bg-white/[0.08] rounded-full p-0.5">
          <button
            onClick={() => setSegment("personal")}
            className={cn(
              "flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300",
              segment === "personal"
                ? "bg-[#C0001B] text-white shadow-[0_2px_8px_rgba(192,0,27,0.4)]"
                : "text-white/60 hover:text-white/90"
            )}
          >
            <User className="w-3 h-3" />
            Personal
          </button>
          <button
            onClick={() => setSegment("business")}
            className={cn(
              "flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300",
              segment === "business"
                ? "bg-[#C0001B] text-white shadow-[0_2px_8px_rgba(192,0,27,0.4)]"
                : "text-white/60 hover:text-white/90"
            )}
          >
            <Building2 className="w-3 h-3" />
            Business
          </button>
        </div>

        {/* Right side info */}
        <div className="hidden sm:flex items-center gap-3 text-[10px] text-white/40 font-medium">
          <span>RBI Registered</span>
          <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
          <span>DICGC Insured</span>
          <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
          <span>Est. 1954</span>
        </div>
      </div>
    </div>
  )
}
