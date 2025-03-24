import { Routes, Route, Navigate } from 'react-router-dom'
import '../index.css'
import Login from '../pages/Login'
import PasswordLost from '../pages/PasswordLost'
import Drawer from '../components/Drawer'

import AdminPanel from '../pages/AdminPanel'
import Employees from '../pages/Admin-Panel/Employees'
import Roles from '../pages/Admin-Panel/Role'
import Settings from '../pages/Admin-Panel/Setting'
import Log from '../pages/Admin-Panel/Log'
import Support from '../pages/Admin-Panel/Support'
import Billing from '../pages/Admin-Panel/Billing'
import Backup from '../pages/Admin-Panel/Backup'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-lost" element={<PasswordLost />} />

      {/* Admin Panel Wrapped with Drawer */}
      <Route path="/admin-panel" element={<Drawer />}>
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel/employees" element={<Employees />} />
        <Route path="/admin-panel/roles" element={<Roles />} />
        <Route path="/admin-panel/settings" element={<Settings />} />
        <Route path="/admin-panel/logs" element={<Log />} />
        <Route path="/admin-panel/support" element={<Support />} />
        <Route path="/admin-panel/billing" element={<Billing />} />
        <Route path="/admin-panel/backups" element={<Backup />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
