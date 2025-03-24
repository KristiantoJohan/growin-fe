import "../styles/globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
