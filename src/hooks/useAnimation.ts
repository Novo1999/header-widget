import { useState } from 'react'
import useDebounce from './useDebounce'
import { useHeadline } from './useHeadline'

const useAnimation = () => {
  const { setVariant } = useHeadline()
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null)
  const [glowColor, setGlowColor] = useState('#3b82f6') // Default blue
  // Debounce the glow color change
  const handleSetGlowColor = useDebounce((value: string) => {
    setGlowColor(value)
    if (activeAnimation === 'hoverGlow') {
      updateHoverGlow(value)
    }
  }, 300)

  const handleAnimationToggle = (animationType: string, checked: boolean) => {
    if (checked) {
      setActiveAnimation(animationType)

      switch (animationType) {
        case 'fadeUp':
          setVariant({
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
          })
          break
        case 'fadeDown':
          setVariant({
            initial: { y: -50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
          })
          break
        case 'fadeIn':
          setVariant({
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
          })
          break
        case 'slideIn':
          setVariant({
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
          })
          break
        case 'hoverGlow':
          updateHoverGlow(glowColor)
          break
      }
    } else {
      setActiveAnimation(null)
      setVariant(undefined)
    }
  }

  const updateHoverGlow = (color: string) => {
    // Convert hex to rgba for glow effect
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)

    setVariant({
      initial: {},
      animate: {},
      whileHover: {
        textShadow: `0 0 20px rgba(${r}, ${g}, ${b}, 0.8)`,
        scale: 1.02,
      },
      transition: { duration: 0.3 },
    })
  }

  return { handleSetGlowColor, activeAnimation, glowColor, setGlowColor, handleAnimationToggle, updateHoverGlow }
}
export default useAnimation
