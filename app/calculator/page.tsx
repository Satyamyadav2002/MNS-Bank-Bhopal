"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, PiggyBank, ChevronRight, IndianRupee, Calendar, Percent } from "lucide-react"
import Link from "next/link"

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(Math.round(num))
}

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)

  const result = useMemo(() => {
    const principal = loanAmount
    const rate = interestRate / 100 / 12
    const n = tenure * 12

    const emi = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1)
    const totalPayment = emi * n
    const totalInterest = totalPayment - principal

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principal,
    }
  }, [loanAmount, interestRate, tenure])

  const principalPercent = (result.principal / result.totalPayment) * 100
  const interestPercent = (result.totalInterest / result.totalPayment) * 100

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            EMI Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Loan Amount */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Loan Amount</Label>
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-32 text-right font-semibold"
                />
              </div>
            </div>
            <Slider
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              min={100000}
              max={10000000}
              step={50000}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Rs. 1 Lakh</span>
              <span>Rs. 1 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Interest Rate (p.a.)</Label>
              <div className="flex items-center gap-2">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-24 text-right font-semibold"
                  step={0.1}
                />
              </div>
            </div>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={6}
              max={20}
              step={0.1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>6%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Loan Tenure (Years)</Label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-20 text-right font-semibold"
                />
              </div>
            </div>
            <Slider
              value={[tenure]}
              onValueChange={(value) => setTenure(value[0])}
              min={1}
              max={30}
              step={1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary to-[#8B0015] text-white">
        <CardHeader>
          <CardTitle className="text-white">Your EMI Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center py-6 border-b border-white/20">
            <div className="text-sm text-white/70 mb-2">Monthly EMI</div>
            <div className="text-5xl font-bold">{formatCurrency(result.emi)}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-1">Principal Amount</div>
              <div className="text-xl font-semibold">{formatCurrency(result.principal)}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-1">Total Interest</div>
              <div className="text-xl font-semibold">{formatCurrency(result.totalInterest)}</div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm text-white/70 mb-1">Total Payment</div>
            <div className="text-2xl font-bold">{formatCurrency(result.totalPayment)}</div>
          </div>

          {/* Visual Breakdown */}
          <div className="space-y-3">
            <div className="text-sm text-white/70">Payment Breakdown</div>
            <div className="h-4 rounded-full overflow-hidden flex bg-white/20">
              <div
                className="bg-white h-full"
                style={{ width: `${principalPercent}%` }}
              />
              <div
                className="bg-[#D4A017] h-full"
                style={{ width: `${interestPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-white" />
                <span>Principal ({principalPercent.toFixed(1)}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[#D4A017]" />
                <span>Interest ({interestPercent.toFixed(1)}%)</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-white text-primary hover:bg-white/90">
            Apply for Loan
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function FDCalculator() {
  const [depositAmount, setDepositAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(7.5)
  const [tenure, setTenure] = useState(24)

  const result = useMemo(() => {
    const principal = depositAmount
    const rate = interestRate / 100
    const years = tenure / 12
    
    // Quarterly compounding
    const n = 4
    const maturityAmount = principal * Math.pow(1 + rate / n, n * years)
    const interestEarned = maturityAmount - principal

    return {
      maturityAmount: Math.round(maturityAmount),
      interestEarned: Math.round(interestEarned),
      principal,
    }
  }, [depositAmount, interestRate, tenure])

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-primary" />
            FD Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Deposit Amount */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Deposit Amount</Label>
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                  className="w-32 text-right font-semibold"
                />
              </div>
            </div>
            <Slider
              value={[depositAmount]}
              onValueChange={(value) => setDepositAmount(value[0])}
              min={10000}
              max={5000000}
              step={10000}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Rs. 10,000</span>
              <span>Rs. 50 Lakh</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Interest Rate (p.a.)</Label>
              <div className="flex items-center gap-2">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-24 text-right font-semibold"
                  step={0.1}
                />
              </div>
            </div>
            <Slider
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              min={4}
              max={10}
              step={0.1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>4%</span>
              <span>10%</span>
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Tenure (Months)</Label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-20 text-right font-semibold"
                />
              </div>
            </div>
            <Slider
              value={[tenure]}
              onValueChange={(value) => setTenure(value[0])}
              min={1}
              max={60}
              step={1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 Month</span>
              <span>60 Months</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-[#D4A017] to-[#B8860B] text-white">
        <CardHeader>
          <CardTitle className="text-white">Your FD Returns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center py-6 border-b border-white/20">
            <div className="text-sm text-white/70 mb-2">Maturity Amount</div>
            <div className="text-5xl font-bold">{formatCurrency(result.maturityAmount)}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-1">Principal</div>
              <div className="text-xl font-semibold">{formatCurrency(result.principal)}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-sm text-white/70 mb-1">Interest Earned</div>
              <div className="text-xl font-semibold">{formatCurrency(result.interestEarned)}</div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm text-white/70 mb-1">Effective Rate of Return</div>
            <div className="text-2xl font-bold">
              {((result.interestEarned / result.principal) * 100).toFixed(2)}%
            </div>
          </div>

          <Button className="w-full bg-white text-[#D4A017] hover:bg-white/90">
            Open Fixed Deposit
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-[#8B0015] text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Calculator</span>
            </nav>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Financial Calculators</h1>
                <p className="text-white/70">Plan your finances with our easy-to-use calculators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="emi" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="emi" className="flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  EMI Calculator
                </TabsTrigger>
                <TabsTrigger value="fd" className="flex items-center gap-2">
                  <PiggyBank className="h-4 w-4" />
                  FD Calculator
                </TabsTrigger>
              </TabsList>

              <TabsContent value="emi">
                <EMICalculator />
              </TabsContent>

              <TabsContent value="fd">
                <FDCalculator />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
