import CatalogDarkPart1 from './CatalogDarkPart1.jsx'
import CatalogDarkPart2 from './CatalogDarkPart2.jsx'
import CatalogDarkPart3 from './CatalogDarkPart3.jsx'

export default function CatalogDark() {
  return (
    <div className="relative size-full overflow-hidden" data-name="Danh mục Khóa học Lập trình (Darkmode) - WeEdu">
      <div style={{position: 'absolute', left: 0, top: 121, width: 1920, height: 1670.25}}><CatalogDarkPart1 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><CatalogDarkPart2 /></div>
      <div style={{position: 'absolute', left: 0, top: 1791, width: 1920, height: 432.25}}><CatalogDarkPart3 /></div>
    </div>
  )
}
