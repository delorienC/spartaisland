import { useState, useEffect } from 'react'
import axios from 'axios'
import { checkTokenExpiration } from '../../api/tokenCheck'

type Settings = {
  id: number
  name: string
}

const Setting = () => {
  const [Settings, setSettings] = useState<Settings[]>([])

  useEffect(() => {
    checkTokenExpiration()
    const fetchSettings = async () => {
      try {
        const authData = localStorage.getItem('persist:auth')
        if (!authData) return
        const parsedData = JSON.parse(authData)
        let token = parsedData.token?.replace(/"/g, '')

        const response = await axios.post(
          'https://localhost:443/api/defaults',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        )

        console.log('API Response:', response.data)
        setSettings(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error('API Error:', error)
      }
    }

    fetchSettings()
  }, [])

  return (
    <div>
      <div className="flex w-full flex-col p-6">
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-2xl font-bold">List of Settings</h1>
          <div>
            <table className="table table-md">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {Settings.map((Setting) => (
                  <tr>
                    <th>{Setting.id}</th>
                    <td>{Setting.name}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
