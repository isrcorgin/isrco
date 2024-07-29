import Link from "next/link";

export default function Page() {
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
              <h3>Forgot password?</h3>

              <form>
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

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Passwor"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>

                <p>
                  <Link href="/auth/signup" className="pull-left">
                    Create a new account
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
