"use client"
import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/context/AuthContext";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal, Spinner } from "react-bootstrap";

export default function Page() {
  const { register } = useContext(AuthContext) as AuthContextType;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // New state for loading
  const router = useRouter();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the registration starts
    try {
      console.log(email, password);
      await register(email, password);
      setEmail("");
      setPassword("");
<<<<<<< HEAD
      setError(null); // Clear any previous error
      setSuccessMessage(message); // Set success message from the backend
    } catch (error: any) {
      setError(error?.message); // Set error message
      setSuccessMessage(null); // Clear any previous success message
=======
      router.push("/team-register");
    } catch (error) {
      if (error.message === "Email already exists") {
        setShowModal(true);
      }
>>>>>>> parent of 2a87f76 (complete backend changes)
    } finally {
      setLoading(false); // Set loading to false after the registration attempt
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

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading} // Disable the button when loading
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" /> // Show spinner when loading
                  ) : (
                    "Signup"
                  )}
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
