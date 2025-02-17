import { useState } from "react";

const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:81/api/login", {
      method: "POST",
      credentials: "include", // Important for Laravel Sanctum
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      return { error: "Invalid credentials" };
    }
    return { success: "Login successful" };
  } catch (error) {
    console.error("Error logging in:", error);
    return { error: "An error occurred while trying to log in" };
  }
};

export default function Login() {
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
    }

    setLoading(false);
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label
                    className="fieldset-label"
                    form="email">
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
                    form="password">
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
