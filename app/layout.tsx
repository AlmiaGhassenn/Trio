import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: 'TRIO Agency | Three Minds. One Vision.',
  description: 'We build brands that actually work. A small team delivering web development, video editing, social media management, and branding design.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`font-sans antialiased`} style={{ '--font-dm-sans': dmSans.variable, '--font-syne': syne.variable } as React.CSSProperties} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `.trim(),
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
