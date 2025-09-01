import { useHeadline } from '../hooks/useHeadline'
import { Input } from './ui/input'
import { Label } from './ui/label'

const HeadlineControl = () => {
  const { setText, text } = useHeadline()

  const handleChangeText = (value: string) => {
    setText(value)
  }

  return (
    <div className="grid grid-cols-2 mt-2">
      <div className='flex flex-col gap-2'>
        <Label htmlFor="text">Main Text</Label>
        <Input value={text} onChange={(e) => handleChangeText(e.target.value)} />
      </div>
    </div>
  )
}
export default HeadlineControl
