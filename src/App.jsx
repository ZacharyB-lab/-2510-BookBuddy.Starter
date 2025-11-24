import { Book } from "./Book";

function App() {
  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <a href="home">Welcome</a>
        <div className="spacer"></div>
        <a href="list">Books</a>
        <a href="login">Log In</a>
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
          <div>Here's a description</div>
        </div>
      </div>

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use some state in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
    </div>
  );
}

export default App;
