import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, Noto_Sans_Devanagari, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ['normal', 'italic'],
  variable: "--font-serif"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans"
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'Mahanagar Nagrik Sahakari Bank Ltd. | Bhopal',
  description: 'महानगर नागरिक सहकारी बैंक लिमिटेड, भोपाल - Your trusted cooperative bank since 1954. Offering savings accounts, fixed deposits, loans, and secure digital banking services.',
  generator: 'MNS Bank Bhopal',
  applicationName: 'MNS Bank',
  keywords: ['MNS Bank', 'Mahanagar Nagrik Sahakari Bank', 'Bhopal Bank', 'Cooperative Bank', 'Fixed Deposit', 'Savings Account', 'Gold Loan', 'Home Loan', 'Net Banking', 'Zero Balance Account'],
  authors: [{ name: 'MNS Bank Bhopal' }],
  creator: 'MNS Bank Bhopal',
  publisher: 'MNS Bank Bhopal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    languages: {
      'en-IN': '/en',
      'hi-IN': '/hi',
    },
  },
  openGraph: {
    title: 'Mahanagar Nagrik Sahakari Bank Ltd. | Bhopal',
    description: 'Bhopal\'s Trusted Bank Since 1954. DICGC insured deposits up to ₹5 Lakh.',
    url: 'https://mnsbankbhopal.com',
    siteName: 'Mahanagar Nagrik Sahakari Bank',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahanagar Nagrik Sahakari Bank',
    description: 'Your trusted cooperative bank since 1954. Explore our premium banking services.',
  },
}

export const viewport: Viewport = {
  themeColor: '#C0001B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} ${notoDevanagari.variable} ${dmMono.variable} font-sans antialiased text-bank-charcoal mesh-bg selection:bg-bank-red/20 selection:text-bank-red-dark`}>
        <div className="bg-noise min-h-screen flex flex-col relative w-full overflow-x-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
