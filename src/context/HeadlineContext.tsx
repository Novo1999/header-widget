import { createContext } from 'react'
import type { HeadlineContextType } from '../interface/HeadlineContext'

const HeadlineContext = createContext<HeadlineContextType | undefined>(undefined)

export default HeadlineContext
