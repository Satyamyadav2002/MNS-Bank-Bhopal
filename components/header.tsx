"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Clock, Globe, Shield, Building2, CreditCard, Landmark, PiggyBank, Home, Car, GraduationCap, Briefcase, Smartphone, Calculator, Users, FileText, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const accountsItems = [
  { title: "Savings Account", href: "/accounts/savings", description: "Earn up to 6% interest with zero minimum balance", icon: PiggyBank },
  { title: "Current Account", href: "/accounts/current", description: "For businesses and professionals", icon: Briefcase },
  { title: "Double Deposit", href: "/deposits/double", description: "Double your money with guaranteed returns", icon: CreditCard },
]

const depositsItems = [
  { title: "Fixed Deposit", href: "/deposits/fixed", description: "Secure returns up to 7.5% p.a.", icon: Landmark },
  { title: "Recurring Deposit", href: "/deposits/recurring", description: "Build savings with monthly deposits", icon: PiggyBank },
  { title: "Senior Citizen FD", href: "/deposits/senior-citizen", description: "Extra 0.50% for senior citizens", icon: Users },
]

const loansItems = [
  { title: "Home Loan", href: "/loans/home", description: "Affordable rates from 8.5% p.a.", icon: Home },
  { title: "Gold Loan", href: "/loans/gold", description: "Quick loans against gold jewelry", icon: CreditCard },
  { title: "Car Loan", href: "/loans/car", description: "Drive your dream car today", icon: Car },
  { title: "Personal Loan", href: "/loans/personal", description: "For all your personal needs", icon: Users },
  { title: "Education Loan", href: "/loans/education", description: "Invest in your future", icon: GraduationCap },
  { title: "Business Loan", href: "/loans/business", description: "Grow your business with us", icon: Briefcase },
]

const servicesItems = [
  { title: "Net Banking", href: "/services/net-banking", description: "24/7 online banking access", icon: Smartphone },
  { title: "Mobile Banking", href: "/services/mobile-banking", description: "Bank on the go", icon: Smartphone },
  { title: "EMI Calculator", href: "/calculator", description: "Calculate your loan EMI", icon: Calculator },
  { title: "Locker Services", href: "/services/locker", description: "Safe deposit lockers", icon: Shield },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Utility Bar */}
      <div className="bg-secondary text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <span>0755-4098000</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>Mon-Sat: 10AM-5PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs">
              <Shield className="h-3.5 w-3.5 text-[#D4A017]" />
              <span className="hidden sm:inline">DICGC Insured</span>
            </div>
            <button className="flex items-center gap-1 hover:text-[#D4A017] transition-colors">
              <Globe className="h-3.5 w-3.5" />
              <span>EN | हिं</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full">
                <Building2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base md:text-lg font-bold text-foreground leading-tight">MNS Bank</h1>
                <p className="text-xs text-muted-foreground">महानगर नागरिक सहकारी बैंक</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Accounts</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {accountsItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Deposits</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {depositsItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Loans</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3">
                      {loansItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {servicesItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white">
                Open Account
              </Button>
              <Button className="bg-primary hover:bg-[#8B0015] text-white">
                Net Banking
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="text-left">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold">MNS Bank</h2>
                        <p className="text-xs text-muted-foreground">Bhopal</p>
                      </div>
                    </div>
                  </SheetTitle>
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Accounts</h3>
                      {accountsItems.map((item) => (
                        <Link key={item.title} href={item.href} className="block py-1 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Deposits</h3>
                      {depositsItems.map((item) => (
                        <Link key={item.title} href={item.href} className="block py-1 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Loans</h3>
                      {loansItems.map((item) => (
                        <Link key={item.title} href={item.href} className="block py-1 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <Link href="/about" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="/contact" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
                    <div className="pt-4 space-y-3">
                      <Button className="w-full bg-primary hover:bg-[#8B0015]">Net Banking</Button>
                      <Button variant="outline" className="w-full border-primary text-primary">Open Account</Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
          )}
        >
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary group-hover:text-primary" />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
