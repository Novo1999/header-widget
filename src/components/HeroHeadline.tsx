import { useHeadline } from '../hooks/useHeadline'

const HeroHeadline = () => {
  const { text, fontFamily, fontWeight, fontSize } = useHeadline()
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-start">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className={`block text-gray-900 ${fontFamily} ${fontWeight} ${fontSize}`}>{text}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHeadline
