import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface HeadlineContextType {
  text: string
  setText: Dispatch<SetStateAction<string>>
  fontSize: string
  setFontSize: Dispatch<SetStateAction<string>>
  fontWeight: string
  setFontWeight: Dispatch<SetStateAction<string>>
  fontFamily: string
  setFontFamily: Dispatch<SetStateAction<string>>
}
export interface HeadlineProviderProps {
  children: ReactNode
}
