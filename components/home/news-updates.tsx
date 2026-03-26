"use client"
import { useState } from "react"
import { ArrowRight, Calendar } from "lucide-react"

const tabs = ["Bank News", "Deposit Rates", "RBI Updates"] as const
type Tab = typeof tabs[number]

const news: Record<Tab, { date: string; title: string; excerpt: string; tag: string; tagColor: string }[]> = {
  "Bank News": [
    { date: "05 Mar 2026", title: "Annual General Meeting Notice", excerpt: "76th AGM is scheduled for March 28, 2026 at 11:00 AM at Head Office.", tag: "Notice", tagColor: "bg-gray-100 text-gray-600" },
    { date: "01 Mar 2026", title: "New Karond Branch Opening Soon", excerpt: "Expanding our footprint. We will soon be opening our new branch in Karond area.", tag: "Expansion", tagColor: "bg-emerald-50 text-emerald-700" },
    { date: "25 Feb 2026", title: "Holiday Notice – Holi", excerpt: "All branches will remain closed on the occasion of Holi festival.", tag: "Holiday", tagColor: "bg-blue-50 text-blue-700" },
  ],
  "Deposit Rates": [
    { date: "01 Mar 2026", title: "Special 1-Year FD Rate Extended", excerpt: "Our special 7.00% p.a. interest rate for 1 Year FD has been extended till March 31, 2026.", tag: "FD", tagColor: "bg-[#C0001B]/8 text-[#C0001B]" },
    { date: "15 Feb 2026", title: "Senior Citizen Extra Benefits", excerpt: "Senior citizens now get an additional 0.50% interest across all FD tenures.", tag: "Senior", tagColor: "bg-emerald-50 text-emerald-700" },
    { date: "01 Feb 2026", title: "Savings Account Base Rate", excerpt: "Interest rate on savings account is currently maintained at a highly competitive 6.00% p.a.", tag: "Savings", tagColor: "bg-blue-50 text-blue-700" },
  ],
  "RBI Updates": [
    { date: "28 Feb 2026", title: "RBI Monetary Policy Update", excerpt: "Repo rate remains unchanged at 6.50% in the latest monetary policy review.", tag: "Policy", tagColor: "bg-gray-100 text-gray-600" },
    { date: "15 Feb 2026", title: "Video KYC Guidelines Update", excerpt: "RBI issues new simplified guidelines for Video KYC onboarding for Urban Cooperative Banks.", tag: "KYC", tagColor: "bg-blue-50 text-blue-700" },
    { date: "01 Feb 2026", title: "Cybersecurity Framework", excerpt: "New baseline cybersecurity framework released for all Urban Cooperative Banks.", tag: "Security", tagColor: "bg-amber-50 text-amber-700" },
  ],
}

export function NewsUpdates() {
  const [activeTab, setActiveTab] = useState<Tab>("Bank News")

  return (
    <section className="bg-white border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C0001B] border-l-4 border-[#C0001B] pl-3 inline-block mb-4">Stay Informed</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Latest News &amp; Updates</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex border-b border-gray-200 gap-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-bold relative transition-colors ${
                  activeTab === tab ? "text-[#C0001B]" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
                <div className={`absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#C0001B] rounded-full transition-all duration-300 ${activeTab === tab ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {news[activeTab].map((item, i) => (
            <div key={`${activeTab}-${i}`}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#C0001B]/20 hover:shadow-md transition-all relative overflow-hidden">
              {/* Bottom red bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C0001B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-b-2xl" />

              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#C0001B] bg-[#C0001B]/6 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.tagColor}`}>{item.tag}</span>
              </div>

              <h3 className="font-bold text-gray-900 mb-2.5 group-hover:text-[#C0001B] transition-colors line-clamp-2 text-base">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-5 line-clamp-3 leading-relaxed">{item.excerpt}</p>

              <button className="text-sm font-bold text-gray-700 flex items-center gap-2 group-hover:text-[#C0001B] transition-colors">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
