import { useState } from 'react'
import HeadlineContext from '../context/HeadlineContext'
import type { HeadlineProviderProps } from '../interface/HeadlineContext'

const HeadlineProvider: React.FC<HeadlineProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>('Your Text Here')
  const [fontSize, setFontSize] = useState<string>('text-5xl')
  const [fontWeight, setFontWeight] = useState<string>('font-bold')
  const [fontFamily, setFontFamily] = useState<string>('font-sans')

  return <HeadlineContext.Provider value={{ text, setText, fontFamily, fontSize, fontWeight, setFontFamily, setFontSize, setFontWeight }}>{children}</HeadlineContext.Provider>
}

export default HeadlineProvider
