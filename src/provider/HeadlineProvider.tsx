import { useState } from 'react'
import HeadlineContext from '../context/HeadlineContext'
import type { HeadlineProviderProps } from '../interface/HeadlineContext'

const HeadlineProvider: React.FC<HeadlineProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>('Your Text Here')
  const [fontSize, setFontSize] = useState<string>('text-5xl')
  const [fontWeight, setFontWeight] = useState<string>('font-bold')
  const [fontFamily, setFontFamily] = useState<string>('font-sans')

  const [gradientEnabled, setGradientEnabled] = useState<boolean>(false)
  const [gradientDirection, setGradientDirection] = useState<string>('to-r')
  const [gradientFrom, setGradientFrom] = useState<string>('#3b82f6')
  const [gradientTo, setGradientTo] = useState<string>('#9333ea')

  return (
    <HeadlineContext.Provider
      value={{
        text,
        setText,
        fontFamily,
        fontSize,
        fontWeight,
        setFontFamily,
        setFontSize,
        setFontWeight,
        gradientEnabled,
        setGradientEnabled,
        gradientDirection,
        setGradientDirection,
        gradientFrom,
        setGradientFrom,
        gradientTo,
        setGradientTo,
      }}
    >
      {children}
    </HeadlineContext.Provider>
  )
}

export default HeadlineProvider
