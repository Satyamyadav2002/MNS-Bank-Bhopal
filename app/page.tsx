"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Phone, Clock, Mail, Globe, Menu, X, Shield, Award, Users, 
  Building2, Landmark, PiggyBank, Wallet, Calculator, FileText, PhoneCall,
  Smartphone, Monitor, CreditCard, Lock, MapPin, Facebook, Twitter, Linkedin,
  ArrowRight, Star, CheckCircle2, Quote, ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// =====================================================
// 1. TOP UTILITY BAR
// =====================================================
function TopUtilityBar() {
  const [lang, setLang] = useState<"en" | "hi">("en")
  
  return (
    <div className="bg-[#1C1C2E] text-white h-9 text-xs">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:07554098000" className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors">
            <Phone className="w-3 h-3" />
            <span>0755-4098000</span>
          </a>
          <div className="hidden sm:flex items-center gap-1.5 text-white/70">
            <Clock className="w-3 h-3" />
            <span>Mon–Sat: 10AM–5PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
          >
            <Globe className="w-3 h-3" />
            <span>{lang === "en" ? "EN" : "हिं"}</span>
          </button>
          <a href="mailto:info@mnsbankbhopal.com" className="hover:text-[#D4A017] transition-colors">
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

// =====================================================
// 2. STICKY HEADER
// =====================================================
function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Accounts", href: "/accounts/savings" },
    { label: "Loans", href: "/loans/home" },
    { label: "Deposits", href: "/deposits/fixed" },
    { label: "Services", href: "/calculator" },
    { label: "About", href: "/about" },
  ]
  
  return (
    <header className={cn(
      "sticky top-0 z-50 h-[72px] transition-all duration-300",
      scrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-lg" 
        : "bg-white"
    )}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#C0001B] rounded-xl flex items-center justify-center">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-lg font-bold text-[#2B2D42] leading-tight">Mahanagar Bank</h1>
            <p className="text-[10px] text-[#6C757D] tracking-wide">महानगर नागरिक सहकारी बैंक</p>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="relative text-sm font-medium text-[#2B2D42] hover:text-[#C0001B] transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C0001B] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        
        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" className="border-[#C0001B] text-[#C0001B] hover:bg-[#C0001B] hover:text-white rounded-lg">
            Open Account
          </Button>
          <Button className="bg-[#C0001B] hover:bg-[#8B0015] text-white rounded-lg">
            Net Banking
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="py-3 text-[#2B2D42] hover:text-[#C0001B] border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="border-[#C0001B] text-[#C0001B] w-full">
                Open Account
              </Button>
              <Button className="bg-[#C0001B] text-white w-full">
                Net Banking
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

// =====================================================
// 3. ANNOUNCEMENT TICKER
// =====================================================
function AnnouncementTicker() {
  return (
    <div className="bg-[#C0001B] h-10 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap h-full flex items-center">
        <span className="text-white text-sm mx-8">Special FD Rate: 7.00% for 1 Year</span>
        <span className="text-white/60">|</span>
        <span className="text-white text-sm mx-8">Now Hiring — Check Careers</span>
        <span className="text-white/60">|</span>
        <span className="text-white text-sm mx-8">KYC FAQ available</span>
        <span className="text-white/60">|</span>
        <span className="text-white text-sm mx-8">Deposits insured up to Rs. 5 Lakh by DICGC</span>
        <span className="text-white/60">|</span>
        <span className="text-white text-sm mx-8">Special FD Rate: 7.00% for 1 Year</span>
        <span className="text-white/60">|</span>
        <span className="text-white text-sm mx-8">Now Hiring — Check Careers</span>
        <span className="text-white/60">|</span>
        <span className="text-white text-sm mx-8">KYC FAQ available</span>
        <span className="text-white/60">|</span>
        <span className="text-white text-sm mx-8">Deposits insured up to Rs. 5 Lakh by DICGC</span>
      </div>
    </div>
  )
}

// =====================================================
// 4. HERO SECTION
// =====================================================
function HeroSection() {
  return (
    <section className="min-h-[600px] bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-[#D4A017]/30">
              <Landmark className="w-4 h-4 text-[#D4A017]" />
              <span className="text-sm font-medium text-[#2B2D42]">{"Bhopal's Trusted Bank Since 1954"}</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-serif text-4xl lg:text-[52px] font-bold text-[#2B2D42] leading-tight">
                आपका भरोसा,<br />हमारी ज़िम्मेदारी
              </h1>
              <p className="text-xl lg:text-2xl text-[#6C757D] font-medium">
                Your Trust, Our Responsibility — Banking Built for Bhopal
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#C0001B] hover:bg-[#8B0015] text-white rounded-lg text-base px-8 h-14 shadow-lg shadow-[#C0001B]/25">
                Open Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white rounded-lg text-base px-8 h-14">
                Explore Products
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#28A745]" />
                <span className="text-sm text-[#2B2D42]">RBI Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D4A017]" />
                <span className="text-sm text-[#2B2D42]">DICGC Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#C0001B]" />
                <span className="text-sm text-[#2B2D42]">70+ Years</span>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative hidden lg:block">
            {/* Abstract geometric shape */}
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0001B]/10 to-[#D4A017]/10 rounded-3xl transform rotate-6" />
              <div className="absolute inset-4 bg-gradient-to-br from-[#C0001B]/5 to-[#D4A017]/5 rounded-3xl transform -rotate-3" />
              <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 bg-[#C0001B]/10 rounded-full flex items-center justify-center mx-auto">
                    <Landmark className="w-12 h-12 text-[#C0001B]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2B2D42]">महानगर बैंक</h3>
                  <p className="text-[#6C757D]">Serving Bhopal Since 1954</p>
                </div>
              </div>
            </div>
            
            {/* Floating FD Rate Card */}
            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl p-6 border-2 border-[#D4A017]">
              <div className="text-xs text-[#6C757D] uppercase tracking-wider mb-1">Special FD Rate</div>
              <div className="font-mono text-4xl font-bold text-[#28A745]">7.00%</div>
              <div className="text-sm text-[#2B2D42]">p.a. for 1 Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 5. TRUST BAR
// =====================================================
function TrustBar() {
  const trustItems = [
    { icon: Shield, stat: "DICGC", label: "Insured" },
    { icon: Landmark, stat: "RBI", label: "Regulated" },
    { icon: Award, stat: "70+", label: "Years of Trust" },
    { icon: Users, stat: "50,000+", label: "Members" },
    { icon: Building2, stat: "3", label: "Branches, Bhopal" },
  ]
  
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 py-5">
              <item.icon className="w-6 h-6 text-[#C0001B]" />
              <div>
                <div className="font-mono font-bold text-[#2B2D42]">{item.stat}</div>
                <div className="text-xs text-[#6C757D]">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// =====================================================
// 6. QUICK ASSISTANCE
// =====================================================
function QuickAssistance() {
  const assistItems = [
    { icon: Landmark, label: "Open Account", color: "bg-[#C0001B]", href: "/accounts/savings" },
    { icon: Wallet, label: "Need a Loan", color: "bg-[#D4A017]", href: "/loans/home" },
    { icon: PiggyBank, label: "Save & Invest", color: "bg-[#28A745]", href: "/deposits/fixed" },
    { icon: Calculator, label: "EMI Calculator", color: "bg-[#2B2D42]", href: "/calculator" },
    { icon: FileText, label: "Apply Online", color: "bg-[#C0001B]", href: "/contact" },
    { icon: PhoneCall, label: "Talk to Us", color: "bg-[#6C757D]", href: "/contact" },
  ]
  
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2B2D42] text-center mb-12">
          How Can We Help You?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {assistItems.map((item, i) => (
            <Link key={i} href={item.href}>
              <Card className="group cursor-pointer border-0 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 h-full bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 text-center relative z-10 w-full">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110",
                    item.color
                  )}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-medium text-[#2B2D42] mb-2">{item.label}</p>
                  <ArrowRight className="w-4 h-4 text-[#C0001B] mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 7. PRODUCTS SECTION (TABBED)
// =====================================================
function ProductsSection() {
  const [activeTab, setActiveTab] = useState("accounts")
  
  const tabs = [
    { id: "accounts", label: "Accounts" },
    { id: "loans", label: "Loans" },
    { id: "deposits", label: "Deposits" },
    { id: "services", label: "Services" },
  ]
  
  const products = {
    accounts: [
      { name: "Savings Account", desc: "Earn competitive interest on your savings", rate: "6.00%", icon: PiggyBank, href: "/accounts/savings" },
      { name: "Current Account", desc: "For businesses and traders", rate: null, icon: Wallet, href: "/accounts/savings" },
      { name: "Digital Account", desc: "Open account online instantly", rate: "5.50%", icon: Smartphone, href: "/accounts/savings" },
    ],
    loans: [
      { name: "Home Loan", desc: "Make your dream home a reality", rate: "8.50%", icon: Building2, href: "/loans/home" },
      { name: "Gold Loan", desc: "Quick approval, minimal documentation", rate: "9.00%", icon: Award, href: "/loans/home" },
      { name: "Car Loan", desc: "Drive home your dream car", rate: "9.50%", icon: CreditCard, href: "/loans/home" },
    ],
    deposits: [
      { name: "Fixed Deposit", desc: "Guaranteed returns, safe investment", rate: "7.00%", icon: Lock, href: "/deposits/fixed" },
      { name: "Recurring Deposit", desc: "Build savings with monthly deposits", rate: "6.50%", icon: PiggyBank, href: "/deposits/fixed" },
      { name: "Double Benefit Scheme", desc: "Double your money over time", rate: "Special", icon: Star, href: "/deposits/fixed" },
    ],
    services: [
      { name: "Net Banking", desc: "Bank from anywhere, anytime", rate: null, icon: Monitor, href: "/calculator" },
      { name: "Mobile Banking", desc: "Banking in your pocket", rate: null, icon: Smartphone, href: "/calculator" },
      { name: "UPI Payments", desc: "Instant money transfers", rate: null, icon: CreditCard, href: "/calculator" },
    ],
  }
  
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2B2D42] text-center mb-8">
          {"Products You'll Love"}
        </h2>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-[0_4px_15px_rgb(160,0,21,0.3)] transform scale-105" 
                  : "bg-white/60 backdrop-blur-sm text-foreground hover:bg-white border border-transparent hover:border-gray-200 shadow-sm"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {products[activeTab as keyof typeof products].map((product, i) => (
            <Link key={i} href={product.href}>
              <Card className="group bg-white/70 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-8 relative z-10 w-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{product.desc}</p>
                  {product.rate && (
                    <div className="inline-flex items-center gap-1 bg-[#28A745]/10 text-[#28A745] px-3 py-1 rounded-full text-sm font-mono font-semibold mb-4">
                      {product.rate} {product.rate !== "Special" && "p.a."}
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-[#C0001B] font-medium text-sm group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 8. INTEREST RATES WIDGET
// =====================================================
function InterestRatesWidget() {
  const [amount, setAmount] = useState("100000")
  const [tenure, setTenure] = useState("1year")
  const [type, setType] = useState("general")
  
  const fdRates = [
    { tenure: "7-45 days", general: "4.00", senior: "4.50" },
    { tenure: "46-179 days", general: "5.00", senior: "5.50" },
    { tenure: "180-364 days", general: "5.50", senior: "6.00" },
    { tenure: "1 Year (Special)", general: "7.00", senior: "7.50", highlight: true },
    { tenure: "222 Days Special", general: "5.50", senior: "6.00" },
    { tenure: "360 Days Special", general: "6.00", senior: "6.50" },
  ]
  
  const calculateMaturity = () => {
    const principal = parseFloat(amount) || 0
    const rate = type === "senior" ? 7.5 : 7.0
    const years = tenure === "1year" ? 1 : tenure === "2year" ? 2 : 0.5
    const maturity = principal * Math.pow(1 + rate / 400, 4 * years)
    return maturity.toFixed(0)
  }
  
  return (
    <section className="py-16 bg-[#1C1C2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">
            Current Interest Rates
          </h2>
          <p className="text-white/60">
            Effective March 2026 — Last Updated: 01 March 2026
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 relative z-10">
          {/* FD Rates Table */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <CardContent className="p-8 relative z-10">
              <h3 className="text-white font-semibold text-lg mb-4">Fixed Deposit Rates</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 text-xs text-white/60 uppercase tracking-wider pb-2 border-b border-white/10">
                  <div>Tenure</div>
                  <div className="text-center">General</div>
                  <div className="text-center">Senior Citizen</div>
                </div>
                {fdRates.map((rate, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "grid grid-cols-3 gap-4 py-3 rounded-lg transition-colors",
                      rate.highlight ? "bg-[#D4A017]/20 px-3" : ""
                    )}
                  >
                    <div className="text-white text-sm flex items-center gap-2">
                      {rate.tenure}
                      {rate.highlight && (
                        <span className="text-[10px] bg-accent text-[#1C1C2E] px-2.5 py-0.5 rounded-full font-bold shadow-[0_0_10px_rgba(229,176,26,0.5)]">
                          BEST
                        </span>
                      )}
                    </div>
                    <div className="text-center font-mono text-[#28A745] font-semibold">{rate.general}%</div>
                    <div className="text-center font-mono text-[#28A745] font-semibold">{rate.senior}%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* FD Calculator */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <CardContent className="p-8 relative z-10">
              <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                FD Calculator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Amount (Rs.)</label>
                  <Input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/10 border-white/20 text-white font-mono"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Tenure</label>
                  <select 
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2"
                  >
                    <option value="6month" className="bg-[#1C1C2E]">6 Months</option>
                    <option value="1year" className="bg-[#1C1C2E]">1 Year</option>
                    <option value="2year" className="bg-[#1C1C2E]">2 Years</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Type</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input 
                        type="radio" 
                        name="type" 
                        value="general"
                        checked={type === "general"}
                        onChange={(e) => setType(e.target.value)}
                        className="accent-[#D4A017]"
                      />
                      General
                    </label>
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input 
                        type="radio" 
                        name="type" 
                        value="senior"
                        checked={type === "senior"}
                        onChange={(e) => setType(e.target.value)}
                        className="accent-[#D4A017]"
                      />
                      Senior Citizen
                    </label>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="text-white/60 text-sm mb-1">Maturity Amount</div>
                  <div className="font-mono text-4xl font-bold text-[#D4A017]">
                    Rs. {parseInt(calculateMaturity()).toLocaleString("en-IN")}
                  </div>
                </div>
                
                <Link href="/deposits/fixed">
                  <Button className="w-full bg-[#C0001B] hover:bg-[#8B0015] text-white mt-4">
                    Open FD Account <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 9. DIGITAL SERVICES SECTION
// =====================================================
function DigitalServicesSection() {
  const services = [
    { 
      icon: Smartphone, 
      title: "Mobile Banking", 
      desc: "Bank on-the-go with our secure mobile app",
      gradient: "from-[#C0001B] to-[#8B0015]"
    },
    { 
      icon: Monitor, 
      title: "Net Banking", 
      desc: "Access your accounts from any device",
      gradient: "from-[#2B2D42] to-[#1C1C2E]"
    },
    { 
      icon: CreditCard, 
      title: "UPI Payments", 
      desc: "Instant money transfers 24x7",
      gradient: "from-[#D4A017] to-[#B8860B]"
    },
    { 
      icon: Lock, 
      title: "Secure Transfers", 
      desc: "Bank-grade security for all transactions",
      gradient: "from-[#28A745] to-[#1E7E34]"
    },
  ]
  
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2B2D42] text-center mb-12">
          Bank From Anywhere
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, i) => (
            <Card 
              key={i} 
              className="group border-0 bg-white/60 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <CardContent className="p-8 text-center relative z-10">
                <div className={cn(
                  "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500",
                  service.gradient
                )}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-[#2B2D42] mb-2">{service.title}</h3>
                <p className="text-[#6C757D] text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* App Download Strip */}
        <div className="bg-[#FAF7F2] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#2B2D42] mb-2">Download Our Mobile App</h3>
            <p className="text-[#6C757D]">Available on Google Play Store</p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-[#2B2D42] hover:bg-[#1C1C2E] text-white rounded-xl">
              <Smartphone className="w-5 h-5 mr-2" />
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 10. WHY CHOOSE US
// =====================================================
function WhyChooseUs() {
  const pillars = [
    { 
      icon: Users, 
      title: "Cooperative Values", 
      desc: "Member-owned bank, profits shared with community"
    },
    { 
      icon: Shield, 
      title: "DICGC Protection", 
      desc: "Deposits insured up to Rs. 5 Lakh"
    },
    { 
      icon: MapPin, 
      title: "Local Expertise", 
      desc: "Rooted in Bhopal since 1954"
    },
    { 
      icon: Award, 
      title: "Fast Approvals", 
      desc: "Loans processed in 3-5 working days"
    },
  ]
  
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Why Bhopal Trusts Us
        </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <Card 
              key={i} 
              className="bg-white/70 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 rounded-[2rem] overflow-hidden group"
            >
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 group-hover:rotate-3">
                    <pillar.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 11. NEWS & UPDATES
// =====================================================
function NewsUpdates() {
  const [activeTab, setActiveTab] = useState("bank")
  
  const tabs = [
    { id: "bank", label: "Bank News" },
    { id: "rates", label: "Deposit Rates" },
    { id: "rbi", label: "RBI Updates" },
  ]
  
  const news = {
    bank: [
      { date: "05 Mar 2026", title: "Annual General Meeting Notice", excerpt: "AGM scheduled for March 28, 2026 at 11:00 AM at Head Office" },
      { date: "01 Mar 2026", title: "New Branch Opening Soon", excerpt: "Expanding our services to MP Nagar area" },
      { date: "25 Feb 2026", title: "Holiday Notice - Mahashivratri", excerpt: "Bank will remain closed on February 26, 2026" },
    ],
    rates: [
      { date: "01 Mar 2026", title: "Special FD Rate Extended", excerpt: "7.00% p.a. for 1 Year FD extended till March 31, 2026" },
      { date: "15 Feb 2026", title: "Senior Citizen Benefits", excerpt: "Additional 0.50% interest for senior citizens on all FDs" },
      { date: "01 Feb 2026", title: "Savings Account Rate", excerpt: "Interest rate on savings account maintained at 6.00% p.a." },
    ],
    rbi: [
      { date: "28 Feb 2026", title: "RBI Monetary Policy Update", excerpt: "Repo rate unchanged at 6.50% in latest policy review" },
      { date: "15 Feb 2026", title: "KYC Guidelines Update", excerpt: "New video KYC norms effective from April 2026" },
      { date: "01 Feb 2026", title: "Digital Banking Guidelines", excerpt: "RBI releases new cybersecurity framework for UCBs" },
    ],
  }
  
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Latest from Mahanagar Bank
        </h2>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-[0_4px_15px_rgb(160,0,21,0.3)] transform scale-105" 
                  : "bg-muted/50 text-foreground hover:bg-muted border border-transparent hover:border-border shadow-sm"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {news[activeTab as keyof typeof news].map((item, i) => (
            <Card key={i} className="group border border-border/40 hover:border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 rounded-[2rem] hover:-translate-y-1 bg-white">
              <CardContent className="p-8">
                <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
                  {item.date}
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{item.excerpt}</p>
                <button className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 12. MEMBER TESTIMONIALS
// =====================================================
function MemberTestimonials() {
  const testimonials = [
    {
      text: "महानगर बैंक में मेरा खाता 20 साल से है। यहाँ का staff बहुत helpful है और interest rates भी अच्छे हैं।",
      name: "Ramesh Sharma",
      since: "Member since 2004",
      initial: "R"
    },
    {
      text: "Got my home loan sanctioned in just 5 days. The process was smooth and the interest rate is competitive.",
      name: "Priya Patel",
      since: "Member since 2018",
      initial: "P"
    },
    {
      text: "Senior citizen होने के नाते मुझे extra 0.50% interest मिलता है FD पर। Very satisfied with the service.",
      name: "Krishna Murthy",
      since: "Member since 1995",
      initial: "K"
    },
  ]
  
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#2B2D42] text-center mb-12">
          What Our Members Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <Card key={i} className="bg-white border-0 shadow-[0_4px_24px_rgba(0,0,0,0.08)] rounded-[14px]">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-[#C0001B]/20 mb-4" />
                <p className="text-[#2B2D42] mb-6 leading-relaxed">{item.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C0001B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-[#2B2D42]">{item.name}</div>
                    <div className="text-sm text-[#6C757D]">{item.since}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 13. BRANCH LOCATOR STRIP
// =====================================================
function BranchLocator() {
  const branches = [
    {
      name: "Head Office - Bairagarh",
      address: "Swami Shantiprakash Chauraha, Bairagarh, Bhopal - 462030",
      phone: "0755-4098000",
      hours: "Mon-Sat: 10AM-5PM"
    },
    {
      name: "TT Nagar Branch",
      address: "12, Zone-I, M.P. Nagar, Bhopal - 462011",
      phone: "0755-4098001",
      hours: "Mon-Sat: 10AM-5PM"
    },
  ]
  
  return (
    <section className="py-12 bg-[#1C1C2E]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-2xl font-bold text-white text-center mb-8">
          Visit Us in Bhopal
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((branch, i) => (
            <Card key={i} className="bg-white/10 border-white/10 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{branch.name}</h3>
                <div className="space-y-2 text-white/80 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 border-white/30 text-white hover:bg-white hover:text-[#1C1C2E]">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================
// 14. FOOTER
// =====================================================
function Footer() {
  return (
    <footer className="bg-[#1C1C2E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Column 1 - About */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C0001B] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Mahanagar Bank</h3>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-4">आपका विश्वसनीय बैंक</p>
            <div className="inline-flex items-center gap-2 border border-[#D4A017] rounded-lg px-3 py-2">
              <Shield className="w-5 h-5 text-[#D4A017]" />
              <div className="text-xs">
                <div className="text-[#D4A017] font-semibold">DICGC Insured</div>
                <div className="text-white/60">Up to Rs. 5 Lakh</div>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Accounts & Deposits */}
          <div>
            <h4 className="font-semibold mb-4">Accounts & Deposits</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/accounts/savings" className="hover:text-[#D4A017] transition-colors">Saving Account</Link></li>
              <li><Link href="/accounts/savings" className="hover:text-[#D4A017] transition-colors">Current Account</Link></li>
              <li><Link href="/deposits/fixed" className="hover:text-[#D4A017] transition-colors">Fixed Deposit</Link></li>
              <li><Link href="/deposits/fixed" className="hover:text-[#D4A017] transition-colors">Recurring Deposit</Link></li>
              <li><Link href="/deposits/fixed" className="hover:text-[#D4A017] transition-colors">Double Deposit</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Loans */}
          <div>
            <h4 className="font-semibold mb-4">Loans</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/loans/home" className="hover:text-[#D4A017] transition-colors">Home Loan</Link></li>
              <li><Link href="/loans/home" className="hover:text-[#D4A017] transition-colors">Gold Loan</Link></li>
              <li><Link href="/loans/home" className="hover:text-[#D4A017] transition-colors">Car Loan</Link></li>
              <li><Link href="/loans/home" className="hover:text-[#D4A017] transition-colors">Personal Loan</Link></li>
              <li><Link href="/loans/home" className="hover:text-[#D4A017] transition-colors">Loan Against Property</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/calculator" className="hover:text-[#D4A017] transition-colors">Interest Rates</Link></li>
              <li><Link href="/calculator" className="hover:text-[#D4A017] transition-colors">Service Charges</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4A017] transition-colors">Download Forms</Link></li>
              <li><Link href="/grievance" className="hover:text-[#D4A017] transition-colors">Grievance</Link></li>
              <li><Link href="/about" className="hover:text-[#D4A017] transition-colors">KYC Policy</Link></li>
              <li>
                <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A017] transition-colors inline-flex items-center gap-1">
                  RBI Ombudsman <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 5 - Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#D4A017]" />
                <span>Swami Shantiprakash Chauraha, Bairagarh, Bhopal — 462030</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A017]" />
                <span>0755-4098000</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4A017]" />
                <span>Mon–Sat: 10AM–5PM</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C0001B] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C0001B] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C0001B] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© 2026 Mahanagar Nagrik Sahakari Bank Ltd. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>DICGC Insured</span>
            <span className="hidden md:inline">|</span>
            <span>RBI Reg. No. MP/UCB/xxx</span>
            <span className="hidden md:inline">|</span>
            <Link href="/about" className="hover:text-white">Fair Practice Code</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// =====================================================
// MAIN PAGE COMPONENT
// =====================================================
export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FAF7F2]/40">
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-mesh" />
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[70%] bg-accent/5 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-5s' }} />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[50%] bg-[#2B2D42]/5 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="relative z-10">
        <TopUtilityBar />
      <StickyHeader />
      <AnnouncementTicker />
      <HeroSection />
      <TrustBar />
      <QuickAssistance />
      <ProductsSection />
      <InterestRatesWidget />
      <DigitalServicesSection />
      <WhyChooseUs />
      <NewsUpdates />
      <MemberTestimonials />
      <BranchLocator />
      <Footer />
      
      {/* Marquee Animation Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      </div>
    </div>
  )
}
