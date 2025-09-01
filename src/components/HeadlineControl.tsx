import { useHeadline } from '../hooks/useHeadline'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const HeadlineControl = () => {
  const { setText, text, setFontFamily, setFontSize, setFontWeight } = useHeadline()

  const handleChangeText = (value: string) => {
    setText(value)
  }

  return (
    <div className="grid grid-cols-2 mt-2 gap-2">
      <div className="flex flex-col gap-2">
        <Label htmlFor="text">Main Text</Label>
        <Input value={text} onChange={(e) => handleChangeText(e.target.value)} />
      </div>
      <div className="flex gap-2">
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
            <SelectTrigger className="w-[140px]">
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
      </div>
    </div>
  )
}
export default HeadlineControl
