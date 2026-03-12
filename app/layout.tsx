import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter"
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto-mono"
});

export const metadata: Metadata = {
  title: 'Mahanagar Nagrik Sahakari Bank Ltd. | Bhopal',
  description: 'महानगर नागरिक सहकारी बैंक लिमिटेड, भोपाल - Your trusted cooperative bank since 1954. Offering savings accounts, fixed deposits, loans, and digital banking services.',
  generator: 'MNS Bank Bhopal',
  keywords: ['MNS Bank', 'Mahanagar Nagrik Sahakari Bank', 'Bhopal Bank', 'Cooperative Bank', 'Urban Cooperative Bank', 'Fixed Deposit', 'Savings Account', 'Gold Loan', 'Home Loan'],
  authors: [{ name: 'MNS Bank Bhopal' }],
  openGraph: {
    title: 'Mahanagar Nagrik Sahakari Bank Ltd. | Bhopal',
    description: 'Your trusted cooperative bank since 1954. DICGC insured deposits up to Rs. 5 Lakh.',
    type: 'website',
    locale: 'en_IN',
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
      <body className={`${playfair.variable} ${inter.variable} ${robotoMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
