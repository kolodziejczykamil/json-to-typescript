import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SeoContent } from '@/components/layout/SeoContent'
import { ToolContainer } from '@/components/tool/ToolContainer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
          <ToolContainer />
        </div>
        <SeoContent />
      </main>
      <Footer />
    </div>
  )
}
