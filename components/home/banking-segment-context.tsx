"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type BankingSegment = "personal" | "business"

interface BankingSegmentContextType {
  segment: BankingSegment
  setSegment: (segment: BankingSegment) => void
}

const BankingSegmentContext = createContext<BankingSegmentContextType>({
  segment: "personal",
  setSegment: () => {},
})

export function BankingSegmentProvider({ children }: { children: ReactNode }) {
  const [segment, setSegment] = useState<BankingSegment>("personal")
  return (
    <BankingSegmentContext.Provider value={{ segment, setSegment }}>
      {children}
    </BankingSegmentContext.Provider>
  )
}

export function useBankingSegment() {
  return useContext(BankingSegmentContext)
}
