"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, PiggyBank, Landmark, Home, Car, CreditCard, Users, Briefcase, GraduationCap, CheckCircle } from "lucide-react"

const accountProducts = [
  {
    title: "Savings Account",
    description: "Earn attractive interest on your savings with zero minimum balance requirement",
    rate: "6.0%",
    rateLabel: "Interest p.a.",
    features: ["Zero Minimum Balance", "Free Debit Card", "Mobile Banking"],
    icon: PiggyBank,
    href: "/accounts/savings",
    featured: true,
  },
  {
    title: "Current Account",
    description: "Perfect for businesses with unlimited transactions and overdraft facility",
    features: ["Unlimited Transactions", "Overdraft Facility", "Cheque Book"],
    icon: Briefcase,
    href: "/accounts/current",
  },
]

const depositProducts = [
  {
    title: "Fixed Deposit",
    description: "Secure your future with guaranteed returns and flexible tenure options",
    rate: "7.5%",
    rateLabel: "Interest p.a.",
    features: ["Flexible Tenure", "Senior Citizen Bonus", "Loan Against FD"],
    icon: Landmark,
    href: "/deposits/fixed",
    featured: true,
  },
  {
    title: "Recurring Deposit",
    description: "Build your savings gradually with convenient monthly deposits",
    rate: "7.0%",
    rateLabel: "Interest p.a.",
    features: ["Monthly Deposits", "Flexible Amount", "Auto-debit"],
    icon: PiggyBank,
    href: "/deposits/recurring",
  },
  {
    title: "Double Deposit",
    description: "Watch your money grow and double with our special scheme",
    features: ["Guaranteed Returns", "Safe Investment", "Flexible Options"],
    icon: CreditCard,
    href: "/deposits/double",
  },
]

const loanProducts = [
  {
    title: "Home Loan",
    description: "Make your dream home a reality with affordable interest rates",
    rate: "8.5%",
    rateLabel: "Starting from",
    features: ["Up to 80% LTV", "30 Year Tenure", "Quick Approval"],
    icon: Home,
    href: "/loans/home",
    featured: true,
  },
  {
    title: "Gold Loan",
    description: "Get instant cash against your gold jewelry at best rates",
    rate: "9.5%",
    rateLabel: "Starting from",
    features: ["Instant Approval", "Up to 75% LTV", "Safe Storage"],
    icon: CreditCard,
    href: "/loans/gold",
  },
  {
    title: "Car Loan",
    description: "Drive your dream car home with easy financing options",
    rate: "9.0%",
    rateLabel: "Starting from",
    features: ["New & Used Cars", "Quick Disbursement", "Flexible EMI"],
    icon: Car,
    href: "/loans/car",
  },
  {
    title: "Personal Loan",
    description: "Fulfill your personal needs with minimal documentation",
    rate: "12.0%",
    rateLabel: "Starting from",
    features: ["No Collateral", "Quick Processing", "Flexible Tenure"],
    icon: Users,
    href: "/loans/personal",
  },
  {
    title: "Education Loan",
    description: "Invest in education with affordable study loans",
    rate: "10.0%",
    rateLabel: "Starting from",
    features: ["Moratorium Period", "All Courses", "Easy Repayment"],
    icon: GraduationCap,
    href: "/loans/education",
  },
  {
    title: "Business Loan",
    description: "Grow your business with working capital finance",
    rate: "11.0%",
    rateLabel: "Starting from",
    features: ["Working Capital", "Quick Approval", "Flexible Terms"],
    icon: Briefcase,
    href: "/loans/business",
  },
]

interface ProductCardProps {
  title: string
  description: string
  rate?: string
  rateLabel?: string
  features: string[]
  icon: React.ElementType
  href: string
  featured?: boolean
}

function ProductCard({ title, description, rate, rateLabel, features, icon: Icon, href, featured }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-xl p-6 border ${featured ? 'border-primary shadow-lg ring-2 ring-primary/10' : 'border-border shadow-sm'} hover:shadow-lg transition-all duration-300 flex flex-col h-full`}>
      {featured && (
        <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full w-fit mb-4">
          Popular Choice
        </div>
      )}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} flex items-center justify-center`}>
          <Icon className="h-6 w-6" />
        </div>
        {rate && (
          <div className="text-right">
            <div className="text-2xl font-bold text-[#28A745]">{rate}</div>
            <div className="text-xs text-muted-foreground">{rateLabel}</div>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={href}>
        <Button variant={featured ? "default" : "outline"} className={`w-full ${featured ? 'bg-primary hover:bg-[#8B0015]' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}>
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Banking Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover a range of financial products designed for your needs
          </p>
        </div>

        <Tabs defaultValue="deposits" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="deposits">Deposits</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
          </TabsList>

          <TabsContent value="accounts" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {accountProducts.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deposits" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {depositProducts.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="loans" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanProducts.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
