"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowRight, Home, Car, Building2, UserCircle, Briefcase, Landmark, ShieldCheck, Wallet, PiggyBank, Percent, ArrowUpRight, MapPin, Calculator, Download, PhoneCall, Building, FileText, Info, Factory, Banknote, HandCoins, TrendingUp, Layers, CircleDollarSign, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useBankingSegment } from "./banking-segment-context"

// ─── Personal Banking Menu Data ──────────────────────────────────────────
const personalMenuData = {
  Loans: {
    featured: {
      tag: "✨ Special This Month",
      title: "Home Loan @ 8.50%",
      desc: "Processing fee waived till March 31.",
      cta: "Apply Now",
      href: "/loans/home-loans"
    },
    products: [
      { icon: Home, title: "Home Loans", href: "/loans/home-loans", desc: "Build your dream home" },
      { icon: Car, title: "Vehicle Loans", href: "/loans/vehicle-loans", desc: "Drive your dream car" },
      { icon: UserCircle, title: "Personal Loans", href: "/loans/personal-loans", desc: "For all your needs" },
      { icon: Banknote, title: "Gold Loans", href: "/loans/gold-loans", desc: "Quick loan against gold" }
    ],
    allLink: "View all loan products",
    allHref: "/loans"
  },
  Accounts: {
    featured: {
      tag: "⭐ Most Popular",
      title: "Premium Savings",
      desc: "Zero balance requirement with max benefits.",
      cta: "Open Account",
      href: "/accounts/savings-account"
    },
    products: [
      { icon: Wallet, title: "Savings Account", href: "/accounts/savings-account", desc: "Everyday banking" },
      { icon: Building2, title: "Current Account", href: "/accounts/current-account", desc: "For your daily business" },
      { icon: ShieldCheck, title: "Salary Account", href: "/accounts/salary-account", desc: "Corporate benefits" },
      { icon: Landmark, title: "Trust Account", href: "/accounts/trust-account", desc: "For societies & trusts" }
    ],
    allLink: "View all account types",
    allHref: "/accounts"
  },
  Deposits: {
    featured: {
      tag: "🔥 Best Return",
      title: "1-Year Special FD",
      desc: "Earn up to 7.00% p.a. Secure growth.",
      cta: "Start Investing",
      href: "/deposits/fixed-deposits"
    },
    products: [
      { icon: Percent, title: "Fixed Deposits", href: "/deposits/fixed-deposits", desc: "Assured high returns" },
      { icon: PiggyBank, title: "Recurring Deposits", href: "/deposits/recurring-deposits", desc: "Save small, grow big" },
      { icon: ArrowUpRight, title: "Tax Saver FD", href: "/deposits/tax-saver-fd", desc: "Save tax under 80C" },
      { icon: ShieldCheck, title: "Senior Citizen FD", href: "/deposits/senior-citizen-fd", desc: "Extra 0.50% interest" }
    ],
    allLink: "View all deposit options",
    allHref: "/deposits"
  },
  Services: {
    featured: {
      tag: "📍 Find Us",
      title: "Branch & ATM Locator",
      desc: "Find the nearest MNS Bank branch or ATM.",
      cta: "Locate Us",
      href: "/branch-locator"
    },
    products: [
      { icon: Calculator, title: "EMI Calculator", href: "/emi-calculator", desc: "Plan your repayment" },
      { icon: Download, title: "Download Forms", href: "/download-forms", desc: "Get all customer forms" },
      { icon: PhoneCall, title: "Contact Us", href: "/contact-us", desc: "We're here to help" },
      { icon: MapPin, title: "Locate Branch", href: "/branch-locator", desc: "Find nearest branch" }
    ],
    allLink: "View all policies",
    allHref: "/policy-centre"
  },
  About: {
    featured: {
      tag: "🏛️ Legacy",
      title: "Since 1954",
      desc: "Serving Bhopal for over 70 years with trust.",
      cta: "Our Story",
      href: "/about-us"
    },
    products: [
      { icon: Building, title: "About Us", href: "/about-us", desc: "Our history & mission" },
      { icon: Briefcase, title: "Careers", href: "/careers", desc: "Join our team" },
      { icon: FileText, title: "Tenders", href: "/tenders", desc: "Active business tenders" },
      { icon: Info, title: "Grievances", href: "/grievance-redressal", desc: "Customer resolution" }
    ],
    allLink: "Read our privacy policy",
    allHref: "/privacy-policy"
  }
}

// ─── Business Banking Menu Data ──────────────────────────────────────────
const businessMenuData = {
  Loans: {
    featured: {
      tag: "💼 For Enterprises",
      title: "MSME Loan @ 9.50%",
      desc: "Quick disbursement with minimal documentation.",
      cta: "Apply Now",
      href: "/loans/business-loans"
    },
    products: [
      { icon: Briefcase, title: "Business Loans", href: "/loans/business-loans", desc: "Grow your enterprise" },
      { icon: Factory, title: "MSME Loans", href: "/loans/msme-loans", desc: "For micro & small units" },
      { icon: TrendingUp, title: "Working Capital", href: "/loans/working-capital", desc: "Fuel daily operations" },
      { icon: CircleDollarSign, title: "Overdraft Facility", href: "/loans/overdraft", desc: "Flexible credit line" }
    ],
    allLink: "View all business loans",
    allHref: "/loans"
  },
  Accounts: {
    featured: {
      tag: "🏢 For Business",
      title: "Business Current A/c",
      desc: "High transaction limits with premium benefits.",
      cta: "Open Account",
      href: "/accounts/current-account"
    },
    products: [
      { icon: Building2, title: "Current Account", href: "/accounts/current-account", desc: "High-volume transactions" },
      { icon: HandCoins, title: "Cash Credit Account", href: "/accounts/cash-credit", desc: "Credit against security" },
      { icon: Layers, title: "OD Account", href: "/accounts/overdraft", desc: "Overdraft facility" },
      { icon: Landmark, title: "Partnership Account", href: "/accounts/partnership", desc: "For firms & partners" }
    ],
    allLink: "View all business accounts",
    allHref: "/accounts"
  },
  Deposits: {
    featured: {
      tag: "📈 Institutional",
      title: "Corporate FD",
      desc: "Competitive rates for institutional deposits.",
      cta: "Start Investing",
      href: "/deposits/fixed-deposits"
    },
    products: [
      { icon: Percent, title: "Fixed Deposits", href: "/deposits/fixed-deposits", desc: "Assured returns for firms" },
      { icon: ArrowUpRight, title: "Flexi Deposits", href: "/deposits/flexi-deposits", desc: "Withdraw anytime" },
      { icon: ShieldCheck, title: "Institutional FD", href: "/deposits/institutional-fd", desc: "For corporates & trusts" },
      { icon: PiggyBank, title: "Recurring Deposits", href: "/deposits/recurring-deposits", desc: "Systematic savings" }
    ],
    allLink: "View all deposit options",
    allHref: "/deposits"
  },
  // Services & About are shared across segments
  Services: personalMenuData.Services,
  About: personalMenuData.About
}

type MenuDataType = typeof personalMenuData

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN')
  const { segment } = useBankingSegment()
  
  const megaMenuData: MenuDataType = segment === "personal" ? personalMenuData : businessMenuData
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const navItemsEN = ["Accounts", "Deposits", "Loans", "Services", "About"]
  const navItemsHI = ["खाते", "जमा", "ऋण", "सेवाएं", "हमारे बारे में"]
  
  const navItems = language === 'EN' ? navItemsEN : navItemsHI
  const getNavKey = (index: number) => navItemsEN[index]
  
  return (
    <header className={cn(
      "sticky top-0 z-50 h-[80px] transition-all duration-500 w-full",
      scrolled ? "glass-header-scrolled shadow-[0_8px_40px_rgba(0,0,0,0.08)]" : "glass-header"
    )}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        
        <Link href="/" className="flex items-center relative z-50 group">
          <Image
            src="/mnslogo.jpeg"
            alt="MNS Bank Logo"
            width={200}
            height={55}
            className="h-12 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>
        
        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full">
          {navItems.map((item, index) => {
            const key = getNavKey(index)
            return (
              <div key={key} className="group/nav h-full flex items-center px-5 relative">
                <Link 
                  href={megaMenuData[key as keyof typeof megaMenuData]?.allHref || "#"}
                  className="text-[15px] font-medium text-bank-charcoal hover:text-[#C0001B] transition-colors duration-300 flex items-center gap-1 relative py-2"
                >
                  <span className={language === 'HI' ? 'font-devanagari text-[16px]' : ''}>{item}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-bank-muted group-hover/nav:text-[#C0001B] group-hover/nav:-rotate-180 transition-all duration-400" />
                  {/* Gold gradient underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C0001B] to-[#C9922A] rounded-full transition-all duration-400 group-hover/nav:w-full" />
                </Link>
                
                {/* Premium Mega Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-6 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-50">
                    <div className="glass-panel w-[620px] rounded-[22px] shadow-[0_32px_80px_rgba(0,0,0,0.14)] flex flex-col overflow-hidden">
                      <div className="flex p-2.5">
                        {/* Left Column (Featured) */}
                        <div className="w-1/3 bg-gradient-to-br from-[#C9922A] via-[#A87820] to-[#8B6510] rounded-[18px] p-6 text-white flex flex-col justify-between relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-white/15 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2" />
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-[20px] translate-y-1/2 -translate-x-1/2" />
                          <div className="relative z-10 w-full">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm inline-block">{megaMenuData[key as keyof typeof megaMenuData].featured.tag}</span>
                            <h4 className="font-serif text-[22px] font-bold mt-4 mb-2 leading-tight">{megaMenuData[key as keyof typeof megaMenuData].featured.title}</h4>
                            <p className="text-[13px] text-white/85 mb-6 leading-relaxed">{megaMenuData[key as keyof typeof megaMenuData].featured.desc}</p>
                          </div>
                          <Button asChild className="w-full bg-white text-[#A87820] hover:bg-[#FAF6EF] rounded-xl font-bold shadow-lg relative z-10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl border-0">
                            <Link href={megaMenuData[key as keyof typeof megaMenuData].featured.href}>
                              {megaMenuData[key as keyof typeof megaMenuData].featured.cta} <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                        
                        {/* Right Column (2-grid products) */}
                        <div className="w-2/3 p-6 grid grid-cols-2 gap-x-4 gap-y-5">
                          {megaMenuData[key as keyof typeof megaMenuData].products.map((prod, idx) => (
                            <Link href={prod.href} key={idx} className="group/item flex items-start gap-3 p-3 -m-2 rounded-xl hover:bg-[#C0001B]/[0.04] transition-all duration-300">
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-md",
                                key === 'Accounts' ? 'bg-[#C0001B]/8 text-[#C0001B]' : 
                                key === 'Deposits' ? 'bg-[#C9922A]/10 text-[#A87820]' : 
                                key === 'Services' ? 'bg-cyan-500/8 text-cyan-600' :
                                key === 'About' ? 'bg-indigo-500/8 text-indigo-600' :
                                'bg-emerald-500/8 text-emerald-600'
                              )}>
                                <prod.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h5 className="font-bold text-[14px] text-bank-charcoal group-hover/item:text-[#C0001B] transition-colors duration-200">{prod.title}</h5>
                                <p className="text-[11px] text-bank-muted mt-0.5 leading-relaxed">{prod.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* Bottom strip */}
                      <div className="bg-gradient-to-r from-[#FAF6EF] to-[#F5ECE8] border-t border-[#C9922A]/10 p-4 text-center">
                        <Link href={megaMenuData[key as keyof typeof megaMenuData].allHref} className="text-sm font-bold text-[#C0001B] hover:text-[#8B0015] flex items-center justify-center gap-1.5 group/link transition-colors">
                          {megaMenuData[key as keyof typeof megaMenuData].allLink} 
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                </div>
              </div>
            )
          })}
        </nav>
        
        <div className="hidden lg:flex items-center gap-3 relative z-50">
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[#C9922A]/25 text-bank-charcoal font-bold text-sm hover:bg-[#FAF6EF] hover:border-[#C9922A]/50 transition-all duration-300 group relative bg-white/60 backdrop-blur-sm shadow-sm"
            aria-label="Toggle language between English and Hindi"
            title="Switch Language"
            onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
          >
            <span className="font-devanagari text-lg leading-none group-hover:hidden text-[#C0001B]">
              {language === 'EN' ? 'अ' : 'EN'}
            </span>
            <span className="hidden group-hover:block uppercase text-[#C0001B]">
              {language === 'EN' ? 'HI' : 'अ'}
            </span>
          </button>
          
          <Button asChild variant="outline" className="border-2 border-[#C0001B] text-[#C0001B] hover:bg-[#C0001B] hover:text-white rounded-full font-bold px-6 h-11 transition-all duration-300">
            <Link href="/auth/login">{language === 'EN' ? 'Net Banking' : 'नेट बैंकिंग'}</Link>
          </Button>
          <Button asChild className="bg-[#C0001B] hover:bg-[#8B0015] text-white rounded-full font-bold px-6 h-11 shadow-[0_4px_16px_rgba(192,0,27,0.35)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(192,0,27,0.45)] hover-shimmer-sweep border-0 overflow-hidden animate-glow-pulse">
            <Link href="/auth/register" className={language === 'HI' ? 'font-devanagari' : ''}>{language === 'EN' ? 'Open Account' : 'खाता खोलें'}</Link>
          </Button>
        </div>
        
        <button 
          className="lg:hidden p-2 relative z-50 text-bank-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      
      {/* Mobile Fullscreen Overlay */}
      <div className={cn(
        "fixed inset-0 bg-white/95 backdrop-blur-xl z-40 lg:hidden flex flex-col pt-[80px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-5">
          {navItems.map((item, index) => {
             const key = getNavKey(index)
             return (
              <Link 
                key={key} 
                href={megaMenuData[key as keyof typeof megaMenuData]?.allHref || "#"}
                className="text-2xl font-serif font-bold text-bank-charcoal border-b border-[#E5E0D8] pb-5 flex justify-between items-center hover:text-[#C0001B] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className={language === 'HI' ? 'font-devanagari' : ''}>{item}</span>
                <ChevronDown className="w-5 h-5 text-[#C9922A] -rotate-90" />
              </Link>
            )
          })}
          <div className="mt-auto space-y-4 pt-8">
            <Button asChild variant="outline" className="w-full border-2 border-[#C0001B] text-[#C0001B] h-14 rounded-xl font-bold text-lg">
              <Link href="/auth/login" className={language === 'HI' ? 'font-devanagari text-xl' : ''}>{language === 'EN' ? 'Net Banking' : 'नेट बैंकिंग'}</Link>
            </Button>
            <Button asChild className="w-full bg-[#C0001B] text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-[#C0001B]/20 border-0">
              <Link href="/auth/register" className={language === 'HI' ? 'font-devanagari text-xl' : ''}>{language === 'EN' ? 'Open Account' : 'खाता खोलें'}</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
