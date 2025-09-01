import { useHeadline } from '../hooks/useHeadline'

const HeroHeadline = () => {
  const { text, fontFamily, fontWeight, fontSize, gradientEnabled, gradientDirection, gradientFrom, gradientTo, textStyles } = useHeadline()

  const renderStyledText = () => {
    if (textStyles.length === 0) return text

    // Sort styles by start position
    const sortedStyles = [...textStyles].sort((a, b) => a.start - b.start)

    const result = []
    let lastIndex = 0

    sortedStyles.forEach((style, index) => {
      if (style.start > lastIndex) {
        result.push(text.slice(lastIndex, style.start))
      }

      const styledText = text.slice(style.start, style.end)
      result.push(
        <span key={index} className={style.style}>
          {styledText}
        </span>
      )

      lastIndex = style.end
    })

    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex))
    }

    return result
  }
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-start">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span
                  className={`
                   block 
                   ${fontFamily} 
                   ${fontWeight} 
                   ${fontSize}
                   ${gradientEnabled ? `bg-gradient-${gradientDirection} bg-clip-text text-transparent` : 'text-gray-900'}
                 `}
                  style={
                    gradientEnabled
                      ? {
                          backgroundImage: `linear-gradient(${
                            gradientDirection === 'to-r' ? 'to right' : gradientDirection === 'to-l' ? 'to left' : gradientDirection === 'to-b' ? 'to bottom' : 'to top'
                          }, ${gradientFrom}, ${gradientTo})`,
                        }
                      : {}
                  }
                >
                  {renderStyledText()}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHeadline
