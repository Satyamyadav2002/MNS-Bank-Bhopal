import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductPageLayout } from "@/components/product-page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Landmark, Info } from "lucide-react"

const fdRates = [
  { tenure: "7-14 Days", general: "4.50%", senior: "5.00%" },
  { tenure: "15-45 Days", general: "5.00%", senior: "5.50%" },
  { tenure: "46-90 Days", general: "5.50%", senior: "6.00%" },
  { tenure: "91-180 Days", general: "6.00%", senior: "6.50%" },
  { tenure: "181-365 Days", general: "6.75%", senior: "7.25%" },
  { tenure: "1-2 Years", general: "7.25%", senior: "7.75%" },
  { tenure: "2-3 Years", general: "7.50%", senior: "8.00%" },
  { tenure: "3-5 Years", general: "7.25%", senior: "7.75%" },
]

export default function FixedDepositPage() {
  return (
    <>
      <Header />
      <ProductPageLayout
        title="Fixed Deposit"
        titleHindi="सावधि जमा"
        description="Secure your savings with MNS Bank Fixed Deposit and earn guaranteed returns up to 7.5% p.a. Senior citizens get additional 0.50% interest benefit."
        icon={<Landmark className="h-8 w-8 text-white" />}
        interestRate="7.5%"
        rateLabel="Interest Rate p.a."
        features={[
          "Interest rates up to 7.5% p.a.",
          "Senior citizens get extra 0.50%",
          "Flexible tenure from 7 days to 5 years",
          "Minimum deposit Rs. 1,000",
          "Cumulative & Non-cumulative options",
          "Loan against FD up to 90%",
          "Auto-renewal facility",
          "Nomination facility available",
          "DICGC insured up to Rs. 5 Lakh",
          "Tax-saving 5-year FD available",
        ]}
        eligibility={[
          "Indian resident individuals",
          "Hindu Undivided Family (HUF)",
          "Senior citizens (60+ years) for extra benefit",
          "Minor accounts with guardian",
          "Joint deposits allowed",
        ]}
        documents={[
          "Aadhaar Card",
          "PAN Card",
          "Passport Size Photo",
          "Savings Account (for debit)",
          "Age Proof (for seniors)",
          "KYC documents",
        ]}
        process={[
          {
            step: 1,
            title: "Choose Tenure",
            description: "Select deposit amount and tenure as per your needs",
          },
          {
            step: 2,
            title: "Visit Branch",
            description: "Visit any MNS Bank branch with documents",
          },
          {
            step: 3,
            title: "Fill Application",
            description: "Complete the FD application form",
          },
          {
            step: 4,
            title: "Fund Transfer",
            description: "Transfer funds from savings account or by cheque",
          },
          {
            step: 5,
            title: "Receive Receipt",
            description: "Get FD receipt and certificate",
          },
        ]}
        faqs={[
          {
            question: "What is the minimum amount for FD?",
            answer: "The minimum deposit amount for Fixed Deposit is Rs. 1,000. There is no maximum limit for FD deposits.",
          },
          {
            question: "Can I get a loan against FD?",
            answer: "Yes, you can avail loan up to 90% of your FD value at 2% above your FD interest rate. This is a quick way to meet urgent fund requirements.",
          },
          {
            question: "What if I need to withdraw before maturity?",
            answer: "Premature withdrawal is allowed with a penalty of 1% reduction in applicable interest rate. No penalty for deposits held for more than 1 year.",
          },
          {
            question: "Is TDS applicable on FD interest?",
            answer: "Yes, TDS is deducted at 10% if interest exceeds Rs. 40,000 per year (Rs. 50,000 for senior citizens). Submit Form 15G/15H if not taxable.",
          },
          {
            question: "What is Tax-Saving FD?",
            answer: "5-year Tax-Saving FD qualifies for deduction under Section 80C up to Rs. 1.5 Lakh. This FD has a lock-in period of 5 years.",
          },
        ]}
        relatedProducts={[
          { title: "Recurring Deposit", href: "/deposits/recurring", rate: "7.0%" },
          { title: "Double Deposit", href: "/deposits/double" },
          { title: "Senior Citizen FD", href: "/deposits/senior", rate: "8.0%" },
        ]}
      >
        {/* Interest Rate Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Fixed Deposit Interest Rates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Tenure</TableHead>
                  <TableHead className="font-semibold text-center">General Rate</TableHead>
                  <TableHead className="font-semibold text-center">Senior Citizen Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fdRates.map((rate) => (
                  <TableRow key={rate.tenure} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{rate.tenure}</TableCell>
                    <TableCell className="text-center text-[#28A745] font-semibold">{rate.general}</TableCell>
                    <TableCell className="text-center text-primary font-semibold">{rate.senior}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span>Rates effective from March 1, 2026. Subject to change without notice.</span>
            </div>
          </CardContent>
        </Card>
      </ProductPageLayout>
      <Footer />
    </>
  )
}
