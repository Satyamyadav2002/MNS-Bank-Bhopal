import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ChevronRight, 
  Building2, 
  Users, 
  Shield, 
  Award,
  Target,
  Eye,
  Heart,
  MapPin,
  Phone,
  Mail,
  Calendar,
  TrendingUp
} from "lucide-react"

const milestones = [
  { year: "1954", event: "Bank established as a cooperative society" },
  { year: "1965", event: "First branch opened in TT Nagar" },
  { year: "1980", event: "Membership crossed 10,000 members" },
  { year: "1995", event: "Computerization of all banking operations" },
  { year: "2005", event: "Launch of CBS (Core Banking Solution)" },
  { year: "2015", event: "Introduction of Net Banking services" },
  { year: "2020", event: "Mobile Banking app launched" },
  { year: "2024", event: "Celebrated 70 years of service" },
]

const boardMembers = [
  { name: "Shri. Ramesh Kumar", designation: "Chairman", experience: "35+ years" },
  { name: "Shri. Suresh Sharma", designation: "Vice Chairman", experience: "30+ years" },
  { name: "Shri. Prakash Jain", designation: "CEO", experience: "25+ years" },
  { name: "Smt. Sunita Verma", designation: "Director", experience: "20+ years" },
  { name: "Shri. Mohan Patel", designation: "Director", experience: "25+ years" },
  { name: "Shri. Vijay Singh", designation: "Director", experience: "22+ years" },
]

const stats = [
  { value: "70+", label: "Years of Trust", icon: Calendar },
  { value: "50K+", label: "Happy Members", icon: Users },
  { value: "Rs. 500 Cr", label: "Deposits", icon: TrendingUp },
  { value: "3", label: "Branches", icon: MapPin },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-[#8B0015] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">About Us</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">About MNS Bank</h1>
                    <p className="text-white/70">महानगर नागरिक सहकारी बैंक लिमिटेड</p>
                  </div>
                </div>
                <p className="text-lg text-white/80 mb-8">
                  Serving the Bhopal community since 1954, Mahanagar Nagrik Sahakari Bank Ltd. is a trusted Urban Cooperative Bank committed to providing accessible, affordable, and ethical banking services to its members.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Become a Member
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="h-8 w-8 mx-auto mb-3 text-[#D4A017]" />
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-primary">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide safe, secure, and accessible banking services to all members of our community, fostering financial inclusion and economic growth through cooperative values.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-[#D4A017]">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#D4A017]/10 rounded-xl flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-[#D4A017]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the most trusted and preferred cooperative bank in Madhya Pradesh, known for innovation, customer service, and community development.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-[#28A745]">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#28A745]/10 rounded-xl flex items-center justify-center mb-6">
                    <Heart className="h-7 w-7 text-[#28A745]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Our Values</h3>
                  <p className="text-muted-foreground">
                    Trust, Transparency, Integrity, and Community Service form the core of our operations. We believe in ethical banking practices that benefit all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-[#FAF7F2]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                70 years of serving the Bhopal community with trust and dedication
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Board of Directors
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Experienced leadership guiding our cooperative values
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member) => (
                <Card key={member.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary font-medium">{member.designation}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.experience} experience</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Info */}
        <section className="py-16 md:py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Operating under strict regulatory framework for your safety
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">RBI Regulated</h3>
                <p className="text-white/70 text-sm">
                  Licensed and regulated by Reserve Bank of India under UCB norms
                </p>
                <p className="text-white/50 text-xs mt-2">Reg. No: MCGM/BPL/2023</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#D4A017]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">DICGC Insured</h3>
                <p className="text-white/70 text-sm">
                  Deposits insured up to Rs. 5 Lakh per depositor by DICGC
                </p>
                <p className="text-white/50 text-xs mt-2">Member since 1962</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#28A745]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">CRAR Compliant</h3>
                <p className="text-white/70 text-sm">
                  Maintaining Capital to Risk-Weighted Assets Ratio above regulatory requirement
                </p>
                <p className="text-white/50 text-xs mt-2">CRAR: 15.5%</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
