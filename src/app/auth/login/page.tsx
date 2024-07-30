"use client"
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/context/AuthContext";
import Link from "next/link";
import { useContext, useState, FormEvent } from "react";

export default function Page() {

  const {login, user} = useContext(AuthContext) as AuthContextType

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("") 

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <>
      <div 
        className="login-area"
        style={{
          backgroundImage: `url(/images/main-bg1.jpg)`
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="login-form">
              <h3>Welcome Back!</h3>

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary"  >
                  Login
                </button>

                <p>
                  <Link href="/auth/signup" className="pull-left">
                    Create a new account
                  </Link>

                  <Link href="/auth/forgot-password" className="pull-right">
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
