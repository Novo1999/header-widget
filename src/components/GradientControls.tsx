import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'
import { useCallback } from 'react'
import useDebounce from '../hooks/useDebounce'
import { useHeadline } from '../hooks/useHeadline'
import type { TextStyle } from '../interface/TextStyle'
import ColorPicker from './ColorPicker'
import { Label } from './ui/label'
import { Switch } from './ui/switch'

const GradientControls = () => {
  const {
    gradientDirection,
    gradientEnabled,
    gradientFrom,
    text,
    gradientTo,
    setGradientDirection,
    setGradientEnabled,
    setSelection,
    selection,
    setGradientFrom,
    setGradientTo,
    textStyles,
    setTextStyles,
  } = useHeadline()

  const directions = [
    { value: 'to-r', icon: ArrowRight, label: 'Right' },
    { value: 'to-l', icon: ArrowLeft, label: 'Left' },
    { value: 'to-b', icon: ArrowDown, label: 'Down' },
    { value: 'to-t', icon: ArrowUp, label: 'Up' },
  ]

  // to improve performance, debounce the color event listener
  const handleSetGradientFrom = useDebounce((value: string) => setGradientFrom(value), 300)
  const handleSetGradientTo = useDebounce((value: string) => setGradientTo(value), 300)

  const applyGradientToSelection = useCallback(() => {
    if (selection.start === selection.end) return

    const newStyle: TextStyle = {
      start: selection.start,
      end: selection.end,
      style: 'gradient-text',
    }

    // Remove any existing styles that overlap with the new selection
    const filteredStyles = textStyles.filter((style) => !(style.start < selection.end && style.end > selection.start))

    setTextStyles([...filteredStyles, newStyle])
    setSelection({ start: 0, end: 0 })
  }, [selection.end, selection.start, setSelection, setTextStyles, textStyles])

  return (
    <div className="space-y-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Gradient</Label>
        <Switch
          style={
            gradientEnabled
              ? {
                  backgroundImage: `linear-gradient(${
                    gradientDirection === 'to-r' ? 'to right' : gradientDirection === 'to-l' ? 'to left' : gradientDirection === 'to-b' ? 'to bottom' : 'to top'
                  }, ${gradientFrom}, ${gradientTo})`,
                }
              : {}
          }
          checked={gradientEnabled}
          onCheckedChange={setGradientEnabled}
        />
      </div>

      {gradientEnabled && (
        <>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Direction</Label>
            <div className="grid grid-cols-4 gap-2">
              {directions.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => setGradientDirection(value)}
                  className={`
                    p-3 rounded-lg border transition-all duration-200 flex flex-col items-center gap-1
                    ${gradientDirection === value ? 'bg-blue-100 border-blue-300 text-blue-700' : 'bg-white border-gray-200 hover:border-gray-300 text-gray-600'}
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ColorPicker label="From Color" color={gradientFrom} handleColor={handleSetGradientFrom} setter={setGradientFrom} />

            <ColorPicker label="To Color" color={gradientTo} handleColor={handleSetGradientTo} setter={setGradientTo} />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Preview</Label>
            <div
              className="w-full h-16 rounded-lg border border-gray-200"
              style={{
                background: `linear-gradient(${
                  gradientDirection === 'to-r' ? 'to right' : gradientDirection === 'to-l' ? 'to left' : gradientDirection === 'to-b' ? 'to bottom' : 'to top'
                }, ${gradientFrom}, ${gradientTo})`,
              }}
            />
          </div>
          {gradientEnabled && selection.start !== selection.end && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Apply to Selection</Label>
              <button onClick={applyGradientToSelection} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Apply Gradient to Selected Text
              </button>
              <p className="text-xs text-gray-500 text-center">Selected: "{text.slice(selection.start, selection.end)}"</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default GradientControls
