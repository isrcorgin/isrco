"use client"
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/context/AuthContext";
import Link from "next/link";
import { useContext, useState, FormEvent } from "react";

export default function Page() {
  const { login } = useContext(AuthContext) as AuthContextType;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Add error state

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
      setError(null); // Clear error on successful login
    } catch (error) {
      setError(error.message); // Set error message
    }
  };

  return (
    <>
      <div
        className="login-area"
        style={{
          backgroundImage: `url(/images/main-bg1.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="login-form">
              <h3>Welcome Back!</h3>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>

                <p className="mt-3">
                  <Link href="/auth/signup" className="btn btn-link">
                    Create a new account
                  </Link>
                  <Link href="/auth/forgot-password" className="btn btn-link float-end">
                    Forgot password?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
