import SearchPart1 from './SearchPart1.jsx'
import SearchPart2 from './SearchPart2.jsx'
import SearchPart3 from './SearchPart3.jsx'
import SearchPart4 from './SearchPart4.jsx'
import SearchPart5 from './SearchPart5.jsx'

export default function Search() {
  return (
    <div className="relative size-full overflow-hidden" data-name="WeEdu - Search Light">
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 33}}><SearchPart1 /></div>
      <div style={{position: 'absolute', left: 48, top: 137, width: 1824, height: 86}}><SearchPart2 /></div>
      <div style={{position: 'absolute', left: 0, top: 239, width: 1920, height: 1657}}><SearchPart3 /></div>
      <div style={{position: 'absolute', left: 0, top: 1896, width: 1920, height: 432.25}}><SearchPart4 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><SearchPart5 /></div>
    </div>
  )
}
