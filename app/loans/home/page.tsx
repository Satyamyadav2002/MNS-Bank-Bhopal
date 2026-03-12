import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductPageLayout } from "@/components/product-page-layout"
import { Home } from "lucide-react"

export default function HomeLoanPage() {
  return (
    <>
      <Header />
      <ProductPageLayout
        title="Home Loan"
        titleHindi="गृह ऋण"
        description="Make your dream home a reality with MNS Bank Home Loan. Enjoy competitive interest rates, flexible tenure up to 30 years, and quick approval process."
        icon={<Home className="h-8 w-8 text-white" />}
        interestRate="8.5%"
        rateLabel="Starting from p.a."
        features={[
          "Interest rate starting from 8.5% p.a.",
          "Loan amount up to Rs. 1 Crore",
          "Flexible tenure up to 30 years",
          "Up to 80% of property value (LTV)",
          "No prepayment charges on floating rate",
          "Balance transfer facility available",
          "Quick approval within 7 working days",
          "Doorstep document collection",
          "EMI holiday up to 3 months",
          "Women borrowers get 0.05% concession",
        ]}
        eligibility={[
          "Indian citizen aged 21-65 years",
          "Salaried or Self-employed individuals",
          "Minimum monthly income Rs. 25,000",
          "Minimum 2 years of employment/business",
          "Good CIBIL score (650+)",
          "Property within MNS Bank operational area",
        ]}
        documents={[
          "Identity Proof (Aadhaar/PAN)",
          "Address Proof",
          "Income Proof (Salary Slips/ITR)",
          "Bank Statements (6 months)",
          "Property Documents",
          "Sale Agreement",
          "Approved Building Plan",
          "NOC from Society/Builder",
        ]}
        process={[
          {
            step: 1,
            title: "Submit Application",
            description: "Fill online/offline application with basic details",
          },
          {
            step: 2,
            title: "Document Verification",
            description: "Submit required documents for verification",
          },
          {
            step: 3,
            title: "Property Valuation",
            description: "Bank conducts property inspection and valuation",
          },
          {
            step: 4,
            title: "Loan Sanction",
            description: "Receive sanction letter with terms and conditions",
          },
          {
            step: 5,
            title: "Agreement & Disbursement",
            description: "Sign loan agreement and receive disbursement",
          },
        ]}
        faqs={[
          {
            question: "What is the maximum loan amount I can get?",
            answer: "You can get up to Rs. 1 Crore as home loan or up to 80% of the property value, whichever is lower. Loan eligibility depends on your income and repayment capacity.",
          },
          {
            question: "What types of properties are eligible?",
            answer: "Ready-to-move apartments, under-construction properties, plots for construction, and independent houses are eligible. Property should be within MNS Bank operational area in Bhopal.",
          },
          {
            question: "Can I prepay my home loan?",
            answer: "Yes, you can prepay your home loan anytime. There are no prepayment charges on floating rate home loans. Fixed rate loans may have prepayment charges as per RBI guidelines.",
          },
          {
            question: "What is the processing fee?",
            answer: "Processing fee is 0.50% of loan amount (minimum Rs. 5,000). Additional charges include legal and technical verification fees.",
          },
          {
            question: "Is there any special scheme for women?",
            answer: "Yes, women borrowers get a 0.05% concession on the interest rate. The property should be in the name of the woman borrower or co-borrower.",
          },
        ]}
        relatedProducts={[
          { title: "Plot Loan", href: "/loans/plot", rate: "9.0%" },
          { title: "Loan Against Property", href: "/loans/lap", rate: "10.5%" },
          { title: "Home Improvement Loan", href: "/loans/renovation", rate: "9.5%" },
        ]}
      />
      <Footer />
    </>
  )
}
