import { motion } from 'motion/react'
import type React from 'react'
import { toast } from 'sonner'
import { useHeadline } from '../hooks/useHeadline'
import { Button } from './ui/button'

const HeroHeadline = () => {
  const { text, fontFamily, fontWeight, fontSize, gradientEnabled, gradientDirection, gradientFrom, gradientTo, lineHeight, letterSpacing, variant, textStyles } = useHeadline()

  function exportInnerHtml(elId: string) {
    const elHtml = document?.getElementById(elId)?.innerHTML
    if (elHtml) {
      navigator.clipboard.writeText(elHtml).then(
        () => {
          toast('HTML copied')
        },
        (err) => {
          console.error('Failed to copy: ', err)
        }
      )
    }
  }

  const renderStyledText = () => {
    if (textStyles.length === 0) return text

    const sortedStyles = [...textStyles].sort((a, b) => a.start - b.start)
    const result = []
    let lastIndex = 0

    sortedStyles.forEach((style, index) => {
      if (style.start > lastIndex) {
        result.push(text.slice(lastIndex, style.start))
      }

      const styledText = text.slice(style.start, style.end)
      const hasUnderlineStyle = style.style.includes('underline')
      const isGradientText = style.style === 'gradient-text'
      const isAnimatedText = style.style === 'animated-text'

      if (isAnimatedText && variant) {
        // Render motion span for animated text
        result.push(
          <motion.span key={index} {...variant}>
            {styledText}
          </motion.span>
        )
      } else if (isGradientText && gradientEnabled) {
        // Apply gradient to selected text
        result.push(
          <span
            key={index}
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(${
                gradientDirection === 'to-r' ? 'to right' : gradientDirection === 'to-l' ? 'to left' : gradientDirection === 'to-b' ? 'to bottom' : 'to top'
              }, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {styledText}
          </span>
        )
      } else if (hasUnderlineStyle && gradientEnabled) {
        // Underlined text with gradient
        const styleWithoutUnderline = style.style.replace(/underline[^\s]*\s?/g, '').trim()
        result.push(
          <span
            key={index}
            className={`${styleWithoutUnderline} border-b-2 border-gray-900 bg-clip-text text-transparent`}
            style={{
              backgroundImage: `linear-gradient(${
                gradientDirection === 'to-r' ? 'to right' : gradientDirection === 'to-l' ? 'to left' : gradientDirection === 'to-b' ? 'to bottom' : 'to top'
              }, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {styledText}
          </span>
        )
      } else {
        // Regular styling
        result.push(
          <span key={index} className={style.style}>
            {styledText}
          </span>
        )
      }

      lastIndex = style.end
    })

    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex))
    }

    return result
  }
  return (
    <section className="bg-gradient-to-br from-slate-50 relative via-blue-50 to-purple-50 flex items-start">
      <Button onClick={() => exportInnerHtml('main-content')} className='absolute left-4 top-4'>Export HTML</Button>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12 sm:mt-0">
        <div>
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight" id="main-content">
                <motion.span
                  key={variant ? JSON.stringify(variant) : 'no-animation'}
                  {...(variant || {})}
                  className={`
                   block 
                   ${fontFamily} 
                   ${fontWeight} 
                   ${fontSize}
                   ${lineHeight}
                   ${letterSpacing}
                   ${gradientEnabled ? ` bg-clip-text ` : 'text-gray-900'}
                 `}
                  style={
                    gradientEnabled
                      ? ({
                          backgroundImage: `linear-gradient(${
                            gradientDirection === 'to-r' ? 'to right' : gradientDirection === 'to-l' ? 'to left' : gradientDirection === 'to-b' ? 'to bottom' : 'to top'
                          }, ${gradientFrom}, ${gradientTo})`,
                          '--gradient-direction': 'to right',
                          '--gradient-from': gradientFrom,
                          '--gradient-to': gradientTo,
                        } as React.CSSProperties)
                      : {}
                  }
                >
                  {renderStyledText()}
                </motion.span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHeadline
