function Register() {
  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <a href="App.jsx">Welcome</a>
        <div className="spacer"></div>
        <a href="App.jsx">Books</a>
        <a href="Login.jsx">Log In</a>
      </nav>
      <h1>Register for an account</h1>
      <div>
        <p1>First Name</p1>
        <input></input>
      </div>
      <div>
        <p1>Last Name</p1>
        <input></input>
      </div>
      <div>
        <p1>Email</p1>
        <input></input>
      </div>
      <div>
        <p1>Password</p1>
        <input></input>
      </div>
      <div className="register">
        <button>Register</button>
      </div>
      <div>
        <a href="Login.jsx">Already have an account? Log in here</a>
      </div>
    </div>
  );
}

export default Register;
