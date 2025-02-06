import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5">
      <h3>Sign up</h3>
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

        <div className="mb-3">
          <input
            type="password"
            id="password-verify"
            className="form-control"
            placeholder="Verify Password"
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/Kambaz/Account/Profile" className="btn btn-primary">
            Sign up
          </Link>
          <Link to="/Kambaz/Account/Signin" className="link-primary">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}