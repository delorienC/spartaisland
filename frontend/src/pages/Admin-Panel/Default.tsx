import { useState, useEffect } from 'react'
import axios from 'axios'
import { checkTokenExpiration } from '../../api/tokenCheck'

type Defaults = {
  id: number
  name: string
}

const Default = () => {
  const [Defaults, setDefaults] = useState<Defaults[]>([])

  useEffect(() => {
    checkTokenExpiration()
    const fetchDefaults = async () => {
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
        setDefaults(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error('API Error:', error)
      }
    }

    fetchDefaults()
  }, [])

  return (
    <div>
      <div className="flex w-full flex-col p-6">
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-3xl font-bold">Defaults</h1>
        </div>
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-2xl font-bold">List of Defaults</h1>
          <div>
            <table className="table table-md">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {Defaults.map((Default) => (
                  <tr>
                    <th>{Default.id}</th>
                    <td>{Default.name}</td>
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

export default Default
