import { useSelector } from "react-redux";
import { RootState } from "../store";
import { checkTokenExpiration } from "../api/tokenCheck";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminPanel() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  useEffect(() => {
    checkTokenExpiration();
  }, []);
  if (!isAuthenticated) {
    console.error("Not authenticated");
    return <Navigate to="/login" />;
  }
  console.log("Authenticated");
  console.log(isAuthenticated);
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