import { Route, Routes, Link } from "react-router";
import { HomePage } from "./HomePage";
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <Link to="/">Welcome</Link>
        <div className="spacer"></div>
        <Link to="/">Books</Link>
        <Link to="/login">Log In</Link>
      </nav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
