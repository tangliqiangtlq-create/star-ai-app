import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '榴莲TV - Star AI Video',
  description: 'Premium video streaming platform',
  icons: { icon: '/favicon.ico' }
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
