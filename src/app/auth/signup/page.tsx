"use client"
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/context/AuthContext";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "react-bootstrap";

export default function Page() {
  const { register } = useContext(AuthContext) as AuthContextType;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(email, password);
      await register(email, password);
      setEmail("");
      setPassword("");
      router.push("/team-register");
    } catch (error) {
      if (error.message === "Email already exists") {
        setShowModal(true);
      }
    }
  };

  return (
    <>
      <div
        className="signup-area"
        style={{
          backgroundImage: "url(/images/main-bg2.jpg)",
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

                <button type="submit" className="btn btn-primary">
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Email Already Exists</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The email address you entered is already associated with an account.
          Please use a different email or login with your existing account.
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
