"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { 
  Menu, Phone, Clock, Globe, Shield, Building2, CreditCard, Landmark, PiggyBank, Home, 
  Car, GraduationCap, Briefcase, Smartphone, Calculator, Users, FileText, HelpCircle,
  Search, MapPin, MessageCircle, Sun, Moon, Type, Bell, ChevronDown, MonitorSmartphone
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- Data Objects for Navigation ---

const personalAccountsItems = [
  { title: "Savings Account", href: "/accounts/savings", description: "Earn up to 6% interest with zero minimum balance", icon: PiggyBank },
  { title: "Salary Account", href: "/accounts/salary", description: "Exclusive benefits for corporates", icon: Briefcase },
  { title: "Trust & NGO Accounts", href: "/accounts/trust", description: "Dedicated accounts for non-profits", icon: Users },
  { title: "Safe Deposit Locker", href: "/services/locker", description: "Secure your valuables", icon: Shield },
]

const personalDepositsItems = [
  { title: "Fixed Deposit", href: "/deposits/fixed", description: "Secure returns up to 7.5% p.a.", icon: Landmark },
  { title: "Recurring Deposit", href: "/deposits/recurring", description: "Build savings with monthly deposits", icon: PiggyBank },
  { title: "Senior Citizen FD", href: "/deposits/senior-citizen", description: "Extra 0.50% for senior citizens", icon: Users },
  { title: "Tax Saver FD", href: "/deposits/tax-saver", description: "Save tax under section 80C", icon: FileText },
]

const personalCardsItems = [
  { title: "Credit Cards", href: "/cards/credit", description: "Explore cards tailored to your lifestyle", icon: CreditCard },
  { title: "Debit Cards", href: "/cards/debit", description: "Convenience at your fingertips", icon: CreditCard },
  { title: "Prepaid Cards", href: "/cards/prepaid", description: "Control your spending", icon: CreditCard },
]

const personalLoansItems = [
  { title: "Home Loan", href: "/loans/home", description: "Affordable rates from 8.5% p.a.", icon: Home },
  { title: "Personal Loan", href: "/loans/personal", description: "For all your personal needs", icon: Users },
  { title: "Car Loan", href: "/loans/car", description: "Drive your dream car today", icon: Car },
  { title: "Education Loan", href: "/loans/education", description: "Invest in your future", icon: GraduationCap },
  { title: "Gold Loan", href: "/loans/gold", description: "Quick loans against gold jewelry", icon: CreditCard },
]

const businessAccountsItems = [
  { title: "Current Account", href: "/business/current", description: "Tailored for your business needs", icon: Briefcase },
  { title: "Capital Account", href: "/business/capital", description: "Manage your business capital", icon: Landmark },
  { title: "Foreign Currency Account", href: "/business/forex", description: "For global business transactions", icon: Globe },
]

const businessBorrowingItems = [
  { title: "Working Capital", href: "/business/working-capital", description: "Fund your day-to-day operations", icon: Building2 },
  { title: "Term Loans", href: "/business/term-loans", description: "Long-term financing for growth", icon: Landmark },
  { title: "Trade Finance", href: "/business/trade-finance", description: "Solutions for international trade", icon: Globe },
]

const businessServicesItems = [
  { title: "Cash Management", href: "/business/cms", description: "Optimize your cash flow", icon: Calculator },
  { title: "Merchant Services", href: "/business/merchant", description: "Accept payments seamlessly", icon: CreditCard },
  { title: "Corporate Internet Banking", href: "/business/cib", description: "Secure online banking platform", icon: MonitorSmartphone },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [segment, setSegment] = useState<'personal' | 'business'>('personal')

  // Top Tabs Content
  const topTabs = [
    { id: 'personal', label: 'Personal' },
    { id: 'business', label: 'Business' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'nri', label: 'NRI' },
    { id: 'agri', label: 'Agri' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* Top 2 Rows Container */}
      <div className="relative w-full overflow-hidden sm:overflow-visible">
        {/* Background color block for the top half (behind tabs) */}
        <div className="absolute top-0 left-0 w-full h-[40px] bg-primary z-0"></div>

        <div className="relative z-10 mx-auto flex max-w-[1920px]">
          
          {/* Logo container with slanted right edge */}
          <div 
            className="bg-primary pt-3 pb-2 pl-4 pr-12 xl:pr-16 flex items-center shrink-0 relative min-w-[200px] md:min-w-[280px]"
            style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 25px) 100%, 0 100%)' }}
          >
            <Link href="/" className="bg-white/95 p-1.5 md:p-2 rounded-xl flex items-center justify-center shadow-sm relative z-20 transition-transform hover:scale-105">
              <Image
                src="/mnslogo.jpeg"
                alt="MNS Bank Logo"
                width={150}
                height={40}
                className="h-8 md:h-10 w-auto mix-blend-multiply"
                priority
              />
            </Link>
          </div>

          <div className="flex-1 flex flex-col min-w-0">
            {/* Row 1: Segment Tabs and Quick Links */}
            <div className="flex justify-between items-end h-[40px] px-2 md:px-4">
              
              {/* Desktop Tabs */}
              <div className="hidden sm:flex gap-1 pl-1">
                {topTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => tab.id === 'personal' || tab.id === 'business' ? setSegment(tab.id as 'personal' | 'business') : null}
                    className={cn(
                      "px-4 md:px-5 py-2 rounded-t-xl font-medium text-xs md:text-sm transition-all shadow-[0_-2px_6px_rgba(0,0,0,0.05)]",
                      segment === tab.id 
                        ? "bg-white text-primary z-10 scale-y-100 origin-bottom" 
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile current segment display */}
              <div className="sm:hidden pl-2 text-white font-medium text-sm self-center">
                {segment === 'personal' ? 'Personal' : 'Business'}
              </div>

              {/* Utility Icons */}
              <div className="flex items-center gap-4 pb-2 text-white/90 text-xs md:text-sm shrink-0 pr-2">
                <Link href="/about" className="hover:text-white hidden transition-colors xl:block">About Us</Link>
                <div className="flex items-center gap-3.5">
                  <MapPin className="h-4 w-4 cursor-pointer hover:text-white transition-colors" title="Locate Us" />
                  <MessageCircle className="h-4 w-4 cursor-pointer hover:text-white transition-colors" title="WhatsApp Banking" />
                  <div className="hidden md:flex items-center gap-3.5 border-l border-white/30 pl-3.5">
                    <Sun className="h-4 w-4 cursor-pointer hover:text-white transition-colors" title="Light Theme" />
                    <Moon className="h-4 w-4 cursor-pointer hover:text-white transition-colors" title="Dark Theme" />
                    <Type className="h-4 w-4 cursor-pointer hover:text-white transition-colors" title="Text Size" />
                    <Bell className="h-4 w-4 cursor-pointer hover:text-white transition-colors" title="Notifications" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Search and primary Actions (White Background) */}
            <div className="bg-white h-[60px] md:h-[68px] flex items-center justify-between px-2 md:px-6 rounded-tl-2xl -ml-2 sm:-ml-4 relative z-10 flex-1 shadow-[-4px_0_15px_rgba(0,0,0,0.03)] border-b border-gray-100/50">
               
               {/* Left Side: Search Bar */}
               <div className="flex-1 flex items-center min-w-0 pr-4 pl-4 sm:pl-6">
                 {segment === 'business' && (
                   <div className="relative w-full max-w-md hidden md:flex items-center">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 h-4 w-4" />
                     <input 
                       className="w-full pl-9 pr-4 py-2 bg-gray-50/80 rounded-full border border-gray-200/80 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-400 transition-all font-medium text-gray-700" 
                       placeholder="What are you looking for today?" 
                     />
                   </div>
                 )}
               </div>

               {/* Right Side: Actions */}
               <div className="flex items-center gap-3 md:gap-5 shrink-0 pr-2">
                 <div className="hidden lg:flex items-center gap-5 text-sm">
                   <span className="text-primary font-semibold hover:text-primary/70 cursor-pointer transition-colors">Support</span>
                   <span className="text-primary font-semibold border-l-2 border-primary/20 pl-5 hover:text-primary/70 cursor-pointer transition-colors">Lodge a Complaint</span>
                 </div>
                 
                 <Button variant="outline" className="hidden sm:inline-flex rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-primary h-10 md:h-11 px-4 md:px-5 font-semibold transition-all">
                   Open Digital A/C
                 </Button>
                 
                 <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_4px_12px_rgba(139,0,21,0.2)] hover:shadow-[0_6px_16px_rgba(139,0,21,0.3)] h-10 md:h-11 px-4 md:px-6 font-semibold transition-all group">
                   Login <ChevronDown className="ml-2 h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                 </Button>

                 {/* Mobile menu trigger */}
                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
                   <SheetTrigger asChild className="lg:hidden ml-1">
                     <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-700 hover:bg-gray-100 rounded-xl">
                       <Menu className="h-5 w-5" />
                     </Button>
                   </SheetTrigger>
                   <SheetContent side="right" className="w-[85vw] sm:w-[400px] overflow-y-auto p-0">
                     <div className="p-6">
                       <SheetHeader className="text-left mb-6">
                         <Image
                           src="/mnslogo.jpeg"
                           alt="MNS Bank Logo"
                           width={140}
                           height={40}
                           className="h-8 w-auto mix-blend-multiply"
                         />
                       </SheetHeader>
                       
                       {/* Mobile Segment Switcher */}
                       <div className="flex p-1 bg-gray-100 rounded-xl mb-6 border border-gray-200 shadow-inner">
                         <button 
                           onClick={() => setSegment('personal')}
                           className={cn("flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all", segment === 'personal' ? "bg-white text-primary shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 ring-gray-900/5" : "text-gray-500 hover:text-gray-700")}
                         >
                           Personal
                         </button>
                         <button 
                           onClick={() => setSegment('business')}
                           className={cn("flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all", segment === 'business' ? "bg-white text-primary shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 ring-gray-900/5" : "text-gray-500 hover:text-gray-700")}
                         >
                           Business
                         </button>
                       </div>

                       <nav className="flex flex-col gap-6">
                         {segment === 'personal' ? (
                           <>
                             <MobileSection title="Accounts" items={personalAccountsItems} setIsOpen={setIsOpen} />
                             <MobileSection title="Deposits" items={personalDepositsItems} setIsOpen={setIsOpen} />
                             <MobileSection title="Loans" items={personalLoansItems} setIsOpen={setIsOpen} />
                           </>
                         ) : (
                           <>
                             <MobileSection title="Current Accounts" items={businessAccountsItems} setIsOpen={setIsOpen} />
                             <MobileSection title="Borrowing" items={businessBorrowingItems} setIsOpen={setIsOpen} />
                             <MobileSection title="Services" items={businessServicesItems} setIsOpen={setIsOpen} />
                           </>
                         )}
                         
                         <div className="border-t border-gray-100 pt-6 space-y-4">
                           <Link href="/about" className="block text-base font-semibold text-gray-700" onClick={() => setIsOpen(false)}>About Us</Link>
                           <Link href="/support" className="block text-base font-semibold text-primary" onClick={() => setIsOpen(false)}>Support</Link>
                           <Link href="/complaint" className="block text-base font-semibold text-primary" onClick={() => setIsOpen(false)}>Lodge a Complaint</Link>
                         </div>
                         
                         <div className="pt-4 space-y-3 pb-8">
                           <Button className="w-full bg-primary hover:bg-[#8B0015] h-12 rounded-xl font-semibold shadow-md">Login to Net Banking</Button>
                           <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 h-12 rounded-xl font-semibold shadow-sm">Open Digital Account</Button>
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

      {/* Row 3: Main Navigation */}
      <div className="bg-white relative z-10 border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-4 lg:px-6 max-w-[1400px]">
          <NavigationMenu className="hidden lg:flex max-w-full justify-start h-14">
             <NavigationMenuList className="gap-1 xl:gap-2 w-full">
               {segment === 'personal' ? (
                 <>
                  <NavMenuDropdown trigger="Accounts" items={personalAccountsItems} />
                  <NavMenuDropdown trigger="Deposits" items={personalDepositsItems} />
                  <NavMenuDropdown trigger="Cards" items={personalCardsItems} />
                  <NavMenuItem text="Forex" href="/forex" />
                  <NavMenuDropdown trigger="Loans" items={personalLoansItems} />
                  <NavMenuItem text="Investments" href="/investments" />
                  <NavMenuItem text="Insurance" href="/insurance" />
                  <NavMenuItem text="Payments" href="/payments" />
                  <div className="text-gray-300 mx-2 font-light select-none">|</div>
                  <NavMenuItem text="Offers & Rewards" href="/offers" />
                  <NavMenuItem text="Learning Hub" href="/learning" />
                  <NavMenuItem text="Bank Smart" href="/bank-smart" />
                 </>
               ) : (
                 <>
                  <NavMenuDropdown trigger="Current Account" items={businessAccountsItems} />
                  <NavMenuItem text="Pay" href="/business/pay" />
                  <NavMenuItem text="Collect" href="/business/collect" />
                  <NavMenuItem text="Trade Services" href="/business/trade" />
                  <NavMenuDropdown trigger="Debt & Working Capital" items={businessBorrowingItems} />
                  <NavMenuItem text="Treasury" href="/business/treasury" />
                  <NavMenuDropdown trigger="Transact Digitally" items={businessServicesItems} />
                 </>
               )}
             </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}

// --- Helper Components ---

function NavMenuItem({ text, href }: { text: string; href: string }) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={cn(
          "px-3 xl:px-4 py-2 text-[14px] font-medium text-gray-700 transition-colors rounded-lg",
          "hover:text-primary hover:bg-gray-50",
          "data-[active]:text-primary data-[active]:bg-gray-50"
        )}>
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}

function NavMenuDropdown({ trigger, items }: { trigger: string; items: any[] }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={cn(
        "px-3 xl:px-4 py-2 text-[14px] font-medium text-gray-700 transition-colors rounded-lg",
        "hover:text-primary hover:bg-gray-50 focus:text-primary focus:bg-gray-50",
        "data-[state=open]:text-primary data-[state=open]:bg-gray-50",
        "bg-transparent" // overriding shadcn default bg
      )}>
        {trigger}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <ul className="grid w-[400px] gap-2 p-5 md:w-[540px] md:grid-cols-2 lg:w-[640px]">
            {items.map((item) => (
              <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                {item.description}
              </ListItem>
            ))}
          </ul>
          <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end">
            <Link href="#" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              Explore all {trigger.toLowerCase()} <ChevronDown className="h-4 w-4 -rotate-90" />
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

interface ListItemProps {
  title: string
  href: string
  children: React.ReactNode
  icon: React.ElementType
}

function ListItem({ title, href, children, icon: Icon }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all",
            "hover:bg-gray-50 hover:text-primary hover:shadow-sm focus:bg-gray-50 focus:text-primary group border border-transparent hover:border-gray-100"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
              <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-sm font-semibold leading-none text-gray-900 group-hover:text-primary">{title}</div>
          </div>
          <p className="line-clamp-2 text-[13px] leading-relaxed text-gray-500 mt-2 font-normal pl-12 pr-2">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function MobileSection({ title, items, setIsOpen }: { title: string, items: any[], setIsOpen: (v: boolean) => void }) {
  return (
    <div className="space-y-3">
      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-2">{title}</h3>
      <div className="grid gap-1">
        {items.map((item) => (
          <Link 
            key={item.title} 
            href={item.href} 
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:text-primary hover:bg-red-50/50 font-semibold transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="h-4 w-4 text-primary/70" />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
