import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cinzel, UnifrakturMaguntia } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const unifraktur = UnifrakturMaguntia({ subsets: ["latin"], variable: '--font-unifraktur', weight: '400' });

export const metadata: Metadata = {
  title: 'EtecEmRuinas - Horror Game',
  description: 'Explore the abandoned school in EtecEmRuinas. Play now or download the full game.',
  generator: 'v0.app',
  icons: null,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased ${unifraktur.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
