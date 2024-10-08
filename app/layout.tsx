import { Toaster } from 'sonner'
import '@/shared/styles/global.css'
import type { Metadata } from 'next'
import { cn } from '@/shadcn/lib/utils'
import { Navbar } from '@/shared/components/Navbar'
import { Inter as FontSans } from 'next/font/google'
import PostsProvider from '@/shared/context/posts-context'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Hexagonal Architecture — Hono + Next.js',
  description: 'Hexagonal Architecture with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body className={cn('min-h-screen bg-background font-sans antialiased overflow-x-hidden', fontSans.variable)}>
        <PostsProvider>
          <Navbar />

          {children}

          <Toaster
            duration={4000}
            visibleToasts={1}
            position="top-right"
          />
        </PostsProvider>
      </body>
    </html>
  )
}
