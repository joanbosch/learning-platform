import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="[scroll-behavior:smooth] motion-reduce:[scroll-behavior:auto] light">
      <body className="bg-primary text-base text-primary antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
