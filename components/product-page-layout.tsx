"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ChevronRight, 
  CheckCircle, 
  FileText, 
  Download, 
  Calculator,
  Phone,
  ArrowRight,
  Clock,
  Shield,
  AlertCircle
} from "lucide-react"

interface ProductPageLayoutProps {
  title: string
  titleHindi?: string
  description: string
  icon: React.ReactNode
  interestRate?: string
  rateLabel?: string
  features: string[]
  eligibility: string[]
  documents: string[]
  process: { step: number; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  relatedProducts?: { title: string; href: string; rate?: string }[]
  children?: React.ReactNode
}

export function ProductPageLayout({
  title,
  titleHindi,
  description,
  icon,
  interestRate,
  rateLabel,
  features,
  eligibility,
  documents,
  process,
  faqs,
  relatedProducts,
  children,
}: ProductPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-br from-primary to-[#8B0015] text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-white">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                  {titleHindi && <p className="text-white/70">{titleHindi}</p>}
                </div>
              </div>
              <p className="text-lg text-white/80 mb-6 max-w-lg">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate EMI
                </Button>
              </div>
            </div>
            {interestRate && (
              <div className="hidden lg:flex justify-end">
                <Card className="bg-white/10 border-white/20 text-white w-72">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold mb-2">{interestRate}</div>
                    <div className="text-white/70">{rateLabel}</div>
                    <div className="mt-4 pt-4 border-t border-white/20 text-sm text-white/60">
                      *Terms and conditions apply
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="w-full grid grid-cols-4 mb-8">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                </TabsList>

                <TabsContent value="features">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Key Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#28A745] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="eligibility">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Eligibility Criteria
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {eligibility.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#28A745] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Required Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {documents.map((doc, index) => (
                          <li key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="process">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Application Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {process.map((step, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                              {step.step}
                            </div>
                            <div>
                              <h4 className="font-semibold">{step.title}</h4>
                              <p className="text-muted-foreground text-sm">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* FAQs */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details key={index} className="group border-b pb-4 last:border-0">
                        <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                          {faq.question}
                          <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                        </summary>
                        <p className="mt-2 text-muted-foreground text-sm">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {children}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card className="border-primary shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Interested in {title}?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill out our quick inquiry form and our team will contact you within 24 hours.
                  </p>
                  <Button className="w-full bg-primary hover:bg-[#8B0015]">
                    Apply Now
                  </Button>
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    or call us at
                  </div>
                  <a href="tel:07554098000" className="flex items-center justify-center gap-2 mt-2 font-semibold text-primary hover:underline">
                    <Phone className="h-4 w-4" />
                    0755-4098000
                  </a>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/calculator" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                    <span className="flex items-center gap-2">
                      <Calculator className="h-4 w-4 text-primary" />
                      EMI Calculator
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/rates" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Interest Rates
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link href="/downloads" className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                    <span className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-primary" />
                      Download Forms
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Related Products */}
              {relatedProducts && relatedProducts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Related Products</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {relatedProducts.map((product, index) => (
                      <Link
                        key={index}
                        href={product.href}
                        className="block p-3 rounded-lg border hover:border-primary transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{product.title}</span>
                          {product.rate && (
                            <span className="text-[#28A745] font-semibold text-sm">{product.rate}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
