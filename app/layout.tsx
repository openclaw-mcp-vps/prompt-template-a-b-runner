import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt A/B Runner — A/B test AI prompts with automated winner selection',
  description: 'Run A/B tests on AI prompt variations, automatically route traffic to winning variants based on output quality metrics.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7dafda3-853d-400a-a973-f53a52c392a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
