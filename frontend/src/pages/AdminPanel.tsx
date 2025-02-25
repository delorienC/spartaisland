//import { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useAuthController } from '../controller/AuthController';

export default function AdminPanel() {
  useAuthController();
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Admin Panel</h1>
            <p className="py-6">
              Admin Panel
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}