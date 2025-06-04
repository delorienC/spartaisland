// filepath: frontend/src/pages/Admin-Panel/Employees.tsx

import { useState, useEffect } from 'react'
import axios from 'axios'
import { checkTokenExpiration } from '../../api/tokenCheck'

type Employee = {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
}

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [search, setSearch] = useState('')
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase())
  )
  useEffect(() => {
    checkTokenExpiration()
    const fetchEmployees = async () => {
      try {
        const authData = localStorage.getItem('persist:auth')
        if (!authData) return
        const parsedData = JSON.parse(authData)
        let token = parsedData.token?.replace(/"/g, '')

        const response = await axios.post(
          'https://localhost:443/api/employees',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
          }
        )

        console.log('API Response:', response.data)
        setEmployees(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error('API Error:', error)
      }
    }

    fetchEmployees()
  }, [])

  return (
    <div>
      <div className="flex w-full flex-col p-6">
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-3xl font-bold">Employees</h1>
        </div>
        <div className="card bg-base-300 rounded-box grid place-items-center p-4 m-4">
          <h1 className="text-2xl font-bold">List of Employees</h1>
          <div className="p-4">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>
          <div>
            <table className="table table-md">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Email verified at</th>
                  <th>Created at</th>
                  <th>Events</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr
                    className="even:bg-base-200 hover:bg-primary/20"
                    key={employee.id}
                  >
                    <th>{employee.id}</th>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.email_verified_at}</td>
                    <td>{employee.created_at}</td>
                    <td>
                      <button className="btn btn-soft btn-accent btn-xs">
                        Send Password
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-soft btn-error btn-xs">
                        Block
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Email verified at</th>
                  <th>Created at</th>
                  <th>Events</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees
