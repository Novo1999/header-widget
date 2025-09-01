import { useState } from 'react'
import HeadlineContext from '../context/HeadlineContext'
import type { HeadlineProviderProps } from '../interface/HeadlineContext'

const HeadlineProvider: React.FC<HeadlineProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>('Your Text Here')

  return <HeadlineContext.Provider value={{ text, setText }}>{children}</HeadlineContext.Provider>
}

export default HeadlineProvider
