import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h3>Sign in</h3>
      <form>
        <div className="mb-3">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link id="wd-signin-btn" to="/Kambaz/Dashboard" className="btn btn-primary">
            Sign in
          </Link>
          <Link id="wd-signup-link" to="/Kambaz/Account/Signup" className="link-primary">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
