//import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavigationList from './Navigation'

function Drawer() {
  return (
    <div className="drawer drawer-mobile drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label> */}
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        {/* <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label> */}
        <div className="flex items-center space-x-3 p-4 w-60">
          <img alt="User" className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">Welcome John Doe</h3>
            <p className="text-sm text-gray-600">Admin-Panel</p>
          </div>
        </div>
        <NavigationList />
      </div>
    </div>
  )
}

export default Drawer
