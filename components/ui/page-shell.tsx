import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Breadcrumb {
  label: string
  href?: string
}

interface PageShellProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  ctaLabel?: string
  ctaHref?: string
  children: React.ReactNode
  className?: string
}

/**
 * Axis Bank-style inner page shell.
 * - Soft hero banner with page title + breadcrumb
 * - Optional CTA button
 * - Children rendered in a clean container below
 */
export function PageShell({ title, subtitle, breadcrumbs, ctaLabel, ctaHref, children, className }: PageShellProps) {
  return (
    <div className={cn("min-h-screen bg-white", className)}>
      {/* Page Hero Banner */}
      <div className="bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFF0F2] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-4 font-medium">
              <Link href="/" className="hover:text-[#C0001B] transition-colors">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gray-300" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#C0001B] transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-gray-600">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{title}</h1>
              {subtitle && <p className="text-gray-500 mt-2 text-base max-w-2xl">{subtitle}</p>}
            </div>
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="shrink-0 inline-flex items-center gap-2 bg-[#C0001B] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#8B0015] transition-colors shadow-[0_4px_12px_rgba(192,0,27,0.2)]"
              >
                {ctaLabel} <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  )
}
