import { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { useHeadline } from '../hooks/useHeadline'
import ColorPicker from './ColorPicker'
import { Label } from './ui/label'
import { Switch } from './ui/switch'

const AnimationControl = () => {
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

  return (
    <div className="space-y-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
      <div className="space-y-4">
        <Label className="text-sm font-medium">Animation</Label>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Fade Up</Label>
            <Switch checked={activeAnimation === 'fadeUp'} onCheckedChange={(checked) => handleAnimationToggle('fadeUp', checked)} />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Fade Down</Label>
            <Switch checked={activeAnimation === 'fadeDown'} onCheckedChange={(checked) => handleAnimationToggle('fadeDown', checked)} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Hover Glow</Label>
              <Switch checked={activeAnimation === 'hoverGlow'} onCheckedChange={(checked) => handleAnimationToggle('hoverGlow', checked)} />
            </div>

            {/* Color Picker - only show when Hover Glow is active */}
            {activeAnimation === 'hoverGlow' && <ColorPicker label="Glow Color" color={glowColor} handleColor={handleSetGlowColor} setter={setGlowColor} />}
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Fade In</Label>
            <Switch checked={activeAnimation === 'fadeIn'} onCheckedChange={(checked) => handleAnimationToggle('fadeIn', checked)} />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Slide In</Label>
            <Switch checked={activeAnimation === 'slideIn'} onCheckedChange={(checked) => handleAnimationToggle('slideIn', checked)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationControl
