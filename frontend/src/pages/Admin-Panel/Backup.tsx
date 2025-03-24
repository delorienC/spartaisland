import { useState, useEffect } from 'react'
import axios from 'axios'
import { checkTokenExpiration } from '../../api/tokenCheck'

type Backups = {
  id: number
  name: string
}

const Backup = () => {
  const [Backups, setBackups] = useState<Backups[]>([])

  useEffect(() => {
    checkTokenExpiration()
    const fetchBackups = async () => {
      try {
        const authData = localStorage.getItem('persist:auth')
        if (!authData) return
        const parsedData = JSON.parse(authData)
        let token = parsedData.token?.replace(/"/g, '')

        const response = await axios.post(
          'https://localhost:443/api/Backups',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        )

        console.log('API Response:', response.data)
        setBackups(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error('API Error:', error)
      }
    }

    fetchBackups()
  }, [])

  return (
    <div>
      <div className="flex w-full flex-col p-6">
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-3xl font-bold">Backups</h1>
        </div>
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-2xl font-bold">List of Backups</h1>
          <div>
            <table className="table table-md">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {Backups.map((Backup) => (
                  <tr>
                    <th>{Backup.id}</th>
                    <td>{Backup.name}</td>
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

export default Backup
