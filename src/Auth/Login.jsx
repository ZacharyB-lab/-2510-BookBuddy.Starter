function Login() {
  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <a href="/app">Welcome</a>
        <div className="spacer"></div>
        <a href="list">Books</a>
        <a href="#">Log In</a>
      </nav>
      <h1>Log in to your account</h1>
      <div>
        <p1>Email</p1>
        <input></input>
      </div>
      <div>
        <p1>Password</p1>
        <input></input>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
      //Login has to link to register if the user doesn't have an account
      <div>
        <a href="Register.jsx">Need an account? Register here</a>
      </div>
    </div>
  );
}

export default Login;
