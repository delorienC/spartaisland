import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthController } from "../controller/AuthController";
import logo from '../assets/adminpanel-logo.png';



const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch("https://localhost:443/api/login", {
      method: "POST",
      credentials: "include", // Important for Laravel Sanctum
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      return { error: "Invalid credentials" };
    }
    const data = await response.json();
    localStorage.setItem("token", data.token);
    return { success: "Login successful" };
  } catch (error) {
    return { error: "An error occurred while trying to log in " + error };
  }
};

export default function Login() {
  const navigate = useNavigate();
  if (useAuthController()) {
    //navigate("/admin-panel");
    console.log("Already authenticated, redirecting to admin panel");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await loginUser(email, password);

    if (result.error) {
      setStatus(result.error);
    } else {
      setStatus(result.success ?? null);
      navigate("/admin-panel");
    }

    setLoading(false);
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <img src={logo} alt="Logo" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label
                    className="fieldset-label"
                    htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    placeholder="Email" />
                  <label
                    className="fieldset-label"
                    htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    placeholder="Password" />
                  <div>
                    <a className="link link-hover">
                      Forgot password?
                    </a>
                  </div>
                  <div>
                    {status && <p>{status}</p>}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-neutral mt-4"
                    disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
