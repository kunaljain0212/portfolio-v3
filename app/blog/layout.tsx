import Header from '@/components/header'
import Footer from '@/components/footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-4 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

