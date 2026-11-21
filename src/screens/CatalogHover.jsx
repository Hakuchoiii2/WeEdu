import CatalogHoverPart1 from './CatalogHoverPart1.jsx'
import CatalogHoverPart2 from './CatalogHoverPart2.jsx'
import CatalogHoverPart3 from './CatalogHoverPart3.jsx'
import CatalogHoverPart4 from './CatalogHoverPart4.jsx'

export default function CatalogHover() {
  return (
    <div className="relative size-full overflow-hidden" data-name="Danh mục khóa học lập trình (hover thẻ khóa học)">
      <div style={{position: 'absolute', left: 0, top: 121, width: 1920, height: 1503.125}}><CatalogHoverPart1 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><CatalogHoverPart2 /></div>
      <div style={{position: 'absolute', left: 149, top: 1612, width: 1624, height: 136}}><CatalogHoverPart3 /></div>
      <div style={{position: 'absolute', left: 0, top: 1772, width: 1920, height: 432.25}}><CatalogHoverPart4 /></div>
    </div>
  )
}
