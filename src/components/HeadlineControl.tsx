import AnimationControl from './AnimationControl'
import GradientControls from './GradientControls'
import TypographyControl from './TypographyControl'

const HeadlineControl = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-2">
      <TypographyControl />
      <GradientControls />
      <AnimationControl />
    </div>
  )
}
export default HeadlineControl
