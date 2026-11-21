import DashboardDarkPart1 from './DashboardDarkPart1.jsx'
import DashboardDarkPart2 from './DashboardDarkPart2.jsx'
import DashboardDarkPart3 from './DashboardDarkPart3.jsx'

export default function DashboardDark() {
  return (
    <div className="relative size-full overflow-hidden" data-name="WeEdu - Quản lý khóa học (Student Dashboard)">
      <div style={{position: 'absolute', left: 0, top: 137, width: 1920, height: 1804}}><DashboardDarkPart1 /></div>
      <div style={{position: 'absolute', left: 0, top: 0, width: 1920, height: 137}}><DashboardDarkPart2 /></div>
      <div style={{position: 'absolute', left: 0, top: 1948, width: 1920, height: 432.25}}><DashboardDarkPart3 /></div>
    </div>
  )
}
