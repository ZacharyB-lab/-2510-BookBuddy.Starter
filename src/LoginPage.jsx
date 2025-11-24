import { Link } from "react-router";
export function LoginPage() {
  return (
    <div>
      <div className="app">
        <h1>Log in to your account</h1>
        <div>
          <div>Email: </div>
          <input></input>
        </div>
        <div>
          <div>Password: </div>
          <input></input>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
        <div>
          <Link to="/register">Need an account? Register here</Link>
        </div>
      </div>
    </div>
  );
}
