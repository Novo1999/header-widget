import { useContext } from 'react'
import HeadlineContext from '../context/HeadlineContext'
import type { HeadlineContextType } from '../interface/HeadlineContext'

export const useHeadline = (): HeadlineContextType => {
  const context = useContext(HeadlineContext)
  if (!context) {
    throw new Error('useHeadline must be used within a HeadlineProvider')
  }
  return context
}
