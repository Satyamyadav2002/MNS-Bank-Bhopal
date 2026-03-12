import { Shield, Users, Building, Award, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "DICGC Insured",
    description: "Your deposits are insured up to Rs. 5 Lakh by Deposit Insurance and Credit Guarantee Corporation",
    color: "text-[#D4A017]",
    bgColor: "bg-[#D4A017]/10",
  },
  {
    icon: Building,
    title: "RBI Regulated",
    description: "Operating under the strict regulatory framework of Reserve Bank of India since 1954",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Member-Owned",
    description: "As a cooperative bank, we are owned by our members and work for their benefit",
    color: "text-[#28A745]",
    bgColor: "bg-[#28A745]/10",
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description: "Fast loan approvals and quick service at all our branches across Bhopal",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Local Service",
    description: "Serving the Bhopal community with personalized banking solutions for over 70 years",
    color: "text-[#D4A017]",
    bgColor: "bg-[#D4A017]/10",
  },
  {
    icon: Award,
    title: "Trusted Legacy",
    description: "Building financial futures for generations with trust, transparency, and community values",
    color: "text-[#28A745]",
    bgColor: "bg-[#28A745]/10",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose MNS Bank?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner in building a secure financial future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
