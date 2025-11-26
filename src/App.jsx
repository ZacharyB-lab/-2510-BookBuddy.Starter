import { Route, Routes, Link } from "react-router";
import { HomePage } from "./HomePage";
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfilePage from "./ProfilePage";
import SingleBook from "./Book/SingleBook";

function App() {
  const [user, setUser] = useState({});
  const [books, setBooks] = useState([]);
  const logOut = () => {
    setUser({});
    localStorage.removeItem("token");
    <ProfilePage logOut={logOut} />;
  };

  const authenticate = async (token) => {
    try {
      const token = window.localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
      authenticate(logginInToken);
    }
  }, [user.id]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
      );
      setBooks(data);
    };
    fetchAllBooks();
  }, []);

  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <Link to="/">Welcome </Link>
        <div className="spacer"></div>
        <Link to="/">Books</Link>
        {user.id ? (
          <Link to="/profile">Logged in: {user.email}</Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>

      <Routes>
        <Route index element={<HomePage books={books} />} />
        <Route
          path="register"
          element={<RegisterPage authenticate={authenticate} />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="profile"
          element={<ProfilePage user={user} setUser={setUser} />}
        />
        <Route path="/singleBook/:id" element={<SingleBook books={books} />} />
        {/* <Route path="/books/search/?" element={<SearchBook books={books} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
