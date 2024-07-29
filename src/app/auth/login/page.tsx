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
              <h3>Welcome Back!</h3>

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

                <button type="submit" className="btn btn-primary">
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
