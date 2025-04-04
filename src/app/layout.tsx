import "../styles/globals.css";
import { Inter, Poppins } from 'next/font/google';

// Konfigurasi Inter
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // opsional untuk penggunaan dengan CSS variable
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Growin',
  description: 'Enterprise product management system for corporations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  )
}
