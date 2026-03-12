"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Calculator, Info, TrendingUp } from "lucide-react"

const fdRates = [
  { tenure: "7-14 Days", general: "4.50%", senior: "5.00%" },
  { tenure: "15-45 Days", general: "5.00%", senior: "5.50%" },
  { tenure: "46-90 Days", general: "5.50%", senior: "6.00%" },
  { tenure: "91-180 Days", general: "6.00%", senior: "6.50%" },
  { tenure: "181-365 Days", general: "6.75%", senior: "7.25%" },
  { tenure: "1-2 Years", general: "7.25%", senior: "7.75%" },
  { tenure: "2-3 Years", general: "7.50%", senior: "8.00%" },
  { tenure: "3-5 Years", general: "7.25%", senior: "7.75%" },
]

const loanRates = [
  { type: "Home Loan", rate: "8.50% - 9.50%", tenure: "Up to 30 years" },
  { type: "Gold Loan", rate: "9.50% - 11.00%", tenure: "Up to 3 years" },
  { type: "Car Loan", rate: "9.00% - 12.00%", tenure: "Up to 7 years" },
  { type: "Personal Loan", rate: "12.00% - 16.00%", tenure: "Up to 5 years" },
  { type: "Education Loan", rate: "10.00% - 12.00%", tenure: "Up to 15 years" },
  { type: "Business Loan", rate: "11.00% - 15.00%", tenure: "Up to 7 years" },
]

export function InterestRates() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interest Rates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Competitive rates for deposits and loans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FD Rates */}
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary to-[#8B0015] text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6" />
                  <CardTitle className="text-xl">Fixed Deposit Rates</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">Up to 7.50%</div>
                  <div className="text-sm opacity-90">Senior Citizen: +0.50%</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Tenure</TableHead>
                    <TableHead className="font-semibold text-center">General</TableHead>
                    <TableHead className="font-semibold text-center">Senior Citizen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fdRates.map((rate) => (
                    <TableRow key={rate.tenure} className="hover:bg-muted/30">
                      <TableCell className="font-medium">{rate.tenure}</TableCell>
                      <TableCell className="text-center text-[#28A745] font-semibold">{rate.general}</TableCell>
                      <TableCell className="text-center text-primary font-semibold">{rate.senior}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="p-4 bg-muted/30 border-t flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <span>Last Updated: March 2026</span>
                </div>
                <Link href="/deposits/fixed">
                  <Button variant="link" className="text-primary p-0">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Loan Rates */}
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6" />
                  <CardTitle className="text-xl">Loan Interest Rates</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">From 8.50%</div>
                  <div className="text-sm opacity-90">Home Loan</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Loan Type</TableHead>
                    <TableHead className="font-semibold text-center">Interest Rate</TableHead>
                    <TableHead className="font-semibold text-center">Max Tenure</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loanRates.map((loan) => (
                    <TableRow key={loan.type} className="hover:bg-muted/30">
                      <TableCell className="font-medium">{loan.type}</TableCell>
                      <TableCell className="text-center text-[#28A745] font-semibold">{loan.rate}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{loan.tenure}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="p-4 bg-muted/30 border-t flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <span>Rates vary based on credit profile</span>
                </div>
                <Link href="/calculator">
                  <Button variant="link" className="text-primary p-0">
                    EMI Calculator <ArrowRight className="ml-1 h-4 w-4" />
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
