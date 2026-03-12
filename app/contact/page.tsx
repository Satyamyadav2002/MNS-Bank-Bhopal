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
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building2,
  Send,
  MessageSquare,
  AlertCircle
} from "lucide-react"

const branches = [
  {
    name: "Head Office - Bairagarh",
    address: "Near Railway Station, Bairagarh, Bhopal - 462030",
    phone: "0755-4098000, 4098001",
    email: "ho@mnsbankbhopal.com",
    hours: "Mon-Sat: 10:00 AM - 5:00 PM",
    ifsc: "MNSB0001234",
    manager: "Shri. Rajesh Kumar",
  },
  {
    name: "TT Nagar Branch",
    address: "Shop No. 5-6, TT Nagar Market, Bhopal - 462003",
    phone: "0755-4098002, 4098003",
    email: "ttnagar@mnsbankbhopal.com",
    hours: "Mon-Sat: 10:00 AM - 5:00 PM",
    ifsc: "MNSB0001235",
    manager: "Shri. Suresh Sharma",
  },
  {
    name: "Karond Branch",
    address: "Main Road, Karond, Bhopal - 462038",
    phone: "0755-4098004, 4098005",
    email: "karond@mnsbankbhopal.com",
    hours: "Mon-Sat: 10:00 AM - 5:00 PM",
    ifsc: "MNSB0001236",
    manager: "Smt. Sunita Verma",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your message. We will get back to you soon!")
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
              <span className="text-white">Contact Us</span>
            </nav>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
                <p className="text-white/70">We are here to help you</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Toll Free (Mon-Sat, 10AM-5PM)</p>
                  <a href="tel:07554098000" className="text-primary font-semibold text-lg hover:underline">
                    0755-4098000
                  </a>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#D4A017]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-7 w-7 text-[#D4A017]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">General Inquiries</p>
                  <a href="mailto:info@mnsbankbhopal.com" className="text-primary font-semibold hover:underline">
                    info@mnsbankbhopal.com
                  </a>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#28A745]/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <MessageSquare className="h-7 w-7 text-[#28A745]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Grievance</h3>
                  <p className="text-muted-foreground text-sm mb-2">Nodal Officer</p>
                  <Link href="/grievance" className="text-primary font-semibold hover:underline">
                    File a Complaint
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12 md:py-16 bg-[#FAF7F2]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send us a Message
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
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="branch">Select Branch</Label>
                        <Select value={formData.branch} onValueChange={(value) => setFormData({ ...formData, branch: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ho">Head Office - Bairagarh</SelectItem>
                            <SelectItem value="ttnagar">TT Nagar Branch</SelectItem>
                            <SelectItem value="karond">Karond Branch</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-[#8B0015]">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <div className="space-y-6">
                <Card className="shadow-lg overflow-hidden">
                  <div className="bg-muted h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p className="font-medium">Google Map</p>
                      <p className="text-sm">Bhopal Branch Locations</p>
                    </div>
                  </div>
                </Card>
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Banking Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        All branches are open Monday to Saturday from 10:00 AM to 5:00 PM. 
                        Closed on Sundays and public holidays.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Branches
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Visit any of our branches across Bhopal
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <Card key={branch.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{branch.name}</h3>
                        <p className="text-sm text-muted-foreground">Manager: {branch.manager}</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-muted-foreground">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${branch.email}`} className="text-primary hover:underline">{branch.email}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{branch.hours}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t text-sm">
                      <span className="text-muted-foreground">IFSC: </span>
                      <span className="font-mono font-medium">{branch.ifsc}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
