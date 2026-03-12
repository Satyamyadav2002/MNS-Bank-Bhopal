import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductPageLayout } from "@/components/product-page-layout"
import { PiggyBank } from "lucide-react"

export default function SavingsAccountPage() {
  return (
    <>
      <Header />
      <ProductPageLayout
        title="Savings Account"
        titleHindi="बचत खाता"
        description="Open a savings account with MNS Bank and enjoy attractive interest rates, free debit card, and access to digital banking services. Start your savings journey with us."
        icon={<PiggyBank className="h-8 w-8 text-white" />}
        interestRate="6.0%"
        rateLabel="Interest Rate p.a."
        features={[
          "Attractive interest rate of 6.0% p.a.",
          "Zero minimum balance requirement",
          "Free RuPay Debit Card",
          "Free Mobile Banking & Net Banking",
          "Free SMS Alerts",
          "Cheque Book facility",
          "Nomination facility available",
          "DICGC insured up to Rs. 5 Lakh",
          "Interest paid quarterly",
          "Unlimited branch transactions",
        ]}
        eligibility={[
          "Indian resident above 18 years of age",
          "Valid KYC documents (Aadhaar, PAN)",
          "Proof of address (Aadhaar/Voter ID/Passport)",
          "Minor accounts with guardian",
          "Joint accounts allowed",
        ]}
        documents={[
          "Aadhaar Card",
          "PAN Card",
          "Passport Size Photos (2)",
          "Address Proof",
          "Signature on Form",
          "Initial Deposit",
        ]}
        process={[
          {
            step: 1,
            title: "Visit Branch",
            description: "Visit any MNS Bank branch with required documents",
          },
          {
            step: 2,
            title: "Fill Application",
            description: "Complete the account opening form with your details",
          },
          {
            step: 3,
            title: "Submit Documents",
            description: "Submit KYC documents and photographs for verification",
          },
          {
            step: 4,
            title: "Initial Deposit",
            description: "Make initial deposit and receive your account number",
          },
          {
            step: 5,
            title: "Activate Services",
            description: "Activate debit card, net banking and mobile banking",
          },
        ]}
        faqs={[
          {
            question: "What is the minimum balance required?",
            answer: "MNS Bank Savings Account has zero minimum balance requirement. However, maintaining Rs. 500 average quarterly balance is recommended for free services.",
          },
          {
            question: "What is the interest rate on savings account?",
            answer: "We offer an attractive interest rate of 6.0% per annum on savings account, calculated on daily balance and credited quarterly.",
          },
          {
            question: "Can I open a joint savings account?",
            answer: "Yes, you can open a joint savings account with up to 3 joint holders. All joint holders need to submit KYC documents.",
          },
          {
            question: "Is there any charge for debit card?",
            answer: "First RuPay debit card is issued free of cost. Annual maintenance charges apply from second year onwards.",
          },
          {
            question: "How can I access my account online?",
            answer: "You can access your account through Net Banking and Mobile Banking. Visit our branch to activate these services.",
          },
        ]}
        relatedProducts={[
          { title: "Current Account", href: "/accounts/current" },
          { title: "Fixed Deposit", href: "/deposits/fixed", rate: "7.5%" },
          { title: "Recurring Deposit", href: "/deposits/recurring", rate: "7.0%" },
        ]}
      />
      <Footer />
    </>
  )
}
