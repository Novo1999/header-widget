import useAnimation from '../hooks/useAnimation'
import ColorPicker from './ColorPicker'
import { Label } from './ui/label'
import { Switch } from './ui/switch'

const AnimationControl = () => {
  const { handleSetGlowColor, handleAnimationToggle, glowColor, setGlowColor, activeAnimation } = useAnimation()

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
