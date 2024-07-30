"use client"
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/context/AuthContext";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";

export default function Page() {

  const {register} = useContext(AuthContext) as AuthContextType

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
    await register(email, password)
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <div
        className="signup-area"
        style={{
          backgroundImage: `url(/images/main-bg2.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="signup-form">
              <h3>Create your Account</h3>

              <form onSubmit={handleRegister}>
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

                <button type="submit" className="btn btn-primary" >
                  Signup
                </button>

                <p>
                  Already a registered user? <Link href="/auth/login">Login!</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
