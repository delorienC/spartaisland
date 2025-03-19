import { Routes, Route, Navigate } from 'react-router-dom'
import '../index.css'
import Login from '../pages/Login'
import PasswordLost from '../pages/PasswordLost'
import Drawer from '../components/Drawer'

import AdminPanel from '../pages/AdminPanel'
import Membership from '../pages/Admin-Panel/Membership'
import Employees from '../pages/Admin-Panel/Employees'
import Exercises from '../pages/Admin-Panel/Exercises'
import Workouts from '../pages/Admin-Panel/Workouts'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-lost" element={<PasswordLost />} />

      {/* Admin Panel Wrapped with Drawer */}
      <Route path="/admin-panel" element={<Drawer />}>
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel/membership" element={<Membership />} />
        <Route path="/admin-panel/employees" element={<Employees />} />
        <Route path="/admin-panel/exercises" element={<Exercises />} />
        <Route path="/admin-panel/workouts" element={<Workouts />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
