import { useHeadline } from '../hooks/useHeadline'
import type { TextStyle } from '../interface/TextStyle'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'

const TypographyControl = () => {
  const { setText, text, setFontFamily, textStyles, setTextStyles, setFontSize, selection, setSelection, setFontWeight, setLineHeight, setLetterSpacing } = useHeadline()

  const handleChangeText = (value: string) => {
    setText(value)
  }

  const applyStyle = (styleClass: string) => {
    if (selection.start === selection.end) return

    const newStyle: TextStyle = {
      start: selection.start,
      end: selection.end,
      style: styleClass,
    }

    const filteredStyles = textStyles.filter((style) => !(style.start < selection.end && style.end > selection.start))

    setTextStyles([...filteredStyles, newStyle])

    setSelection({ start: 0, end: 0 })
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label htmlFor="text">Main Text</Label>
        <Textarea
          onSelect={(e) => {
            const { selectionStart, selectionEnd } = e.target as HTMLTextAreaElement
            setSelection({ start: selectionStart, end: selectionEnd })
          }}
          value={text}
          onChange={(e) => handleChangeText(e.target.value)}
        />
        {selection.start !== selection.end && (
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <button onClick={() => applyStyle('bg-yellow-300 px-1 text-white rounded')} className="px-3 py-1 bg-yellow-300 rounded text-sm hover:bg-yellow-400 transition-colors">
                Highlight
              </button>
              <button onClick={() => applyStyle('underline decoration-2 underline-offset-[12px]')} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300 transition-colors">
                Underline
              </button>
              <button onClick={() => applyStyle('bg-black text-white px-2 py-1 rounded')} className="px-3 py-1 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors">
                Background Block
              </button>
            </div>

            {/* Text Shadow Effects */}
            <div className="space-y-2">
              <Label className="text-xs font-medium text-gray-600">Text Shadow Effects</Label>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => applyStyle('drop-shadow-sm')} className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 transition-colors">
                  Subtle Shadow
                </button>
                <button onClick={() => applyStyle('drop-shadow-md')} className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 transition-colors">
                  Medium Shadow
                </button>
                <button onClick={() => applyStyle('drop-shadow-lg')} className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 transition-colors">
                  Large Shadow
                </button>
                <button onClick={() => applyStyle('drop-shadow-xl')} className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 transition-colors">
                  XL Shadow
                </button>
                <button onClick={() => applyStyle('drop-shadow-2xl')} className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 transition-colors">
                  2XL Shadow
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        <div className="flex gap-1 flex-col">
          <Label className="text-sm font-medium">Font Size</Label>
          <Select onValueChange={setFontSize}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text-sm">Small</SelectItem>
              <SelectItem value="text-base">Base</SelectItem>
              <SelectItem value="text-lg">Large</SelectItem>
              <SelectItem value="text-xl">XL</SelectItem>
              <SelectItem value="text-2xl">2XL</SelectItem>
              <SelectItem value="text-3xl">3XL</SelectItem>
              <SelectItem value="text-4xl">4XL</SelectItem>
              <SelectItem value="text-5xl">5XL</SelectItem>
              <SelectItem value="text-6xl">6XL</SelectItem>
              <SelectItem value="text-7xl">7XL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-1 flex-col">
          <Label className="text-sm font-medium">Font Family</Label>
          <Select onValueChange={setFontFamily}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="font-sans">Sans</SelectItem>
              <SelectItem value="font-serif">Serif</SelectItem>
              <SelectItem value="font-mono">Mono</SelectItem>
              <SelectItem value="font-inter">Inter</SelectItem>
              <SelectItem value="font-roboto">Roboto</SelectItem>
              <SelectItem value="font-poppins">Poppins</SelectItem>
              <SelectItem value="font-montserrat">Montserrat</SelectItem>
              <SelectItem value="font-playfair">Playfair</SelectItem>
              <SelectItem value="font-lora">Lora</SelectItem>
              <SelectItem value="font-opensans">Open Sans</SelectItem>
              <SelectItem value="font-raleway">Raleway</SelectItem>
              <SelectItem value="font-nunito">Nunito</SelectItem>
              <SelectItem value="font-sourcesans">Source Sans</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-1 flex-col">
          <Label className="text-sm font-medium">Font Weight</Label>
          <Select onValueChange={setFontWeight}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="font-thin">Thin</SelectItem>
              <SelectItem value="font-light">Light</SelectItem>
              <SelectItem value="font-normal">Normal</SelectItem>
              <SelectItem value="font-medium">Medium</SelectItem>
              <SelectItem value="font-semibold">Semibold</SelectItem>
              <SelectItem value="font-bold">Bold</SelectItem>
              <SelectItem value="font-extrabold">Extrabold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-1 flex-col">
          <Label className="text-sm font-medium">Line Height</Label>
          <Select onValueChange={setLineHeight}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Height" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="leading-none">None</SelectItem>
              <SelectItem value="leading-tight">Tight</SelectItem>
              <SelectItem value="leading-snug">Snug</SelectItem>
              <SelectItem value="leading-normal">Normal</SelectItem>
              <SelectItem value="leading-relaxed">Relaxed</SelectItem>
              <SelectItem value="leading-loose">Loose</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-1 flex-col">
          <Label className="text-sm font-medium">Letter Spacing</Label>
          <Select onValueChange={setLetterSpacing}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Spacing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tracking-tighter">Tighter</SelectItem>
              <SelectItem value="tracking-tight">Tight</SelectItem>
              <SelectItem value="tracking-normal">Normal</SelectItem>
              <SelectItem value="tracking-wide">Wide</SelectItem>
              <SelectItem value="tracking-wider">Wider</SelectItem>
              <SelectItem value="tracking-widest">Widest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  )
}
export default TypographyControl
