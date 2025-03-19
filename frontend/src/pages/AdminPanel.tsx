import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { checkTokenExpiration } from '../api/tokenCheck'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import SimpleLineChart from '../recharts/SimpleLineChart'

export default function AdminPanel() {
  const { t } = useTranslation()
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  useEffect(() => {
    checkTokenExpiration()
  }, [])
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Admin Panel</h1>
            <p className="py-6">
              <Trans i18nKey="adminPanel.test">
                This is the Admin Panel
              </Trans>
            </p>
            <button className="btn btn-primary">Get Started</button>
            <div>{t('adminPanel.welcome')}</div>
            <div style={{ height: '300px', width: '500px' }}>
              <SimpleLineChart />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
