import { checkTokenExpiration } from '../api/tokenCheck'
import { useTranslation, Trans } from 'react-i18next'
import SimpleLineChart from '../recharts/SimpleLineChart'
import { useEffect } from 'react'

export default function AdminPanel() {
  const { t } = useTranslation()

  useEffect(() => {
    checkTokenExpiration()
  }, [])
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Admin Panel</h1>
            <p className="py-6">
              <Trans i18nKey="adminPanel.test">This is the Admin Panel</Trans>
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
