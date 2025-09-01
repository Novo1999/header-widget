import type { ReactNode } from 'react'

export interface HeadlineContextType {
  text: string
  setText: (text: string) => void
}

export interface HeadlineProviderProps {
  children: ReactNode
}
