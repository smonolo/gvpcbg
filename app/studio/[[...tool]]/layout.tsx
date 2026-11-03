import type { ReactNode } from 'react'

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 h-dvh w-screen overflow-hidden bg-white">
      {children}
    </div>
  )
}
