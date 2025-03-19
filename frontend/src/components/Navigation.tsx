import { Link } from 'react-router-dom'
import { LayoutDashboard, Users, Contact, Dumbbell, Gauge } from 'lucide-react'
import { useTranslation } from 'react-i18next'
const Navigation = () => {
  const { t } = useTranslation()
  return (
    <ul className="menu p-4 w-60 bg-base-200">
      <li>
        <Link to="/admin-panel">
          <LayoutDashboard size={24} className="navigation-color" />
          {t('navigation.dashboard')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/membership">
          <Users size={24} className="navigation-color" />
          {t('navigation.membership')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/employees">
          <Contact size={24} className="navigation-color" />
          {t('navigation.employees')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/exercises">
          <Dumbbell size={24} className="navigation-color" />
          {t('navigation.exercises')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/workouts">
          <Gauge size={24} className="navigation-color" />
          {t('navigation.workouts')}
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
