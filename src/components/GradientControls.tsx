import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react'
import useDebounce from '../hooks/useDebounce'
import { useHeadline } from '../hooks/useHeadline'
import { Label } from './ui/label'
import { Switch } from './ui/switch'

const GradientControls = () => {
  const { gradientDirection, gradientEnabled, gradientFrom, gradientTo, setGradientDirection, setGradientEnabled, setGradientFrom, setGradientTo } = useHeadline()

  const directions = [
    { value: 'to-r', icon: ArrowRight, label: 'Right' },
    { value: 'to-l', icon: ArrowLeft, label: 'Left' },
    { value: 'to-b', icon: ArrowDown, label: 'Down' },
    { value: 'to-t', icon: ArrowUp, label: 'Up' },
  ]

  // to improve performance, debounce the color event listener
  const handleSetGradientFrom = useDebounce((value: string) => setGradientFrom(value), 300)
  const handleSetGradientTo = useDebounce((value: string) => setGradientFrom(value), 300)

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
            <div className="space-y-2">
              <Label className="text-sm font-medium">From Color</Label>
              <div className="flex items-center gap-2">
                <input type="color" value={gradientFrom} onChange={(e) => handleSetGradientFrom(e.target.value)} className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer" />
                <input
                  type="text"
                  value={gradientFrom}
                  onChange={(e) => setGradientFrom(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#3b82f6"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">To Color</Label>
              <div className="flex items-center gap-2">
                <input type="color" value={gradientTo} onChange={(e) => handleSetGradientTo(e.target.value)} className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer" />
                <input
                  type="text"
                  value={gradientTo}
                  onChange={(e) => setGradientTo(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#9333ea"
                />
              </div>
            </div>
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
        </>
      )}
    </div>
  )
}

export default GradientControls
