import type { Dispatch, SetStateAction } from 'react'
import { Label } from './ui/label'

type ColorPickerProps = {
  color: string
  handleColor: (value: string) => void
  label: string
  setter: Dispatch<SetStateAction<string>>
}

const ColorPicker = ({ color, handleColor, setter, label }: ColorPickerProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex items-center gap-2">
        <input type="color" value={color} onChange={(e) => handleColor(e.target.value)} className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer" />
        <input
          type="text"
          value={color}
          onChange={(e) => setter(e.target.value)}
          onBlur={(e) => handleColor(e.target.value)}
          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 max-w-40 focus:ring-blue-500"
          placeholder="#3b82f6"
        />
      </div>
    </div>
  )
}
export default ColorPicker
