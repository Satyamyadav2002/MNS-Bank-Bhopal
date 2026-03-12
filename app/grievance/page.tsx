"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { 
  ChevronRight, 
  Phone, 
  Mail, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  User,
  FileText,
  Send
} from "lucide-react"

const escalationMatrix = [
  {
    level: "Level 1",
    title: "Branch Manager",
    description: "First point of contact for any complaint",
    contact: "Visit your branch or call branch number",
    timeline: "Resolution within 7 working days",
  },
  {
    level: "Level 2",
    title: "Grievance Redressal Officer",
    description: "If not satisfied with branch response",
    name: "Shri. Rajesh Kumar",
    phone: "0755-4098000",
    email: "grievance@mnsbankbhopal.com",
    timeline: "Resolution within 15 working days",
  },
  {
    level: "Level 3",
    title: "RBI Ombudsman",
    description: "If complaint not resolved within 30 days",
    website: "https://cms.rbi.org.in",
    phone: "14448 (Toll Free)",
    timeline: "As per RBI guidelines",
  },
]

export default function GrievancePage() {
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    phone: "",
    email: "",
    category: "",
    subject: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Your complaint has been registered. You will receive a confirmation via SMS/Email with your complaint reference number.")
  }

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
              <span className="text-white">Grievance Redressal</span>
            </nav>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Grievance Redressal</h1>
                <p className="text-white/70">We are committed to resolving your concerns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Notice Banner */}
        <div className="bg-[#D4A017] text-secondary py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              <span>Never share your OTP, PIN, or password with anyone. Bank never asks for such details.</span>
            </div>
          </div>
        </div>

        {/* Grievance Officer Card */}
        <section className="py-12 md:py-16 -mt-8">
          <div className="container mx-auto px-4">
            <Card className="shadow-lg border-l-4 border-l-primary max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <User className="h-5 w-5" />
                      <span className="font-semibold">Grievance Redressal Officer</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Shri. Rajesh Kumar</h3>
                    <p className="text-muted-foreground mb-4">Nodal Officer for Customer Complaints</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:07554098000" className="hover:text-primary">0755-4098000</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:grievance@mnsbankbhopal.com" className="hover:text-primary">
                          grievance@mnsbankbhopal.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Office Address</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Mahanagar Nagrik Sahakari Bank Ltd.<br />
                      Head Office, Near Railway Station<br />
                      Bairagarh, Bhopal - 462030<br />
                      Madhya Pradesh
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Mon-Sat: 10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Escalation Matrix */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Escalation Matrix
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three-tier grievance resolution mechanism as per RBI guidelines
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {escalationMatrix.map((level, index) => (
                <Card key={level.level} className={`relative ${index === 2 ? 'border-primary' : ''}`}>
                  <div className="absolute -top-4 left-6 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    {level.level}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
                    <div className="space-y-2 text-sm">
                      {level.name && (
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          <span>{level.name}</span>
                        </div>
                      )}
                      {level.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>{level.phone}</span>
                        </div>
                      )}
                      {level.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>{level.email}</span>
                        </div>
                      )}
                      {level.website && (
                        <a 
                          href={level.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>RBI CMS Portal</span>
                        </a>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{level.timeline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complaint Form */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Register Your Complaint
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input
                          id="accountNumber"
                          placeholder="Enter account number"
                          value={formData.accountNumber}
                          onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Complaint Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="account">Account Related</SelectItem>
                            <SelectItem value="transaction">Transaction Issue</SelectItem>
                            <SelectItem value="loan">Loan Related</SelectItem>
                            <SelectItem value="card">Debit Card Issue</SelectItem>
                            <SelectItem value="netbanking">Net Banking / Mobile Banking</SelectItem>
                            <SelectItem value="staff">Staff Behavior</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="Brief subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Complaint Details *</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe your complaint in detail..."
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                      />
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5" />
                        <span>
                          Your complaint will be acknowledged within 24 hours via SMS/Email. 
                          Resolution timeline: 7-15 working days depending on the nature of complaint.
                        </span>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-[#8B0015]">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Complaint
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* RBI Ombudsman Info */}
              <Card className="mt-8 bg-secondary text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">RBI Integrated Ombudsman Scheme</h3>
                      <p className="text-white/70 text-sm mb-4">
                        If your complaint is not resolved by the bank within 30 days, or if you are not satisfied 
                        with the resolution, you may approach the RBI Ombudsman.
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <a 
                          href="https://cms.rbi.org.in" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#D4A017] hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          cms.rbi.org.in
                        </a>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#D4A017]" />
                          <span>14448 (Toll Free)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
