import PreviewPart1 from './PreviewPart1.jsx'
import PreviewPart2 from './PreviewPart2.jsx'
import PreviewPart3 from './PreviewPart3.jsx'
import PreviewPart4 from './PreviewPart4.jsx'

export default function Preview() {
  return (
    <div className="relative size-full overflow-hidden" data-name="Chi tiết khóa học - Lập trình Python cơ bản (Light Mode)">
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 1534.5}}><PreviewPart1 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><PreviewPart2 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><PreviewPart3 /></div>
      <div style={{position: 'absolute', left: 0, top: 1549, width: 1920, height: 432.25}}><PreviewPart4 /></div>
    </div>
  )
}
