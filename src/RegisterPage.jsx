import { Link } from "react-router";

export function RegisterPage() {
  return (
    <div>
      <h1>Register for an account</h1>
      <div>
        <div>First Name</div>
        <input></input>
      </div>
      <div>
        <div>Last Name</div>
        <input></input>
      </div>
      <div>
        <div>Email</div>
        <input></input>
      </div>
      <div>
        <div>Password</div>
        <input></input>
      </div>
      <div className="register">
        <button>Register</button>
      </div>
      <div>
        <Link to="/login">Already have an account? Log in here</Link>
      </div>
    </div>
  );
}
