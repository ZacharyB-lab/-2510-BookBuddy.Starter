import { Route, Routes, Link } from "react-router";
import { HomePage } from "./HomePage";
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import LoginForm from "./LoginForm";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});

  const authenticate = async () => {
    try {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );

      console.log(data);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const logginInToken = window.localStorage.getItem("token");
    if (logginInToken) {
      authenticate();
    }
  }, [user.id]);

  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <Link to="/">Welcome </Link>
        <div className="spacer"></div>
        <Link to="/">Books</Link>
        <Link to="/login">Log In</Link>
      </nav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
//<div>
// {user.id ? (
//    <Welcome user={user} setUser={setUser} />
//  ) : (
//    <div>
//      <h1>Please Login!</h1>
//        <LoginForm authenticate={authenticate}/>
//    </div>;
//      )}

export default App;
