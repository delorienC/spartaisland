import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Settings,
  List,
  LifeBuoy,
  CreditCard,
  Server,
} from 'lucide-react'
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
        <Link to="/admin-panel/employees">
          <Users size={24} className="navigation-color" />
          {t('navigation.employees')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/roles">
          <ShieldCheck size={24} className="navigation-color" />
          {t('navigation.roles')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/settings">
          <Settings size={24} className="navigation-color" />
          {t('navigation.settings')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/logs">
          <List size={24} className="navigation-color" />
          {t('navigation.logs')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/support">
          <LifeBuoy size={24} className="navigation-color" />
          {t('navigation.support')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/billing">
          <CreditCard size={24} className="navigation-color" />
          {t('navigation.billing')}
        </Link>
      </li>
      <li>
        <Link to="/admin-panel/backups">
          <Server size={24} className="navigation-color" />
          {t('navigation.backups')}
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
