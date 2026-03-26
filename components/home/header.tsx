"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import {
  Menu, Globe, Shield, Building2, CreditCard, Landmark, PiggyBank, Home,
  Car, GraduationCap, Briefcase, Smartphone, Calculator, Users, FileText,
  Search, MapPin, MessageCircle, Sun, Moon, Type, Bell, ChevronDown,
  MonitorSmartphone, ChevronRight, Repeat, Coins, Phone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useBankingSegment } from "./banking-segment-context"

// ─── Mega Menu Data ──────────────────────────────────────────────────────────

const megaMenuData = {
  personal: {
    Accounts: {
      sections: [
        {
          heading: "Deposit Accounts",
          links: [
            { label: "Savings Account", href: "/savings-account", desc: "Zero minimum balance · up to 6% p.a." },
            { label: "Interest Rates", href: "/interest-rates", desc: "All deposit & loan rates in one place" },
            { label: "Service Charges", href: "/service-charges", desc: "Transparent fee structure" },
          ]
        },
        {
          heading: "Quick Actions",
          links: [
            { label: "Open an Account", href: "/savings-account", desc: "Start online in minutes" },
            { label: "Locate Us", href: "/locate-us", desc: "Find your nearest branch" },
            { label: "Download Forms", href: "/download-forms", desc: "All forms in one place" },
          ]
        }
      ],
      highlight: { label: "Savings Account", rate: "6.00% p.a.", href: "/savings-account" }
    },
    Deposits: {
      sections: [
        {
          heading: "Deposit Schemes",
          links: [
            { label: "Time Deposit (FD)", href: "/time-deposit", desc: "Guaranteed returns · up to 7.00% p.a." },
            { label: "Recurring Deposit", href: "/recurring-deposit", desc: "Monthly savings · up to 6.50% p.a." },
            { label: "Double Deposit", href: "/double-deposit", desc: "Flagship scheme to double your money" },
          ]
        },
        {
          heading: "Tools",
          links: [
            { label: "EMI Calculator", href: "/emi-calculator", desc: "Calculate your loan EMI" },
            { label: "Interest Rates", href: "/interest-rates", desc: "Compare all deposit rates" },
          ]
        }
      ],
      highlight: { label: "Special FD", rate: "7.00% p.a.", href: "/time-deposit" }
    },
    Loans: {
      sections: [
        {
          heading: "Personal Loans",
          links: [
            { label: "Home Loan", href: "/home-loan", desc: "From 8.50% p.a." },
            { label: "Gold Loan", href: "/gold-loan", desc: "From 9.00% · Instant disbursal" },
            { label: "Personal Loan", href: "/personal-loan", desc: "From 12.00% p.a." },
            { label: "Car Loan", href: "/car-loan", desc: "From 9.50% p.a." },
            { label: "Education Loan", href: "/education-loan", desc: "From 10.00% p.a." },
          ]
        },
        {
          heading: "More Loans",
          links: [
            { label: "Festival Loan", href: "/festival-loan", desc: "Seasonal personal finance" },
            { label: "Loan Against FD", href: "/loan-against-fd", desc: "Use your FD as collateral" },
            { label: "Loan Against Property", href: "/loan-against-property", desc: "Tap into property equity" },
            { label: "EMI Calculator", href: "/emi-calculator", desc: "Plan your repayments" },
          ]
        }
      ],
      highlight: { label: "Gold Loan", rate: "From 9.00%", href: "/gold-loan" }
    },
    Services: {
      sections: [
        {
          heading: "Digital Banking",
          links: [
            { label: "Net Banking", href: "/net-banking", desc: "Secure 24×7 online banking" },
            { label: "Mobile Banking", href: "/mobile-banking", desc: "Full banking app for Android & iOS" },
            { label: "UPI / QR Payments", href: "/upi-qr", desc: "Instant transfers via UPI" },
            { label: "BBPS Bill Pay", href: "/bbps", desc: "Pay all your utility bills" },
            { label: "Debit Cards", href: "/debit-cards", desc: "RuPay powered debit cards" },
          ]
        },
        {
          heading: "Other Services",
          links: [
            { label: "Safe Deposit Locker", href: "/locker", desc: "Secure vault for valuables" },
            { label: "NEFT / RTGS", href: "/neft-rtgs", desc: "Interbank fund transfers" },
            { label: "IMPS", href: "/imps", desc: "Immediate payment system" },
            { label: "ATM Services", href: "/atm", desc: "ATM network & limits" },
          ]
        }
      ],
      highlight: null
    },
    "Stay Connected": {
      sections: [
        {
          heading: "Find Us",
          links: [
            { label: "Locate Us", href: "/locate-us", desc: "Branch & ATM locations" },
            { label: "IFSC Codes", href: "/ifsc-codes", desc: "All branch IFSC codes" },
            { label: "Contact Us", href: "/contact-us", desc: "Call / email support" },
          ]
        },
        {
          heading: "Help & Redressal",
          links: [
            { label: "Grievance Redressal", href: "/grievance-redressal", desc: "Lodge a formal complaint" },
            { label: "Feedback", href: "/feedback", desc: "Share your experience" },
            { label: "Cyber Awareness", href: "/cyber-awareness", desc: "Stay safe from fraud" },
          ]
        }
      ],
      highlight: null
    }
  },
  business: {
    Accounts: {
      sections: [
        {
          heading: "Business Accounts",
          links: [
            { label: "Current Account", href: "/current-account", desc: "High-volume transaction account" },
            { label: "Interest Rates", href: "/interest-rates", desc: "Latest business deposit rates" },
            { label: "Service Charges", href: "/service-charges", desc: "Business fee structure" },
          ]
        },
        {
          heading: "Quick Actions",
          links: [
            { label: "Open Current Account", href: "/current-account", desc: "Start in minutes" },
            { label: "Contact a RM", href: "/contact-us", desc: "Talk to a relationship manager" },
          ]
        }
      ],
      highlight: null
    },
    Deposits: {
      sections: [
        {
          heading: "Business Deposits",
          links: [
            { label: "Business Time Deposit", href: "/biz-time-deposit", desc: "Secure fixed returns" },
            { label: "Business Recurring Deposit", href: "/biz-recurring-deposit", desc: "Regular business savings" },
            { label: "Business Double Deposit", href: "/biz-double-deposit", desc: "Double your surplus funds" },
          ]
        }
      ],
      highlight: { label: "Business FD", rate: "7.00% p.a.", href: "/biz-time-deposit" }
    },
    Loans: {
      sections: [
        {
          heading: "Business Loans",
          links: [
            { label: "Working Capital Loan", href: "/working-capital-loan", desc: "Day-to-day operations" },
            { label: "Overdraft Facility", href: "/overdraft-facility", desc: "Flexible credit limits" },
            { label: "Transport Loan", href: "/transport-loan", desc: "Commercial vehicle finance" },
            { label: "Professional Loan", href: "/professional-loan", desc: "For doctors, CAs & professionals" },
            { label: "Micro Finance", href: "/micro-finance", desc: "SHG / JLG lending" },
            { label: "Self Employed Loan", href: "/self-employed-loan", desc: "For traders & freelancers" },
          ]
        },
        {
          heading: "Tools",
          links: [
            { label: "Business EMI Calculator", href: "/business/emi-calculator", desc: "Plan your business loan EMI" },
          ]
        }
      ],
      highlight: { label: "Working Capital", rate: "From 13.00%", href: "/working-capital-loan" }
    },
    Services: {
      sections: [
        {
          heading: "Digital Services",
          links: [
            { label: "Net Banking", href: "/net-banking", desc: "Secure online banking" },
            { label: "Mobile Banking", href: "/mobile-banking", desc: "Banking on the go" },
            { label: "UPI / QR Payments", href: "/upi-qr", desc: "Instant transfers" },
            { label: "BBPS Bill Pay", href: "/bbps", desc: "Utility bill payments" },
          ]
        }
      ],
      highlight: null
    },
    "Stay Connected": {
      sections: [
        {
          heading: "Support",
          links: [
            { label: "Contact Us", href: "/contact-us", desc: "Get in touch" },
            { label: "Locate Us", href: "/locate-us", desc: "Branch & ATM locator" },
            { label: "Grievance Redressal", href: "/grievance-redressal", desc: "Lodge a complaint" },
          ]
        }
      ],
      highlight: null
    }
  }
}

// ─── Types ───────────────────────────────────────────────────────────────────

type SegmentKey = "personal" | "business"
type NavKey = keyof typeof megaMenuData["personal"]

// ─── Main Header Component ───────────────────────────────────────────────────

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<NavKey | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState<"normal" | "large" | "x-large">("normal")
  const [showNotif, setShowNotif] = useState(false)
  const notifRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { segment, setSegment } = useBankingSegment()

  const toggleDark = useCallback(() => {
    setDarkMode(prev => {
      const next = !prev
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }, [])

  const cycleFont = useCallback(() => {
    setFontSize(prev => {
      const next = prev === "normal" ? "large" : prev === "large" ? "x-large" : "normal"
      const sizeMap = { normal: "16px", large: "18px", "x-large": "20px" }
      document.documentElement.style.fontSize = sizeMap[next]
      return next
    })
  }, [])

  // Close notification dropdown on outside click
  useEffect(() => {
    function handleNotifOutside(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotif(false)
      }
    }
    document.addEventListener("mousedown", handleNotifOutside)
    return () => document.removeEventListener("mousedown", handleNotifOutside)
  }, [])

  const navKeys = Object.keys(megaMenuData[segment as SegmentKey]) as NavKey[]
  const currentMenu = megaMenuData[segment as SegmentKey]

  // Close mega menu on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener("mousedown", handle)
    return () => document.removeEventListener("mousedown", handle)
  }, [])

  const topTabs = [
    { id: "personal", label: "Personal" },
    { id: "business", label: "Business" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white" ref={menuRef}>

      {/* ── Row 1: Segment tabs + utility icons ── */}
      <div className="relative w-full overflow-hidden sm:overflow-visible">
        <div className="absolute top-0 left-0 w-full h-[40px] bg-[#C0001B] z-0" />
        <div className="relative z-10 mx-auto flex max-w-[1920px]">

          {/* Logo slant */}
          <div
            className="bg-[#C0001B] pt-3 pb-2 pl-4 pr-12 xl:pr-16 flex items-center shrink-0 relative min-w-[200px] md:min-w-[260px]"
            style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 25px) 100%, 0 100%)" }}
          >
            <Link href="/" className="bg-white/95 p-1.5 md:p-2 rounded-xl flex items-center justify-center shadow-sm relative z-20 transition-transform hover:scale-105">
              <Image src="/mnslogo.jpeg" alt="MNS Bank Logo" width={150} height={40} className="h-8 md:h-10 w-auto mix-blend-multiply" priority />
            </Link>
          </div>

          <div className="flex-1 flex flex-col min-w-0">
            {/* Segment tabs + icons row */}
            <div className="flex justify-between items-end h-[40px] px-2 md:px-4">
              <div className="hidden sm:flex gap-1 pl-1">
                {topTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => { setSegment(tab.id as SegmentKey); setActiveMenu(null) }}
                    className={cn(
                      "px-4 md:px-5 py-2 rounded-t-xl font-medium text-xs md:text-sm transition-all",
                      segment === tab.id
                        ? "bg-white text-[#C0001B] z-10"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="sm:hidden pl-2 text-white font-medium text-sm self-center">
                {segment === "personal" ? "Personal" : "Business"}
              </div>
              {/* Utility icons */}
              <div className="flex items-center gap-4 pb-2 text-white/90 text-xs md:text-sm shrink-0 pr-2">
                <Link href="/about-us" className="hover:text-white hidden transition-colors xl:block">About Us</Link>
                <div className="flex items-center gap-3.5">
                  {/* Locate Us */}
                  <Link href="/locate-us" title="Locate Branch" className="hover:text-white transition-colors">
                    <MapPin className="h-4 w-4" />
                  </Link>
                  {/* Feedback */}
                  <Link href="/feedback" title="Share Feedback" className="hover:text-white transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                  <div className="hidden md:flex items-center gap-3.5 border-l border-white/30 pl-3.5">
                    {/* Dark / Light toggle */}
                    <button
                      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                      onClick={toggleDark}
                      className="hover:text-white transition-colors"
                    >
                      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    {/* Font size */}
                    <button
                      title={`Text Size: ${fontSize} (click to change)`}
                      onClick={cycleFont}
                      className="relative hover:text-white transition-colors"
                    >
                      <Type className="h-4 w-4" />
                      {fontSize !== "normal" && (
                        <span className="absolute -top-1.5 -right-1.5 text-[8px] font-bold bg-yellow-400 text-[#C0001B] rounded-full w-3 h-3 flex items-center justify-center">
                          {fontSize === "large" ? "A" : "A+"}
                        </span>
                      )}
                    </button>
                    {/* Notifications */}
                    <div className="relative" ref={notifRef}>
                      <button
                        title="Announcements"
                        onClick={() => setShowNotif(v => !v)}
                        className="relative hover:text-white transition-colors"
                      >
                        <Bell className="h-4 w-4" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full" />
                      </button>
                      {showNotif && (
                        <div className="absolute right-0 top-7 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 z-[200] overflow-hidden">
                          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Announcements</span>
                            <button onClick={() => setShowNotif(false)} className="text-gray-400 hover:text-gray-700 text-xs">✕</button>
                          </div>
                          <ul className="divide-y divide-gray-50">
                            {[
                              { title: "Special FD Rate", desc: "1-Year FD now at 7.00% p.a. Limited period offer.", time: "Today", href: "/time-deposit" },
                              { title: "DICGC Insurance", desc: "Your deposits are insured up to ₹5,00,000 by Govt. of India.", time: "26 Mar", href: "/deposits" },
                            ].map(n => (
                              <li key={n.title}>
                                <Link href={n.href} onClick={() => setShowNotif(false)}
                                  className="flex flex-col gap-0.5 px-4 py-3 hover:bg-[#FFF5F6] transition-colors">
                                  <span className="text-sm font-semibold text-gray-800">{n.title}</span>
                                  <span className="text-xs text-gray-500 leading-relaxed">{n.desc}</span>
                                  <span className="text-[10px] text-gray-400 mt-0.5">{n.time}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="px-4 py-2.5 border-t border-gray-100">
                            <Link href="/announcements" onClick={() => setShowNotif(false)}
                              className="text-xs font-bold text-[#C0001B] hover:underline">View all announcements →</Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Row 2: Search + Actions ── */}
            <div className="bg-white h-[60px] md:h-[68px] flex items-center justify-between px-2 md:px-6 rounded-tl-2xl -ml-2 sm:-ml-4 relative z-10 flex-1 border-b border-gray-100/50">
              {/* Search */}
              <div className="flex-1 flex items-center min-w-0 pr-4 pl-4 sm:pl-6">
                <div className="relative w-full max-w-md hidden md:flex items-center">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C0001B]/60 h-4 w-4" />
                  <input
                    className="w-full pl-9 pr-4 py-2 bg-gray-50/80 rounded-full border border-gray-200/80 text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] placeholder:text-gray-400 transition-all font-medium text-gray-700"
                    placeholder="What are you looking for today?"
                  />
                </div>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-3 md:gap-4 shrink-0 pr-2">
                <div className="hidden lg:flex items-center gap-4 text-sm">
                  <Link href="/contact-us" className="text-[#C0001B] font-semibold hover:text-[#C0001B]/70 transition-colors">Support</Link>
                  <Link href="/grievance-redressal" className="text-[#C0001B] font-semibold border-l-2 border-[#C0001B]/20 pl-4 hover:text-[#C0001B]/70 transition-colors">Lodge a Complaint</Link>
                </div>
                <Button variant="outline" className="hidden sm:inline-flex rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-[#C0001B] h-10 md:h-11 px-4 font-semibold transition-all">
                  Open Digital A/C
                </Button>
                <Button className="bg-[#C0001B] hover:bg-[#8B0015] text-white rounded-xl shadow-[0_4px_12px_rgba(139,0,21,0.2)] h-10 md:h-11 px-4 md:px-6 font-semibold transition-all group">
                  Login <ChevronDown className="ml-1.5 h-4 w-4 opacity-80" />
                </Button>
                {/* Mobile trigger */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="lg:hidden ml-1">
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-700 hover:bg-gray-100 rounded-xl">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[85vw] sm:w-[400px] overflow-y-auto p-0 z-[100]">
                    <div className="p-5">
                      <SheetHeader className="text-left mb-5">
                        <Image src="/mnslogo.jpeg" alt="MNS Bank" width={140} height={40} className="h-8 w-auto mix-blend-multiply" />
                      </SheetHeader>
                      {/* Mobile segment switcher */}
                      <div className="flex p-1 bg-gray-100 rounded-xl mb-5 border border-gray-200">
                        {topTabs.map(tab => (
                          <button key={tab.id} onClick={() => { setSegment(tab.id as SegmentKey); setMobileExpanded(null) }}
                            className={cn("flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all", segment === tab.id ? "bg-white text-[#C0001B] shadow-sm" : "text-gray-500 hover:text-gray-700")}
                          >{tab.label}</button>
                        ))}
                      </div>
                      {/* Mobile nav items */}
                      <nav className="flex flex-col gap-1">
                        {navKeys.map(key => {
                          const data = currentMenu[key]
                          const expanded = mobileExpanded === key
                          return (
                            <div key={key}>
                              <button
                                onClick={() => setMobileExpanded(expanded ? null : key)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                              >
                                {key}
                                <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", expanded && "rotate-180")} />
                              </button>
                              {expanded && (
                                <div className="pl-4 pb-2 flex flex-col gap-1">
                                  {data.sections.map(sec => sec.links.map(link => (
                                    <Link key={link.href} href={link.href}
                                      className="px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#C0001B] hover:bg-red-50/50 font-medium transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >{link.label}</Link>
                                  )))}
                                </div>
                              )}
                            </div>
                          )
                        })}
                        <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-2">
                          <Link href="/about-us" className="px-4 py-2 text-sm font-semibold text-gray-700" onClick={() => setIsOpen(false)}>About Us</Link>
                          <Link href="/contact-us" className="px-4 py-2 text-sm font-semibold text-[#C0001B]" onClick={() => setIsOpen(false)}>Support</Link>
                          <Link href="/grievance-redressal" className="px-4 py-2 text-sm font-semibold text-[#C0001B]" onClick={() => setIsOpen(false)}>Lodge a Complaint</Link>
                        </div>
                        <div className="pt-3 space-y-2 pb-8">
                          <Button className="w-full bg-[#C0001B] hover:bg-[#8B0015] text-white h-12 rounded-xl font-semibold">Login to Net Banking</Button>
                          <Button variant="outline" className="w-full border-gray-200 text-gray-700 h-12 rounded-xl font-semibold">Open Digital Account</Button>
                        </div>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Row 3: Product Nav ── */}
      <div className="bg-white border-b border-gray-100 relative z-40">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 hidden lg:flex">
          {navKeys.map(key => (
            <button
              key={key}
              onMouseEnter={() => setActiveMenu(key)}
              onFocus={() => setActiveMenu(key)}
              onClick={() => setActiveMenu(activeMenu === key ? null : key)}
              className={cn(
                "px-5 py-4 text-[14px] font-medium transition-all relative border-b-2 flex items-center gap-1.5",
                activeMenu === key
                  ? "text-[#C0001B] border-[#C0001B]"
                  : "text-gray-700 border-transparent hover:text-[#C0001B] hover:border-[#C0001B]/40"
              )}
            >
              {key}
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform opacity-60", activeMenu === key && "rotate-180")} />
            </button>
          ))}
        </div>

        {/* ── Mega Menu Dropdown ── */}
        {activeMenu && (
          <div
            className="absolute left-0 right-0 top-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)] border-t border-gray-100 z-50"
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex gap-12">
                {/* Left: sections with links */}
                <div className="flex-1 grid grid-cols-2 gap-x-16 gap-y-6">
                  {currentMenu[activeMenu].sections.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">{section.heading}</h3>
                      <ul className="space-y-1">
                        {section.links.map(link => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[#FFF5F6] transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C0001B]/30 mt-2 shrink-0 group-hover:bg-[#C0001B] transition-colors" />
                              <div>
                                <div className="text-[14px] font-semibold text-gray-800 group-hover:text-[#C0001B] transition-colors">{link.label}</div>
                                {link.desc && <div className="text-[12px] text-gray-400 mt-0.5">{link.desc}</div>}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Right: highlight card */}
                {currentMenu[activeMenu].highlight && (
                  <div className="w-64 shrink-0">
                    <div className="bg-gradient-to-br from-[#C0001B] to-[#8B0015] rounded-2xl p-6 text-white relative overflow-hidden h-full flex flex-col justify-between">
                      <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Featured</span>
                        <div className="text-[22px] font-bold mt-2 leading-tight">{currentMenu[activeMenu].highlight!.label}</div>
                        <div className="text-[28px] font-bold mt-1">{currentMenu[activeMenu].highlight!.rate}</div>
                      </div>
                      <Link
                        href={currentMenu[activeMenu].highlight!.href}
                        onClick={() => setActiveMenu(null)}
                        className="mt-6 inline-flex items-center gap-2 bg-white text-[#C0001B] text-sm font-bold px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
                      >
                        Explore <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom browse all */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">Browse all {activeMenu.toLowerCase()} products & services</span>
                <Link href="#" onClick={() => setActiveMenu(null)} className="text-sm font-bold text-[#C0001B] flex items-center gap-1 hover:gap-2 transition-all">
                  View all <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
