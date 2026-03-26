"use client"
import { useState } from "react"
import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { PageShell } from "@/components/ui/page-shell"
import { BankingSegmentProvider } from "@/components/home/banking-segment-context"
import { SegmentSwitcher } from "@/components/home/segment-switcher"
import { CheckCircle2, User, Phone, Mail, Star, ArrowRight } from "lucide-react"

const categories = [
  "Account Services",
  "Loan Products",
  "Deposit Products",
  "Net Banking / Mobile App",
  "ATM / Debit Card",
  "Branch Staff & Service",
  "Grievance Handling",
  "Website / Digital Experience",
  "Other",
]

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [form, setForm] = useState({ name: "", mobile: "", email: "", category: "", feedback: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <BankingSegmentProvider>
      <div className="min-h-screen font-sans">
        <SegmentSwitcher />
        <Header />
        <PageShell
          title="Share Your Feedback"
          subtitle="Your experience matters to us. Help us serve you better by sharing your honest feedback."
          breadcrumbs={[{ label: "Stay Connected" }, { label: "Feedback" }]}
        >
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-12 text-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Thank You!</h3>
                <p className="text-emerald-700">Your feedback has been recorded. We appreciate you taking the time to share your experience with MNS Bank.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Star Rating */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-4">Overall Experience *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-9 h-9 transition-colors ${
                            star <= (hovered || rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-200 fill-gray-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-sm font-semibold text-[#C0001B] mt-3">
                      {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
                    </p>
                  )}
                </div>

                {/* Personal details */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all"
                        placeholder="Full name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input value={form.mobile} onChange={e => setForm(p => ({ ...p, mobile: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all"
                        placeholder="Optional" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all"
                      placeholder="Optional" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category *</label>
                  <select required value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all appearance-none bg-white">
                    <option value="">Select a category</option>
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Feedback *</label>
                  <textarea required value={form.feedback} onChange={e => setForm(p => ({ ...p, feedback: e.target.value }))}
                    rows={5} maxLength={1000}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C0001B]/20 focus:border-[#C0001B] transition-all resize-none"
                    placeholder="Please share your experience, suggestions, or any specific comments..." />
                  <p className="text-xs text-gray-400 mt-1 text-right">{form.feedback.length}/1000</p>
                </div>

                <button type="submit"
                  className="w-full bg-[#C0001B] hover:bg-[#8B0015] text-white font-bold py-3.5 rounded-xl transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)] flex items-center justify-center gap-2">
                  Submit Feedback <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Your feedback is confidential and used solely to improve our services. It will not be shared with third parties.
                </p>
              </form>
            )}

            {/* Complaint escalation note */}
            <div className="mt-10 p-5 bg-[#FFF5F6] border border-[#C0001B]/10 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-1">Have a complaint?</h3>
              <p className="text-sm text-gray-600 mb-3">For unresolved service issues, use our formal Grievance Redressal process for faster escalation and tracking.</p>
              <a href="/grievance-redressal" className="inline-flex items-center gap-2 text-sm font-bold text-[#C0001B] hover:gap-3 transition-all">
                Grievance Redressal <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </PageShell>
        <Footer />
      </div>
    </BankingSegmentProvider>
  )
}
