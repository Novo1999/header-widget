import type { MotionProps } from "motion/react"

export interface TextStyle {
  start: number
  end: number
  style: string
  animation?: MotionProps
}
