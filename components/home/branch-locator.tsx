"use client"
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react"

export function BranchLocator() {
  const branches = [
    {
      name: "Head Office — Bairagarhi",
      address: "E-3/21, Arera Colony, Bhopal, MP 462016",
      phone: "0755-4098000",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM",
      type: "Head Office"
    },
    {
      name: "TT Nagar Branch",
      address: "TT Nagar, Near Bus Stand, Bhopal, MP 462003",
      phone: "0755-4098001",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM",
      type: "Branch"
    },
    {
      name: "Karond Branch",
      address: "Karond Circle, Bhopal, MP 462038",
      phone: "0755-4098002",
      hours: "Mon–Sat: 10:00 AM – 5:00 PM",
      type: "Branch"
    }
  ]

  return (
    <section className="py-28 section-dark-premium relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9922A]/40" />
            <span className="eyebrow-label border-0 pl-0 text-[#C9922A]">FIND US</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9922A]/40" />
          </div>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-4">
            Visit Our Branches
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Three convenient locations across Bhopal to serve you better.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <div key={i} className="group bg-white/[0.04] border border-white/[0.08] rounded-[20px] p-7 premium-card-dark hover:bg-white/[0.07] hover:border-[#C9922A]/25 relative overflow-hidden">
              {/* Gold top accent */}
              {i === 0 && <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C0001B] via-[#C9922A] to-[#F0C96A]" />}
              
              <div className="flex items-center gap-2 mb-5">
                <span className={`text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${i === 0 ? 'bg-[#C9922A]/20 text-[#F0C96A]' : 'bg-white/[0.06] text-white/50'}`}>
                  {branch.type}
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-white mb-4">{branch.name}</h3>
              
              <div className="space-y-3 text-[14px] mb-6">
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin className="w-4 h-4 text-[#C9922A] shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <Phone className="w-4 h-4 text-[#C9922A] shrink-0" />
                  <a href={`tel:${branch.phone.replace(/-/g, '')}`} className="hover:text-[#C9922A] transition-colors">{branch.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-white/50">
                  <Clock className="w-4 h-4 text-[#C9922A] shrink-0" />
                  <span>{branch.hours}</span>
                </div>
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 text-[#C9922A] font-bold text-sm hover:text-[#F0C96A] transition-colors group/link">
                <Navigation className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
