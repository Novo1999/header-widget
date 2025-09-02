import type { MotionProps } from 'motion/react'
import { useState } from 'react'
import HeadlineContext from '../context/HeadlineContext'
import type { HeadlineProviderProps } from '../interface/HeadlineContext'
import type { TextStyle } from '../interface/TextStyle'

const HeadlineProvider: React.FC<HeadlineProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>('Your Text Here')
  const [fontSize, setFontSize] = useState<string>('text-5xl')
  const [fontWeight, setFontWeight] = useState<string>('font-bold')
  const [fontFamily, setFontFamily] = useState<string>('font-sans')
  const [lineHeight, setLineHeight] = useState<string>('leading-tight')
  const [letterSpacing, setLetterSpacing] = useState<string>('tracking-normal')

  const [gradientEnabled, setGradientEnabled] = useState<boolean>(false)
  const [gradientDirection, setGradientDirection] = useState<string>('to-r')
  const [gradientFrom, setGradientFrom] = useState<string>('#3b82f6')
  const [gradientTo, setGradientTo] = useState<string>('#9333ea')

  const [textStyles, setTextStyles] = useState<TextStyle[]>([])

  const [variant, setVariant] = useState<MotionProps | undefined>(undefined)

  const [selection, setSelection] = useState({ start: 0, end: 0 })

  return (
    <HeadlineContext.Provider
      value={{
        text,
        setText,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        setFontFamily,
        setFontSize,
        setFontWeight,
        setLineHeight,
        setLetterSpacing,
        gradientEnabled,
        setGradientEnabled,
        gradientDirection,
        setGradientDirection,
        gradientFrom,
        setGradientFrom,
        gradientTo,
        setGradientTo,
        textStyles,
        setTextStyles,
        variant,
        setVariant,
        selection,
        setSelection,
      }}
    >
      {children}
    </HeadlineContext.Provider>
  )
}

export default HeadlineProvider
