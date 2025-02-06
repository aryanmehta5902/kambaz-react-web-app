import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h3>Profile</h3>
      <div className="mb-3">
        <input type="text" className="form-control" value="alice" placeholder="Username" id="wd-username" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" value="123" placeholder="Password" id="wd-password" />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" value="Alice" placeholder="First Name" id="wd-firstname" />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" value="Wonderland" placeholder="Last Name" id="wd-lastname" />
      </div>
      <div className="mb-3">
        <input type="date" className="form-control" value="2000-01-01" id="wd-dob" />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" value="alice@wonderland" placeholder="Email" id="wd-email" />
      </div>
      <div className="mb-3">
        <select className="form-select" id="wd-role">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY" selected>Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <a href="/Kambaz/Account/Signin" className="btn btn-danger">Signout</a>
    </div>

  );
}
