import { checkTokenExpiration } from '../api/tokenCheck'
import { useTranslation } from 'react-i18next'
import SimpleLineChart from '../recharts/SimpleLineChart'
import { useEffect } from 'react'

export default function AdminPanel() {
  const { t } = useTranslation()

  useEffect(() => {
    checkTokenExpiration()
  }, [])
  return (
    <>
      <div className="drawer">
        <div className="drawer-content flex flex-col overflow-visible z-50">
          {/* Navbar */}
          <div className="navbar bg-base-100 w-full sticky top-0 z-50">
            <div className="mx-2 flex-1 px-2">{t('adminPanel.title')}</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal ml">
                {/* Navbar menu content here */}
                <li>
                  <a>Only Logs</a>
                </li>
                <li>
                  <a>Only Charts</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className="flex w-full flex-col lg:flex-row p-6">
            <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
              <div className="stats">
                <div className="stat">
                  <div className="stat-title">Total Page Views</div>
                  <div className="stat-value text-primary">89,400</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
              <div className="stats">
                <div className="stat">
                  <div className="stat-title">Total Users</div>
                  <div className="stat-value text-secondary">9,400</div>
                  <div className="stat-desc">↗︎ 15% last month</div>
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid grow place-items-center">
              <div className="stats">
                <div className="stat">
                  <div className="stat-title">Registers</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 21% last month</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row p-6">
            <div className="card bg-base-300 rounded-box grid h-100 grow place-items-center">
              <h2 className="text-center">API Connect Time</h2>
              <SimpleLineChart />
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid h-100 grow place-items-center">
              <h2>MySQL Connect Time</h2>
              <SimpleLineChart />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
