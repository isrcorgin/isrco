import Link from "next/link";

export default function Page() {
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

              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
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
    </>
  );
}
