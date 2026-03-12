"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Bell, FileText, AlertCircle } from "lucide-react"

const bankNews = [
  {
    date: "March 10, 2026",
    title: "New Branch Opening at Karond",
    description: "We are pleased to announce the opening of our new branch at Karond, Bhopal.",
    type: "announcement",
  },
  {
    date: "March 5, 2026",
    title: "Revised Fixed Deposit Interest Rates",
    description: "Interest rates on Fixed Deposits have been revised with effect from 1st March 2026.",
    type: "rates",
  },
  {
    date: "February 28, 2026",
    title: "Extended Banking Hours for Month End",
    description: "All branches will remain open till 6 PM on the last working day of February.",
    type: "announcement",
  },
]

const notices = [
  {
    date: "March 8, 2026",
    title: "Holiday Notice - Holi Festival",
    description: "Bank will remain closed on 14th March 2026 on account of Holi.",
    type: "holiday",
  },
  {
    date: "March 1, 2026",
    title: "KYC Update Reminder",
    description: "Please update your KYC documents at your nearest branch to avoid service interruption.",
    type: "reminder",
  },
  {
    date: "February 25, 2026",
    title: "Beware of Fraudulent Calls",
    description: "Bank never asks for OTP, PIN or Password. Report suspicious calls to cyber cell.",
    type: "alert",
  },
]

const circulars = [
  {
    date: "March 1, 2026",
    title: "RBI Master Circular on Interest Rates",
    description: "Guidelines on interest rates on deposits held by Urban Cooperative Banks.",
    href: "#",
  },
  {
    date: "February 15, 2026",
    title: "DICGC Deposit Insurance Coverage",
    description: "Coverage of deposits under DICGC scheme increased to Rs. 5 Lakh per depositor.",
    href: "#",
  },
  {
    date: "February 1, 2026",
    title: "Digital Banking Guidelines",
    description: "RBI guidelines on digital banking channels and customer protection.",
    href: "#",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            News & Updates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed with the latest announcements and updates
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Bank News</span>
              <span className="sm:hidden">News</span>
            </TabsTrigger>
            <TabsTrigger value="notices" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Notices</span>
              <span className="sm:hidden">Notices</span>
            </TabsTrigger>
            <TabsTrigger value="circulars" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">RBI Circulars</span>
              <span className="sm:hidden">RBI</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {bankNews.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <Link href="#" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                      Read More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="notices" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {notices.map((item, index) => (
                <Card key={index} className={`border-border hover:shadow-lg transition-shadow ${item.type === 'alert' ? 'border-l-4 border-l-primary' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="circulars" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {circulars.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <Link href={item.href} className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                      View Circular <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link href="/news">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
