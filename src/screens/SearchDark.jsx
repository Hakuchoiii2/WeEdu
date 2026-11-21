import SearchDarkPart1 from './SearchDarkPart1.jsx'
import SearchDarkPart2 from './SearchDarkPart2.jsx'
import SearchDarkPart3 from './SearchDarkPart3.jsx'

export default function SearchDark() {
  return (
    <div className="relative size-full overflow-hidden" data-name="WeEdu - Search">
      <div style={{position: 'absolute', left: 0, top: 142, width: 1920, height: 1884.5}}><SearchDarkPart1 /></div>
      <div style={{position: 'absolute', left: -39, top: 1979, width: 1920, height: 522.25}}><SearchDarkPart2 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><SearchDarkPart3 /></div>
    </div>
  )
}
