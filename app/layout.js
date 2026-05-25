import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Noku — Cross-server chat for Discord',
  description: 'Cross-server chat, built for Discord communities. Connect your server with another live community and start chatting instantly.',
  verification: {
    google: 'su745yTGjYD2YxCjZ-Nd4oDzhubbAniByFPPT__p084',
  },
  openGraph: {
    title: 'Noku — Cross-server chat for Discord',
    description: 'Connect your server with another live community and start chatting instantly.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0b0c10] text-white antialiased`}>{children}</body>
    </html>
  )
}
