import type { Dispatch, ReactNode, SetStateAction } from 'react'
import type { TextStyle } from './TextStyle'

export interface HeadlineContextType {
  text: string
  setText: Dispatch<SetStateAction<string>>
  fontSize: string
  setFontSize: Dispatch<SetStateAction<string>>
  fontWeight: string
  setFontWeight: Dispatch<SetStateAction<string>>
  fontFamily: string
  setFontFamily: Dispatch<SetStateAction<string>>
  gradientEnabled: boolean
  setGradientEnabled: Dispatch<SetStateAction<boolean>>
  gradientDirection: string
  setGradientDirection: Dispatch<SetStateAction<string>>
  gradientFrom: string
  setGradientFrom: Dispatch<SetStateAction<string>>
  gradientTo: string
  setGradientTo: Dispatch<SetStateAction<string>>
  textStyles: TextStyle[]
  setTextStyles: Dispatch<SetStateAction<TextStyle[]>>
}
export interface HeadlineProviderProps {
  children: ReactNode
}
