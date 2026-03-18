import { UtilityBar } from "@/components/home/utility-bar"
import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBar } from "@/components/home/trust-bar"
import { QuickAssistance } from "@/components/home/quick-assistance"
import { ProductsSection } from "@/components/home/products-section"
import { InterestRatesWidget } from "@/components/home/interest-rates"
import { DigitalServicesSection } from "@/components/home/digital-services"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Testimonials } from "@/components/home/testimonials"
import { NewsUpdates } from "@/components/home/news-updates"
import { BranchLocator } from "@/components/home/branch-locator"
import { Footer } from "@/components/home/footer"
import { MobileNav } from "@/components/home/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <UtilityBar />
      <Header />
      <HeroSection />
      <TrustBar />
      
      <main>
        <section id="assistance"><QuickAssistance /></section>
        <section id="products"><ProductsSection /></section>
        <section id="calculator"><InterestRatesWidget /></section>
        <section id="digital"><DigitalServicesSection /></section>
        <section id="whyus"><WhyChooseUs /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="news"><NewsUpdates /></section>
        <section id="branches"><BranchLocator /></section>
      </main>
      
      <Footer />
      <MobileNav />
    </div>
  )
}
