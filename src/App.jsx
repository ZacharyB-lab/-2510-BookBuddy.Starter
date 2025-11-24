import { Book } from "./Book";

function App() {
  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <a href="#">Welcome</a>
        <div className="spacer"></div>
        <a href="#">Books</a>
        <a href="Login.jsx">Log In</a>
      </nav>
      <h1>List of Books</h1>
      <div>
        <input placeholder="Search for a book..."></input>
        <button>Search</button>
      </div>
      <div className="singlebook">
        <img id="book-image" src="books.png" />
        <div className="information">
          <div className="title">
            <Book title="Harry Potter" />
          </div>
          <div className="author">JK Rowling</div>
          <div>
            Here's a description that's of course very long. JK Rowling is a
            horrible person that doesn't truly deserve any of the acclaims that
            she has earned.
          </div>
        </div>
      </div>

      <p></p>

      <p></p>

      <p></p>
    </div>
  );
}

export default App;
