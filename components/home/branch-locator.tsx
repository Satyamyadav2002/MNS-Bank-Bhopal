"use client"
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react"
import Link from "next/link"

const branches = [
  {
    name: "Head Office — Bairagarhi",
    address: "E-3/21, Arera Colony, Bhopal, MP 462016",
    phone: "0755-4098000",
    hours: "Mon–Sat: 10:00 AM – 5:00 PM",
    type: "Head Office",
    isHead: true,
  },
  {
    name: "TT Nagar Branch",
    address: "TT Nagar, Near Bus Stand, Bhopal, MP 462003",
    phone: "0755-4098001",
    hours: "Mon–Sat: 10:00 AM – 5:00 PM",
    type: "Branch",
    isHead: false,
  },
  {
    name: "Karond Branch",
    address: "Karond Circle, Bhopal, MP 462038",
    phone: "0755-4098002",
    hours: "Mon–Sat: 10:00 AM – 5:00 PM",
    type: "Branch",
    isHead: false,
  },
]

export function BranchLocator() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">Find Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Visit Our Branches</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">Three convenient locations across Bhopal to serve you better.</p>
        </div>

        {/* Branch cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <div key={i} className={`group relative bg-white border rounded-2xl p-6 transition-all hover:shadow-lg overflow-hidden ${b.isHead ? "border-[#C0001B]/20 shadow-sm" : "border-gray-100"}`}>
              {/* Top accent bar for head office */}
              {b.isHead && <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] rounded-t-2xl" />}
              {/* Hover accent for branches */}
              {!b.isHead && <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-t-2xl" />}

              <div className="flex items-center gap-2 mb-4 mt-1">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${b.isHead ? "bg-[#C0001B] text-white" : "bg-gray-100 text-gray-500"}`}>
                  {b.type}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-4 group-hover:text-[#C0001B] transition-colors">{b.name}</h3>

              <div className="space-y-2.5 text-sm mb-5">
                <div className="flex items-start gap-3 text-gray-500">
                  <MapPin className="w-4 h-4 text-[#C0001B] shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <Phone className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <a href={`tel:${b.phone.replace(/-/g, "")}`} className="hover:text-[#C0001B] transition-colors font-medium">{b.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <Clock className="w-4 h-4 text-[#C0001B] shrink-0" />
                  <span>{b.hours}</span>
                </div>
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-[#C0001B] font-bold text-sm hover:gap-3 transition-all">
                <Navigation className="w-4 h-4" /> Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Locate Us CTA */}
        <div className="mt-10 text-center">
          <Link href="/locate-us" className="inline-flex items-center gap-2 border-2 border-[#C0001B] text-[#C0001B] font-bold px-8 py-3 rounded-xl hover:bg-[#C0001B] hover:text-white transition-all">
            View Full Branch List & ATMs
          </Link>
        </div>
      </div>
    </section>
  )
}
