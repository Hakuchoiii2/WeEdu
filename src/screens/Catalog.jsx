import CatalogPart1 from './CatalogPart1.jsx'
import CatalogPart2 from './CatalogPart2.jsx'
import CatalogPart4 from './CatalogPart4.jsx'

export default function Catalog() {
  return (
    <div className="relative size-full overflow-hidden" data-name="Danh mục Khóa học Lập trình - WeEdu">
      <div style={{position: 'absolute', left: 0, top: 121, width: 1920, height: 1670.25}}><CatalogPart1 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><CatalogPart2 /></div>
      <div style={{position: 'absolute', left: 0, top: 1772, width: 1920, height: 432.25}}><CatalogPart4 /></div>
    </div>
  )
}
