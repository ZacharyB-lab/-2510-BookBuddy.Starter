/*function Login() {
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

export default Login;*/

/*import axios from "axios";
import { useNavigate } from "react-router";

const Login = ({ authenticate }) => {
  const navigate = useNavigate();
  const login = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://auth-api-8ysj.onrender.com/api/login",
        user
      );
      window.localStorage.setItem("token", data.token);
      authenticate();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form id="loginForm" action={login}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;*/
