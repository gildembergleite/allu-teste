import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { RootProvider } from './provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'ALLU',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <RootProvider>
          <Header />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
}
