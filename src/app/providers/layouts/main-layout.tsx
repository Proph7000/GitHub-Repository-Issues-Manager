import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div style={{ padding: '8px 24px', margin: '0 auto', maxWidth: 1200 }}>
      <Outlet />
    </div>
  )
}
