import './globals.css'

export const metadata = {
  title: 'TeamClaw - Treat AI as a teammate, not a tool',
  description: 'Open-source human-AI collaboration platform that enables AI Agents to participate in project management as real team members.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020617] text-white selection:bg-[#0056ff]/30">
        {children}
      </body>
    </html>
  )
}
