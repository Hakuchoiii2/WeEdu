import DashboardPart1 from './DashboardPart1.jsx'
import DashboardPart2 from './DashboardPart2.jsx'
import DashboardPart3 from './DashboardPart3.jsx'

export default function Dashboard() {
  return (
    <div className="relative size-full overflow-hidden" data-name="WeEdu - Quản lý khóa học (Light Mode)">
      <div style={{position: 'absolute', left: 0, top: 137, width: 1920, height: 1802}}><DashboardPart1 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><DashboardPart2 /></div>
      <div style={{position: 'absolute', left: 0, top: 1948, width: 1920, height: 432.25}}><DashboardPart3 /></div>
    </div>
  )
}
